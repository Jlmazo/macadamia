import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/Logo_Morado.png"
                alt="Macadamia"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-xl font-bold text-[#C470A7]">
                Macadamia
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm">
              Tu tienda de confianza para productos de belleza y cuidado
              personal. Productos 100% originales de las mejores marcas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#inicio"
                  className="text-neutral-400 hover:text-[#C470A7] transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#catalogo"
                  className="text-neutral-400 hover:text-[#C470A7] transition-colors"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link
                  href="#nosotros"
                  className="text-neutral-400 hover:text-[#C470A7] transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-neutral-400 hover:text-[#C470A7] transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="#ubicacion"
                  className="text-neutral-400 hover:text-[#C470A7] transition-colors"
                >
                  Ubicación
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#E1306C] hover:to-[#F77737] transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#1877F2] transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500 text-sm flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Macadamia. Hecho con{" "}
            <Heart className="w-4 h-4 text-[#C470A7] inline" /> en Colombia.
          </p>
        </div>
      </div>
    </footer>
  );
}
