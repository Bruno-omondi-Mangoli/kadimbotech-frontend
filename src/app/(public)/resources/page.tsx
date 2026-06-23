import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Resources",
  description: "Free guides, tools, and resources from Kadimbotech Solutions to help your business grow in the digital age.",
};

const guides = [
  { icon: "🌐", title: "Website Launch Checklist", description: "Everything you need to verify before launching your website — SEO, performance, security, and accessibility.", tag: "Web Development", download: "#" },
  { icon: "🎨", title: "Brand Identity Starter Guide", description: "A step-by-step guide to building a professional brand identity from scratch — colors, fonts, logo, and tone.", tag: "Graphic Design", download: "#" },
  { icon: "📊", title: "Business Data Analysis Template", description: "A free Excel template to track and analyze your key business metrics — sales, customers, and growth.", tag: "Data Analysis", download: "#" },
  { icon: "🤖", title: "AI & Data Annotation Guide", description: "Learn what data annotation is, why it matters for AI, and how to prepare quality training datasets.", tag: "Data Annotation", download: "#" },
  { icon: "💡", title: "Digital Transformation Roadmap", description: "A practical roadmap for small and medium businesses looking to embrace digital tools and technology.", tag: "Business", download: "#" },
  { icon: "📱", title: "Mobile-First Design Principles", description: "The essential principles of mobile-first design that every website owner and designer should know.", tag: "Web Development", download: "#" },
];

const tagColors: Record<string, { bg: string; text: string }> = {
  "Web Development": { bg: "#EEF4FF", text: "#1F4173" },
  "Graphic Design":  { bg: "#FFF4E6", text: "#E8820C" },
  "Data Analysis":   { bg: "#E6FBF9", text: "#0B8E82" },
  "Data Annotation": { bg: "#F3EEFF", text: "#6B21A8" },
  "Business":        { bg: "#F0FFF4", text: "#16A34A" },
};

export default function ResourcesPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Free Resources</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Resources & Guides</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Free tools, templates, and guides to help your business succeed in the digital age.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => {
              const colors = tagColors[guide.tag] || { bg: "#EEF4FF", text: "#1F4173" };
              return (
                <div key={guide.title} className="p-6 rounded-2xl bg-white border flex flex-col" style={{ borderColor: "var(--color-border-brand)" }}>
                  <div className="text-4xl mb-4">{guide.icon}</div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full w-fit mb-3" style={{ background: colors.bg, color: colors.text }}>{guide.tag}</span>
                  <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{guide.title}</h3>
                  <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: "var(--color-text-secondary)" }}>{guide.description}</p>
                  <a href={guide.download} className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "var(--color-teal)" }}>
                    📥 Download Free
                  </a>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "var(--color-navy)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">Need a Custom Solution?</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>Can&apos;t find what you need? Our team is ready to help you with a tailored solution.</p>
            <Link href="/contact" className="inline-block px-8 py-3 rounded-xl bg-white font-semibold text-sm transition-all hover:shadow-lg" style={{ color: "var(--color-navy)" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
