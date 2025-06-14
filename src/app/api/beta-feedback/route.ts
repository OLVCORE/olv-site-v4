import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log('Beta feedback received', data);
    // TODO: integrate with CRM / database / email notification
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Error processing beta feedback', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
} 