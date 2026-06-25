import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the Kadimbotech Solutions team. Explore career opportunities and internships at Kenya's premier technology company.",
};

const openings = [
  {
    title: "Frontend Developer",
    type: "Full-time / Remote",
    location: "Nairobi, Kenya",
    description: "We are looking for a passionate frontend developer with experience in React, Next.js, and Tailwind CSS to help build world-class web applications for our clients.",
    requirements: ["2+ years React/Next.js experience", "Strong TypeScript skills", "Tailwind CSS proficiency", "Git and collaborative workflow experience"],
  },
  {
    title: "Graphic Designer",
    type: "Full-time / Hybrid",
    location: "Nairobi, Kenya",
    description: "Join our creative team as a graphic designer. You will work on brand identities, UI/UX designs, and marketing materials for clients across Africa and beyond.",
    requirements: ["2+ years graphic design experience", "Proficiency in Adobe Creative Suite", "Portfolio of brand identity work", "UI/UX design experience a plus"],
  },
  {
    title: "Data Annotation Specialist",
    type: "Contract / Remote",
    location: "Remote — Kenya preferred",
    description: "We are hiring data annotation specialists to label and categorize datasets for AI and machine learning projects. Swahili speakers strongly encouraged to apply.",
    requirements: ["Attention to detail", "Basic computer literacy", "Swahili and English proficiency", "Ability to meet deadlines consistently"],
  },
];

const internships = [
  {
    title: "Web Development Intern",
    duration: "3 months",
    description: "Learn professional web development under the mentorship of our senior developers. Work on real client projects.",
  },
  {
    title: "Graphic Design Intern",
    duration: "3 months",
    description: "Develop your design skills working on real brand projects. Build your portfolio with professional-grade work.",
  },
  {
    title: "Data Science Intern",
    duration: "3 months",
    description: "Get hands-on experience with real business data, analytics tools, and data annotation workflows.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Careers at Kadimbotech</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            We are building the future of technology in Africa. Join a passionate team that values innovation, growth, and making a real impact.
          </p>
        </div>
      </section>

      {/* Why work with us */}
      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Why Work With Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚀", title: "Real Impact", desc: "Work on projects that directly help businesses across Kenya and Africa grow." },
              { icon: "📚", title: "Learn & Grow", desc: "Continuous learning environment with mentorship from experienced professionals." },
              { icon: "🌍", title: "Remote Friendly", desc: "Flexible work arrangements — work from anywhere in Kenya." },
              { icon: "💰", title: "Competitive Pay", desc: "Fair, competitive compensation based on skills and experience." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border text-center" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>Now Hiring</p>
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Open Positions</h2>
          </div>
          <div className="flex flex-col gap-6 max-w-3xl mx-auto">
            {openings.map((job) => (
              <div key={job.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: "var(--color-navy)" }}>{job.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "rgba(34,199,184,0.1)", color: "var(--color-teal)" }}>{job.type}</span>
                      <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }}>📍 {job.location}</span>
                    </div>
                  </div>
                  <Link href="/contact" className="flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "var(--color-teal)" }}>
                    Apply Now
                  </Link>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>{job.description}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-navy)" }}>Requirements:</p>
                  <ul className="flex flex-col gap-1">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--color-teal)" }} />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>For Students</p>
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Internship Opportunities</h2>
            <p className="text-base max-w-xl mx-auto mt-6" style={{ color: "var(--color-text-secondary)" }}>
              We offer 3-month internships for students and recent graduates. Build real skills on real projects.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {internships.map((intern) => (
              <div key={intern.title} className="p-6 rounded-2xl border text-center" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
                <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(244,197,66,0.15)", color: "var(--color-gold)" }}>
                  {intern.duration}
                </span>
                <h3 className="text-base font-bold mt-3 mb-2" style={{ color: "var(--color-navy)" }}>{intern.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>{intern.description}</p>
                <Link href="/contact" className="text-sm font-semibold" style={{ color: "var(--color-teal)" }}>
                  Apply →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
