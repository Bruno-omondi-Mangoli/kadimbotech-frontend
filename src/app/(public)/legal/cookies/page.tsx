import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy", description: "Kadimbotech Solutions Cookie Policy — how we use cookies on our website." };
export default function CookiesPage() {
  return (
    <>
      <section className="section-padding gradient-brand"><div className="container text-center"><h1 className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>Cookie Policy</h1><p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.7)" }}>Last updated: January 2026</p></div></section>
      <section className="section-padding" style={{ background: "var(--color-bg-secondary)" }}>
        <div className="container max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border p-8 md:p-12 flex flex-col gap-8" style={{ borderColor: "var(--color-border-brand)" }}>
            {[
              { title: "What Are Cookies?", content: "Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and improve your experience." },
              { title: "How We Use Cookies", content: "We use cookies to remember your preferences such as dark/light mode, analyze website traffic through Google Analytics to understand how visitors use our site, and improve website performance and user experience." },
              { title: "Types of Cookies We Use", content: "Essential cookies are required for the website to function properly. Analytics cookies help us understand how visitors interact with our website. Preference cookies remember your settings such as theme preference." },
              { title: "Managing Cookies", content: "You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Please note that disabling cookies may affect the functionality of our website." },
              { title: "Third-Party Cookies", content: "We use Google Analytics which sets its own cookies to help us understand website traffic. These are subject to Google's privacy policy." },
              { title: "Contact Us", content: "If you have questions about our use of cookies, please contact us at kadimbotechsolutions@gmail.com." },
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
