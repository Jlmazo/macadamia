"use client";

import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

const contactCards = [
  {
    icon: Phone,
    title: "Telefono",
    value: contactInfo.phoneDisplay,
    href: `tel:+57${contactInfo.phone}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    value: "Colombia",
    href: "#ubicacion",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Sab: 8am - 6pm",
  },
];

export function Contact() {
  const handleWhatsApp = () => {
    window.open(
      contactInfo.whatsappUrl("Hola! Quisiera mas informacion sobre sus productos."),
      "_blank"
    );
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-[#C470A7] py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/90">
            Atencion personalizada
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-white md:text-4xl">
            Contactanos
          </h2>
          <p className="mt-4 text-base leading-7 text-white/82">
            Estamos aqui para ayudarte a elegir productos originales para tu
            rutina de belleza y cuidado personal.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((item) => {
            const CardTag = item.href ? "a" : "div";
            const Icon = item.icon;

            return (
              <CardTag
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-white/18 bg-white/[0.09] p-6 text-center shadow-[0_18px_44px_rgba(116,60,96,0.14)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/34 hover:bg-white/[0.14]"
              >
                <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-white/12 text-white ring-1 ring-white/18 transition-all duration-300 group-hover:bg-white group-hover:text-[#C470A7]">
                  <Icon className="size-6" />
                </div>
                <h3 className="mt-5 text-sm font-black uppercase tracking-[0.08em] text-white">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-[14rem] text-sm font-semibold leading-6 text-white/82 break-words">
                  {item.value}
                </p>
              </CardTag>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={handleWhatsApp}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#20C45A] px-8 py-4 text-base font-black text-white shadow-[0_18px_38px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#18B451] hover:shadow-[0_22px_45px_rgba(0,0,0,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/25"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/24 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <MessageCircle className="relative size-6 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative">Escribenos por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
}
