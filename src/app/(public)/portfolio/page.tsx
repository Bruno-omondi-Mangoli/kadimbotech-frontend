import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Real projects delivered by Kadimbotech Solutions — web development, graphic design, and digital branding for clients across Kenya and internationally.",
};

const webProjects = [
  {
    title: "Holly's Hairstyles",
    client: "Holly Martinez",
    country: "🇺🇸 United States",
    description: "A full-featured hair salon website with service listings, gallery, booking system, blog, client reviews, and special offers. Built to showcase Holly's professional styling services and attract new clients.",
    tags: ["Website", "Booking System", "Blog", "Gallery"],
    url: "https://holyshairstyle.netlify.app/",
    color: "#FF6B9D",
    emoji: "💇‍♀️",
  },
  {
    title: "Candie's Candles",
    client: "Candie",
    country: "🇺🇸 United States",
    description: "A beautiful e-commerce website for a handmade candle artisan. Features product listings, shopping cart, checkout, and a compelling brand story that reflects the artisan's commitment to sustainable, handcrafted products.",
    tags: ["E-Commerce", "Product Listings", "Checkout", "Brand Story"],
    url: "https://candiescandles.netlify.app/",
    color: "#F4A261",
    emoji: "🕯️",
  },
  {
    title: "Bob's Blog",
    client: "Bob",
    country: "🇺🇸 United States",
    description: "A modern blog platform with a full admin panel allowing Bob to publish, edit, and manage weekly blog posts without any coding. Features categories, tags, and a clean reading experience.",
    tags: ["Blog", "Admin Panel", "CMS", "Content Management"],
    url: "https://bobsblogposts.netlify.app/",
    color: "#2A9D8F",
    emoji: "✍️",
  },
  {
    title: "JoseTech Farm & Consultancy",
    client: "Joseph Oyuga",
    country: "🇰🇪 Busia, Kenya",
    description: "A professional agricultural business website for a farm and consultancy service dealing in livestock, vegetables, horticulture, farm structures, and agribusiness planning. Designed to attract and inform potential farm clients.",
    tags: ["Agriculture", "Business Website", "Services", "Kenya"],
    url: "https://josetch.netlify.app/",
    color: "#4CAF50",
    emoji: "🌾",
  },
  {
    title: "Namenge Builders Ltd",
    client: "Caleb",
    country: "🇰🇪 Busia County, Kenya",
    description: "A corporate website for a construction company delivering residential and commercial projects across Busia County and beyond. Features company overview, services, project gallery, and contact information.",
    tags: ["Construction", "Corporate Website", "Services", "Kenya"],
    url: "https://namengebuilderltd.netlify.app/",
    color: "#795548",
    emoji: "🏗️",
  },
];

