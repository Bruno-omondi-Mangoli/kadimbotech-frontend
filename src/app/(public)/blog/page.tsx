import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights, tutorials, and news from the Kadimbotech Solutions team on web development, design, data, and technology.",
};

const categories = ["All", "Web Development", "Graphic Design", "Data Analysis", "Data Annotation", "Technology", "Business"];

const featuredPost = {
  title: "Why Every Kenyan Business Needs a Professional Website in 2024",
  excerpt: "In today's digital-first world, your website is your most powerful sales tool. We explore why having a professional, fast, and mobile-friendly website is no longer optional for Kenyan businesses.",
  category: "Web Development",
  date: "January 15, 2026",
  readTime: "5 min read",
  slug: "why-every-kenyan-business-needs-a-website",
};

const posts = [
  {
    title: "How Data Annotation Powers Modern AI Systems",
    excerpt: "Behind every intelligent AI model is a massive amount of carefully labeled data. We break down what data annotation is, how it works, and why it matters.",
    category: "Data Annotation",
    date: "January 10, 2026",
    readTime: "4 min read",
    slug: "how-data-annotation-powers-ai",
  },
  {
    title: "5 Graphic Design Trends Dominating 2026",
    excerpt: "From bold typography to AI-assisted design, we look at the top graphic design trends shaping brand identities across Africa and beyond.",
    category: "Graphic Design",
    date: "January 5, 2026",
    readTime: "3 min read",
    slug: "graphic-design-trends-2026",
  },
  {
    title: "Turning Business Data Into Growth: A Beginner's Guide",
    excerpt: "Most small businesses collect data but never use it. This guide shows you simple, actionable ways to use your business data to make smarter decisions.",
    category: "Data Analysis",
    date: "December 28, 2025",
    readTime: "6 min read",
    slug: "turning-business-data-into-growth",
  },
  {
    title: "Next.js vs WordPress: Which Is Right for Your Business?",
    excerpt: "We compare two of the most popular website platforms to help you decide which one is the right fit for your business goals and budget.",
    category: "Web Development",
    date: "December 20, 2025",
    readTime: "5 min read",
    slug: "nextjs-vs-wordpress",
  },
  {
    title: "Building a Strong Brand Identity from Scratch",
    excerpt: "A great brand is more than a logo. We walk you through the essential elements of a strong brand identity and how to build one that resonates.",
    category: "Graphic Design",
    date: "December 15, 2025",
    readTime: "4 min read",
    slug: "building-strong-brand-identity",
  },
];

const categoryColors: Record<string, string> = {
  "Web Development": "#EEF4FF",
  "Graphic Design":  "#FFF4E6",
  "Data Analysis":   "#E6FBF9",
  "Data Annotation": "#F3EEFF",
  "Technology":      "#FFF0F0",
  "Business":        "#F0FFF4",
};

const categoryTextColors: Record<string, string> = {
  "Web Development": "#1F4173",
  "Graphic Design":  "#E8820C",
  "Data Analysis":   "#0B8E82",
  "Data Annotation": "#6B21A8",
  "Technology":      "#DC2626",
  "Business":        "#16A34A",
};

export default function BlogPage() {
  return (
    <>
      <section className="section-padding gradient-brand">
        <div className="container text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "rgba(255,255,255,0.8)" }}>Our Blog</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Insights & Ideas
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.8)" }}>
            Practical advice, industry insights, and technology news from the Kadimbotech Solutions team.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button key={cat} className="px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  borderColor: cat === "All" ? "var(--color-teal)" : "var(--color-border-brand)",
                  background: cat === "All" ? "var(--color-teal)" : "var(--color-bg-primary)",
                  color: cat === "All" ? "white" : "var(--color-text-secondary)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <div className="rounded-2xl overflow-hidden border bg-white mb-10" style={{ borderColor: "var(--color-border-brand)" }}>
            <div className="h-48 flex items-center justify-center text-6xl" style={{ background: "var(--color-navy)" }}>✍️</div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: categoryColors[featuredPost.category] || "#EEF4FF", color: categoryTextColors[featuredPost.category] || "#1F4173" }}>
                  {featuredPost.category}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" style={{ background: "rgba(244,197,66,0.15)", color: "var(--color-gold)" }}>
                  ⭐ Featured
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--color-navy)" }}>{featuredPost.title}</h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text-secondary)" }}>{featuredPost.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs" style={{ color: "var(--color-text-light)" }}>
                  <span>📅 {featuredPost.date}</span>
                  <span>⏱ {featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`} className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "var(--color-teal)" }}>
                  Read Article →
                </Link>
              </div>
            </div>
          </div>

          {/* Posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" style={{ borderColor: "var(--color-border-brand)" }}>
                <div className="h-36 flex items-center justify-center text-4xl" style={{ background: categoryColors[post.category] || "#EEF4FF" }}>
                  {post.category === "Web Development" && "🌐"}
                  {post.category === "Graphic Design" && "🎨"}
                  {post.category === "Data Analysis" && "📊"}
                  {post.category === "Data Annotation" && "🤖"}
                  {post.category === "Technology" && "💻"}
                  {post.category === "Business" && "📈"}
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: categoryColors[post.category] || "#EEF4FF", color: categoryTextColors[post.category] || "#1F4173" }}>
                    {post.category}
                  </span>
                  <h3 className="text-base font-bold mt-3 mb-2 group-hover:text-teal transition-colors" style={{ color: "var(--color-navy)" }}>{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--color-text-light)" }}>
                    <span>📅 {post.date}</span>
                    <span>⏱ {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: "var(--color-navy)" }}>
            <h3 className="text-2xl font-bold text-white mb-3">Never Miss an Article</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>Subscribe to our newsletter for weekly insights on tech, design, and business growth.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.1)", color: "white", border: "1px solid rgba(255,255,255,0.2)" }} />
              <button className="px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90" style={{ background: "var(--color-teal)" }}>Subscribe</button>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </>
  );
}
