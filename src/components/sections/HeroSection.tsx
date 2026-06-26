"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const words = ["Innovative", "Scalable", "Modern", "Powerful"];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1F4173 45%, #0B5E8E 75%, #22C7B8 100%)" }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-5%] right-[10%] w-[400px] h-[400px] rounded-full opacity-20 blur-3xl" style={{ background: "#F4C542" }} />
        <div className="absolute bottom-[-10%] left-[-5%] w-[350px] h-[350px] rounded-full opacity-15 blur-3xl" style={{ background: "#22C7B8" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />

      <div className="container relative z-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Text content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8 border" style={{ background: "rgba(244,197,66,0.15)", borderColor: "rgba(244,197,66,0.4)", color: "#F4C542" }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#F4C542" }} />
              Kenya&apos;s Premier Tech Company
            </div>

            {/* Heading */}
            <h1 className="font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              <span style={{ color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>We Build</span>
              {" "}
              <span
                style={{
                  color: "#F4C542",
                  opacity: visible ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  display: "block",
                  textShadow: "0 2px 20px rgba(244,197,66,0.4)",
                }}
              >
                {words[wordIndex]}
              </span>
              <span style={{ color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>Digital Solutions</span>
            </h1>

            {/* Tagline */}
            <p className="text-lg font-semibold mb-4" style={{ color: "#22C7B8" }}>
              Empowering Ideas, Driving Innovation
            </p>

            {/* Description */}
            <p className="text-base leading-relaxed mb-10 max-w-lg" style={{ color: "rgba(255,255,255,0.82)" }}>
              Kadimbotech Solutions delivers world-class web development, graphic design, data analysis, and data annotation services to businesses across Kenya, Africa, and the globe.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap"
                style={{ background: "#F4C542", color: "#1F4173", minWidth: "160px" }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl text-base font-bold transition-all duration-200 hover:-translate-y-0.5 border-2 whitespace-nowrap"
                style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.08)", minWidth: "160px" }}
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { value: "30+", label: "Projects", color: "#22C7B8" },
                { value: "20+", label: "Clients", color: "#F4C542" },
                { value: "2024", label: "Founded", color: "#2ECC71" },
                { value: "100%", label: "Satisfaction", color: "#22C7B8" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl border text-center" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.12)" }}>
                  <div className="text-xl font-bold mb-0.5" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Hero image */}
          <div className="hidden lg:flex items-end justify-center relative">
            {/* Glow behind image */}
            <div className="absolute bottom-0 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: "#22C7B8" }} />
            <img
              src="/hero-person.png"
              alt="Kadimbotech Solutions professional"
              className="relative z-10 object-contain drop-shadow-2xl"
              style={{ maxHeight: "550px", width: "auto" }}
            />
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg-primary))" }} aria-hidden="true" />
    </section>
  );
}
