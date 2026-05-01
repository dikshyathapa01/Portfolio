import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function POST(request: NextRequest) {
  let client: any = null;
  
  try {
    const { name, message } = await request.json();
    const senderEmail = extractEmailAddress(message) ?? 'not-provided@local';

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    client = await pool.connect();
    const result = await client.query(
      'INSERT INTO "ContactMessage" (name, email, message, "createdAt") VALUES ($1, $2, $3, NOW()) RETURNING *',
      [name, senderEmail, message]
    );
    client.release();
    client = null;

    sendNotificationEmail(name, senderEmail, message).catch((err) => {
      console.error('Email error:', err);
    });

    return NextResponse.json(
      { 
        message: 'Message saved successfully',
        data: result.rows[0]
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to process message';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  } finally {
    if (client) {
      client.release();
    }
  }
}
function extractEmailAddress(message: string) {
  const match = message.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match?.[0] ?? null;
}

async function sendNotificationEmail(name: string, senderEmail: string, message: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: `New Message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Detected email:</strong> ${senderEmail}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });
}
