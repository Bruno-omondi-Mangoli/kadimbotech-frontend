import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured." }, { status: 500 });
    }

    const systemPrompt = `You are Kadi, the friendly AI assistant for Kadimbotech Solutions — a Kenya-based technology company.

Your role is to:
- Welcome visitors warmly and answer questions about Kadimbotech Solutions
- Help visitors understand our services
- Guide visitors to the right page or service
- Collect leads by asking for name and email when appropriate
- Encourage visitors to get a free quote

About Kadimbotech Solutions:
- Founded: 2024 in Nairobi, Kenya
- Tagline: "Empowering Ideas, Driving Innovation"
- Services: Web Development, Graphic Design, Data Analysis, Data Annotation
- Contact: kadimbotechsolutions@gmail.com | +254 704 708 970
- WhatsApp: +254 704 708 970
- Location: Nairobi CBD, Kenya
- Website: kadimbotechsolutions.online
- Founder: Bruno Omondi Mang'oli

Services details:
1. Web Development — Modern websites, web apps, e-commerce, Next.js, React, TypeScript. Fast, secure, SEO-optimized, mobile-responsive.
2. Graphic Design — Logo design, brand identity, UI/UX design, marketing materials, pitch decks, packaging.
3. Data Analysis — Business intelligence, dashboards, data visualization, predictive analytics, Power BI, Python, SQL.
4. Data Annotation — Image annotation, text labeling, video annotation, audio transcription, multilingual (Swahili/English), 95%+ accuracy.

Pricing: We provide custom quotes based on project scope. Encourage visitors to fill the contact form or WhatsApp us.

Personality: Friendly, professional, helpful, concise. Use short paragraphs. Never make up information. If unsure, direct to contact page.

Always end responses with a helpful next step like visiting a page, contacting us, or getting a quote.`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.slice(-10),
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error("OpenAI error:", error);
      return NextResponse.json({ error: "AI service error." }, { status: 500 });
    }

    const data = await response.json();
    const reply = data.choices[0]?.message?.content || "I am sorry, I could not process that. Please contact us directly at kadimbotechsolutions@gmail.com.";

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("AI chat error:", error);
    console.log("API Key present:", !!process.env.OPENAI_API_KEY);
console.log("API Key prefix:", process.env.OPENAI_API_KEY?.slice(0, 10));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
