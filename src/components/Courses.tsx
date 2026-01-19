import Link from "next/link";
import React from "react";

const CourseCard = ({
  title,
  date,
  type,
  features,
}: {
  title: string;
  date: string;
  type: string;
  features: string[];
}) => (
  <div className="bg-quaternary rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-primary transition-all duration-300 transform hover:-translate-y-1">
    <div className="h-48 bg-gray-600 w-full flex items-center justify-center">
      <span className="text-gray-400 font-bold text-lg">[IMG CURSO]</span>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <span className="bg-primary text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase">
          {type}
        </span>
        <span className="text-gray-400 text-sm font-semibold">{date}</span>
      </div>
      <h3 className="text-2xl font-bold text-secondary mb-4">{title}</h3>
      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="text-gray-300 text-sm flex items-center">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href="#contacto"
        className="block w-full text-center bg-transparent border border-primary text-primary py-3 rounded font-bold hover:bg-primary hover:text-tertiary transition-colors"
      >
        Más Información
      </Link>
    </div>
  </div>
);

const Courses = () => {
  const courses = [
    {
      title: "Workshop Inicial",
      date: "Próxima Fecha: A confirmar",
      type: "Presencial",
      features: [
        "Introducción a materiales",
        "Herramientas básicas",
        "Técnicas de corte",
        "Piezas simples",
      ],
    },
    {
      title: "Masterclass Avanzada",
      date: "Próxima Fecha: A confirmar",
      type: "Intensivo",
      features: [
        "Defensas y espejos",
        "Técnicas de tensión",
        "Terminaciones invisibles",
        "Certificado oficial",
      ],
    },
    {
      title: "Car Wrapping Total",
      date: "Próxima Fecha: A confirmar",
      type: "Profesional",
      features: [
        "Desarme vehicular",
        "Envoltorio completo",
        "Manejo de tiempos",
        "Presupuestación",
      ],
    },
  ];

  return (
    <section id="cursos" className="py-20 bg-tertiary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">
            Nuestros <span className="text-primary">Cursos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Desde niveles iniciales hasta perfeccionamiento experto. Elegí el
            formato que mejor se adapte a tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">
            ¿Tenés dudas sobre cuál elegir?
          </p>
          <a
            href="https://wa.me/YOUR_NUMBER"
            className="text-primary border-b border-primary pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            Hablemos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
