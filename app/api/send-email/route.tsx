import { NextResponse } from "next/server";
import { Resend } from "Resend";

import WelcomeTemplate from "@/emails/WelcomeTemplate";
import { ENV } from "@/env";

const resend = new Resend(ENV.RESEND_API_KEY);

export async function POST() {
  await resend.emails.send({
    from: "keafea@yahoo.com",
    to: "keafea@hotmail.com",
    subject: "testing email",
    react: WelcomeTemplate({ name: "kinfei" }),
  });

  return NextResponse.json({});
}
