import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Web Development Services",
  description: "Professional web development services in Kenya. We build fast, secure, and scalable websites and web applications using Next.js, React, and TypeScript.",
};

const benefits = [
  { icon: "⚡", title: "Lightning Fast", desc: "Built with Next.js for server-side rendering and optimal Core Web Vitals scores." },
  { icon: "📱", title: "Mobile First", desc: "Every website is fully responsive and tested across all devices and screen sizes." },
  { icon: "🔒", title: "Secure", desc: "Security best practices built in from day one — HTTPS, input validation, and secure APIs." },
  { icon: "🔍", title: "SEO Optimized", desc: "Technical SEO, structured data, sitemaps, and Open Graph tags included as standard." },
  { icon: "♿", title: "Accessible", desc: "WCAG 2.1 AA compliant — keyboard navigable, screen reader friendly." },
  { icon: "📈", title: "Scalable", desc: "Architecture designed to grow with your business from day one." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, target audience, and requirements." },
  { step: "02", title: "Planning", desc: "We create wireframes, define the tech stack, and agree on milestones." },
  { step: "03", title: "Design", desc: "UI/UX design mockups are created and approved before development begins." },
  { step: "04", title: "Development", desc: "We build your website using modern, clean, and maintainable code." },
  { step: "05", title: "Testing", desc: "Thorough testing across browsers, devices, and performance metrics." },
  { step: "06", title: "Launch", desc: "We deploy to production, configure domains, SSL, and monitoring." },
];

const faqs = [
  { q: "How long does a website take to build?", a: "A standard business website takes 3–6 weeks. Complex web applications take 8–16 weeks depending on features and scope." },
  { q: "Do you build e-commerce websites?", a: "Yes. We build custom e-commerce solutions using Next.js with payment gateway integrations for M-Pesa, Stripe, and PayPal." },
  { q: "Will I be able to update my website myself?", a: "Yes. We include a CMS (Content Management System) so you can update content, add blog posts, and manage your site without coding." },
  { q: "Do you offer hosting and maintenance?", a: "Yes. We offer managed hosting on Vercel and Railway, with monthly maintenance packages covering updates, backups, and support." },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Web Development</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            We design and build modern, fast, and scalable websites and web applications that drive real business results.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl bg-white font-semibold text-sm transition-all hover:shadow-lg" style={{ color: "var(--color-navy)" }}>
            Get a Free Quote
          </Link>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Why Our Web Development Stands Out</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-2xl bg-white border" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{b.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Our Development Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p) => (
              <div key={p.step} className="p-6 rounded-2xl border" style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}>
                <div className="text-3xl font-bold mb-3" style={{ color: "var(--color-teal)" }}>{p.step}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{p.desc}</p>
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
