import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Email } from './email';

import WelcomeEmail from '@src/email/welcome'

const resend = new Resend(RESEND_API_KEY);

export async function POST() {

await resend.emails.send({
  from: 'contact@contact.gli-ms.de',
  to: 'nasr.m.qershi@gmail.com',
  subject: 'hello world',
  react: <WelcomeEmail />,
});

    return NextResponse.json({
        status: 'OK'
    })
}
