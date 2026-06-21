import Link from "next/link";

export default function CTASection() {
  return (
    <section className="section-padding gradient-brand">
      <div className="container text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ready to Build Something Great?
        </h2>
        <p
          className="text-lg max-w-2xl mx-auto mb-10"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Let&apos;s turn your idea into a world-class digital product. Get a
          free consultation and quote from our team today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl text-base font-semibold text-navy bg-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            style={{ color: "var(--color-navy)" }}
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 border border-white/30 hover:bg-white/10"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
