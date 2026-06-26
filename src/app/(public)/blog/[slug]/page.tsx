import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/sections/CTASection";

const articles: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string[];
}> = {
  "why-every-kenyan-business-needs-a-website": {
    title: "Why Every Kenyan Business Needs a Professional Website in 2026",
    category: "Web Development",
    date: "January 15, 2026",
    readTime: "5 min read",
    author: "Bruno Omondi Mang'oli",
    authorRole: "CEO & Founder, Kadimbotech Solutions",
    excerpt: "In today's digital-first world, your website is your most powerful sales tool. We explore why having a professional, fast, and mobile-friendly website is no longer optional for Kenyan businesses.",
    content: [
      "Kenya's digital economy is growing faster than ever. With over 22 million internet users and smartphone penetration rising every year, the question is no longer 'do I need a website?' — it is 'why don't I have one yet?'",
      "## Your Website Works While You Sleep",
      "A professional website is your 24/7 salesperson. Whether a potential client in Nairobi is searching for your services at 2AM, or a buyer in London is researching Kenyan suppliers on a Sunday afternoon, your website is always there to represent your business — answering questions, showcasing your work, and capturing leads.",
      "Without a website, you are invisible to this audience. And in 2026, invisible means out of business.",
      "## The Trust Factor",
      "When a potential client hears about your business, the first thing they do is Google you. If they find nothing, or worse, a poorly designed page that looks like it was built in 2005, they immediately question your credibility.",
      "A clean, professional website signals that your business is legitimate, established, and worth trusting. It is the digital equivalent of a smart office in a good location. First impressions matter — and online, you have about 3 seconds to make a good one.",
      "## Mobile-First Kenya",
      "Over 85% of internet users in Kenya access the web via mobile phone. This means your website must look and work perfectly on a small screen. A site that is hard to navigate on a phone is not just inconvenient — it actively drives customers away.",
      "At Kadimbotech Solutions, every website we build is mobile-first by design. We test on real devices, optimize for slow connections, and ensure your site loads quickly even on 3G networks.",
      "## SEO: Getting Found on Google",
      "Having a website is not enough — you need to be found. Search Engine Optimization (SEO) ensures that when someone searches for your services on Google, your business appears in the results.",
      "We build every website with technical SEO built in: fast loading speeds, structured data, sitemaps, meta descriptions, and mobile optimization. This gives you the best possible chance of ranking above your competitors.",
      "## What a Professional Website Costs in Kenya",
      "Many business owners assume a professional website is unaffordable. In reality, a well-built website from Kadimbotech Solutions pays for itself many times over through the leads, clients, and revenue it generates.",
      "We offer packages starting from affordable rates for small businesses, all the way to full enterprise solutions. Every website we build is custom — designed specifically for your business, your audience, and your goals.",
      "## Ready to Get Started?",
      "If you are a Kenyan business without a professional website, or you have one that is outdated and not performing, we would love to help. Contact us today for a free consultation and quote.",
    ],
  },
  "how-data-annotation-powers-ai": {
    title: "How Data Annotation Powers Modern AI Systems",
    category: "Data Annotation",
    date: "January 10, 2026",
    readTime: "4 min read",
    author: "Hellen Atsunga",
    authorRole: "Data Analyst & Annotation Specialist",
    excerpt: "Behind every intelligent AI model is a massive amount of carefully labeled data. We break down what data annotation is, how it works, and why it matters.",
    content: [
      "Every time you unlock your phone with your face, get a product recommendation on an e-commerce site, or interact with an AI assistant, you are experiencing the result of data annotation. But what exactly is data annotation, and why is it so critical to modern AI?",
      "## What Is Data Annotation?",
      "Data annotation is the process of labeling raw data — images, text, audio, or video — so that AI and machine learning models can learn from it. Think of it as teaching a child: you show them a picture of a cat and say 'that is a cat.' Over millions of examples, the child learns to recognize cats on their own.",
      "AI models work the same way. They need massive amounts of labeled examples to learn patterns, make predictions, and perform tasks. Without high-quality annotated data, even the most sophisticated AI model is useless.",
      "## Types of Data Annotation",
      "**Image Annotation** involves drawing bounding boxes around objects, creating segmentation masks, or marking keypoints on images. This is used in self-driving cars, medical imaging, and security systems.",
      "**Text Annotation** involves labeling entities in text (names, locations, dates), classifying sentiment, or identifying intent. This powers chatbots, search engines, and content moderation systems.",
      "**Video Annotation** involves tracking objects across frames. Used in surveillance, sports analytics, and autonomous vehicles.",
      "**Audio Annotation** involves transcribing speech and labeling sounds. Powers voice assistants, call center AI, and accessibility tools.",
      "## Why Quality Matters",
      "Garbage in, garbage out. If your training data is poorly labeled, your AI model will make poor predictions — no matter how sophisticated the algorithm. A self-driving car trained on incorrectly annotated stop signs could be catastrophic.",
      "At Kadimbotech Solutions, we use a multi-stage quality assurance process. Every annotation is reviewed by senior specialists, and we measure inter-annotator agreement to ensure consistency. We consistently deliver above 95% accuracy across all annotation types.",
      "## The African Advantage: Swahili and Local Context",
      "One of our unique strengths is our deep understanding of East African languages and cultural context. Many global annotation companies struggle with Swahili text, local dialects, and African imagery. Our team of native Swahili speakers and culturally-aware annotators provides a level of quality that offshore teams simply cannot match.",
      "## Working With Kadimbotech for Your Annotation Needs",
      "Whether you need 1,000 or 1,000,000 labeled images, we have the capacity, the tools, and the expertise to deliver. Contact us to discuss your project requirements and get a custom quote.",
    ],
  },
  "graphic-design-trends-2026": {
    title: "5 Graphic Design Trends Dominating 2026",
    category: "Graphic Design",
    date: "January 5, 2026",
    readTime: "3 min read",
    author: "Emmanuel Mang'oli",
    authorRole: "Lead Graphic Designer",
    excerpt: "From bold typography to AI-assisted design, we look at the top graphic design trends shaping brand identities across Africa and beyond.",
    content: [
      "The design world never stands still. Each year brings new aesthetics, new tools, and new ways of communicating visually. In 2026, several powerful trends are reshaping how brands look and feel — and smart businesses are taking note.",
      "## 1. Bold, Expressive Typography",
      "Typography is no longer just about readability — it is becoming the hero of the design. We are seeing massive, full-screen type, custom lettering, and experimental font combinations that make an immediate visual impact.",
      "For African brands, this is a particularly exciting trend. Bold typography combined with vibrant colors creates designs that feel both globally sophisticated and locally authentic.",
      "## 2. Earthy, Natural Color Palettes",
      "The stark white-and-black minimalism of the 2010s is giving way to warmer, earthier tones. Terracotta, deep greens, warm ochres, and rich browns are showing up everywhere — reflecting a global shift toward sustainability and connection with nature.",
      "This trend resonates strongly with African brands, where earthy tones have deep cultural significance and visual appeal.",
      "## 3. Motion and Animated Logos",
      "Static logos are becoming dynamic. With digital-first branding, companies are creating animated versions of their logos for social media, websites, and presentations. A logo that moves is more memorable and more shareable.",
      "At Kadimbotech Solutions, we now offer animated logo packages alongside our standard brand identity work.",
      "## 4. Authentic Photography Over Stock",
      "Audiences can spot stock photography instantly — and they do not trust it. The trend in 2026 is toward real, authentic photography that shows real people, real places, and real moments.",
      "For Kenyan and African businesses, this is a major opportunity. Authentic local imagery builds immediate trust with local audiences and differentiates you from generic-looking competitors.",
      "## 5. AI-Assisted Design",
      "AI tools like Midjourney, Adobe Firefly, and Canva AI are changing how designers work. Rather than replacing designers, these tools are making skilled designers dramatically more productive — allowing more iterations, faster concepts, and more creative experimentation.",
      "Our design team at Kadimbotech Solutions uses AI tools to accelerate the creative process while ensuring every final design reflects the client's unique brand and vision.",
      "## Stay Ahead With Professional Design",
      "Your brand's visual identity is one of your most valuable business assets. If your logo or brand materials feel outdated, it is time for a refresh. Contact Kadimbotech Solutions for a brand identity consultation.",
    ],
  },
  "turning-business-data-into-growth": {
    title: "Turning Business Data Into Growth: A Beginner's Guide",
    category: "Data Analysis",
    date: "December 28, 2025",
    readTime: "6 min read",
    author: "Hellen Atsunga",
    authorRole: "Data Analyst & Annotation Specialist",
    excerpt: "Most small businesses collect data but never use it. This guide shows you simple, actionable ways to use your business data to make smarter decisions.",
    content: [
      "Every business generates data. Your M-Pesa transactions, your WhatsApp inquiries, your website visitors, your inventory records — all of this is valuable information waiting to be used. Yet most small and medium businesses in Kenya never look beyond the surface of their numbers.",
      "## What Business Data Can Tell You",
      "Raw data on its own is just numbers. The magic happens when you ask the right questions. Here are some of the most valuable questions your data can answer:",
      "Which products or services generate the most profit? (Not just revenue — profit.) Which days or months are your busiest? Where are your customers coming from? Which marketing channels are actually bringing in paying clients? What is your customer retention rate?",
      "## Start Simple: The 3 Numbers Every Business Owner Should Track",
      "You do not need to be a data scientist to start using your data. Start with just three numbers:",
      "**Revenue per customer**: How much does each client spend on average? This tells you who your most valuable customers are and helps you focus your energy on acquiring more of them.",
      "**Customer acquisition cost**: How much does it cost you to get one new customer? If you are spending more to acquire a customer than they will ever spend with you, your business model needs adjustment.",
      "**Monthly growth rate**: Are you growing, shrinking, or stagnant? A simple month-over-month comparison tells you whether your efforts are working.",
      "## Tools You Can Start Using Today",
      "You do not need expensive software to start analyzing your business data. Google Sheets is free and powerful enough for most small businesses. Google Analytics is free and shows you everything happening on your website. Power BI has a generous free tier and creates beautiful dashboards.",
      "## When to Bring in a Professional",
      "As your business grows, so does the complexity of your data. When you have multiple data sources, need predictive forecasting, or want to identify non-obvious patterns in your customer behavior, it is time to bring in a data analyst.",
      "At Kadimbotech Solutions, our data analysis team works with businesses of all sizes — from small retailers to large enterprises. We clean your data, build your dashboards, and most importantly, help you understand what the numbers actually mean for your business decisions.",
      "## The Competitive Advantage of Data",
      "In Kenya's increasingly competitive market, businesses that make decisions based on data consistently outperform those that rely on intuition alone. Data-driven businesses grow faster, waste less money, and respond more effectively to market changes.",
      "The good news: most of your competitors are not using their data well yet. That is your opportunity.",
    ],
  },
  "nextjs-vs-wordpress": {
    title: "Next.js vs WordPress: Which Is Right for Your Business?",
    category: "Web Development",
    date: "December 20, 2025",
    readTime: "5 min read",
    author: "Bruno Omondi Mang'oli",
    authorRole: "CEO & Founder, Kadimbotech Solutions",
    excerpt: "We compare two of the most popular website platforms to help you decide which one is the right fit for your business goals and budget.",
    content: [
      "One of the most common questions we get from clients is: 'Should I use WordPress or something more modern like Next.js?' The answer depends entirely on your business needs, budget, and long-term goals.",
      "## What Is WordPress?",
      "WordPress powers about 43% of all websites on the internet. It is a content management system (CMS) that makes it easy for non-technical users to create and manage websites. With thousands of themes and plugins, you can build almost any type of site without writing code.",
      "WordPress is best suited for: blogs and news sites, simple business websites, e-commerce stores using WooCommerce, and businesses that need to update content frequently without developer help.",
      "## What Is Next.js?",
      "Next.js is a modern JavaScript framework built on React. It is used by some of the world's largest companies — Netflix, TikTok, Airbnb, and thousands more. Unlike WordPress, Next.js requires a developer to build and configure, but the results are significantly more powerful.",
      "Next.js is best suited for: high-performance web applications, businesses that need custom features, sites that need to handle large amounts of traffic, and companies where speed and SEO are critical priorities.",
      "## Performance: Next.js Wins",
      "Next.js sites are significantly faster than WordPress sites. A typical WordPress site scores 40-60 on Google's PageSpeed Insights. A well-built Next.js site consistently scores 90-100. In an era where Google uses page speed as a ranking factor and users abandon slow sites in seconds, this matters enormously.",
      "## Ease of Use: WordPress Wins",
      "If you want to update your own website without knowing how to code, WordPress is the better choice. Its admin dashboard is intuitive, and millions of tutorials exist for every feature. Next.js requires developer involvement for most changes.",
      "## Security: Next.js Wins",
      "WordPress is the most hacked platform on the internet — primarily because its popularity makes it a target, and many users fail to keep plugins updated. Next.js sites have a much smaller attack surface and are inherently more secure.",
      "## Our Recommendation",
      "For most Kenyan small businesses, we recommend a hybrid approach: Next.js for the frontend (what your visitors see) connected to a headless CMS like Payload CMS for content management. This gives you the performance and security of Next.js with the ease of use of a traditional CMS.",
      "This is exactly what we built for our own website — and what we build for our clients who want the best of both worlds.",
    ],
  },
  "building-strong-brand-identity": {
    title: "Building a Strong Brand Identity from Scratch",
    category: "Graphic Design",
    date: "December 15, 2025",
    readTime: "4 min read",
    author: "Emmanuel Mang'oli",
    authorRole: "Lead Graphic Designer",
    excerpt: "A great brand is more than a logo. We walk you through the essential elements of a strong brand identity and how to build one that resonates.",
    content: [
      "Many business owners think branding means designing a logo. In reality, a logo is just the visible tip of a much larger iceberg. Your brand is the total experience people have with your business — visual, emotional, and experiential. Let us break down what truly makes a strong brand.",
      "## 1. Brand Strategy: Know Who You Are",
      "Before any designer opens Adobe Illustrator, you need to answer some fundamental questions: Who is your target customer? What problem do you solve for them? What is your unique value — why should they choose you over competitors? What words do you want people to use when describing your business?",
      "This strategic foundation shapes every visual decision that follows. Without it, you might end up with a beautiful logo that communicates entirely the wrong message.",
      "## 2. Logo: Your Visual Anchor",
      "Your logo is the most recognizable element of your brand. A great logo is simple enough to be memorable, distinctive enough to stand out, versatile enough to work across all sizes and backgrounds, and timeless enough to last years without looking dated.",
      "Avoid the temptation to pack too much into your logo. The world's most iconic logos — Nike, Apple, Mercedes — are simple. Simplicity is not laziness; it is confidence.",
      "## 3. Color Palette: The Emotional Language of Your Brand",
      "Colors communicate emotions before words do. Blue suggests trust and professionalism. Green suggests growth and health. Gold suggests premium quality and success. Red suggests energy and urgency.",
      "Choose a primary color that reflects your brand's core personality, a secondary color for contrast and variety, and an accent color for highlights and calls to action. Stick to these consistently across everything you produce.",
      "## 4. Typography: Your Brand's Voice in Text",
      "The fonts you use say as much about your brand as your colors. A law firm and a children's toy company should never use the same font. Choose a heading font that reflects your brand's personality, and a body font that is clean and highly readable.",
      "## 5. Consistency: The Secret Ingredient",
      "The difference between a brand that feels professional and one that feels amateur is almost always consistency. Use the same colors, fonts, and visual style across your website, social media, business cards, and marketing materials.",
      "Inconsistency creates confusion and undermines trust. Consistency builds recognition and credibility over time.",
      "## Building Your Brand With Kadimbotech Solutions",
      "At Kadimbotech Solutions, we offer complete brand identity packages: logo design, color palette, typography system, and brand guidelines — everything you need to present a consistent, professional image to the world. Get in touch for a free brand consultation.",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function renderContent(content: string[]) {
  return content.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("**") && block.includes("**:")) {
      const parts = block.split("**:");
      const term = parts[0].replace("**", "");
      const definition = parts[1];
      return (
        <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>
          <strong style={{ color: "var(--color-navy)" }}>{term}:</strong>{definition}
        </p>
      );
    }
    return (
      <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "var(--color-text-secondary)" }}>
        {block}
      </p>
    );
  });
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Web Development": { bg: "#EEF4FF", text: "#1F4173" },
  "Graphic Design":  { bg: "#FFF4E6", text: "#E8820C" },
  "Data Analysis":   { bg: "#E6FBF9", text: "#0B8E82" },
  "Data Annotation": { bg: "#F3EEFF", text: "#6B21A8" },
};

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) notFound();

  const colors = categoryColors[article.category] || { bg: "#EEF4FF", text: "#1F4173" };

  const relatedSlugs = Object.entries(articles)
    .filter(([s, a]) => s !== slug && a.category === article.category)
    .slice(0, 2)
    .map(([s, a]) => ({ slug: s, ...a }));

  return (
    <>
      {/* Hero */}
      <section className="section-padding gradient-brand">
        <div className="container max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6" style={{ background: "rgba(255,255,255,0.15)", color: "white" }}>
            {article.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {article.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            <span>By {article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main article */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border p-8 md:p-12" style={{ borderColor: "var(--color-border-brand)" }}>
                {/* Excerpt */}
                <p className="text-lg font-medium leading-relaxed mb-8 pb-8 italic" style={{ color: "var(--color-text-primary)", borderBottom: "2px solid var(--color-border-brand)" }}>
                  {article.excerpt}
                </p>

                {/* Content */}
                <div>{renderContent(article.content)}</div>

                {/* Author box */}
                <div className="mt-12 pt-8 flex items-center gap-5" style={{ borderTop: "2px solid var(--color-border-brand)" }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-bold flex-shrink-0" style={{ background: "var(--color-navy)" }}>
                    {article.author.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-base" style={{ color: "var(--color-navy)" }}>{article.author}</div>
                    <div className="text-sm" style={{ color: "var(--color-text-light)" }}>{article.authorRole}</div>
                  </div>
                </div>
              </div>

              {/* Back to blog */}
              <div className="mt-6">
                <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80" style={{ color: "var(--color-teal)" }}>
                  ← Back to Blog
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Category badge */}
              <div className="bg-white rounded-2xl border p-6" style={{ borderColor: "var(--color-border-brand)" }}>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--color-navy)" }}>Category</h3>
                <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold" style={{ background: colors.bg, color: colors.text }}>
                  {article.category}
                </span>
              </div>

              {/* CTA */}
              <div className="rounded-2xl p-6 text-white" style={{ background: "var(--color-navy)" }}>
                <h3 className="text-lg font-bold mb-3">Need Our Help?</h3>
                <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                  Ready to work with us? Get a free consultation today.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90" style={{ background: "var(--color-teal)", color: "#0D1B2A" }}>
                  Get a Free Quote
                </Link>
              </div>

              {/* Related articles */}
              {relatedSlugs.length > 0 && (
                <div className="bg-white rounded-2xl border p-6" style={{ borderColor: "var(--color-border-brand)" }}>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "var(--color-navy)" }}>Related Articles</h3>
                  <div className="flex flex-col gap-4">
                    {relatedSlugs.map((related) => (
                      <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                        <h4 className="text-sm font-semibold leading-snug mb-1 group-hover:text-teal transition-colors" style={{ color: "var(--color-navy)" }}>
                          {related.title}
                        </h4>
                        <span className="text-xs" style={{ color: "var(--color-text-light)" }}>{related.readTime}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp */}
              <a href="https://wa.me/254704708970" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-4 rounded-2xl text-white font-semibold text-sm transition-all hover:opacity-90" style={{ background: "#25D366" }}>
                💬 Chat With Us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
