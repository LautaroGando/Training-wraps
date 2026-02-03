"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <section id="nosotros" className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 group">
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              <div className="w-full h-full bg-gray-800 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1605218427306-633ba810c66c?q=80&w=1888&auto=format&fit=crop')] bg-cover bg-center">
                 {/* Fallback or real image here */}
                 
                 {/* Placeholder for visual fidelity if image fails load */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-700 opacity-20 text-6xl font-black">
                     IMG
                 </div>
              </div>

              {/* Founder Tag */}
              <motion.div 
                className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md p-4 rounded-xl border-l-4 border-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-xl font-bold text-white font-display uppercase">Javier "El Maestro"</h4>
                <p className="text-primary text-sm uppercase tracking-wider font-bold">Head Instructor</p>
              </motion.div>
            </div>
            {/* Decorative dots */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[radial-gradient(circle,rgba(163,255,0,0.2)_1px,transparent_1px)] bg-[size:20px_20px] -z-10"></div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-gradient-to-t from-primary/5 to-transparent -z-10 rounded-full blur-3xl"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Trayectoria y Experiencia</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight font-display">
              Aprende de los <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Mejores del Sector
              </span>
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light mb-10">
              <p>
                Con <span className="font-bold text-white border-b-2 border-primary/50">32 años de experiencia</span> en impresión de gran formato y
                <span className="font-bold text-white border-b-2 border-primary/50"> 8 años dedicados exclusivamente al car wrapping</span>, he transformado mi pasión en una metodología de enseñanza única.
              </p>
              <p>
                No solo te enseño a pegar vinilo, te enseño a <strong>entender el material</strong>, a leer las superficies y a resolver problemas reales de instalación.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Pro Expert e Instructor Oficial de Alltak",
                "Más de 100 cursos y workshops dictados",
                "Experiencia internacional: Europa y Latam",
                "Sponsors: Prodesign & Joker Wrap Tools"
              ].map((item, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-start bg-white/5 p-4 rounded-xl border border-white/5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <CheckCircle2 className="text-primary mr-3 shrink-0 mt-1" size={20} />
                  <span className="text-white font-medium">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
