import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Music, Phone } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

const footerLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Catalogo" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
  { href: "#ubicacion", label: "Ubicacion" },
];

export function Footer() {
  return (
    <footer className="bg-[#F7E7CE] pb-24 pt-12 text-neutral-900 md:pb-10 md:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 border-b border-[#d9c2a0] pb-10 md:grid-cols-[1.3fr_0.7fr_0.8fr] md:gap-12">
          <div>
            <div className="flex items-center gap-4">
              <Image
                src="/Logo_Morado.png"
                alt="Macadamia"
                width={56}
                height={56}
                className="size-12 rounded-full object-cover"
              />
              <div>
                <p className="text-2xl font-black leading-none text-[#C470A7]">
                  Macadamia
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  Belleza y Cuidado Capilar
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-700">
              Productos originales de belleza y cuidado personal, con asesoria
              cercana y atencion rapida.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-neutral-700">
              <a
                href={`tel:+57${contactInfo.phone}`}
                className="inline-flex w-fit items-center gap-2 transition-colors hover:text-[#C470A7]"
              >
                <Phone className="size-4 text-[#C470A7]" />
                {contactInfo.phoneDisplay}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex max-w-full items-center gap-2 transition-colors hover:text-[#C470A7]"
              >
                <Mail className="size-4 shrink-0 text-[#C470A7]" />
                <span className="truncate">{contactInfo.email}</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#9d4c83]">
              Enlaces
            </h3>
            <ul className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-neutral-700 transition-colors hover:text-[#C470A7]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#9d4c83]">
              Siguenos
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-700">
              Novedades, promociones y productos destacados.
            </p>

            <div className="mt-5 flex gap-3">
              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-[#d9c2a0] bg-white/55 text-neutral-800 transition-all hover:border-[#C470A7] hover:bg-[#C470A7] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href={contactInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-[#d9c2a0] bg-white/55 text-neutral-800 transition-all hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href={contactInfo.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-10 place-items-center rounded-full border border-[#d9c2a0] bg-white/55 text-neutral-800 transition-all hover:border-neutral-950 hover:bg-neutral-950 hover:text-white"
                aria-label="TikTok"
              >
                <Music className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-sm text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Macadamia. Todos los derechos reservados.</p>
          <p className="font-medium text-neutral-500">
            Belleza original y asesoria cercana.
          </p>
        </div>
      </div>
    </footer>
  );
}
