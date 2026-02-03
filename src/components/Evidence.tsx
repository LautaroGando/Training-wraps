"use client";

import React from "react";
import Counter from "./ui/Counter";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Evidence = () => {
  return (
    <section className="py-24 bg-tertiary text-secondary relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display tracking-widest uppercase text-sm mb-4 block">Tesimonios y Datos</span>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-6 uppercase">
            Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Reales</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            No son solo palabras. Te mostramos lo que dicen nuestros alumnos y el respaldo de la industria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 cursor-default">
          {/* Testimonials */}
          {[
            {
              name: "Juan Pérez",
              role: "Alumno BsAs",
              text: "Increíble la paciencia y el nivel de detalle. Aprendí en 2 días lo que no pude en meses viendo videos. 100% recomendado.",
              avatar: "JP"
            },
            {
              name: "Lucas M.",
              role: "Alumno Córdoba",
              text: "Excelente experiencia. El instructor sabe muchísimo y no se guarda ningún secreto. Ya estoy ploteando mis primeros autos.",
              avatar: "LM"
            },
            {
              name: "Taller Pro",
              role: "Uruguay",
              text: "La capacitación in-company nos cambió la forma de trabajar. Ahorramos material y tiempo gracias a las técnicas aprendidas.",
              avatar: "TP"
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm relative group hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 text-primary/20 group-hover:text-primary/40 transition-colors" size={40} />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full mr-4 flex items-center justify-center font-bold text-white border border-gray-600 shadow-lg">
                  {item.avatar}
                </div>
                <div>
                  <h4 className="font-bold font-display tracking-wide">{item.name}</h4>
                  <p className="text-xs text-primary uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
              <div className="flex mb-4 text-primary text-xs">
                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 italic font-light leading-relaxed">
                &quot;{item.text}&quot;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div 
          className="flex flex-wrap justify-around items-center border-t border-white/10 pt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-tertiary px-4 text-gray-500 text-sm font-display tracking-widest uppercase">
            Nuestros Números
          </div>

          <div className="text-center p-6 w-full md:w-auto">
            <Counter
              end={100}
              duration={3000}
              prefix="+"
              className="block text-5xl md:text-7xl font-black text-white mb-2 font-display drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Cursos Dictados</span>
          </div>
          
          <div className="h-16 w-px bg-white/10 hidden md:block"></div>

          <div className="text-center p-6 w-full md:w-auto">
            <Counter
              end={500}
              duration={3000}
              prefix="+"
              className="block text-5xl md:text-7xl font-black text-white mb-2 font-display drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Alumnos</span>
          </div>
          
          <div className="h-16 w-px bg-white/10 hidden md:block"></div>

          <div className="text-center p-6 w-full md:w-auto">
            <Counter
              end={3}
              duration={3000}
              className="block text-5xl md:text-7xl font-black text-white mb-2 font-display drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            />
            <span className="text-primary font-bold tracking-widest text-sm uppercase">Países</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Evidence;
