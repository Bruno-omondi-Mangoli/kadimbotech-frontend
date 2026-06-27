import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Kadimbotech Solutions offers professional web development, graphic design, data analysis, and data annotation services across Kenya, Africa, and globally.",
};

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    icon: "🌐",
    bg: "#EEF4FF",
    color: "#1F4173",
    description: "We build fast, secure, and scalable websites and web applications using modern technologies like Next.js, React, and TypeScript.",
    features: ["Custom Websites", "Web Applications", "E-Commerce", "API Development", "SEO Optimized", "Mobile Responsive"],
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    icon: "🎨",
    bg: "#FFF4E6",
    color: "#E8820C",
    description: "From brand identity to UI/UX design, we create visuals that communicate your brand story and captivate your audience.",
    features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials", "Pitch Decks", "Packaging Design"],
  },
  {
    title: "Data Analysis",
    href: "/services/data-analysis",
    icon: "📊",
    bg: "#E6FBF9",
    color: "#0B8E82",
    description: "We transform raw data into actionable business insights using advanced analytics, visualization, and reporting tools.",
    features: ["Business Intelligence", "Data Visualization", "Custom Reporting", "Forecasting", "Power BI", "Python & SQL"],
  },
  {
    title: "Data Annotation",
    href: "/services/data-annotation",
    icon: "🤖",
    bg: "#F3EEFF",
    color: "#6B21A8",
    description: "We provide high-quality labeled datasets for AI and machine learning projects with precision and fast turnaround.",
    features: ["Image Annotation", "Text Labeling", "Video Annotation", "Audio Transcription", "Swahili & English", "95%+ Accuracy"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.82)" }}>
            We offer a comprehensive suite of technology services designed to help your business grow, innovate, and succeed in the digital age.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.href} className="bg-white rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ borderColor: "var(--color-border-brand)" }}>
                {/* Header */}
                <div className="p-8 pb-0">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6" style={{ background: service.bg }}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: service.color }}>{service.title}</h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>{service.description}</p>
                </div>

                {/* Features */}
                <div className="px-8 pb-6">
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                        <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                    style={{ background: service.color }}
                  >
                    Learn More About {service.title} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us strip */}
      <section className="section-padding" style={{ background: "var(--color-navy)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Kadimbotech?</h2>
          <p className="text-base mb-12 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.7)" }}>Every service we offer is delivered with professionalism, precision, and a commitment to your success.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "⚡", label: "Fast Delivery" },
              { icon: "🏆", label: "Expert Team" },
              { icon: "🔒", label: "Secure & Reliable" },
              { icon: "📈", label: "Results Driven" },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-2xl border text-center" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.1)" }}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-semibold text-white">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
