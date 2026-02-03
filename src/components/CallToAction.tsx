"use client";

import React from "react";
import ShinyButton from "./ui/ShinyButton";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden flex items-center justify-center">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-primary z-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-linear-to-r from-primary via-[#b0ff29] to-primary animate-gradient bg-size-[200%_200%]"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10 py-12">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-black font-display uppercase tracking-tight leading-none">
            ¿Listo para <br/><span className="text-white drop-shadow-md">transformar tu futuro?</span>
          </h2>
          <p className="text-xl md:text-2xl font-medium mb-12 max-w-3xl mx-auto text-black/80 leading-relaxed">
            Los cupos son limitados y se agotan rápido. Asegurá tu lugar hoy mismo
            y da el salto profesional que buscás.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <ShinyButton href="#contacto" className="!bg-black !text-primary hover:!bg-gray-900 border-none shadow-2xl">
              Reservar mi plaza ahora
            </ShinyButton>
            
            <a
              href="https://wa.me/YOUR_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-transparent text-black font-bold text-lg rounded-none border-2 border-black hover:bg-black hover:text-white transition-all uppercase tracking-wider flex items-center justify-center"
            >
              Tengo una pregunta
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
