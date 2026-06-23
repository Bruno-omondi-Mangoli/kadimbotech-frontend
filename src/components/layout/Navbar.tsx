"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

const services = [
  { title: "Web Development", href: "/services/web-development", description: "Modern, fast, and scalable websites and web applications.", icon: "🌐", bg: "#EEF4FF", accent: "#1F4173" },
  { title: "Graphic Design",  href: "/services/graphic-design",  description: "Brand identity, UI design, and visual communication.",    icon: "🎨", bg: "#FFF4E6", accent: "#E8820C" },
  { title: "Data Analysis",   href: "/services/data-analysis",   description: "Turn raw data into actionable business insights.",         icon: "📊", bg: "#E6FBF9", accent: "#0B8E82" },
  { title: "Data Annotation", href: "/services/data-annotation", description: "High-quality labeled datasets for AI and ML projects.",    icon: "🤖", bg: "#F3EEFF", accent: "#6B21A8" },
];

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog",      href: "/blog" },
  { label: "Careers",   href: "/careers" },
  { label: "Contact",   href: "/contact" },
];

export default function Navbar() {
  const [scrolled,        setScrolled]        = useState(false);
  const [mobileOpen,      setMobileOpen]      = useState(false);
  const [servicesOpen,    setServicesOpen]    = useState(false);
  const [mobServicesOpen, setMobServicesOpen] = useState(false);
  const [darkMode,        setDarkMode]        = useState(false);
  const pathname    = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdown on outside click */
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Dark mode toggle */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const isActive = (href: string) => pathname === href;

  const linkClass = (href: string) =>
    `px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive(href) ? "font-semibold" : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    }`;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm border-b border-gray-100"}`}>
        <nav className="container flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="Kadimbotech Solutions">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform duration-200 group-hover:scale-105" style={{ background: "var(--color-navy)" }}>KS</div>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base tracking-tight" style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}>Kadimbotech</span>
              <span className="text-xs font-medium tracking-wider uppercase" style={{ color: "var(--color-teal)" }}>Solutions</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-2">

            {navLinks.slice(0, 2).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)} style={isActive(link.href) ? { color: "var(--color-teal)" } : {}}>
                {link.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200" aria-expanded={servicesOpen}>
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} onClick={() => setServicesOpen(false)} className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:shadow-sm" style={{ background: service.bg }}>
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 bg-white shadow-sm">{service.icon}</div>
                      <div>
                        <div className="font-semibold text-sm mb-0.5" style={{ color: service.accent }}>{service.title}</div>
                        <div className="text-xs leading-relaxed text-gray-500">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)} style={isActive(link.href) ? { color: "var(--color-teal)" } : {}}>
                {link.label}
              </Link>
            ))}

            {/* Dark mode toggle */}
            <button onClick={toggleDark} className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors ml-1" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA */}
            <Link href="/contact" className="ml-2 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md" style={{ background: "var(--color-teal)" }}>
              Get a Quote
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleDark} className="p-2 rounded-md text-gray-500 hover:bg-gray-100 transition-colors" aria-label="Toggle dark mode">
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/contact" className="px-4 py-1.5 rounded-lg text-xs font-bold text-white" style={{ background: "var(--color-teal)" }}>Quote</Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md transition-colors" style={{ color: "var(--color-navy)" }} aria-label={mobileOpen ? "Close menu" : "Open menu"}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} aria-hidden="true" />
          <div className="absolute top-0 right-0 h-full w-80 flex flex-col" style={{ background: "#ffffff", boxShadow: "-4px 0 24px rgba(0,0,0,0.15)" }}>
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs" style={{ background: "var(--color-navy)" }}>KS</div>
                <span className="font-bold text-sm" style={{ color: "var(--color-navy)" }}>Kadimbotech</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-1.5 rounded-md hover:bg-gray-100 transition-colors" style={{ color: "var(--color-navy)" }}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-gray-50" style={{ color: isActive(link.href) ? "var(--color-teal)" : "var(--color-text-primary)", fontWeight: isActive(link.href) ? 600 : 500 }}>
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button onClick={() => setMobServicesOpen(!mobServicesOpen)} className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-gray-50" style={{ color: "var(--color-text-primary)" }}>
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobServicesOpen ? "rotate-180" : ""}`} style={{ color: "var(--color-teal)" }} />
                </button>
                {mobServicesOpen && (
                  <div className="ml-2 mt-1 flex flex-col gap-2 pb-2">
                    {services.map((service) => (
                      <Link key={service.href} href={service.href} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors" style={{ background: service.bg }}>
                        <span className="text-lg">{service.icon}</span>
                        <span className="text-sm font-medium" style={{ color: service.accent }}>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="flex items-center px-3 py-3 rounded-xl text-sm font-medium transition-colors hover:bg-gray-50" style={{ color: isActive(link.href) ? "var(--color-teal)" : "var(--color-text-primary)", fontWeight: isActive(link.href) ? 600 : 500 }}>
                  {link.label}
                </Link>
              ))}

              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90" style={{ background: "var(--color-navy)" }}>
                  Get a Free Quote
                </Link>
                <a href="https://wa.me/254704708970" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full py-3.5 rounded-xl text-sm font-bold text-white mt-2 transition-all hover:opacity-90" style={{ background: "#25D366" }}>
                  💬 WhatsApp Us
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
