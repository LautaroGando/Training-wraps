"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

const Gallery = () => {
  return (
    <section className="py-24 bg-quaternary text-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-end mb-16 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="text-primary font-display tracking-widest uppercase text-sm mb-2 block">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase leading-none">
              Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Trabajos</span>
            </h2>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0 max-w-sm text-right font-light">
            Detalles que marcan la diferencia. Terminaciones perfectas en cada proyecto.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Gallery Items with varying sizes for masonry feel */}
          <motion.div 
            className="col-span-2 row-span-2 bg-gray-800 rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all duration-500 cursor-pointer group relative overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
            <span className="text-white z-20 font-bold font-display text-2xl tracking-wider group-hover:scale-110 transition-transform duration-500">
              TRABAJO DESTACADO
            </span>
            <div className="absolute bottom-6 left-6 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
               <span className="text-primary text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                 Ver Proyecto <ArrowRight size={16} />
               </span>
            </div>
            {/* Image Placeholder Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621689233069-42b46ce57422?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105"></div>
          </motion.div>

          {[1, 2, 3, 4].map((item, index) => (
             <motion.div 
               key={index}
               className="bg-gray-800 rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden relative group"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
             >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                <span className="text-gray-500 font-bold text-xs z-0">[FOTO {item}]</span>
                <div className="absolute inset-0 bg-gray-700/50 group-hover:scale-110 transition-transform duration-700"></div>
             </motion.div>
          ))}

          <motion.div 
            className="col-span-2 bg-gray-800 rounded-2xl flex items-center justify-center border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden relative group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
             <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
             <span className="text-white font-bold font-display tracking-widest z-20 text-xl">[ANTES / DESPUÉS]</span>
             <div className="absolute inset-0 bg-gray-700/50 group-hover:scale-105 transition-transform duration-700"></div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center text-secondary font-bold hover:text-primary transition-colors group border border-white/10 px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-sm"
          >
            <Instagram className="mr-3" size={20} />
            <span className="tracking-wide">Síguenos en Instagram</span>
            <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
