import type { Metadata } from "next";
import Image from "next/image";
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

const team = [
  {
    name: "Bruno Omondi Mang'oli",
    role: "CEO & Founder",
    image: "/team/bruno.jpeg",
    bio: "Full-stack developer, data annotator, and entrepreneur with a passion for building technology that empowers African businesses. Specializes in Next.js, React, Python, and AI-powered solutions. Leads the overall vision and technical direction of Kadimbotech Solutions.",
    skills: ["Full-Stack Development", "Data Annotation", "AI & ML", "Project Management"],
    linkedin: "https://www.linkedin.com/company/kadimbotech-solutions/",
    twitter: "https://x.com/bruno_mangoli",
  },
  {
    name: "Moses Maranya",
    role: "Marketing Strategist",
    image: "/team/moses.png",
    bio: "Creative marketing professional with deep expertise in digital marketing, brand strategy, and business growth. Moses drives Kadimbotech's client acquisition, brand visibility, and market positioning across Kenya and beyond.",
    skills: ["Digital Marketing", "Brand Strategy", "Social Media", "Business Development"],
    linkedin: null,
    twitter: null,
  },
  {
    name: "Emmanuel Mang'oli",
    role: "Lead Graphic Designer",
    image: "/team/emmanuel.png",
    bio: "Talented graphic designer and visual storyteller with expertise in brand identity, logo design, and digital graphics. Emmanuel crafts compelling visuals that communicate brand stories with clarity and creativity.",
    skills: ["Adobe Photoshop", "Adobe Suite", "Canva", "Brand Identity", "UI Design"],
    linkedin: null,
    twitter: null,
  },
  {
    name: "Hellen Atsunga",
    role: "Data Analyst & Annotation Specialist",
    image: "/team/hellen.jpeg",
    bio: "Data professional specializing in analytics, visualization, and AI training data. Hellen brings precision and expertise to every dataset, delivering high-quality annotated data and actionable business insights.",
    skills: ["Python", "R", "Tableau", "CVAT", "LiDAR", "Bounding Box", "Image Evaluation"],
    linkedin: null,
    twitter: null,
  },
];

const milestones = [
  { year: "2024", event: "Kadimbotech Solutions officially founded in Nairobi, Kenya with a focus on web development and graphic design." },
  { year: "2024", event: "First clients onboarded — designed logos and brand identities for Remedy Construction & Interiors and delivered multiple graphic design projects." },
  { year: "2024", event: "Expanded into web development — launched websites for clients in Kenya and the United States including Holly's Hairstyles and Candie's Candles." },
  { year: "2025", event: "Expanded services to include data analysis and data annotation. Team grew to 4 specialists." },
  { year: "2025", event: "Reached 20+ satisfied clients across Kenya and internationally. Strong reputation established for quality and timely delivery." },
  { year: "2026", event: "Launched Kadimbotech Solutions v2.0 website with AI-powered features. Expanding across Africa and globally." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Our Story</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>About Kadimbotech Solutions</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            We are a Kenya-based technology company on a mission to empower businesses across Africa and the world with innovative digital solutions.
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

      {/* Team */}
      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>The People</p>
            <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Meet Our Team</h2>
            <p className="text-base max-w-2xl mx-auto mt-6" style={{ color: "var(--color-text-secondary)" }}>
              A passionate team of professionals dedicated to delivering excellence in every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white border overflow-hidden" style={{ borderColor: "var(--color-border-brand)" }}>
                {/* Photo */}
                <div className="relative h-56 w-full overflow-hidden" style={{ background: "var(--color-bg-secondary)" }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold mb-0.5" style={{ color: "var(--color-navy)" }}>{member.name}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color: "var(--color-teal)" }}>{member.role}</p>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>{member.bio}</p>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(34,199,184,0.1)", color: "var(--color-teal)" }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                  {/* Social */}
                  {(member.linkedin || member.twitter) && (
                    <div className="flex gap-2">
                      {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "var(--color-navy)" }}>in</a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "var(--color-navy)" }}>X</a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
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

      <CTASection />
    </>
  );
}
