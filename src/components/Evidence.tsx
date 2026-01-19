import React from "react";

const Evidence = () => {
  return (
    <section className="py-20 bg-white text-tertiary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Resultados <span className="text-primary">Reales</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            No son solo palabras. Te mostramos lo que dicen nuestros alumnos y
            el respaldo de la industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Juan Pérez</h4>
                <p className="text-sm text-gray-500">Alumno BsAs</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;Increíble la paciencia y el nivel de detalle. Aprendí en 2
              días lo que no pude en meses viendo videos. 100%
              recomendado.&quot;
            </p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Lucas M.</h4>
                <p className="text-sm text-gray-500">Alumno Córdoba</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;Excelente experiencia. El instructor sabe muchísimo y no se
              guarda ningún secreto. Ya estoy ploteando mis primeros
              autos.&quot;
            </p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <h4 className="font-bold">Taller Pro</h4>
                <p className="text-sm text-gray-500">Uruguay</p>
              </div>
            </div>
            <p className="text-gray-600 italic">
              &quot;La capacitación in-company nos cambió la forma de trabajar.
              Ahorramos material y tiempo gracias a las técnicas
              aprendidas.&quot;
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-around items-center border-t border-gray-200 pt-12">
          <div className="text-center p-4">
            <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">
              +100
            </span>
            <span className="text-gray-600 font-medium tracking-wide">
              CURSOS DICTADOS
            </span>
          </div>
          <div className="text-center p-4">
            <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">
              +500
            </span>
            <span className="text-gray-600 font-medium tracking-wide">
              ALUMNOS
            </span>
          </div>
          <div className="text-center p-4">
            <span className="block text-4xl md:text-5xl font-bold text-primary mb-2">
              3
            </span>
            <span className="text-gray-600 font-medium tracking-wide">
              PAÍSES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
