import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { type Product } from '../data';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';
import ProductModal from './ProductModal';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group bg-white"
    >
      <div 
        className="relative aspect-[4/5] bg-gray-50 overflow-hidden mb-4 cursor-pointer"
        onClick={onClick}
      >
        {product.gallery && product.gallery.length >= 3 ? (
          <div className="grid grid-cols-2 h-full gap-px">
            {/* Main Image */}
            <div className="h-full overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Supporting Images */}
            <div className="grid grid-rows-2 h-full gap-px">
              {product.gallery.slice(1, 3).map((img, idx) => (
                <div key={idx} className="h-full overflow-hidden">
                  <img 
                    src={img} 
                    alt={`${product.name} view ${idx + 2}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discountPercentage && (
            <span className="bg-red-600 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest shadow-lg">
              -{product.discountPercentage}%
            </span>
          )}
          {product.isNew && (
            <span className="bg-[#002B5C] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              Terbaru
            </span>
          )}
          {product.isBestSeller && (
            <span className="bg-orange-500 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
              Terlaris
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute right-3 top-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Quick View Button */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button 
            className="w-full py-4 bg-[#002B5C] text-white font-bold uppercase text-xs tracking-widest hover:bg-[#003d82]"
          >
            Lihat Detail Pesanan
          </button>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
          {product.gender}'s {product.category}
        </p>
        <h5 
          className="text-sm font-bold text-[#002B5C] line-clamp-1 leading-tight group-hover:text-blue-600 transition-colors cursor-pointer"
          onClick={onClick}
        >
          {product.name}
        </h5>
        <div className="flex items-center gap-2">
          <p className="text-base font-black text-red-600 tracking-tight">
            {product.price}
          </p>
          {product.originalPrice && (
            <p className="text-[10px] font-bold text-gray-400 line-through">
              {product.originalPrice}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

interface ProductGridProps {
  title: string;
  products: Product[];
  scrollable?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ title, products, scrollable }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="py-12 lg:py-16 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between mb-10 border-b-2 border-gray-100 pb-4">
        <h3 className="text-2xl lg:text-3xl font-black italic text-[#002B5C] uppercase tracking-tighter">
          {title}
        </h3>
        <a href="#" className="font-bold text-sm text-blue-600 hover:underline shrink-0">Lihat Semua</a>
      </div>
      
      <div className={cn(
        "gap-x-6 gap-y-10",
        scrollable 
          ? "flex overflow-x-auto pb-6 -mx-4 px-4 lg:-mx-8 lg:px-8 snap-x snap-mandatory scrollbar-hide no-scrollbar" 
          : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      )}>
        {products.map((product) => (
          <div key={product.id} className={cn(scrollable && "min-w-[240px] sm:min-w-[300px] snap-start")}>
            <ProductCard 
              product={product} 
              onClick={() => setSelectedProduct(product)}
            />
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </section>
  );
};

export default ProductGrid;
