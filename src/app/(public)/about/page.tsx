import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kadimbotech Solutions — our story, mission, vision, values, and the team behind Kenya's premier technology company.",
};

const values = [
  { icon: "🎯", title: "Excellence", description: "We hold ourselves to the highest standards in every project we deliver." },
  { icon: "🤝", title: "Integrity", description: "We are honest, transparent, and accountable to our clients at all times." },
  { icon: "💡", title: "Innovation", description: "We embrace new technologies and creative thinking to solve complex problems." },
  { icon: "🌍", title: "Impact", description: "We build solutions that create real, measurable impact for businesses and communities." },
];

const milestones = [
  { year: "2024", event: "Kadimbotech Solutions officially founded in Nairobi, Kenya with a focus on web development and graphic design." },
  { year: "2024", event: "First clients onboarded — designed logos and brand identities for Dela Sparkle and Remedy Construction & Interiors." },
  { year: "2025", event: "Expanded services to include data analysis and data annotation. Team and client base growing steadily." },
  { year: "2025", event: "Reached 20+ satisfied clients across Kenya. Established strong reputation for quality and timely delivery." },
  { year: "2026", event: "Launched Kadimbotech Solutions v2.0 website. AI-powered services introduced. Expanding across Africa." },
];

export default function AboutPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>About Kadimbotech Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            We are a Kenya-based technology company on a mission to empower businesses across Africa and the world with innovative digital solutions.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>Our Mission</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                To empower businesses of all sizes with world-class technology solutions — delivered with excellence, integrity, and a deep commitment to our clients&apos; success.
              </p>
            </div>
            <div className="p-8 rounded-2xl border" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
              <div className="text-3xl mb-4">🔭</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>Our Vision</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                To become Africa&apos;s most trusted technology partner — a company known for innovation, quality, and transformative impact across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-white border text-center" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-navy)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>How We Got Here</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "var(--color-teal)" }}>{m.year.slice(2)}</div>
                  {i < milestones.length - 1 && <div className="w-0.5 flex-1 my-1" style={{ background: "var(--color-border-brand)" }} />}
                </div>
                <div className="pb-8">
                  <div className="text-sm font-bold mb-1" style={{ color: "var(--color-teal)" }}>{m.year}</div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>The People</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Meet Our Team</h2>
          </div>
          <div className="max-w-sm mx-auto">
            <div className="p-8 rounded-2xl bg-white border text-center" style={{ borderColor: "var(--color-border-brand)" }}>
              <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4" style={{ background: "var(--color-navy)" }}>BM</div>
              <h3 className="text-lg font-bold mb-1" style={{ color: "var(--color-navy)" }}>Bruno Omondi Mang&apos;oli</h3>
              <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-teal)" }}>Founder & CEO</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                Full-stack developer and entrepreneur with a passion for building technology that empowers African businesses. Specializes in web development, data services, and AI-powered solutions.
              </p>
              <div className="flex justify-center gap-3 mt-5">
                <a href="https://www.linkedin.com/company/kadimbotech-solutions/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "var(--color-navy)" }}>in</a>
                <a href="https://x.com/bruno_mangoli" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "var(--color-navy)" }}>X</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
