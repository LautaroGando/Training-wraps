import React from "react";

const TESTIMONIALS = [
  {
    name: "Juan Pérez",
    location: "Buenos Aires",
    initials: "JP",
    color: "from-blue-500 to-blue-700",
    text: "Increíble la paciencia y el nivel de detalle. Aprendí en 2 días lo que no pude en meses viendo videos. 100% recomendado.",
    stars: 5,
  },
  {
    name: "Lucas M.",
    location: "Córdoba",
    initials: "LM",
    color: "from-purple-500 to-purple-700",
    text: "Excelente experiencia. El instructor sabe muchísimo y no se guarda ningún secreto. Ya estoy ploteando mis primeros autos.",
    stars: 5,
  },
  {
    name: "Taller Pro",
    location: "Uruguay",
    initials: "TP",
    color: "from-[#94e115] to-[#5a9a0a]",
    text: "La capacitación in-company nos cambió la forma de trabajar. Ahorramos material y tiempo gracias a las técnicas aprendidas.",
    stars: 5,
  },
];

const STATS = [
  { value: "+100", label: "Cursos Dictados" },
  { value: "+500", label: "Alumnos Formados" },
  { value: "3", label: "Países" },
  { value: "32", label: "Años de Exp." },
];

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5 mb-4">
    {Array.from({ length: count }).map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 text-[#94e115]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Evidence = () => {
  return (
    <section className="py-24 bg-[#080808] text-white relative overflow-hidden">

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(148,225,21,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#94e115]" />
            <span className="text-[#94e115] text-sm font-semibold tracking-widest uppercase">
              Testimonios
            </span>
            <span className="w-8 h-px bg-[#94e115]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Resultados{" "}
            <span className="text-gradient">Reales</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mt-4 leading-relaxed">
            No son solo palabras. Te mostramos lo que dicen nuestros alumnos y
            el respaldo de la industria.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#94e115]/30 hover:bg-[#94e115]/5 transition-all duration-300 group"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 text-6xl text-[#94e115]/10 font-serif leading-none select-none">
                "
              </span>

              <StarRating count={t.stars} />

              <p className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats strip */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#94e115]/5 to-transparent rounded-2xl" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="bg-[#0a0a0a] px-6 py-8 text-center hover:bg-[#94e115]/5 transition-colors duration-300"
              >
                <span className="block text-4xl md:text-5xl font-black text-[#94e115] mb-2">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-xs font-semibold tracking-widest uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
