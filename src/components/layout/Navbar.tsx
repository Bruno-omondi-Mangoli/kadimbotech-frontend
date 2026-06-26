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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => { setMobileOpen(false); setServicesOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") { document.documentElement.classList.add("dark"); setDarkMode(true); }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    if (next) { document.documentElement.classList.add("dark"); localStorage.setItem("theme", "dark"); }
    else { document.documentElement.classList.remove("dark"); localStorage.setItem("theme", "light"); }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : "border-b"}`}
        style={{
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.96)",
          backdropFilter: "blur(16px)",
          borderColor: "rgba(0,0,0,0.06)",
        }}
      >
        <nav className="container flex items-center justify-between h-18 md:h-20" style={{ height: "72px" }}>

          {/* LOGO */}
          <Link href="/" className="flex items-center flex-shrink-0 group" aria-label="Kadimbotech Solutions">
            <img src="/logo.png" alt="Kadimbotech Solutions" width={120} height={48} className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
          </Link>

          {/* DESKTOP NAV — more spacing between links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors duration-200 relative group"
                style={{ color: isActive(link.href) ? "var(--color-teal)" : "var(--color-text-primary)" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200"
                  style={{
                    width: isActive(link.href) ? "100%" : "0%",
                    background: "var(--color-teal)",
                  }}
                />
              </Link>
            ))}

            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                style={{ color: "var(--color-text-primary)" }}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} style={{ color: "var(--color-teal)" }} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[540px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <Link key={service.href} href={service.href} onClick={() => setServicesOpen(false)} className="flex items-start gap-3 p-4 rounded-xl transition-all duration-200 hover:shadow-md group" style={{ background: service.bg }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 bg-white shadow-sm">{service.icon}</div>
                      <div>
                        <div className="font-bold text-sm mb-1" style={{ color: service.accent }}>{service.title}</div>
                        <div className="text-xs leading-relaxed text-gray-500">{service.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold transition-colors duration-200 relative"
                style={{ color: isActive(link.href) ? "var(--color-teal)" : "var(--color-text-primary)" }}
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-200"
                  style={{ width: isActive(link.href) ? "100%" : "0%", background: "var(--color-teal)" }}
                />
              </Link>
            ))}

            {/* Dark mode */}
            <button onClick={toggleDark} className="p-2 rounded-lg transition-colors hover:bg-gray-100" aria-label="Toggle dark mode" style={{ color: "var(--color-text-secondary)" }}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              style={{ background: "var(--color-teal)" }}
            >
              Get a Quote
            </Link>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="lg:hidden flex items-center gap-3">
            <button onClick={toggleDark} className="p-2 rounded-lg hover:bg-gray-100 transition-colors" style={{ color: "var(--color-text-secondary)" }}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-bold text-white whitespace-nowrap" style={{ background: "var(--color-teal)" }}>
              Get Quote
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg transition-colors"
              style={{ color: "var(--color-navy)" }}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE DRAWER — professional dark themed */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(13,27,42,0.75)", backdropFilter: "blur(4px)" }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel — dark navy theme */}
          <div
            className="absolute top-0 right-0 h-full w-[320px] flex flex-col"
            style={{ background: "linear-gradient(160deg, #0D1B2A 0%, #1F4173 100%)", boxShadow: "-8px 0 32px rgba(0,0,0,0.4)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
              <Link href="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
                <img src="/logo.png" alt="Kadimbotech" width={100} height={40} className="h-8 w-auto object-contain brightness-0 invert" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    color: isActive(link.href) ? "#22C7B8" : "rgba(255,255,255,0.85)",
                    background: isActive(link.href) ? "rgba(34,199,184,0.12)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Services accordion */}
              <div>
                <button
                  onClick={() => setMobServicesOpen(!mobServicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-all"
                  style={{ color: "rgba(255,255,255,0.85)", background: mobServicesOpen ? "rgba(255,255,255,0.08)" : "transparent" }}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobServicesOpen ? "rotate-180" : ""}`} style={{ color: "#22C7B8" }} />
                </button>

                {mobServicesOpen && (
                  <div className="mx-2 mt-2 mb-2 rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {services.map((service, i) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 transition-all hover:bg-white/10"
                        style={{ borderTop: i > 0 ? "1px solid rgba(255,255,255,0.07)" : "none" }}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0" style={{ background: service.bg }}>
                          {service.icon}
                        </div>
                        <span className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>{service.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-4 py-3.5 rounded-xl text-sm font-semibold transition-all"
                  style={{
                    color: isActive(link.href) ? "#22C7B8" : "rgba(255,255,255,0.85)",
                    background: isActive(link.href) ? "rgba(34,199,184,0.12)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Bottom CTAs */}
              <div className="mt-6 pt-6 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-4 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: "#22C7B8", color: "#0D1B2A" }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href="https://wa.me/254704708970"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                  style={{ background: "#25D366", color: "white" }}
                >
                  💬 WhatsApp Us
                </a>
              </div>

              {/* Dark mode in mobile */}
              <button
                onClick={toggleDark}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium mt-2 transition-all"
                style={{ color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.05)" }}
              >
                {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              </button>
            </nav>

            {/* Footer */}
            <div className="px-6 py-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="text-xs text-center" style={{ color: "rgba(255,255,255,0.35)" }}>
                Empowering Ideas, Driving Innovation
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
