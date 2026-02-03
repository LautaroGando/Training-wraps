"use client";

import React from "react";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <footer
      id="contacto"
      className="bg-black text-white py-20 border-t border-gray-900 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="text-3xl font-black font-display tracking-tighter mb-6 text-white">
              WRAP<span className="text-primary">INSTITUTE</span>
            </div>
            <p className="text-gray-500 mb-8 max-w-md font-light leading-relaxed">
              Formación profesional en estética automotriz de alto nivel.
              Elevamos el estándar de la industria, un alumno a la vez.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons */}
              {[
                { icon: Instagram, label: "IG" },
                { icon: Facebook, label: "FB" },
                { icon: Mail, label: "Mail" }
              ].map((social, i) => (
                <div key={i} className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all cursor-pointer group">
                  <social.icon size={20} className="text-gray-400 group-hover:text-black transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-8 font-display uppercase tracking-wider">
              Contacto Directo
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start text-gray-400 group">
                <div className="w-10 h-10 mr-4 bg-white/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Teléfono</p>
                   <a href="tel:+123456789" className="text-white hover:text-primary transition-colors font-medium">
                    +54 9 11 1234-5678
                  </a>
                </div>
              </li>
              <li className="flex items-start text-gray-400 group">
                <div className="w-10 h-10 mr-4 bg-white/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Email</p>
                   <a href="mailto:info@wrapinstitute.com" className="text-white hover:text-primary transition-colors font-medium">
                    info@wrapinstitute.com
                  </a>
                </div>
              </li>
              <li className="flex items-start text-gray-400 group">
                <div className="w-10 h-10 mr-4 bg-white/5 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Ubicación</p>
                   <span className="text-white font-medium">Argentina - Disponible para viajar</span>
                </div>
              </li>
            </ul>
            <div className="mt-12 pt-8 border-t border-gray-900">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Wrap Institute. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
