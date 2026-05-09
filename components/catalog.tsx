"use client";

import { useState, useMemo } from "react";
import { Search, ChevronDown } from "lucide-react";
import { products, categories, getBrandsByCategory } from "@/lib/products";
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
    <section id="catalogo" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-3">
            Nuestro <span className="text-[#C470A7]">Catálogo</span>
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Encuentra los mejores productos de belleza para el cuidado de tu
            cabello, piel y mucho más
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-[#C470A7] transition-colors" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C470A7] focus:border-transparent bg-white transition-all duration-300 hover:border-[#C470A7]/50"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveBrand(null);
                setShowAllBrands(false);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === category
                  ? "bg-[#C470A7] text-white shadow-md shadow-[#C470A7]/30"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Brand Filter */}
        {brands.length > 0 && (
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <button
                onClick={() => setActiveBrand(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  !activeBrand
                    ? "bg-[#C470A7]/20 text-[#C470A7] border border-[#C470A7]"
                    : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                Todas las marcas
              </button>
              {displayedBrands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setActiveBrand(brand)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeBrand === brand
                      ? "bg-[#C470A7]/20 text-[#C470A7] border border-[#C470A7]"
                      : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
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
                  className="text-sm text-[#C470A7] hover:underline flex items-center gap-1 mx-auto hover:scale-105 transition-transform"
                >
                  {showAllBrands ? "Ver menos" : `Ver todas (${brands.length})`}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showAllBrands ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            )}
          </div>
        )}

        {/* Products Count */}
        <p className="text-center text-neutral-500 text-sm mb-6">
          Mostrando {filteredProducts.length} productos
        </p>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
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
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">
              No se encontraron productos
            </p>
            <p className="text-neutral-400 text-sm mt-1">
              Intenta con otra búsqueda o categoría
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
