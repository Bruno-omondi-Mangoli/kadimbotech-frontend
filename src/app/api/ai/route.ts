import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const apiKey = process.env.HF_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured." }, { status: 500 });
    }

    const systemPrompt = `You are Kadi, the friendly AI assistant for Kadimbotech Solutions — a Kenya-based technology company.

About Kadimbotech Solutions:
- Founded: 2024 in Nairobi, Kenya
- Tagline: "Empowering Ideas, Driving Innovation"
- Services: Web Development, Graphic Design, Data Analysis, Data Annotation
- Contact: kadimbotechsolutions@gmail.com | +254 704 708 970
- WhatsApp: +254 704 708 970
- Location: Nairobi CBD, Kenya
- Founder: Bruno Omondi Mang'oli

Services:
1. Web Development — Modern websites, web apps, e-commerce, Next.js, React, TypeScript. Fast, secure, SEO-optimized.
2. Graphic Design — Logo design, brand identity, UI/UX design, marketing materials.
3. Data Analysis — Business intelligence, dashboards, data visualization, Power BI, Python, SQL.
4. Data Annotation — Image annotation, text labeling, video annotation, Swahili and English, 95%+ accuracy.

Pricing: Custom quotes. Direct visitors to contact form or WhatsApp.
Be friendly, professional, concise. Always end with a helpful next step.`;

    /* Build conversation string for the model */
    const conversationHistory = messages
      .slice(-6)
      .map((msg: { role: string; content: string }) =>
        msg.role === "user" ? `User: ${msg.content}` : `Kadi: ${msg.content}`
      )
      .join("\n");

    const prompt = `${systemPrompt}\n\nConversation:\n${conversationHistory}\nKadi:`;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.3",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 200,
            temperature: 0.7,
            return_full_text: false,
            stop: ["User:", "\nUser"],
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("HF error:", error);
      return NextResponse.json({ error: "AI service error." }, { status: 500 });
    }

    const data = await response.json();

    let reply = "";
    if (Array.isArray(data) && data[0]?.generated_text) {
      reply = data[0].generated_text.trim();
    } else if (data?.generated_text) {
      reply = data.generated_text.trim();
    } else {
      reply = "I am sorry, I could not process that. Please contact us directly at kadimbotechsolutions@gmail.com.";
    }

    /* Clean up any leftover stop tokens */
    reply = reply.split("User:")[0].trim();
    reply = reply.split("\nUser")[0].trim();

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
