"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const courses = [
  {
    title: "Wrap Inicial",
    level: "Principiante",
    price: "$250 USD",
    features: [
      "Herramientas básicas y seguridad",
      "Técnicas de limpieza y preparación",
      "Aplicación en superficies planas",
      "Manejo de tensión básico",
      "Certificado de asistencia",
    ],
    highlight: false,
  },
  {
    title: "Wrap Profesional",
    level: "Avanzado",
    price: "$450 USD",
    features: [
      "Curvas complejas y parachoques",
      "Inlays y cortes invisibles",
      "Desmontaje de piezas",
      "Post-heating y memoria del material",
      "Certificación Oficial Alltak",
    ],
    highlight: true,
  },
  {
    title: "PPF Protection",
    level: "Experto",
    price: "$600 USD",
    features: [
      "Diferencias entre PVC y PU",
      "Instalación en húmedo",
      "Protection Paint Film (PPF)",
      "Cortes al aire sin dañar pintura",
      "Bolsa de trabajo internacional",
    ],
    highlight: false,
  },
];

const Courses = () => {
  return (
    <section id="cursos" className="py-24 bg-tertiary text-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-display tracking-widest uppercase text-sm mb-4 block">
            Elige tu camino
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-display mb-4 uppercase">
            Nuestros <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">Programas</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Desde los fundamentos hasta las técnicas más complejas. Diseñados para convertirte en un experto certificado.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl border backdrop-blur-md transition-all duration-300 flex flex-col ${
                course.highlight
                  ? "bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(163,255,0,0.1)]"
                  : "bg-white/5 border-white/10 hover:border-white/30"
              }`}
            >
              {course.highlight && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg">
                  Más Popular
                </div>
              )}
              
              <div className="mb-6">
                <span className={`text-xs font-bold tracking-wider uppercase px-2 py-1 rounded ${course.highlight ? 'bg-primary/20 text-primary' : 'bg-white/10 text-gray-400'}`}>
                  {course.level}
                </span>
                <h3 className="text-2xl font-bold mt-4 mb-2 font-display">{course.title}</h3>
                <div className="text-3xl font-black text-white">{course.price}</div>
              </div>

              <ul className="space-y-4 mb-8 grow">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-300 text-sm">
                    <Check size={18} className="text-primary mr-3 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                course.highlight
                  ? "bg-primary text-black hover:bg-white hover:text-black shadow-lg shadow-primary/20"
                  : "bg-white/10 text-white hover:bg-white hover:text-black"
              }`}>
                Ver programa completo
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
