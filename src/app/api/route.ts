import { sql } from '@vercel/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    // Parse the JSON data from the request
    const formData = await req.json();

    // Insert the data into the PostgreSQL database
    const insertQuery = sql`
      INSERT INTO data
        (org_interested, name, organization_name, senior_person, email, phone, website, twitter, linkedin, facebook, organization_type, organization_description)
      VALUES
        (
          ${formData.org_interested},
          ${formData.name},
          ${formData.organization_name},
          ${formData.senior_person},
          ${formData.email},
          ${formData.phone},
          ${formData.website},
          ${formData.twitter},
          ${formData.linkedin},
          ${formData.facebook},
          ${formData.organization_type},
          ${formData.organization_description}
        )
      RETURNING *;
    `;

    const { rows, fields } = await insertQuery;

    // Return a success response with the inserted data
    return NextResponse.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
