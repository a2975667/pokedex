import Link from 'next/link';
import { branchHistory } from './data';

export const metadata = {
  title: 'Branch History | Pokédex',
  description: 'What changed in each numbered branch of the Pokédex project',
};

export default function BranchesPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-block px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            ← Back to Pokédex
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">
          Branch History
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
          What changed in each numbered branch compared to the previous one
        </p>

        <ol className="relative border-l-2 border-blue-300 dark:border-blue-700 space-y-10 ml-4">
          {branchHistory.map((entry) => (
            <li key={entry.id} className="ml-8">
              {/* Timeline dot */}
              <span className="absolute -left-[1.1rem] flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-bold ring-4 ring-white dark:ring-gray-900">
                {entry.id}
              </span>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg font-bold text-blue-600 dark:text-blue-400 font-mono">
                    {entry.id}
                  </span>
                  {entry.previous && (
                    <span className="text-sm text-gray-400 dark:text-gray-500">
                      ← {entry.previous}
                    </span>
                  )}
                </div>

                {/* Summary */}
                <p className="text-gray-700 dark:text-gray-300 mb-4">{entry.summary}</p>

                {/* Changed files */}
                <ul className="space-y-3">
                  {entry.changes.map((change, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 p-3 rounded-md bg-gray-50 dark:bg-gray-700"
                    >
                      <span className="mt-0.5 shrink-0 text-blue-500">
                        {/* file icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <path d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061V16.5A1.5 1.5 0 0 1 13.5 18h-9A1.5 1.5 0 0 1 3 16.5v-13Z" />
                        </svg>
                      </span>
                      <div>
                        <code className="text-sm font-mono text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-600 px-1.5 py-0.5 rounded">
                          {change.file}
                        </code>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {change.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
