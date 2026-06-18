import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-[#94e115]">

      {/* SVG texture pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-cta"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="black"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      {/* Diagonal slash accent */}
      <div
        className="absolute -left-12 top-0 h-full w-32 bg-black/10"
        style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }}
      />
      <div
        className="absolute -right-12 top-0 h-full w-32 bg-black/10"
        style={{ clipPath: "polygon(30% 0, 100% 0, 70% 100%, 0 100%)" }}
      />

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">

        {/* Urgency badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/15 rounded-full text-black text-sm font-bold tracking-wider uppercase mb-8 animate-badge-float">
          <span className="animate-pulse">⏳</span>
          Cupos limitados — ¡Asegurá el tuyo!
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black leading-tight mb-6">
          ¿Estás listo para
          <br />
          comenzar?
        </h2>

        <p className="text-black/70 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Los cupos se agotan rápido. Asegurá tu lugar hoy mismo y
          da el salto profesional que estás buscando.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contacto"
            id="cta-reserve"
            className="px-8 py-4 bg-black text-white font-bold text-base rounded-full hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform"
          >
            Reservar mi plaza ahora
          </Link>
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            id="cta-whatsapp"
            className="px-8 py-4 bg-white/30 text-black font-bold text-base rounded-full border-2 border-black/20 hover:bg-white/50 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.859L0 24l6.335-1.524A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.9.938-3.63-.235-.374A9.867 9.867 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z" />
            </svg>
            Tengo una pregunta
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
