import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Kadi, the friendly AI assistant for Kadimbotech Solutions.

Kadimbotech Solutions is a Kenya-based technology company founded in 2024.
Tagline: "Empowering Ideas, Driving Innovation"
Location: Nairobi, Kenya
Contact: kadimbotechsolutions@gmail.com | +254 704 708 970
WhatsApp: +254 704 708 970
Founder: Bruno Omondi Mang'oli

Services:
1. Web Development - websites, web apps, e-commerce using Next.js and React
2. Graphic Design - logo design, brand identity, UI/UX, marketing materials
3. Data Analysis - dashboards, data visualization, Power BI, Python, SQL
4. Data Annotation - image/text/video labeling, Swahili and English, 95%+ accuracy

Always be friendly, professional and concise. End every response with a helpful next step.
For pricing, direct visitors to fill the contact form or WhatsApp us.`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const apiToken = process.env.CF_API_TOKEN;
    const accountId = process.env.CF_ACCOUNT_ID;

    if (!apiToken || !accountId) {
      return NextResponse.json({ error: "AI service not configured." }, { status: 500 });
    }

    /* Build messages array for Cloudflare AI */
    const cfMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...messages.slice(-8).map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "assistant",
        content: msg.content,
      })),
    ];

    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.1-8b-instruct`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiToken}`,
        },
        body: JSON.stringify({ messages: cfMessages }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("CF AI error:", response.status, errorText);
      return NextResponse.json({
        reply: "I am having trouble connecting right now. Please contact us at kadimbotechsolutions@gmail.com or WhatsApp +254 704 708 970.",
      }, { status: 200 });
    }

    const data = await response.json();
    const reply = data?.result?.choices?.[0]?.message?.content || data?.result?.response ||
      "I am sorry, I could not process that. Please contact us at kadimbotechsolutions@gmail.com or WhatsApp +254 704 708 970.";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json({
      reply: "I am having trouble connecting right now. Please contact us at kadimbotechsolutions@gmail.com or WhatsApp +254 704 708 970.",
    }, { status: 200 });
  }
}
