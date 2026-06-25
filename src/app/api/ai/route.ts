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

    const apiKey = process.env.HF_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "AI service not configured." }, { status: 500 });
    }

    const lastUserMessage = messages.filter((m: {role: string}) => m.role === "user").pop()?.content || "";

    const conversationHistory = messages
      .slice(-6)
      .map((msg: { role: string; content: string }) =>
        msg.role === "user"
          ? `<|im_start|>user\n${msg.content}<|im_end|>`
          : `<|im_start|>assistant\n${msg.content}<|im_end|>`
      )
      .join("\n");

    const fullPrompt = `<|im_start|>system\n${SYSTEM_PROMPT}<|im_end|>\n${conversationHistory}\n<|im_start|>assistant\n`;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/Qwen/Qwen2.5-1.5B-Instruct",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          inputs: fullPrompt,
          parameters: {
            max_new_tokens: 250,
            temperature: 0.7,
            return_full_text: false,
            stop: ["<|im_end|>", "<|im_start|>"],
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("HF error status:", response.status, errorText);
      return NextResponse.json({ error: "AI service error." }, { status: 500 });
    }

    const data = await response.json();

    let reply = "";
    if (Array.isArray(data) && data[0]?.generated_text) {
      reply = data[0].generated_text.trim();
    } else if (data?.generated_text) {
      reply = data.generated_text.trim();
    }

    reply = reply.split("<|im_end|>")[0].trim();
    reply = reply.split("<|im_start|>")[0].trim();

    if (!reply) {
      reply = "I am sorry, I could not process that. Please contact us directly at kadimbotechsolutions@gmail.com or WhatsApp +254 704 708 970.";
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("AI chat error:", error);
    return NextResponse.json({
      reply: "I am having trouble connecting right now. Please contact us directly at kadimbotechsolutions@gmail.com or WhatsApp +254 704 708 970.",
    }, { status: 200 });
  }
}
