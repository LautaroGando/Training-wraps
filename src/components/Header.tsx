"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Instructor", href: "#instructor" },
  { label: "Cursos", href: "#cursos" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-black/90 backdrop-blur-md shadow-[0_4px_30px_rgba(148,225,21,0.08)] border-b border-white/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between max-w-7xl">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2 group"
          >
            <span
              className={`w-2 h-8 rounded-full bg-[#94e115] transition-all duration-300 ${
                scrolled ? "h-6" : "h-8"
              }`}
            />
            <span className="text-white font-bold text-lg md:text-xl tracking-widest uppercase leading-none">
              Training
              <span className="text-[#94e115]"> Wraps</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#94e115] text-sm font-medium tracking-wider uppercase transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#94e115] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#cursos"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#94e115] text-black font-bold text-sm rounded-full hover:bg-[#a8f520] transition-all duration-200 hover:shadow-[0_0_20px_rgba(148,225,21,0.4)] animate-pulse-glow"
            >
              Reservar plaza
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-black/95 backdrop-blur-lg transition-all duration-400 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-white hover:text-[#94e115] text-3xl font-bold tracking-widest uppercase transition-colors duration-200"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cursos"
            onClick={closeMenu}
            className="mt-4 px-8 py-4 bg-[#94e115] text-black font-bold text-lg rounded-full hover:bg-[#a8f520] transition-all duration-200"
          >
            Reservar plaza
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
