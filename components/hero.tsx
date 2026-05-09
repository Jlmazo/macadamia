"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[#C470A7]/10 text-[#C470A7] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Tu tienda de belleza de confianza
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
              Tu belleza,{" "}
              <span className="text-[#C470A7]">nuestra pasión</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-lg">
              Descubre los mejores productos para el cuidado de tu cabello,
              piel y belleza. Marcas reconocidas a los mejores precios.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="#catalogo"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#C470A7] text-white font-semibold rounded-full hover:bg-[#B35E96] transition-all duration-300 shadow-lg shadow-[#C470A7]/30 hover:shadow-xl hover:scale-105"
              >
                Ver Catálogo
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#C470A7] text-[#C470A7] font-semibold rounded-full hover:bg-[#C470A7]/10 transition-all duration-300 hover:scale-105"
              >
                Contáctanos
              </Link>
            </div>
          </div>

          {/* Video */}
          <div className="relative animate-fade-in-delayed">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#C470A7]/20 hover:border-[#C470A7]/40 transition-all duration-300">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Video_Macadamia.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C470A7]/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C470A7]/10 rounded-full blur-2xl animate-pulse" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#C470A7]/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-[#C470A7] group-hover:scale-110 transition-transform duration-300">300+</p>
              <p className="text-neutral-600 mt-1">Productos</p>
            </div>
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-[#C470A7] group-hover:scale-110 transition-transform duration-300">50+</p>
              <p className="text-neutral-600 mt-1">Marcas</p>
            </div>
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-[#C470A7] group-hover:scale-110 transition-transform duration-300">5</p>
              <p className="text-neutral-600 mt-1">Categorías</p>
            </div>
            <div className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-[#C470A7] group-hover:scale-110 transition-transform duration-300">100%</p>
              <p className="text-neutral-600 mt-1">Originales</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
