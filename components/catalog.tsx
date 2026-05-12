"use client";

import { useMemo, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { categories, getBrandsByCategory, products } from "@/lib/products";
import { ProductCard } from "./product-card";

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string>("CAPILAR");
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAllBrands, setShowAllBrands] = useState(false);

  const brands = useMemo(
    () => getBrandsByCategory(activeCategory),
    [activeCategory]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = product.category === activeCategory;
      const matchesBrand = !activeBrand || product.brand === activeBrand;
      const matchesSearch =
        !searchTerm ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesCategory && matchesBrand && matchesSearch;
    });
  }, [activeCategory, activeBrand, searchTerm]);

  const displayedBrands = showAllBrands ? brands : brands.slice(0, 6);

  const categoryLabels: Record<string, string> = {
    CAPILAR: "Capilar",
    MAQUILLAJE: "Maquillaje",
    CORPORAL: "Corporal",
    TINTES: "Tintes",
    ACCESORIOS: "Accesorios",
  };

  return (
    <section id="catalogo" className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#ead6e4] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#9d4c83] shadow-sm">
            Seleccion Macadamia
          </span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-neutral-950 md:text-4xl">
            Productos de belleza para tu rutina diaria
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
            Explora productos originales para cabello, piel, maquillaje y
            cuidado personal, seleccionados para comprar facil y con confianza.
          </p>
        </div>

        <div className="mx-auto mb-8 max-w-xl">
          <div className="group relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-[#C470A7]" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-12 pr-4 transition-all duration-300 hover:border-[#C470A7]/50 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#C470A7]"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveBrand(null);
                setShowAllBrands(false);
              }}
              className={`rounded-full px-4 py-2 font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? "bg-[#C470A7] text-white shadow-md shadow-[#C470A7]/30"
                  : "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {brands.length > 0 && (
          <div className="mb-8">
            <div className="mb-3 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setActiveBrand(null)}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  !activeBrand
                    ? "border border-[#C470A7] bg-[#C470A7]/20 text-[#C470A7]"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                Todas las marcas
              </button>
              {displayedBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeBrand === brand
                      ? "border border-[#C470A7] bg-[#C470A7]/20 text-[#C470A7]"
                      : "border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>

            {brands.length > 6 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAllBrands(!showAllBrands)}
                  className="mx-auto flex items-center gap-1 text-sm text-[#C470A7] transition-transform hover:scale-105 hover:underline"
                >
                  {showAllBrands ? "Ver menos" : `Ver todas (${brands.length})`}
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${
                      showAllBrands ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>
            )}
          </div>
        )}

        <p className="mb-6 text-center text-sm text-neutral-500">
          Mostrando {filteredProducts.length} productos
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-neutral-500">No se encontraron productos</p>
            <p className="mt-1 text-sm text-neutral-400">
              Intenta con otra busqueda o categoria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
