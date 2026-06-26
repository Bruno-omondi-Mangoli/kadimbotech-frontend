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
          className="text-lg max-w-2xl mx-auto mb-12"
          style={{ color: "rgba(255,255,255,0.82)" }}
        >
          Let&apos;s turn your idea into a world-class digital product. Get a
          free consultation and quote from our team today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
            style={{ background: "#F4C542", color: "#1F4173", minWidth: "180px" }}
          >
            Get a Free Quote
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-10 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:-translate-y-0.5 border-2 whitespace-nowrap"
            style={{ borderColor: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.1)", minWidth: "180px" }}
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
