import React from "react";

const Gallery = () => {
  return (
    <section className="py-20 bg-quaternary text-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Galería de <span className="text-primary">Trabajos</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Gallery Items with varying sizes for masonry feel */}
          <div className="col-span-2 row-span-2 bg-gray-600 rounded-lg flex items-center justify-center border border-gray-700 hover:border-primary transition-colors cursor-pointer group relative overflow-hidden">
            <span className="text-gray-400 group-hover:scale-110 transition-transform duration-500 font-bold">
              [TRABAJO DESTACADO]
            </span>
            <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div className="bg-gray-600 rounded-lg flex items-center justify-center border border-gray-700 hover:border-primary transition-colors overflow-hidden">
            <span className="text-gray-400 font-bold text-xs">[FOTO 1]</span>
          </div>
          <div className="bg-gray-600 rounded-lg flex items-center justify-center border border-gray-700 hover:border-primary transition-colors overflow-hidden">
            <span className="text-gray-400 font-bold text-xs">[FOTO 2]</span>
          </div>
          <div className="bg-gray-600 rounded-lg flex items-center justify-center border border-gray-700 hover:border-primary transition-colors overflow-hidden">
            <span className="text-gray-400 font-bold text-xs">[FOTO 3]</span>
          </div>
          <div className="bg-gray-600 rounded-lg flex items-center justify-center border border-gray-700 hover:border-primary transition-colors overflow-hidden">
            <span className="text-gray-400 font-bold text-xs">[FOTO 4]</span>
          </div>
          <div className="col-span-2 bg-gray-600 rounded-lg flex items-center justify-center border border-gray-700 hover:border-primary transition-colors overflow-hidden">
            <span className="text-gray-400 font-bold">[ANTES / DESPUÉS]</span>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            target="_blank"
            className="inline-flex items-center text-primary font-bold hover:underline"
          >
            <span className="mr-2">Ver más en Instagram</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
