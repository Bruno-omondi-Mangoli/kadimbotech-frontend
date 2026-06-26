const reasons = [
  { icon: "⚡", title: "Fast Delivery", description: "We deliver projects on time without compromising quality. Our agile process keeps you informed at every step." },
  { icon: "🏆", title: "Expert Team", description: "Our team brings years of hands-on experience in web development, design, and data services." },
  { icon: "🌍", title: "Global Standards", description: "We build to international standards — accessible, secure, SEO-optimized, and performance-focused." },
  { icon: "💬", title: "Clear Communication", description: "We keep you in the loop with regular updates, transparent pricing, and no hidden surprises." },
  { icon: "🔒", title: "Secure & Reliable", description: "Security is built into everything we create — from secure authentication to encrypted data handling." },
  { icon: "📈", title: "Results Driven", description: "We measure success by your success. Every solution is designed to grow your business and drive real results." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal)" }}>Why Kadimbotech</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-accent" style={{ color: "var(--color-navy)" }}>
              Why Businesses Choose Us
            </h2>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--color-text-secondary)" }}>
              We are not just a service provider — we are your technology partner. From startups to enterprises, we deliver solutions that make a real difference to your business.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "ISO-aligned development practices",
                "WCAG 2.1 accessibility compliance",
                "Post-launch support included",
                "Serving clients across 2+ countries",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: "var(--color-teal)" }}>✓</div>
                  <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-6 rounded-2xl border transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                style={{ borderColor: "var(--color-border-brand)", background: "var(--color-bg-secondary)" }}
              >
                <div className="text-3xl mb-4">{reason.icon}</div>
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-navy)" }}>{reason.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
