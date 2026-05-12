"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

const locationCards = [
  {
    icon: MapPin,
    title: "Ubicacion",
    content: ["Colombia", "Atencion con asesoria personalizada"],
  },
  {
    icon: Clock,
    title: "Horarios",
    content: ["Lunes a Sabado: 8:00 AM - 6:00 PM", "Domingos: Cerrado"],
  },
  {
    icon: Phone,
    title: "Contacto",
    content: [contactInfo.phoneDisplay, contactInfo.email],
  },
];

export function MapSection() {
  return (
    <section id="ubicacion" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#ead6e4] bg-[#C470A7]/6 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#9d4c83]">
            Donde encontrarnos
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 md:text-4xl">
            Ubicacion y contacto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Estamos disponibles para ayudarte con tus compras, resolver dudas y
            recomendarte productos segun tu rutina de belleza.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="grid gap-4">
            {locationCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-neutral-100 bg-white p-5 shadow-[0_14px_34px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#C470A7]/30 hover:shadow-[0_18px_44px_rgba(196,112,167,0.13)]"
                >
                  <div className="flex gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#C470A7]/10 text-[#C470A7] transition-all duration-300 group-hover:bg-[#C470A7] group-hover:text-white">
                      <Icon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-black uppercase tracking-[0.08em] text-neutral-950">
                        {item.title}
                      </h3>
                      <div className="mt-2 space-y-1 text-sm leading-6 text-neutral-600">
                        {item.content.map((line) => (
                          <p key={line} className="break-words">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:+57${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-4 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C470A7] hover:shadow-[0_14px_28px_rgba(196,112,167,0.28)]"
              >
                <Phone className="size-4" />
                Llamar
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C470A7] bg-white px-4 py-3 text-sm font-black text-[#C470A7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C470A7]/8 hover:shadow-[0_14px_28px_rgba(196,112,167,0.12)]"
              >
                <Mail className="size-4" />
                Email
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#ead6e4] bg-white p-2 shadow-[0_24px_70px_rgba(116,60,96,0.12)]">
            <div className="h-[360px] overflow-hidden rounded-[1.35rem] md:h-[430px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8534851987467!2d-74.07220032426355!3d4.609710495333356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7c9c3c3c3%3A0x8c3c3c3c3c3c3c3c!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1699999999999!5m2!1ses!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicacion de Macadamia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
