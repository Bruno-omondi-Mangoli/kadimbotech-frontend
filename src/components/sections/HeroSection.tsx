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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-bg-dark)" }}
    >
      {/* Background gradient orbs */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
          style={{ background: "var(--color-teal)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--color-blue)" }}
        />
        <div
          className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full opacity-10 blur-3xl"
          style={{ background: "var(--color-navy)" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 py-24 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider mb-8 border"
          style={{
            background: "rgba(34,199,184,0.1)",
            borderColor: "rgba(34,199,184,0.3)",
            color: "var(--color-teal)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--color-teal)" }} />
          Kenya&apos;s Premier Tech Company
        </div>

        {/* Main heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          We Build{" "}
          <span
            className="block transition-opacity duration-400"
            style={{
              color: "var(--color-teal)",
              opacity: visible ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            {words[wordIndex]}
          </span>
          Digital Solutions
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Kadimbotech Solutions delivers world-class web development, graphic
          design, data analysis, and data annotation services to businesses
          across Kenya, Africa, and the globe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "var(--color-teal)" }}
          >
            Get a Free Quote
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:-translate-y-0.5 border"
            style={{
              color: "rgba(255,255,255,0.85)",
              borderColor: "rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            View Our Work
          </Link>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients" },
            { value: "4+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: "var(--color-teal)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-medium"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-bg-primary))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
