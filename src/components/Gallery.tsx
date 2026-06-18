import React from "react";

const GALLERY_ITEMS = [
  {
    label: "Trabajo Destacado",
    span: "col-span-2 row-span-2",
    size: "large",
  },
  { label: "Vinilo Mate", span: "", size: "small" },
  { label: "Chrome Wrap", span: "", size: "small" },
  { label: "Color Shift", span: "", size: "small" },
  { label: "Full Wrap", span: "", size: "small" },
  { label: "Antes / Después", span: "col-span-2", size: "medium" },
];

const GalleryItem = ({
  label,
  span,
  size,
}: {
  label: string;
  span: string;
  size: string;
}) => (
  <div
    className={`${span} relative rounded-xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#94e115]/50 transition-all duration-300`}
    style={{ minHeight: size === "large" ? "300px" : "140px" }}
  >
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />

    {/* Placeholder icon */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center transition-all duration-300 group-hover:scale-105">
        <div className="text-4xl mb-2 opacity-40">🚗</div>
        <span className="text-gray-600 text-xs font-medium tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <div className="text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <div className="w-12 h-12 rounded-full border-2 border-[#94e115] flex items-center justify-center mx-auto mb-2">
          <svg
            className="w-5 h-5 text-[#94e115]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
        <span className="text-white text-xs font-semibold tracking-wider uppercase">
          {label}
        </span>
      </div>
    </div>

    {/* Corner accent */}
    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#94e115]/30 rounded-tl-xl" />
    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#94e115]/30 rounded-br-xl" />
  </div>
);

const Gallery = () => {
  return (
    <section
      id="galeria"
      className="py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 100%, rgba(148,225,21,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-[#94e115]" />
            <span className="text-[#94e115] text-sm font-semibold tracking-widest uppercase">
              Portfolio
            </span>
            <span className="w-8 h-px bg-[#94e115]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Galería de{" "}
            <span className="text-gradient">Trabajos</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
            Una muestra de los trabajos realizados por nuestros alumnos y el
            instructor a lo largo de los años.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px]">
          {GALLERY_ITEMS.map((item, idx) => (
            <GalleryItem key={idx} {...item} />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 text-gray-300 hover:border-[#94e115] hover:text-[#94e115] transition-all duration-300 text-sm font-semibold group"
          >
            {/* Instagram SVG icon */}
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span>Ver más en Instagram</span>
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

export default Gallery;
