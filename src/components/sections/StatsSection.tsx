"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 50,  suffix: "+", label: "Projects Delivered",  description: "Across Kenya and globally" },
  { value: 30,  suffix: "+", label: "Happy Clients",       description: "Businesses that trust us" },
  { value: 4,   suffix: "+", label: "Years of Experience", description: "In tech and digital services" },
  { value: 100, suffix: "%", label: "Client Satisfaction", description: "We deliver on our promises" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-navy)" }}
    >
      <div className="container">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Impact in Numbers
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)" }} className="text-base max-w-xl mx-auto">
            Every number represents a real client, a real project, and a real
            result delivered with excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl border"
              style={{
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "var(--color-teal)", fontFamily: "var(--font-heading)" }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-base font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
