import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Macadamia | Tienda de Belleza y Cuidado Personal",
  description:
    "Descubre los mejores productos de belleza, cuidado capilar, maquillaje, cuidado corporal, tintes y accesorios. Productos 100% originales de las mejores marcas.",
  keywords: [
    "belleza",
    "maquillaje",
    "capilar",
    "cuidado personal",
    "tintes",
    "accesorios belleza",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="bg-white scroll-smooth">
      <body
        className={`${roboto.className} ${robotoMono.variable} antialiased font-sans`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
