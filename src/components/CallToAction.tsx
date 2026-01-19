import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-24 bg-primary text-tertiary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pattern-dots" />{" "}
      {/* Optional background pattern */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
          ¿Estás listo para comenzar?
        </h2>
        <p className="text-xl md:text-2xl font-medium mb-10 max-w-3xl mx-auto text-black/80">
          Los cupos son limitados y se agotan rápido. Asegurá tu lugar hoy mismo
          y da el salto profesional que buscás.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contacto"
            className="px-8 py-4 bg-black text-white font-bold text-lg rounded hover:bg-gray-900 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Reservar mi plaza ahora
          </Link>
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-black font-bold text-lg rounded border-2 border-black hover:bg-gray-50 transition-all"
          >
            Tengo una pregunta
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
