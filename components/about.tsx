"use client";

import Image from "next/image";
import { Heart, Sparkles, Truck, Shield } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Pasión por la Belleza",
      description: "Nos apasiona ayudarte a lucir y sentirte increíble",
    },
    {
      icon: Sparkles,
      title: "Productos Premium",
      description: "Solo trabajamos con las mejores marcas del mercado",
    },
    {
      icon: Truck,
      title: "Envíos Rápidos",
      description: "Entregamos tu pedido en el menor tiempo posible",
    },
    {
      icon: Shield,
      title: "100% Originales",
      description: "Garantizamos la autenticidad de todos nuestros productos",
    },
  ];

  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/Logo_Morado.png"
                alt="Macadamia"
                width={500}
                height={500}
                className="w-full h-full object-contain bg-gradient-to-br from-[#C470A7]/10 to-[#C470A7]/5 p-16 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Sobre <span className="text-[#C470A7]">Macadamia</span>
            </h2>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Somos una tienda dedicada a ofrecerte los mejores productos de
              belleza y cuidado personal. Contamos con una amplia selección de
              productos capilares, maquillaje, cuidado corporal, tintes y
              accesorios de las marcas más reconocidas.
            </p>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Nuestro compromiso es brindarte productos 100% originales a
              precios competitivos, con atención personalizada y envíos rápidos
              a todo el país.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-4 bg-neutral-50 rounded-xl hover:bg-[#C470A7]/10 hover:shadow-md transition-all duration-300 group/card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <feature.icon className="w-8 h-8 text-[#C470A7] mb-2 group-hover/card:scale-110 transition-transform" />
                  <h3 className="font-semibold text-neutral-900 text-sm">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 text-xs mt-1">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
