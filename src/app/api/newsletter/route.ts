import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    /* ── Save to Payload CMS ── */
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
    if (cmsUrl) {
      const res = await fetch(`${cmsUrl}/api/subscribers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: name || "",
          active: true,
          subscribedAt: new Date().toISOString(),
          source: "blog",
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        if (error?.errors?.[0]?.message?.includes("unique")) {
          return NextResponse.json(
            { error: "You are already subscribed." },
            { status: 409 }
          );
        }
      }
    }

    /* ── Send welcome email via Resend ── */
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
            from: "Kadimbotech Solutions <hello@kadimbotechsolutions.online>",
            to: [email],
            subject: "Welcome to the Kadimbotech Newsletter!",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: #1F4173; padding: 24px; border-radius: 8px 8px 0 0; text-align: center;">
                  <h1 style="color: white; margin: 0; font-size: 22px;">Welcome to Kadimbotech!</h1>
                  <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">Empowering Ideas, Driving Innovation</p>
                </div>
                <div style="background: #f7f9fc; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0;">
                  <p style="color: #333; font-size: 15px; line-height: 1.6;">Hi${name ? " " + name : ""},</p>
                  <p style="color: #333; font-size: 15px; line-height: 1.6;">Thank you for subscribing to the Kadimbotech Solutions newsletter! You will receive our latest insights on web development, graphic design, data analysis, and technology.</p>
                  <div style="text-align: center; margin: 24px 0;">
                    <a href="https://kadimbotechsolutions.online/blog" style="background: #22C7B8; color: white; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 14px;">Read Our Latest Articles</a>
                  </div>
                  <p style="color: #666; font-size: 13px;">If you did not subscribe to this newsletter, you can safely ignore this email.</p>
                </div>
              </div>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Welcome email error:", emailError);
      }
    }

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
