import React from "react";

const About = () => {
  return (
    <section id="instructor" className="py-20 bg-quaternary text-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Instructor Image Placeholder */}
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[4/5] bg-gray-500 rounded-lg shadow-xl flex items-center justify-center relative overflow-hidden">
              <span className="text-gray-300 text-xl font-bold">
                [FOTO INSTRUCTOR]
              </span>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sobre el <span className="text-primary">Instructor</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                Con{" "}
                <span className="font-bold text-white">
                  32 años de experiencia
                </span>{" "}
                en impresión de gran formato y
                <span className="font-bold text-white">
                  {" "}
                  8 años dedicados exclusivamente al car wrapping
                </span>
                , he transformado mi pasión en una metodología de enseñanza
                profesional.
              </p>

              <ul className="space-y-3 mt-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Pro Expert e Instructor Oficial de{" "}
                  <span className="font-bold text-white ml-1">Alltak</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Más de{" "}
                  <span className="font-bold text-white ml-1">
                    100 cursos y workshops
                  </span>{" "}
                  dictados
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Experiencia internacional: Europa y Latam
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Sponsors: Prodesign & Joker Wrap Tools
                </li>
              </ul>
            </div>

            {/* Logos Placeholder */}
            <div className="mt-10 flex gap-6 items-center flex-wrap">
              <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center text-xs text-gray-400 font-bold">
                [LOGO ALLTAK]
              </div>
              <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center text-xs text-gray-400 font-bold">
                [LOGO GF]
              </div>
              <div className="h-12 w-24 bg-gray-600 rounded flex items-center justify-center text-xs text-gray-400 font-bold">
                [LOGO ARLON]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
