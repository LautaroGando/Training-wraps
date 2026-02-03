"use client";

import React from "react";
import { motion } from "framer-motion";
import ShinyButton from "./ui/ShinyButton";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-tertiary text-secondary overflow-hidden">
      {/* Background Image Placeholder with Parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gray-900 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-tertiary/60 to-tertiary"></div>
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(rgba(163,255,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(163,255,0,0.1)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-display tracking-widest mb-6 uppercase backdrop-blur-sm">
            Certificación Profesional
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 font-display leading-tight uppercase tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Domina el arte <br/>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-white drop-shadow-[0_0_15px_rgba(163,255,0,0.5)]">
            Vehicle Wrapping
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Formación de élite en estética automotriz. Aprende las técnicas más avanzadas con el instructor más reconocido de la región.
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ShinyButton href="#cursos">
            Reservar mi plaza
          </ShinyButton>
          
          <ShinyButton 
            href="https://wa.me/YOUR_NUMBER" 
            variant="outline"
          >
            Consultar por WhatsApp
          </ShinyButton>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
