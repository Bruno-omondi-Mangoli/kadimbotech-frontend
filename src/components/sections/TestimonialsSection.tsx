const testimonials = [
  {
    name: "James Mwangi",
    role: "CEO, Savannah Ventures",
    country: "Kenya",
    quote:
      "Kadimbotech delivered our e-commerce platform ahead of schedule. The quality of work and communication throughout the project was exceptional. Highly recommended.",
    initials: "JM",
  },
  {
    name: "Aisha Mohammed",
    role: "Marketing Director, AfriTech Ltd",
    country: "Tanzania",
    quote:
      "Our brand identity was completely transformed. The graphic design team understood our vision perfectly and created something truly outstanding.",
    initials: "AM",
  },
  {
    name: "David Okonkwo",
    role: "Data Science Lead, FinServe Africa",
    country: "Nigeria",
    quote:
      "The data annotation work was precise, fast, and exactly what our ML team needed. We will definitely be working with Kadimbotech again.",
    initials: "DO",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="section-padding"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--color-teal)" }}
          >
            Client Stories
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center"
            style={{ color: "var(--color-navy)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-6 rounded-2xl border bg-white flex flex-col"
              style={{ borderColor: "var(--color-border-brand)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: "var(--color-gold)" }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-sm leading-relaxed flex-1 mb-6 italic"
                style={{ color: "var(--color-text-secondary)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{ background: "var(--color-navy)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    {t.role} · {t.country}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
