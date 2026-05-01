import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(request: NextRequest) {
  let client: any = null;
  
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    client = await pool.connect();
    const result = await client.query(
      'INSERT INTO "ContactMessage" (name, email, message, "createdAt") VALUES ($1, $2, $3, NOW()) RETURNING *',
      [name, email, message]
    );
    client.release();
    client = null;

    sendEmails(name, email, message).catch((err) => {
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
async function sendEmails(name: string, email: string, message: string) {
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
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `,
  });

  await transporter.sendMail({
    from: process.env.GMAIL_EMAIL,
    to: email,
    subject: 'We received your message!',
    html: `
      <h2>Thank you for reaching out!</h2>
      <p>Hi ${name},</p>
      <p>We've received your message and will get back to you soon.</p>
      <p>Best regards,<br>Este</p>
    `,
  });
}
