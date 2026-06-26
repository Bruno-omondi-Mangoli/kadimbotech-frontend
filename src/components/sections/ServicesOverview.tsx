import Link from "next/link";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "We build fast, secure, and scalable websites and web applications using modern technologies like Next.js, React, and TypeScript.",
    icon: "🌐",
    color: "#1F4173",
    bg: "#EEF4FF",
    features: ["Custom Websites", "Web Applications", "E-Commerce", "API Development"],
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    description: "From brand identity to UI/UX design, we create visuals that communicate your brand's story and captivate your audience.",
    icon: "🎨",
    color: "#E8820C",
    bg: "#FFF4E6",
    features: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Materials"],
  },
  {
    title: "Data Analysis",
    href: "/services/data-analysis",
    description: "We transform raw data into actionable business insights using advanced analytics, visualization, and reporting tools.",
    icon: "📊",
    color: "#0B8E82",
    bg: "#E6FBF9",
    features: ["Business Intelligence", "Data Visualization", "Reporting", "Forecasting"],
  },
  {
    title: "Data Annotation",
    href: "/services/data-annotation",
    description: "We provide high-quality labeled datasets for AI and machine learning projects, with precision and fast turnaround.",
    icon: "🤖",
    color: "#6B21A8",
    bg: "#F3EEFF",
    features: ["Image Annotation", "Text Labeling", "Video Annotation", "NLP Datasets"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-teal)" }}>What We Do</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>
            Our Core Services
          </h2>
          <p className="text-base max-w-2xl mx-auto mt-8" style={{ color: "var(--color-text-secondary)" }}>
            We offer a comprehensive suite of technology services designed to help your business grow, innovate, and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block p-7 rounded-2xl border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: "var(--color-border-brand)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110"
                style={{ background: service.bg }}
              >
                {service.icon}
              </div>

              <h3 className="text-lg font-bold mb-3" style={{ color: service.color }}>
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-secondary)" }}>
                {service.description}
              </p>

              <ul className="flex flex-col gap-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group-hover:gap-2.5" style={{ color: service.color }}>
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
