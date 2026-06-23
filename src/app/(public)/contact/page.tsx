"use client";

import { useState } from "react";

const contactInfo = [
  { icon: "📍", label: "Address", value: "Nairobi CBD, Nairobi, Kenya" },
  { icon: "📧", label: "Email", value: "kadimbotechsolutions@gmail.com" },
  { icon: "📞", label: "Phone", value: "+254 704 708 970" },
  { icon: "⏰", label: "Hours", value: "Mon–Fri, 8AM – 6PM EAT" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Have a project in mind? We would love to hear from you. Send us a message and we will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <div className="flex flex-col gap-5">
              <div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--color-navy)" }}>Let&apos;s Talk</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  Whether you need a new website, a brand identity, data analysis, or AI training data — we are ready to help.
                </p>
              </div>

              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4 p-4 rounded-xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                  <div className="text-2xl flex-shrink-0">{info.icon}</div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-teal)" }}>{info.label}</div>
                    <div className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>{info.value}</div>
                  </div>
                </div>
              ))}

              <a href="https://wa.me/254704708970" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#25D366" }}>
                💬 Chat on WhatsApp
              </a>

              <a href="https://maps.app.goo.gl/2Jvcrh8S8GEADCAt9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 rounded-xl font-semibold text-sm transition-all hover:opacity-90 border" style={{ borderColor: "var(--color-navy)", color: "var(--color-navy)" }}>
                📍 View on Google Maps
              </a>
            </div>

            <div className="lg:col-span-2 p-8 rounded-2xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--color-navy)" }}>Send Us a Message</h2>

              {status === "success" && (
                <div className="mb-6 p-4 rounded-xl text-sm font-medium" style={{ background: "rgba(34,199,184,0.1)", color: "var(--color-teal)", border: "1px solid rgba(34,199,184,0.3)" }}>
                  ✅ Message sent! We will get back to you within 24 hours.
                </div>
              )}
              {status === "error" && (
                <div className="mb-6 p-4 rounded-xl text-sm font-medium" style={{ background: "rgba(239,68,68,0.1)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.3)" }}>
                  ❌ Something went wrong. Please email us directly at kadimbotechsolutions@gmail.com
                </div>
              )}

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text-primary)" }}>Full Name <span style={{ color: "var(--color-teal)" }}>*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all" style={{ borderColor: "var(--color-border-brand)", color: "var(--color-text-primary)" }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text-primary)" }}>Email Address <span style={{ color: "var(--color-teal)" }}>*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all" style={{ borderColor: "var(--color-border-brand)", color: "var(--color-text-primary)" }} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text-primary)" }}>Service Interested In</label>
                  <select name="subject" value={form.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border text-sm outline-none bg-white" style={{ borderColor: "var(--color-border-brand)", color: "var(--color-text-primary)" }}>
                    <option value="">Select a service...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="Data Annotation">Data Annotation</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text-primary)" }}>Message <span style={{ color: "var(--color-teal)" }}>*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border text-sm outline-none resize-none" style={{ borderColor: "var(--color-border-brand)", color: "var(--color-text-primary)" }} />
                </div>

                <button onClick={handleSubmit} disabled={status === "sending"} className="w-full py-4 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 disabled:opacity-60" style={{ background: "var(--color-navy)" }}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
