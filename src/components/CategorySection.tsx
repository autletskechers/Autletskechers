import React from 'react';
import { CATEGORIES } from '../data';
import { motion } from 'motion/react';

interface CategorySectionProps {
  onSelectCategory: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 lg:px-8">
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-2xl lg:text-3xl font-black italic text-[#002B5C] uppercase tracking-tighter">
          Belanja Per Kategori
        </h3>
        <button 
          onClick={() => onSelectCategory('')}
          className="font-bold text-sm text-blue-600 hover:underline"
        >
          Lihat Semua
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {CATEGORIES.map((category, index) => (
          <motion.div 
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onSelectCategory(category.name)}
            className="group relative h-64 lg:h-[400px] overflow-hidden bg-gray-100 cursor-pointer"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h4 className="text-white text-xl lg:text-2xl font-bold uppercase tracking-tight">{category.name}</h4>
              <div className="h-1 w-0 bg-white transition-all duration-300 group-hover:w-full mt-2" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
