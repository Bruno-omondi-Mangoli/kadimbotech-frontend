import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description: "Professional graphic design services in Kenya. Logo design, brand identity, UI/UX design, and marketing materials that make your brand stand out.",
};

const services = [
  { icon: "🎨", title: "Logo Design", desc: "Memorable, versatile logos that represent your brand with confidence." },
  { icon: "🏢", title: "Brand Identity", desc: "Complete brand systems including colors, typography, and usage guidelines." },
  { icon: "📱", title: "UI/UX Design", desc: "User-centered interface designs for websites and mobile applications." },
  { icon: "📄", title: "Marketing Materials", desc: "Brochures, flyers, banners, business cards, and social media graphics." },
  { icon: "🖼️", title: "Pitch Decks", desc: "Professional presentation designs that impress investors and clients." },
  { icon: "🛍️", title: "Packaging Design", desc: "Product packaging that stands out on shelves and online stores." },
];

const process = [
  { step: "01", title: "Brief", desc: "We gather details about your brand, audience, competitors, and design preferences." },
  { step: "02", title: "Research", desc: "We study your industry and competitors to create designs that stand out." },
  { step: "03", title: "Concepts", desc: "We present 3 initial design concepts for your feedback and selection." },
  { step: "04", title: "Refinement", desc: "We refine your chosen concept through up to 3 revision rounds." },
  { step: "05", title: "Finalisation", desc: "Final files delivered in all required formats — PNG, SVG, PDF, and more." },
];

const faqs = [
  { q: "How many logo concepts will I receive?", a: "We provide 3 initial logo concepts. Once you select a direction, we refine it through up to 3 revision rounds until you are completely satisfied." },
  { q: "What file formats will I receive?", a: "You receive all source files plus exports in PNG, JPG, SVG, PDF, and EPS formats — ready for print and digital use." },
  { q: "Do I own the final designs?", a: "Yes. Once the project is paid in full, you own 100% of the intellectual property rights to all final design files." },
  { q: "How long does a brand identity project take?", a: "A logo design takes 5–10 business days. A full brand identity package takes 2–4 weeks depending on scope and feedback turnaround." },
];

export default function GraphicDesignPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Graphic Design</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            We create visual identities and design assets that communicate your brand story and captivate your audience.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl bg-white font-semibold text-sm transition-all hover:shadow-lg" style={{ color: "var(--color-navy)" }}>
            Start Your Project
          </Link>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Design Services We Offer</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Our Design Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="p-5 rounded-2xl border text-center" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
                <div className="text-2xl font-bold mb-2" style={{ color: "var(--color-teal)" }}>{p.step}</div>
                <h3 className="text-sm font-bold mb-2" style={{ color: "var(--color-navy)" }}>{p.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{faq.q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
