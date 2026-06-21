import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Data Analysis Services",
  description: "Professional data analysis services in Kenya. We turn raw data into actionable business insights using advanced analytics, visualization, and reporting.",
};

const services = [
  { icon: "📊", title: "Business Intelligence", desc: "Dashboards and reports that give you a real-time view of your business performance." },
  { icon: "📈", title: "Data Visualization", desc: "Clear, compelling charts and graphs that make complex data easy to understand." },
  { icon: "🔮", title: "Predictive Analytics", desc: "Use historical data to forecast trends and make smarter business decisions." },
  { icon: "🧹", title: "Data Cleaning", desc: "We clean, normalize, and structure messy datasets so they are ready for analysis." },
  { icon: "📋", title: "Custom Reporting", desc: "Automated reports delivered to your inbox on any schedule you need." },
  { icon: "🤝", title: "Consulting", desc: "Strategic advice on how to collect, manage, and leverage your data assets." },
];

const tools = ["Python", "Pandas", "NumPy", "Power BI", "Tableau", "Excel", "SQL", "Google Data Studio", "Matplotlib", "Seaborn"];

const faqs = [
  { q: "What data formats can you work with?", a: "We work with CSV, Excel, JSON, SQL databases, Google Sheets, PDF reports, and most other common data formats." },
  { q: "Do I need to have clean data before you start?", a: "No. Data cleaning and preparation is part of our service. We handle messy, inconsistent, and incomplete datasets." },
  { q: "How do you deliver the results?", a: "We deliver interactive dashboards, PDF reports, Excel workbooks, or live data connections depending on your preference." },
  { q: "Is my data kept confidential?", a: "Absolutely. We sign NDAs on request and never share your data with third parties. All data is handled securely." },
];

export default function DataAnalysisPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Our Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Data Analysis</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            We transform your raw data into clear, actionable insights that drive smarter business decisions and measurable growth.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 rounded-xl bg-white font-semibold text-sm transition-all hover:shadow-lg" style={{ color: "var(--color-navy)" }}>
            Discuss Your Data
          </Link>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>What We Analyse</h2>
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

      <section className="section-padding" style={{ background: "var(--color-navy)" }}>
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Tools We Use</h2>
          <p className="text-base mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>Industry-standard tools for reliable, professional results.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span key={tool} className="px-4 py-2 rounded-lg text-sm font-medium" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}>
                {tool}
              </span>
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
