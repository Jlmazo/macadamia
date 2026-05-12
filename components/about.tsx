import Image from "next/image";
import { Heart, Shield, Sparkles, Truck } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Pasion por la belleza",
    description: "Te asesoramos para que encuentres productos que realmente funcionen.",
  },
  {
    icon: Sparkles,
    title: "Productos premium",
    description: "Seleccionamos marcas reconocidas y referencias de alta calidad.",
  },
  {
    icon: Truck,
    title: "Envios rapidos",
    description: "Atencion agil para que recibas tu pedido en el menor tiempo posible.",
  },
  {
    icon: Shield,
    title: "100% originales",
    description: "Garantizamos autenticidad y confianza en cada producto.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="absolute left-0 top-16 h-56 w-56 rounded-full bg-[#C470A7]/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-64 w-64 rounded-full bg-[#F7E7CE]/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#C470A7]/18 via-[#F7E7CE]/70 to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-[0_24px_70px_rgba(116,60,96,0.16)] ring-1 ring-[#ead6e4]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/foto.jpeg"
                  alt="Macadamia tienda de belleza"
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/28 via-transparent to-white/8" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/85 p-4 shadow-lg backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#9d4c83]">
                    Macadamia
                  </p>
                  <p className="mt-1 text-sm font-semibold text-neutral-700">
                    Belleza, cuidado capilar y productos originales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#C470A7]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#9d4c83]">
              Sobre nosotros
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight text-neutral-950 sm:text-4xl md:text-5xl">
              Sobre <span className="text-[#C470A7]">Macadamia</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
              <p>
                Somos una tienda dedicada a ofrecerte productos de belleza y
                cuidado personal con una seleccion especial de productos
                capilares, maquillaje, cuidado corporal, tintes y accesorios.
              </p>
              <p>
                Nuestro compromiso es brindarte productos 100% originales, buena
                atencion y una experiencia de compra cercana, clara y confiable.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C470A7]/30 hover:shadow-[0_18px_44px_rgba(196,112,167,0.14)]"
                >
                  <div className="grid size-11 place-items-center rounded-2xl bg-[#C470A7]/10 text-[#C470A7] transition-all duration-300 group-hover:bg-[#C470A7] group-hover:text-white">
                    <feature.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-black text-neutral-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
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
