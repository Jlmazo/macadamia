"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/Logo_Morado.png"
              alt="Macadamia"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <span className="text-xl md:text-2xl font-bold text-[#C470A7]">
                Macadamia
              </span>
              <span className="hidden md:block text-xs text-neutral-500">Belleza y Cuidado Capilar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#inicio"
              className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium relative group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C470A7] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#catalogo"
              className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium relative group"
            >
              Productos
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C470A7] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#contacto"
              className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium relative group"
            >
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C470A7] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="#ubicacion"
              className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium relative group"
            >
              Ubicación
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C470A7] group-hover:w-full transition-all duration-300" />
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white px-4 py-2 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </nav>

          {/* Cart Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="relative p-2 text-neutral-700 hover:text-[#C470A7] transition-colors group"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="w-6 h-6 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C470A7] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce-slow">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-[#C470A7] transition-colors"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-neutral-100 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium px-2 py-2"
              >
                Inicio
              </Link>
              <Link
                href="#catalogo"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium px-2 py-2"
              >
                Productos
              </Link>
              <Link
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium px-2 py-2"
              >
                Contacto
              </Link>
              <Link
                href="#ubicacion"
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-700 hover:text-[#C470A7] transition-colors font-medium px-2 py-2"
              >
                Ubicación
              </Link>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] text-white px-4 py-2 rounded-full font-medium w-fit"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
