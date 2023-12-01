import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Insert the data into the PostgreSQL database
    const data = await sql`
        SELECT * FROM data;
        `;
    // Return a success response with the inserted data

    return NextResponse.json(data.rows)
    }
    catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(){
  return NextResponse.json({ success: false, error: 'POST not supported' }, { status: 500 });s
}
