import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-tertiary text-secondary overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gray-800 z-0">
        <div className="w-full h-full bg-gray-600 opacity-50 flex items-center justify-center">
          <span className="text-gray-400 text-xl font-bold">
            [BACKGROUND IMAGE HERO]
          </span>
        </div>
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 font-primary leading-tight">
          Llevá tu técnica al{" "}
          <span className="text-primary">Siguiente Nivel</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
          Formate en estética automotriz con el instructor más reconocido de la
          región.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="#cursos"
            className="px-8 py-4 bg-primary text-tertiary font-bold text-lg rounded hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Reservar mi plaza
          </Link>
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-primary text-primary font-bold text-lg rounded hover:bg-primary hover:text-tertiary transition-all"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
