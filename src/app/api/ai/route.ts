import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Kadi, the friendly AI assistant for Kadimbotech Solutions — a Kenya-based technology company.

Kadimbotech Solutions:
- Founded: 2024 in Nairobi, Kenya
- Tagline: "Empowering Ideas, Driving Innovation"
- Contact: kadimbotechsolutions@gmail.com | +254 704 708 970
- WhatsApp: +254 704 708 970
- Founder: Bruno Omondi Mang'oli

Services:
1. Web Development - websites, web apps, e-commerce using Next.js and React. Fast, secure, SEO-optimized.
2. Graphic Design - logo design, brand identity, UI/UX, marketing materials.
3. Data Analysis - dashboards, data visualization, Power BI, Python, SQL.
4. Data Annotation - image/text/video labeling, Swahili and English, 95%+ accuracy.

LEAD CAPTURE INSTRUCTIONS:
- After answering 1-2 questions, naturally ask for the visitor's name and email so the team can follow up.
- Use phrases like: "I'd love to connect you with our team for a free quote. Could I get your name and email?"
- If they provide their email, confirm: "Perfect! Bruno will reach out to you shortly."
- Be warm, not pushy. Ask for contact details once per conversation.
- For pricing questions always say we offer custom quotes and encourage them to share their email.

Be friendly, professional, concise. Always end with a helpful next step.`;

export async function POST(req: NextRequest) {
  try {
    const { messages, leadContext } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const apiToken = process.env.CF_API_TOKEN;
    const accountId = process.env.CF_ACCOUNT_ID;

    if (!apiToken || !accountId) {
      return NextResponse.json({ error: "AI service not configured." }, { status: 500 });
    }

    /* Add lead context to system prompt if available */
    let systemPrompt = SYSTEM_PROMPT;
    if (leadContext?.name || leadContext?.email) {
      systemPrompt += `\n\nVISITOR INFO COLLECTED:\n- Name: ${leadContext.name || "not yet provided"}\n- Email: ${leadContext.email || "not yet provided"}\n- Service interest: ${leadContext.service || "not specified"}\nIf you already have their email, thank them and confirm the team will follow up. Do not ask for email again.`;
    }

    const cfMessages = [
      { role: "system", content: systemPrompt },
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
    const reply =
      data?.result?.choices?.[0]?.message?.content ||
      data?.result?.response ||
      "I am sorry, I could not process that. Please contact us at kadimbotechsolutions@gmail.com.";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json({
      reply: "I am having trouble connecting right now. Please contact us at kadimbotechsolutions@gmail.com or WhatsApp +254 704 708 970.",
    }, { status: 200 });
  }
}
