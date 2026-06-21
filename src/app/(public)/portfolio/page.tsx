import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore Kadimbotech Solutions portfolio of web development, graphic design, data analysis, and data annotation projects delivered across Kenya and globally.",
};

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with M-Pesa integration, inventory management, and real-time order tracking for a Nairobi retail brand.",
    tags: ["Next.js", "PostgreSQL", "M-Pesa"],
    color: "var(--color-navy)",
  },
  {
    title: "Safari Tours Brand Identity",
    category: "Graphic Design",
    description: "Complete brand identity including logo, color palette, typography system, and marketing collateral for a Kenya-based safari company.",
    tags: ["Logo Design", "Brand Identity", "Print"],
    color: "var(--color-teal)",
  },
  {
    title: "Agricultural Data Dashboard",
    category: "Data Analysis",
    description: "Interactive Power BI dashboard analyzing crop yield, weather patterns, and market prices for a farming cooperative across 5 counties.",
    tags: ["Power BI", "Python", "SQL"],
    color: "var(--color-blue)",
  },
  {
    title: "NLP Training Dataset",
    category: "Data Annotation",
    description: "10,000+ annotated Swahili and English customer service conversations for a conversational AI model trained on East African dialects.",
    tags: ["Text Labeling", "Swahili", "NLP"],
    color: "var(--color-gold)",
  },
  {
    title: "Hospital Management System",
    category: "Web Development",
    description: "Patient records, appointment booking, billing, and pharmacy management system for a private clinic in Nairobi.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "var(--color-navy)",
  },
  {
    title: "FinTech Startup Pitch Deck",
    category: "Graphic Design",
    description: "Investor pitch deck design for a Kenyan fintech startup that successfully raised seed funding of $500K.",
    tags: ["Presentation", "UI Design", "Branding"],
    color: "var(--color-teal)",
  },
];

const categories = ["All", "Web Development", "Graphic Design", "Data Analysis", "Data Annotation"];

export default function PortfolioPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            A selection of projects we have delivered for clients across Kenya, Africa, and the world.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: cat === "All" ? "var(--color-teal)" : "var(--color-border-brand)",
                  background: cat === "All" ? "var(--color-teal)" : "white",
                  color: cat === "All" ? "white" : "var(--color-text-secondary)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                style={{ borderColor: "var(--color-border-brand)" }}
              >
                {/* Color banner */}
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ background: project.color }}
                >
                  <span className="text-4xl">
                    {project.category === "Web Development" && "🌐"}
                    {project.category === "Graphic Design" && "🎨"}
                    {project.category === "Data Analysis" && "📊"}
                    {project.category === "Data Annotation" && "🤖"}
                  </span>
                </div>

                <div className="p-6">
                  <span
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-teal)" }}
                  >
                    {project.category}
                  </span>
                  <h3
                    className="text-lg font-bold mt-1 mb-2"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
