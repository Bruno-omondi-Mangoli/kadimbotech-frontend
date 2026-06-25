"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type LeadData = {
  name?: string;
  email?: string;
  service?: string;
};

const suggestedQuestions = [
  "What services do you offer?",
  "How much does a website cost?",
  "How long does a project take?",
  "Do you work with international clients?",
];

async function saveLead(lead: LeadData) {
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name || "AI Chat Lead",
        email: lead.email || "unknown@chat.com",
        subject: lead.service || "AI Chat Inquiry",
        message: `Lead captured via AI chat assistant.\nName: ${lead.name || "Not provided"}\nEmail: ${lead.email || "Not provided"}\nService interest: ${lead.service || "Not specified"}`,
      }),
    });
  } catch (e) {
    console.error("Lead save error:", e);
  }
}

function extractEmail(text: string): string | null {
  const match = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  return match ? match[0] : null;
}

function extractName(text: string): string | null {
  const patterns = [
    /(?:my name is|i am|i'm|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
    /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)$/,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export default function AIChatWidget() {
  const [open, setOpen]                   = useState(false);
  const [messages, setMessages]           = useState<Message[]>([{
    role: "assistant",
    content: "Hi! I'm Kadi, your Kadimbotech assistant 👋\n\nI can help you learn about our services, pricing, and how we can help your business grow. What would you like to know?",
  }]);
  const [input, setInput]                 = useState("");
  const [loading, setLoading]             = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [lead, setLead]                   = useState<LeadData>({});
  const [leadSaved, setLeadSaved]         = useState(false);
  const messagesEndRef                    = useRef<HTMLDivElement>(null);
  const inputRef                          = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    setShowSuggestions(false);

    /* Extract lead data from user message */
    const detectedEmail = extractEmail(text);
    const detectedName  = extractName(text);
    const updatedLead   = { ...lead };

    if (detectedEmail) updatedLead.email = detectedEmail;
    if (detectedName)  updatedLead.name  = detectedName;

    /* Detect service interest */
    const lower = text.toLowerCase();
    if (lower.includes("web") || lower.includes("website") || lower.includes("app")) updatedLead.service = "Web Development";
    else if (lower.includes("design") || lower.includes("logo") || lower.includes("brand")) updatedLead.service = "Graphic Design";
    else if (lower.includes("data analysis") || lower.includes("dashboard")) updatedLead.service = "Data Analysis";
    else if (lower.includes("annotation") || lower.includes("labeling") || lower.includes("dataset")) updatedLead.service = "Data Annotation";

    setLead(updatedLead);

    /* Save lead when we have both name and email */
    if (updatedLead.name && updatedLead.email && !leadSaved) {
      setLeadSaved(true);
      await saveLead(updatedLead);
    }

    const userMessage: Message = { role: "user", content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages,
          leadContext: updatedLead,
        }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: data.reply || "Sorry, I could not process that. Please contact us directly.",
      }]);
    } catch {
      setMessages((prev) => [...prev, {
        role: "assistant",
        content: "Sorry, something went wrong. Please email us at kadimbotechsolutions@gmail.com.",
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Chat bubble */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{ background: "var(--color-teal)" }}
        aria-label="Open AI Chat Assistant"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
        )}
        {!open && <span className="absolute w-14 h-14 rounded-full animate-ping opacity-30" style={{ background: "var(--color-teal)" }} />}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-[200] w-80 sm:w-96 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          style={{ height: "500px", background: "white", border: "1px solid var(--color-border-brand)" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 flex-shrink-0" style={{ background: "var(--color-navy)" }}>
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: "var(--color-teal)" }}>K</div>
            <div>
              <div className="text-white font-semibold text-sm">Kadi — AI Assistant</div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>Online · Kadimbotech Solutions</span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto p-1 rounded-md hover:bg-white/10 transition-colors" style={{ color: "rgba(255,255,255,0.7)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          {/* Lead capture indicator */}
          {leadSaved && (
            <div className="px-4 py-2 text-xs text-center flex-shrink-0" style={{ background: "rgba(34,199,184,0.1)", color: "var(--color-teal)" }}>
              ✅ Your details have been saved — our team will follow up soon!
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" style={{ background: "#f7f9fc" }}>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mr-2 mt-0.5" style={{ background: "var(--color-navy)" }}>K</div>
                )}
                <div
                  className="max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap"
                  style={{
                    background: msg.role === "user" ? "var(--color-teal)" : "white",
                    color: msg.role === "user" ? "white" : "var(--color-text-primary)",
                    borderBottomRightRadius: msg.role === "user" ? "4px" : "16px",
                    borderBottomLeftRadius: msg.role === "assistant" ? "4px" : "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mr-2" style={{ background: "var(--color-navy)" }}>K</div>
                <div className="px-4 py-3 rounded-2xl bg-white" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--color-teal)", animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--color-teal)", animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: "var(--color-teal)", animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          {showSuggestions && (
            <div className="px-4 py-2 flex flex-wrap gap-2 flex-shrink-0" style={{ borderTop: "1px solid var(--color-border-brand)", background: "white" }}>
              {suggestedQuestions.map((q) => (
                <button key={q} onClick={() => sendMessage(q)} className="text-xs px-3 py-1.5 rounded-full border transition-all hover:-translate-y-0.5" style={{ borderColor: "var(--color-teal)", color: "var(--color-teal)", background: "rgba(34,199,184,0.05)" }}>
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="px-3 py-3 flex gap-2 flex-shrink-0" style={{ borderTop: "1px solid var(--color-border-brand)", background: "white" }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              disabled={loading}
              className="flex-1 px-3 py-2 rounded-lg text-sm outline-none disabled:opacity-60"
              style={{ background: "#f7f9fc", border: "1px solid var(--color-border-brand)", color: "var(--color-text-primary)" }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white transition-all hover:opacity-90 disabled:opacity-40 flex-shrink-0"
              style={{ background: "var(--color-teal)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
