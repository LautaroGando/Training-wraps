import React from "react";

const CREDENTIALS = [
  {
    icon: "★",
    text: "Pro Expert e Instructor Oficial de",
    highlight: "Alltak",
  },
  {
    icon: "◆",
    text: "Más de",
    highlight: "100 cursos y workshops",
    suffix: "dictados",
  },
  {
    icon: "✦",
    text: "Experiencia internacional en",
    highlight: "Europa y Latam",
  },
  {
    icon: "◉",
    text: "Sponsors:",
    highlight: "Prodesign & Joker Wrap Tools",
  },
];

const STATS = [
  { value: "32", label: "años de experiencia", suffix: "+" },
  { value: "8", label: "años en car wrapping", suffix: "" },
  { value: "100", label: "cursos dictados", suffix: "+" },
];

const About = () => {
  return (
    <section id="instructor" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full opacity-5 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 0% 50%, rgba(148,225,21,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-8 h-px bg-[#94e115]" />
          <span className="text-[#94e115] text-sm font-semibold tracking-widest uppercase">
            El Instructor
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* ── Left: Photo ── */}
          <div className="w-full lg:w-5/12 flex-shrink-0">
            <div className="relative">
              {/* Glow border */}
              <div className="absolute -inset-1 bg-gradient-to-br from-[#94e115]/40 via-transparent to-transparent rounded-2xl blur-sm" />
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center group">
                {/* Placeholder with style */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 rounded-full bg-[#94e115]/10 border-2 border-[#94e115]/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#94e115] text-3xl">G</span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium tracking-wider">
                    FOTO INSTRUCTOR
                  </span>
                </div>
                {/* Overlay shine */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-4 -right-4 bg-[#94e115] text-black rounded-2xl px-5 py-3 shadow-xl">
                <span className="block text-3xl font-black leading-none">32</span>
                <span className="text-xs font-bold tracking-wider uppercase leading-tight">
                  Años exp.
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="w-full lg:w-7/12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Sobre el{" "}
              <span className="text-gradient">Instructor</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Con{" "}
              <span className="text-white font-semibold">
                32 años de experiencia
              </span>{" "}
              en impresión de gran formato y{" "}
              <span className="text-white font-semibold">
                8 años dedicados exclusivamente al car wrapping
              </span>
              , transformé mi pasión en una metodología de enseñanza profesional
              reconocida a nivel internacional.
            </p>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:border-[#94e115]/30 hover:bg-[#94e115]/5 transition-all duration-300"
                >
                  <span className="block text-2xl md:text-3xl font-black text-[#94e115]">
                    {s.suffix}{s.value}{s.suffix === "+" ? "" : ""}
                    {s.suffix}
                  </span>
                  <span className="text-xs text-gray-500 font-medium leading-tight mt-1 block">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Credentials list */}
            <ul className="space-y-3 mb-10">
              {CREDENTIALS.map((c, i) => (
                <li key={i} className="flex items-start gap-3 group">
                  <span className="text-[#94e115] text-sm mt-0.5 flex-shrink-0 font-bold">
                    {c.icon}
                  </span>
                  <span className="text-gray-400 text-sm leading-relaxed">
                    {c.text}{" "}
                    <span className="text-white font-semibold">{c.highlight}</span>
                    {c.suffix && ` ${c.suffix}`}
                  </span>
                </li>
              ))}
            </ul>

            {/* Sponsor logos */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-gray-600 font-medium tracking-widest uppercase mb-4">
                Sponsors & Certificaciones
              </p>
              <div className="flex gap-4 items-center flex-wrap">
                {["ALLTAK", "PRODESIGN", "JOKER TOOLS"].map((logo) => (
                  <div
                    key={logo}
                    className="h-10 px-5 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:border-[#94e115]/30 hover:bg-[#94e115]/5 transition-all duration-300"
                  >
                    <span className="text-xs text-gray-400 font-bold tracking-widest">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
