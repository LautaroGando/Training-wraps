import Link from "next/link";
import React from "react";

type Level = "Básico" | "Intensivo" | "Profesional";

const LEVEL_COLORS: Record<Level, { bg: string; text: string; border: string }> = {
  Básico: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  Intensivo: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
  },
  Profesional: {
    bg: "bg-[#94e115]/10",
    text: "text-[#94e115]",
    border: "border-[#94e115]/30",
  },
};

const FEATURE_ICONS: Record<string, string> = {
  "Introducción a materiales": "📐",
  "Herramientas básicas": "🔧",
  "Técnicas de corte": "✂️",
  "Piezas simples": "🚗",
  "Defensas y espejos": "🪞",
  "Técnicas de tensión": "💪",
  "Terminaciones invisibles": "🎯",
  "Certificado oficial": "🏆",
  "Desarme vehicular": "🔩",
  "Envoltorio completo": "🎁",
  "Manejo de tiempos": "⏱️",
  Presupuestación: "💼",
};

const CourseCard = ({
  title,
  date,
  type,
  features,
  featured = false,
}: {
  title: string;
  date: string;
  type: Level;
  features: string[];
  featured?: boolean;
}) => {
  const colors = LEVEL_COLORS[type];

  return (
    <div
      className={`relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 group ${
        featured
          ? "border-[#94e115]/50 bg-gradient-to-b from-[#94e115]/10 to-[#141414] shadow-[0_0_40px_rgba(148,225,21,0.1)]"
          : "border-white/10 bg-[#0f0f0f] hover:border-[#94e115]/30"
      }`}
    >
      {/* Featured ribbon */}
      {featured && (
        <div className="absolute top-4 right-4 bg-[#94e115] text-black text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase z-10">
          Más popular
        </div>
      )}

      {/* Image placeholder */}
      <div className="h-44 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
        <div className="text-center">
          <div className="text-4xl mb-2">🚙</div>
          <span className="text-gray-600 text-xs font-medium tracking-widest uppercase">
            Imagen del curso
          </span>
        </div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60" />
      </div>

      <div className="flex flex-col flex-1 p-6">
        {/* Level badge + date */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {type}
          </span>
          <span className="text-gray-600 text-xs font-medium">{date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#94e115] transition-colors duration-300">
          {title}
        </h3>

        {/* Features */}
        <ul className="space-y-2.5 mb-6 flex-1">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
              <span className="text-base flex-shrink-0">
                {FEATURE_ICONS[feature] || "✓"}
              </span>
              {feature}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="#contacto"
          className={`block w-full text-center py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
            featured
              ? "bg-[#94e115] text-black hover:bg-[#a8f520] hover:shadow-[0_0_20px_rgba(148,225,21,0.4)]"
              : "border border-white/20 text-white hover:border-[#94e115] hover:text-[#94e115] hover:bg-[#94e115]/5"
          }`}
        >
          Más Información
        </Link>
      </div>
    </div>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Workshop Inicial",
      date: "A confirmar",
      type: "Básico" as Level,
      features: [
        "Introducción a materiales",
        "Herramientas básicas",
        "Técnicas de corte",
        "Piezas simples",
      ],
    },
    {
      title: "Masterclass Avanzada",
      date: "A confirmar",
      type: "Intensivo" as Level,
      features: [
        "Defensas y espejos",
        "Técnicas de tensión",
        "Terminaciones invisibles",
        "Certificado oficial",
      ],
      featured: true,
    },
    {
      title: "Car Wrapping Total",
      date: "A confirmar",
      type: "Profesional" as Level,
      features: [
        "Desarme vehicular",
        "Envoltorio completo",
        "Manejo de tiempos",
        "Presupuestación",
      ],
    },
  ];

  return (
    <section id="cursos" className="py-24 bg-black relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(148,225,21,0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(148,225,21,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-[#94e115]" />
              <span className="text-[#94e115] text-sm font-semibold tracking-widest uppercase">
                Formación
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Nuestros{" "}
              <span className="text-gradient">Cursos</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-xs leading-relaxed text-sm md:text-right">
            Desde niveles iniciales hasta perfeccionamiento experto. Elegí el
            formato que mejor se adapte a tus objetivos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 flex flex-col items-center gap-3">
          <p className="text-gray-600 text-sm">
            ¿No sabés cuál elegir?
          </p>
          <a
            href="https://wa.me/YOUR_NUMBER"
            className="inline-flex items-center gap-2 text-[#94e115] font-semibold text-sm hover:text-white transition-colors duration-200 group"
          >
            <span>Consultame por WhatsApp</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
