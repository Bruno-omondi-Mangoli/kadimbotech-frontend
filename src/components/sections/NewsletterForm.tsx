"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "exists">("idle");

  const handleSubmit = async () => {
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.status === 409) { setStatus("exists"); return; }
      if (res.ok) { setStatus("success"); setEmail(""); return; }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {status === "success" && (
        <p className="text-sm font-medium mb-4" style={{ color: "var(--color-teal)" }}>
          ✅ Successfully subscribed! Check your inbox for a welcome email.
        </p>
      )}
      {status === "exists" && (
        <p className="text-sm font-medium mb-4" style={{ color: "var(--color-gold)" }}>
          ℹ️ You are already subscribed.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium mb-4" style={{ color: "#ef4444" }}>
          ❌ Something went wrong. Please try again.
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
          style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          onClick={handleSubmit}
          disabled={status === "sending"}
          className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-60"
          style={{ background: "var(--color-teal)" }}
        >
          {status === "sending" ? "Subscribing..." : "Subscribe"}
        </button>
      </div>
    </div>
  );
}
