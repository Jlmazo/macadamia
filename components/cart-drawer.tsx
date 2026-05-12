"use client";

import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/products";
import { contactInfo } from "@/lib/contact-info";

export function CartDrawer() {
  const { items, isOpen, setIsOpen, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderText = items
      .map(
        (item) =>
          `- ${item.product.name} x${item.quantity} = ${formatPrice(item.product.price * item.quantity)}`
      )
      .join("\n");

    const message = `Hola! Me gustaría hacer un pedido:\n\n${orderText}\n\n*Total: ${formatPrice(totalPrice)}*`;
    window.open(contactInfo.whatsappUrl(message), "_blank");
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#C470A7]" />
            <h2 className="text-lg font-bold text-neutral-900">Tu Carrito</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4" />
              <p className="text-neutral-500 text-lg">Tu carrito esta vacio</p>
              <p className="text-neutral-400 text-sm mt-1">
                Agrega productos para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 bg-neutral-50 rounded-lg"
                >
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-neutral-900 text-sm leading-tight line-clamp-2">
                      {item.product.name}
                    </p>
                    <p className="text-xs text-[#C470A7] font-medium mt-1">
                      {item.product.brand}
                    </p>
                    <p className="text-sm font-bold text-neutral-900 mt-2">
                      {formatPrice(item.product.price)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1 text-neutral-400 hover:text-red-500 transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-2 bg-white rounded-lg border border-neutral-200">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-neutral-100 rounded-l-lg transition-colors"
                        aria-label="Reducir cantidad"
                      >
                        <Minus className="w-4 h-4 text-neutral-600" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-neutral-100 rounded-r-lg transition-colors"
                        aria-label="Aumentar cantidad"
                      >
                        <Plus className="w-4 h-4 text-neutral-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-100 p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-neutral-600">Subtotal:</span>
              <span className="text-xl font-bold text-neutral-900">
                {formatPrice(totalPrice)}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir por WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-neutral-300 text-neutral-600 hover:bg-neutral-100 font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Vaciar carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
