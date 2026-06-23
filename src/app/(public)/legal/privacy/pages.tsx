// PRIVACY POLICY — save as: src/app/(public)/legal/privacy/page.tsx
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy", description: "Kadimbotech Solutions Privacy Policy — how we collect, use, and protect your personal information." };
export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="section-padding gradient-brand"><div className="container text-center"><h1 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Privacy Policy</h1><p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.7)" }}>Last updated: January 2026</p></div></section>
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border p-8 md:p-12 flex flex-col gap-8" style={{ borderColor: "var(--color-border-brand)" }}>
            {[
              { title: "1. Information We Collect", content: "We collect information you provide directly to us when you fill in our contact form, subscribe to our newsletter, or communicate with us. This includes your name, email address, phone number, and message content. We also automatically collect certain technical information when you visit our website, including your IP address, browser type, and pages visited." },
              { title: "2. How We Use Your Information", content: "We use the information we collect to respond to your inquiries and provide our services, send you updates and newsletters if you have subscribed, improve our website and services, comply with legal obligations, and protect against fraud and abuse." },
              { title: "3. Information Sharing", content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and providing our services, subject to confidentiality agreements. We may also disclose information when required by law." },
              { title: "4. Data Security", content: "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure." },
              { title: "5. Cookies", content: "Our website uses cookies to enhance your browsing experience. You can control cookie settings through your browser. For more details, please see our Cookie Policy." },
              { title: "6. Your Rights", content: "You have the right to access, correct, or delete your personal information. You may also withdraw consent for marketing communications at any time by contacting us at kadimbotechsolutions@gmail.com." },
              { title: "7. Contact Us", content: "If you have any questions about this Privacy Policy, please contact us at kadimbotechsolutions@gmail.com or call +254 704 708 970." },
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
