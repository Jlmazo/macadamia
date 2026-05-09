"use client";

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

  const cartItem = items.find((item) => item.product.id === product.id);
  const quantityInCart = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1000);
  };

  return (
    <div className="bg-white border border-neutral-100 rounded-xl p-4 hover:shadow-lg hover:border-[#C470A7]/30 transition-all duration-300 group hover:-translate-y-1">
      {/* Product Icon */}
      <div className="w-full h-24 bg-gradient-to-br from-[#C470A7]/10 to-[#C470A7]/5 rounded-lg flex items-center justify-center mb-3 group-hover:from-[#C470A7]/20 group-hover:to-[#C470A7]/10 transition-all duration-300 overflow-hidden">
        <ShoppingBag className="w-12 h-12 text-[#C470A7]/40 group-hover:text-[#C470A7]/60 group-hover:scale-110 transition-all duration-300" />
      </div>

      {/* Brand Tag */}
      <span className="inline-block px-2 py-0.5 bg-[#C470A7]/10 text-[#C470A7] text-xs font-medium rounded-full mb-2 group-hover:bg-[#C470A7]/20 transition-colors">
        {product.brand}
      </span>

      {/* Product Name */}
      <h3 className="text-sm font-medium text-neutral-800 line-clamp-2 min-h-[40px] leading-tight mb-2 group-hover:text-neutral-900 transition-colors">
        {product.name}
      </h3>

      {/* Price */}
      <p className="text-lg font-bold text-neutral-900 mb-3">
        {formatPrice(product.price)}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium transition-all duration-300 ${
          justAdded
            ? "bg-green-500 text-white scale-105"
            : "bg-[#C470A7] hover:bg-[#B35E96] text-white hover:shadow-md hover:shadow-[#C470A7]/30"
        }`}
      >
        {justAdded ? (
          <>
            <Check className="w-4 h-4" />
            Agregado
          </>
        ) : (
          <>
            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
            Agregar
            {quantityInCart > 0 && (
              <span className="ml-1 bg-white/20 px-1.5 py-0.5 rounded text-xs">
                ({quantityInCart})
              </span>
            )}
          </>
        )}
      </button>
    </div>
  );
}
