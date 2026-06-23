import CTASection from "@/components/sections/CTASection";

async function getTestimonials() {
  try {
    const cmsUrl = process.env.NEXT_PUBLIC_CMS_URL;
    if (!cmsUrl) return null;
    const res = await fetch(
      `${cmsUrl}/api/testimonials?where[approved][equals]=true&limit=6`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.docs;
  } catch {
    return null;
  }
}

const fallbackTestimonials = [
  {
    clientName: "Lilian Dela",
    role: "Founder",
    company: "Dela Sparkle",
    country: "Kenya",
    quote: "I reached out to Kadimbotech Solutions to design business cards for my company, which specializes in detergents and liquid soap. The team did an amazing job capturing the essence of my brand. The business cards are not only visually appealing but also perfectly aligned with my company's image. I am very satisfied with the service, the attention to detail, and the timely delivery.",
    service: "Graphic Design",
  },
  {
    clientName: "Thomas Nyamache",
    role: "Director",
    company: "Remedy Construction & Interiors Ltd",
    country: "Kenya",
    quote: "I had the pleasure of working with Kadimbotech Solutions for the design of my company logo, and the experience exceeded my expectations. The team was professional, attentive to my ideas, and very creative in bringing my vision to life. They provided several design options, listened to my feedback, and refined the final product until it was exactly what I wanted.",
    service: "Graphic Design",
  },
];

export default async function TestimonialsSection() {
  const cmsTestimonials = await getTestimonials();
  const testimonials = cmsTestimonials?.length ? cmsTestimonials : fallbackTestimonials;

  return (
    <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-teal)" }}>Client Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold heading-accent heading-accent-center" style={{ color: "var(--color-navy)" }}>
            What Our Clients Say
          </h2>
          <p className="text-base max-w-2xl mx-auto mt-6" style={{ color: "var(--color-text-secondary)" }}>
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t: any, i: number) => (
            <div key={i} className="p-8 rounded-2xl border bg-white flex flex-col" style={{ borderColor: "var(--color-border-brand)" }}>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <span key={j} style={{ color: "var(--color-gold)" }}>★</span>
                ))}
              </div>
              <p className="text-sm leading-relaxed flex-1 mb-6 italic" style={{ color: "var(--color-text-secondary)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: "var(--color-navy)" }}>
                  {t.clientName?.split(" ").map((n: string) => n[0]).join("").slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: "var(--color-navy)" }}>{t.clientName}</div>
                  <div className="text-xs" style={{ color: "var(--color-text-light)" }}>{t.role}, {t.company}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--color-teal)" }}>{t.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}