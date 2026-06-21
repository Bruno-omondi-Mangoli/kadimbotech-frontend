import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Kadimbotech Solutions — our story, mission, vision, values, and the team behind Kenya's premier technology company.",
};

const values = [
  { icon: "🎯", title: "Excellence", description: "We hold ourselves to the highest standards in every project we deliver." },
  { icon: "🤝", title: "Integrity", description: "We are honest, transparent, and accountable to our clients at all times." },
  { icon: "💡", title: "Innovation", description: "We embrace new technologies and creative thinking to solve complex problems." },
  { icon: "🌍", title: "Impact", description: "We build solutions that create real, measurable impact for businesses and communities." },
];

const team = [
  { name: "Bruno Omondi Mang'oli", role: "Founder & CEO", initials: "BM", bio: "Full-stack developer and entrepreneur with a passion for building technology that empowers African businesses." },
  { name: "Tech Lead", role: "Lead Developer", initials: "TL", bio: "Expert in modern web technologies with 5+ years building scalable applications." },
  { name: "Design Lead", role: "Creative Director", initials: "DL", bio: "Award-winning designer specializing in brand identity and user experience." },
  { name: "Data Lead", role: "Data Science Lead", initials: "DA", bio: "Data scientist with expertise in analytics, ML, and AI-powered solutions." },
];

const milestones = [
  { year: "2018", event: "Zaffy Meat Mart founded — entrepreneurial roots established in Nairobi CBD." },
  { year: "2020", event: "Kadimbotech Solutions officially launched with a focus on web development." },
  { year: "2021", event: "Expanded services to include graphic design and data annotation." },
  { year: "2022", event: "First international clients onboarded across Africa and Europe." },
  { year: "2023", event: "Data analysis division launched. Team grows to 5 specialists." },
  { year: "2024", event: "AI-powered services introduced. 50+ projects delivered globally." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            About Kadimbotech Solutions
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            We are a Kenya-based technology company on a mission to empower businesses
            across Africa and the world with innovative digital solutions.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
              <div className="text-3xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>Our Mission</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                To empower businesses of all sizes with world-class technology solutions —
                delivered with excellence, integrity, and a deep commitment to our clients&apos; success.
              </p>
            </div>
            <div className="p-8 rounded-2xl border" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
              <div className="text-3xl mb-4">🔭</div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--color-navy)" }}>Our Vision</h2>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                To become Africa&apos;s most trusted technology partner — a company known for innovation,
                quality, and transformative impact across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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

      {/* History timeline */}
      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>How We Got Here</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Our Journey</h2>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "var(--color-teal)" }}>
                    {m.year.slice(2)}
                  </div>
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

      {/* Team */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>The People</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl bg-white border text-center" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4" style={{ background: "var(--color-navy)" }}>
                  {member.initials}
                </div>
                <h3 className="text-base font-bold mb-1" style={{ color: "var(--color-navy)" }}>{member.name}</h3>
                <p className="text-xs font-semibold mb-3" style={{ color: "var(--color-teal)" }}>{member.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
