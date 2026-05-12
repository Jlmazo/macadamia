"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { contactInfo } from "@/lib/contact-info";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#catalogo", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
  { href: "#ubicacion", label: "Ubicacion" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-[#ead6e4] bg-white/90 shadow-[0_8px_30px_rgba(116,60,96,0.08)] backdrop-blur-xl">
      <div className="h-1 bg-gradient-to-r from-[#8d3a85] via-[#C470A7] to-[#ff7043]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4 md:h-24">
          <Link href="/" className="group flex min-w-0 items-center gap-3 md:gap-4">
            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white shadow-[0_10px_24px_rgba(196,112,167,0.24)] ring-1 ring-[#f0d5e7] transition-transform duration-300 group-hover:scale-105 md:size-16">
              <Image
                src="/Logo_Morado.png"
                alt="Macadamia"
                width={72}
                height={72}
                priority
                className="size-12 rounded-full object-cover md:size-14"
              />
            </span>
            <span className="min-w-0">
              <span className="block text-2xl font-extrabold leading-tight text-[#C470A7] md:text-3xl">
                Macadamia
              </span>
              <span className="hidden text-sm font-medium text-neutral-500 sm:block">
                Belleza y Cuidado Capilar
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-[#f0d5e7] bg-white/78 p-1 shadow-[0_10px_24px_rgba(116,60,96,0.08)] lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#C470A7] hover:text-white hover:shadow-[0_10px_20px_rgba(196,112,167,0.22)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-4 py-2.5 text-sm font-bold text-white shadow-[0_10px_22px_rgba(225,48,108,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(225,48,108,0.34)] md:flex"
            >
              <Instagram className="size-4 transition-transform duration-300 group-hover:scale-110" />
              Instagram
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="animate-cart-attention group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-neutral-950 px-3.5 text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C470A7] hover:shadow-[0_18px_34px_rgba(196,112,167,0.36)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C470A7]/25 sm:px-4"
              aria-label="Abrir carrito de compras"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/18 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <ShoppingCart className="relative size-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="relative hidden text-sm font-bold sm:inline">Carrito</span>
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 grid min-h-5 min-w-5 place-items-center rounded-full bg-[#ff7043] px-1.5 text-xs font-black leading-none text-white ring-2 ring-white">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="grid size-12 place-items-center rounded-full border border-[#ead6e4] bg-white text-neutral-800 shadow-sm transition-all duration-300 hover:border-[#C470A7] hover:text-[#C470A7] lg:hidden"
              aria-label={mobileMenuOpen ? "Cerrar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="pb-5 lg:hidden">
            <div className="rounded-2xl border border-[#ead6e4] bg-white p-3 shadow-[0_18px_44px_rgba(116,60,96,0.12)]">
              <div className="grid gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-semibold text-neutral-800 transition-colors hover:bg-[#C470A7]/10 hover:text-[#9d4c83]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <a
                href={contactInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] px-4 py-3 text-sm font-bold text-white"
              >
                <Instagram className="size-4" />
                Instagram
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
