import { NextResponse } from 'next/server';
import { branchHistory } from '@/app/branches/data';

export async function GET() {
  return NextResponse.json({ data: branchHistory });
}
