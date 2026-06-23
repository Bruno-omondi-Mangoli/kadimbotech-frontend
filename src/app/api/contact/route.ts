import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    /* ── Save to Payload CMS ── */
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
    if (cmsUrl) {
      try {
        await fetch(`${cmsUrl}/api/contact-submissions`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message, status: "new" }),
        });
      } catch (cmsError) {
        console.error("CMS save error:", cmsError);
      }
    }

    /* ── Send email notification via Resend ── */
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendKey}`,
          },
          body: JSON.stringify({
            from: "Kadimbotech Website <onboarding@resend.dev>",
            to: ["mangolibruno@gmail.com"],
            subject: `New Contact Form Submission: ${subject || "General Inquiry"}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #1F4173; padding: 24px; border-radius: 8px 8px 0 0;">
                  <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
                  <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Kadimbotech Solutions Website</p>
                </div>
                <div style="background: #f7f9fc; padding: 24px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1F4173; width: 120px;">Name:</td><td style="padding: 8px 0; color: #333;">${name}</td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1F4173;">Email:</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td></tr>
                    <tr><td style="padding: 8px 0; font-weight: bold; color: #1F4173;">Service:</td><td style="padding: 8px 0; color: #333;">${subject || "Not specified"}</td></tr>
                  </table>
                  <div style="margin-top: 16px; padding: 16px; background: white; border-radius: 6px; border: 1px solid #e2e8f0;">
                    <p style="font-weight: bold; color: #1F4173; margin: 0 0 8px;">Message:</p>
                    <p style="color: #333; margin: 0; line-height: 1.6;">${message}</p>
                  </div>
                  <div style="margin-top: 16px; text-align: center;">
                    <a href="mailto:${email}" style="background: #22C7B8; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: bold;">Reply to ${name}</a>
                  </div>
                </div>
              </div>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Email send error:", emailError);
      }
    }

    return NextResponse.json({ success: true, message: "Message received. We will be in touch within 24 hours." }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
