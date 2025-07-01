import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function GET() {
  try {
    exec('npx tsx scripts/dailyBlogIngest.ts', (error, stdout, stderr) => {
      if (error) {
        console.error('Ingest error:', error, stderr);
      } else {
        console.log('Ingest output:', stdout);
      }
    });
    return NextResponse.json({ success: true, message: 'Ingest started' });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
} 