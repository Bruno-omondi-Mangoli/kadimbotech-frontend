import Link from "next/link";

const footerServices = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Graphic Design",  href: "/services/graphic-design" },
  { label: "Data Analysis",   href: "/services/data-analysis" },
  { label: "Data Annotation", href: "/services/data-annotation" },
];

const footerCompany = [
  { label: "About Us",  href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog",      href: "/blog" },
  { label: "Careers",   href: "/careers" },
  { label: "Contact",   href: "/contact" },
];

const footerResources = [
  { label: "Resources",        href: "/resources" },
  { label: "Privacy Policy",   href: "/legal/privacy" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Cookie Policy",    href: "/legal/cookies" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--color-bg-dark)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4 w-fit">
              <img
                src="/logo.png"
                alt="Kadimbotech Solutions"
                width={140}
                height={56}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
              Empowering Ideas, Driving Innovation. We build modern digital solutions for businesses across Kenya, Africa, and the world.
            </p>
            <div className="flex items-center gap-3 mb-5">
              <a href="https://www.linkedin.com/company/kadimbotech-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "rgba(255,255,255,0.08)" }}>in</a>
              <a href="https://x.com/bruno_mangoli" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "rgba(255,255,255,0.08)" }}>X</a>
              <a href="https://www.facebook.com/profile.php?id=6157742686264" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "rgba(255,255,255,0.08)" }}>f</a>
              <a href="https://www.instagram.com/brunomangoli?igsh=MWhuNzRkZjZ3eXUxbA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold hover:opacity-80 transition-opacity" style={{ background: "rgba(255,255,255,0.08)" }}>ig</a>
            </div>
            <a href="https://wa.me/254704708970" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity" style={{ background: "#25D366", color: "#fff" }}>
              💬 Chat on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--color-teal)" }}>Services</h3>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--color-teal)" }}>Company</h3>
            <ul className="flex flex-col gap-2.5">
              {footerCompany.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--color-teal)" }}>Resources</h3>
            <ul className="flex flex-col gap-2.5 mb-8">
              {footerResources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors duration-200 hover:text-white" style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--color-teal)" }}>Contact</h3>
            <ul className="flex flex-col gap-2.5">
              <li className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Nairobi, Kenya</li>
              <li><a href="mailto:kadimbotechsolutions@gmail.com" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>kadimbotechsolutions@gmail.com</a></li>
              <li><a href="tel:+254704708970" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.6)" }}>+254 704 708 970</a></li>
            </ul>
          </div>

        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>© {currentYear} Kadimbotech Solutions. All rights reserved.</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Empowering Ideas, Driving Innovation</p>
        </div>
      </div>
    </footer>
  );
}
