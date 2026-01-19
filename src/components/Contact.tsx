import React from "react";

const Contact = () => {
  return (
    <footer
      id="contacto"
      className="bg-quaternary text-white py-16 border-t border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="h-12 w-48 bg-gray-600 rounded mb-6 flex items-center justify-center text-sm font-bold text-gray-400">
              [LOGO WRAP INSTITUTE]
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Formación profesional en estética automotriz de alto nivel.
              Elevamos el estándar de la industria, un alumno a la vez.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                IG
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                WA
              </div>
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-colors cursor-pointer">
                FB
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">
              Contacto Directo
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 mr-3 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                  📞
                </span>
                <a
                  href="tel:+123456789"
                  className="hover:text-primary transition-colors"
                >
                  +54 9 11 1234-5678
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 mr-3 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                  ✉️
                </span>
                <a
                  href="mailto:info@wrapinstitute.com"
                  className="hover:text-primary transition-colors"
                >
                  info@wrapinstitute.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-6 h-6 mr-3 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                  📍
                </span>
                <span>Argentina - Disponible para viajar</span>
              </li>
            </ul>
            <div className="mt-8">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Wrap Institute. Todos los derechos
                reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
