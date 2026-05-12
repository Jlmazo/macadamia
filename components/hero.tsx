"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  Layers3,
  MessageCircle,
  PackageCheck,
  Sparkles,
} from "lucide-react";

const stats = [
  { value: "300+", label: "Productos", icon: PackageCheck },
  { value: "50+", label: "Marcas", icon: Gem },
  { value: "5", label: "Categorias", icon: Layers3 },
  { value: "100%", label: "Originales", icon: BadgeCheck },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C470A7]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="animate-fade-in text-center md:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#ead6e4] bg-[#C470A7]/8 px-4 py-2 text-sm font-bold text-[#C470A7] shadow-sm">
              <Sparkles className="size-4" />
              Tu tienda de belleza de confianza
            </div>

            <h1 className="text-4xl font-black leading-[1.08] text-neutral-950 sm:text-5xl lg:text-6xl">
              Tu belleza, <span className="text-[#C470A7]">nuestra pasion</span>
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-neutral-600 sm:text-lg md:mx-0">
              Descubre los mejores productos para el cuidado de tu cabello,
              piel y belleza. Marcas reconocidas a los mejores precios.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
              <Link
                href="#catalogo"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#C470A7] px-8 py-3.5 text-sm font-black text-white shadow-[0_14px_28px_rgba(196,112,167,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B35E96] hover:shadow-[0_20px_38px_rgba(196,112,167,0.36)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C470A7]/25"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Ver Catalogo</span>
                <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="#contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#C470A7] bg-white px-8 py-3.5 text-sm font-black text-[#C470A7] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#C470A7]/8 hover:shadow-[0_16px_30px_rgba(196,112,167,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C470A7]/20"
              >
                <MessageCircle className="size-4 transition-transform duration-300 group-hover:scale-110" />
                Contactanos
              </Link>
            </div>
          </div>

          <div className="animate-fade-in-delayed">
            <div className="relative overflow-hidden rounded-[1.7rem] border border-[#ead6e4] bg-[#F7E7CE] p-2 shadow-[0_28px_70px_rgba(116,60,96,0.16)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_34px_80px_rgba(116,60,96,0.2)]">
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
              <video
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
              >
                <source src="/Video_Macadamia.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#ead6e4] bg-[#fbf7fa] py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-[#ead6e4] bg-white shadow-[0_18px_45px_rgba(116,60,96,0.08)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative flex items-center gap-4 border-b border-[#ead6e4] px-6 py-6 transition-colors duration-300 hover:bg-[#C470A7]/6 lg:border-b-0 ${
                  index > 0 ? "lg:border-l" : ""
                }`}
              >
                <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#C470A7]/10 text-[#C470A7] transition-all duration-300 group-hover:bg-[#C470A7] group-hover:text-white group-hover:shadow-[0_12px_24px_rgba(196,112,167,0.24)]">
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <p className="text-3xl font-black leading-none text-[#C470A7] md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-bold text-neutral-700">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
