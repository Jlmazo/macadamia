"use client";

import Image from "next/image";
import { Plus, Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const cartItem = items.find((item) => item.product.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;
  const productImageSrc = getProductImageSrc(product);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1000);
  };

  return (
    <div className="group flex h-full flex-col rounded-xl border border-neutral-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#C470A7]/30 hover:shadow-lg">
      {/* Product Image */}
      <div className="relative mb-3 flex h-36 w-full items-center justify-center overflow-hidden rounded-lg bg-white">
        {!imageError ? (
          <Image
            src={productImageSrc}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
            className="object-contain p-2 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <ShoppingBag className="w-12 h-12 text-[#C470A7]/40 group-hover:text-[#C470A7]/60 group-hover:scale-110 transition-all duration-300" />
        )}
      </div>

      {/* Brand Tag */}
      <span className="inline-block px-2 py-0.5 bg-[#C470A7]/10 text-[#C470A7] text-xs font-medium rounded-full mb-2 group-hover:bg-[#C470A7]/20 transition-colors">
        {product.brand}
      </span>

      {/* Product Name */}
      <h3 className="mb-3 min-h-[72px] text-sm font-medium leading-snug text-neutral-800 transition-colors group-hover:text-neutral-900">
        {product.name}
      </h3>

      {/* Price */}
      <p className="mb-3 mt-auto text-lg font-bold text-neutral-900">
        {formatPrice(product.price)}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`group/button relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg px-4 py-2.5 font-bold transition-all duration-300 ${
          justAdded
            ? "bg-green-500 text-white scale-105"
            : "bg-[#C470A7] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#B35E96] hover:shadow-[0_12px_24px_rgba(196,112,167,0.28)]"
        }`}
      >
        {!justAdded && (
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/button:translate-x-full" />
        )}
        {justAdded ? (
          <>
            <Check className="relative w-4 h-4" />
            <span className="relative">Agregado</span>
          </>
        ) : (
          <>
            <Plus className="relative w-4 h-4 transition-transform duration-300 group-hover/button:rotate-90" />
            <span className="relative">Agregar</span>
            {quantityInCart > 0 && (
              <span className="relative ml-1 bg-white/20 px-1.5 py-0.5 rounded text-xs">
                ({quantityInCart})
              </span>
            )}
          </>
        )}
      </button>
    </div>
  );
}

function getProductImageSrc(product: Product) {
  const folderByCategory: Record<string, string> = {
    CAPILAR: "CAPILAR",
    MAQUILLAJE: "MAQUILLAJE",
    CORPORAL: "CORPORAL",
    TINTES: "TINTES",
    ACCESORIOS: "EQUIPOS DE BELLEZA",
  };

  const folder = folderByCategory[product.category] ?? product.category;

  return `/Imagenes%20macadamia/${encodeURIComponent(folder)}/${encodeURIComponent(
    product.name
  )}.png`;
}
