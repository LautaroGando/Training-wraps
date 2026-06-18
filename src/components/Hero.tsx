import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* ── Animated background grid ── */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,225,21,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,225,21,0.15) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(148,225,21,0.08) 0%, transparent 70%)",
          }}
        />
        {/* Corner glows */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(148,225,21,0.2) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(148,225,21,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Decorative diagonal lines ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] opacity-5 border-2 border-[#94e115] rounded-full"
          style={{ transform: "rotate(15deg)" }}
        />
        <div
          className="absolute top-[5%] right-[5%] w-[400px] h-[400px] opacity-5 border border-[#94e115] rounded-full"
          style={{ transform: "rotate(30deg)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-20 container mx-auto px-4 max-w-6xl pt-24">
        <div className="flex flex-col items-center text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#94e115]/30 bg-[#94e115]/10 text-[#94e115] text-sm font-semibold tracking-wider uppercase mb-8 animate-fade-in-up animate-badge-float">
            <span className="w-2 h-2 rounded-full bg-[#94e115] animate-pulse" />
            Pro Expert · Instructor Oficial Alltak
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-tight mb-6 animate-fade-in-up delay-100">
            Llevá tu técnica
            <br />
            al{" "}
            <span className="text-gradient">Siguiente</span>
            <br />
            Nivel
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up delay-200">
            Formate en estética automotriz con el instructor
            más reconocido de la región.{" "}
            <span className="text-white font-medium">
              32 años de experiencia. Resultados reales.
            </span>
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
            <Link
              href="#cursos"
              id="hero-cta-primary"
              className="w-full sm:w-auto px-8 py-4 bg-[#94e115] text-black font-bold text-base rounded-full hover:bg-[#a8f520] transition-all duration-300 hover:shadow-[0_0_30px_rgba(148,225,21,0.5)] hover:-translate-y-1 transform"
            >
              Reservar mi plaza
            </Link>
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-whatsapp"
              className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full hover:border-[#94e115] hover:text-[#94e115] transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-[#94e115]/10"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L0 24l6.335-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.9.938-3.63-.235-.374A9.867 9.867 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
                </svg>
                Consultar por WhatsApp
              </span>
            </a>
          </div>

          {/* Stats strip */}
          <div className="mt-16 md:mt-20 w-full max-w-2xl grid grid-cols-3 gap-4 animate-fade-in-up delay-400">
            {[
              { value: "+100", label: "Cursos" },
              { value: "+500", label: "Alumnos" },
              { value: "3", label: "Países" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-4 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-[#94e115]/40 hover:bg-[#94e115]/5 transition-all duration-300"
              >
                <span className="text-3xl md:text-4xl font-black text-[#94e115]">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-gray-400 font-medium tracking-widest uppercase mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="text-gray-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#94e115]/60 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
