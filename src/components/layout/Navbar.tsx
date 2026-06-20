"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  {
    title: "Web Development",
    href: "/services/web-development",
    description: "Modern, fast, and scalable websites and web applications.",
  },
  {
    title: "Graphic Design",
    href: "/services/graphic-design",
    description: "Brand identity, UI design, and visual communication.",
  },
  {
    title: "Data Analysis",
    href: "/services/data-analysis",
    description: "Turn raw data into actionable business insights.",
  },
  {
    title: "Data Annotation",
    href: "/services/data-annotation",
    description: "High-quality labeled datasets for AI and ML projects.",
  },
];

const navLinks = [
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
  const pathname   = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* Scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close services dropdown when clicking outside */
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

  const isActive = (href: string) => pathname === href;

  const navLinkClass = (href: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      isActive(href)
        ? "font-semibold"
        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">

        {/* ── LOGO ── */}
        <Link
          href="/"
          className="flex items-center gap-3 group flex-shrink-0"
          aria-label="Kadimbotech Solutions — Home"
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm transition-transform duration-200 group-hover:scale-105"
            style={{ background: "var(--color-navy)" }}
            aria-hidden="true"
          >
            KS
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className="font-bold text-base tracking-tight"
              style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
            >
              Kadimbotech
            </span>
            <span
              className="text-xs font-medium tracking-wider uppercase"
              style={{ color: "var(--color-teal)" }}
            >
              Solutions
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <div className="hidden lg:flex items-center gap-1">

          {/* Home */}
          <Link
            href="/"
            className={navLinkClass("/")}
            style={isActive("/") ? { color: "var(--color-teal)" } : {}}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={navLinkClass("/about")}
            style={isActive("/about") ? { color: "var(--color-teal)" } : {}}
          >
            About
          </Link>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown panel */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white rounded-xl shadow-lg border border-gray-100 p-4 grid grid-cols-2 gap-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                    onClick={() => setServicesOpen(false)}
                  >
                    <div
                      className="font-semibold text-sm mb-1 group-hover:text-teal transition-colors"
                      style={{ color: "var(--color-navy)" }}
                    >
                      {service.title}
                    </div>
                    <div className="text-xs text-gray-500 leading-relaxed">
                      {service.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={navLinkClass(link.href)}
              style={isActive(link.href) ? { color: "var(--color-teal)" } : {}}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/contact"
            className="ml-3 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-md"
            style={{ background: "var(--color-teal)" }}
          >
            Get a Quote
          </Link>
        </div>

        {/* ── MOBILE CONTROLS ── */}
        <div className="lg:hidden flex items-center gap-2">
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white"
            style={{ background: "var(--color-teal)" }}
          >
            Quote
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {/*
        We build our own drawer instead of ShadCN Sheet
        to avoid the nested button conflict.
        It slides in from the right using CSS transition.
      */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div
            className="flex items-center justify-between p-5 border-b"
            style={{ borderColor: "var(--color-border-brand)" }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
                style={{ background: "var(--color-navy)" }}
              >
                KS
              </div>
              <span
                className="font-bold text-sm"
                style={{ color: "var(--color-navy)" }}
              >
                Kadimbotech
              </span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer links */}
          <nav className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-50"
              style={isActive("/") ? { color: "var(--color-teal)", fontWeight: 600 } : {}}
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              About
            </Link>

            {/* Mobile services accordion */}
            <div>
              <button
                onClick={() => setMobServicesOpen(!mobServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobServicesOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setMobileOpen(false)}
                      className="px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                style={isActive(link.href) ? { color: "var(--color-teal)", fontWeight: 600 } : {}}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div
              className="mt-4 pt-4 border-t"
              style={{ borderColor: "var(--color-border-brand)" }}
            >
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "var(--color-navy)" }}
              >
                Get a Free Quote
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}