const designProjects = [
  {
    title: "Remedy Construction & Interiors Ltd",
    description: "Professional logo design featuring a bold architectural house icon with navy and gold colors — conveying strength, precision, and premium quality in construction.",
    tags: ["Logo Design", "Brand Identity", "Construction"],
    image: "/portfolio/tom.jpeg",
    country: "🇰🇪 Kenya",
  },
  {
    title: "Wakurugenzi Loaded",
    description: "Modern brand identity with a distinctive V-shaped diamond logo in deep navy blue — bold, memorable, and authoritative.",
    tags: ["Logo Design", "Brand Identity"],
    image: "/portfolio/wakurugenzi.jpeg",
    country: "🇰🇪 Kenya",
  },
  {
    title: "BrixFarm",
    description: "Fresh and vibrant logo for an agri-tech company with the tagline 'Smart farming. Pure growth.' — combining blue and green to represent trust and nature.",
    tags: ["Logo Design", "AgriTech", "Brand Identity"],
    image: "/portfolio/brixfarm.jpeg",
    country: "🇰🇪 Kenya",
  },
  {
    title: "TechVerve",
    description: "Dynamic tech brand logo with a green leaf-inspired icon and the tagline 'Simplifying The Future' — clean, modern, and forward-looking.",
    tags: ["Logo Design", "Tech Brand", "Brand Identity"],
    image: "/portfolio/techverve.jpeg",
    country: "🇰🇪 Kenya",
  },
  {
    title: "Beniacom Construction & Interiors",
    description: "Elegant monogram-based logo with interlocked BC letters and a gold accent — professional and sophisticated for a premium construction brand.",
    tags: ["Logo Design", "Monogram", "Construction"],
    image: "/portfolio/beniacom.jpeg",
    country: "🇰🇪 Kenya",
  },
  {
    title: "Infinity Fast Food",
    description: "Vibrant and appetizing logo with an infinity loop incorporating a fork and spoon — energetic brand identity for a fast food restaurant.",
    tags: ["Logo Design", "Restaurant", "Brand Identity"],
    image: "/portfolio/infinity.jpeg",
    country: "🇰🇪 Kenya",
  },
  {
    title: "Juddy Ogaro — MCA Campaign",
    description: "Professional political campaign poster designed for MCA Rigoma Ward candidate — bold, clear, and visually impactful for grassroots campaigning.",
    tags: ["Campaign Poster", "Political Design", "Print"],
    image: "/portfolio/juddy.png",
    country: "🇰🇪 Kenya",
  },
  {
    title: "Kitayama Maisori — MP Campaign",
    description: "Eye-catching MP campaign poster for Kuria East constituency — strong typography and layout designed to command attention during the 2027 campaign.",
    tags: ["Campaign Poster", "Political Design", "Print"],
    image: "/portfolio/kitayama.jpeg",
    country: "🇰🇪 Kenya",
  },
];

const categories = ["All", "Web Development", "Graphic Design"];

export default function PortfolioPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Our Work</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>Portfolio</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Real projects. Real clients. Real results. Here is a selection of work we have delivered across Kenya and internationally.
          </p>
        </div>
      </section>

      {/* Web Development Projects */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>Live Websites</p>
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Web Development Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {webProjects.map((project) => (
              <div key={project.title} className="rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="h-40 flex items-center justify-center text-5xl" style={{ background: project.color + "22", borderBottom: `3px solid ${project.color}` }}>
                  {project.emoji}
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-base font-bold" style={{ color: "var(--color-navy)" }}>{project.title}</h3>
                    <span className="text-xs flex-shrink-0" style={{ color: "var(--color-text-light)" }}>{project.country}</span>
                  </div>
                  <p className="text-xs font-medium mb-3" style={{ color: "var(--color-teal)" }}>Client: {project.client}</p>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full" style={{ background: "var(--color-bg-secondary)", color: "var(--color-text-secondary)" }}>{tag}</span>
                    ))}
                  </div>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all hover:gap-2.5" style={{ color: "var(--color-teal)" }}>
                    View Live Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Projects */}
      <section className="section-padding" style={{ background: "var(--color-bg-primary)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>Brand Identities & Design</p>
            <h2 className="text-3xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>Graphic Design Projects</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {designProjects.map((project) => (
              <div key={project.title} className="rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="h-44 overflow-hidden" style={{ background: "#f7f9fc" }}>
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain p-2" />
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h3 className="text-sm font-bold leading-tight" style={{ color: "var(--color-navy)" }}>{project.title}</h3>
                  </div>
                  <p className="text-xs mb-1" style={{ color: "var(--color-text-light)" }}>{project.country}</p>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--color-text-secondary)" }}>{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(34,199,184,0.1)", color: "var(--color-teal)" }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: "var(--color-navy)" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5", label: "Live Websites", sub: "Deployed internationally" },
              { value: "9+", label: "Design Projects", sub: "Logos, posters & brands" },
              { value: "2", label: "Countries", sub: "Kenya & USA" },
              { value: "100%", label: "Client Satisfaction", sub: "Every project delivered" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 rounded-2xl border" style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}>
                <div className="text-3xl font-bold mb-1" style={{ color: "var(--color-teal)" }}>{stat.value}</div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
