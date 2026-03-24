import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;
type QueryParam = string | number | boolean | null;

export function getPool(): mysql.Pool {
  if (!pool) {
    const hasSocketPath = Boolean(process.env.DB_SOCKET_PATH);
    const required = hasSocketPath
      ? (['DB_SOCKET_PATH', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'] as const)
      : (['DB_HOST', 'DB_PORT', 'DB_NAME', 'DB_USER', 'DB_PASSWORD'] as const);

    for (const key of required) {
      if (!process.env[key]) {
        throw new Error(`Missing required env: ${key}`);
      }
    }

    const ssl = (process.env.DB_SSL === 'true') || process.env.DB_SERVER_CA || process.env.DB_CLIENT_CERT || process.env.DB_CLIENT_KEY
      ? {
          ca: process.env.DB_SERVER_CA,
          cert: process.env.DB_CLIENT_CERT,
          key: process.env.DB_CLIENT_KEY,
          // default true; allow opt-out via DB_SSL_REJECT_UNAUTHORIZED=false
          rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED === 'false' ? false : true,
        }
      : undefined;

    pool = mysql.createPool({
      database: process.env.DB_NAME || 'pokemon_db',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ...(hasSocketPath
        ? { socketPath: process.env.DB_SOCKET_PATH }
        : {
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT || '3306'),
          }),
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
      ssl
    });
  }
  return pool;
}

export async function query<T extends mysql.QueryResult = mysql.RowDataPacket[]>(
  text: string,
  params: QueryParam[] = []
): Promise<T> {
  const pool = getPool();
  const [rows] = await pool.query<T>(text, params);
  return rows;
}
