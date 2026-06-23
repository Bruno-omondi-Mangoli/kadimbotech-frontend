import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service", description: "Kadimbotech Solutions Terms of Service — the terms governing your use of our website and services." };
export default function TermsPage() {
  return (
    <>
      <section className="section-padding gradient-brand"><div className="container text-center"><h1 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Terms of Service</h1><p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.7)" }}>Last updated: January 2026</p></div></section>
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border p-8 md:p-12 flex flex-col gap-8" style={{ borderColor: "var(--color-border-brand)" }}>
            {[
              { title: "1. Acceptance of Terms", content: "By accessing and using the Kadimbotech Solutions website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services." },
              { title: "2. Services", content: "Kadimbotech Solutions provides web development, graphic design, data analysis, and data annotation services. The scope, timeline, and pricing of specific services are agreed upon in separate project agreements or proposals." },
              { title: "3. Intellectual Property", content: "Upon full payment for completed work, all intellectual property rights for custom deliverables are transferred to the client. Kadimbotech Solutions retains the right to display completed work in its portfolio unless otherwise agreed in writing." },
              { title: "4. Payment Terms", content: "Payment terms are specified in individual project agreements. Generally, we require a deposit before commencing work. Final deliverables are released upon receipt of full payment." },
              { title: "5. Limitation of Liability", content: "Kadimbotech Solutions shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question." },
              { title: "6. Confidentiality", content: "We treat all client information as confidential and will not disclose your business information, data, or project details to third parties without your consent." },
              { title: "7. Governing Law", content: "These Terms of Service are governed by the laws of Kenya. Any disputes shall be resolved through the courts of Kenya." },
              { title: "8. Contact", content: "For questions about these terms, contact us at kadimbotechsolutions@gmail.com." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="text-lg font-bold mb-3" style={{ color: "var(--color-navy)" }}>{section.title}</h2>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
