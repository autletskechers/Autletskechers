import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AdminTool from './components/AdminTool';
import FloatingContact from './components/FloatingContact';
import { PRODUCTS as INITIAL_PRODUCTS } from './data';
import { motion, useScroll, useSpring } from 'motion/react';
import { X } from 'lucide-react';

function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [categoryFilter, setCategoryFilter] = useState('');
  const allProductsRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getFilteredProducts = (prods: typeof INITIAL_PRODUCTS) => {
    if (!categoryFilter) return prods;
    
    // Map Indonesian category names to data values
    const mapping: Record<string, string> = {
      'Wanita': 'Women',
      'Pria': 'Men',
      'Anak-anak': 'Kids'
    };

    const targetGender = mapping[categoryFilter];
    if (!targetGender) return prods;

    return prods.filter(p => p.gender === targetGender || p.gender === 'Unisex');
  };

  const filteredProducts = getFilteredProducts(products);
  const newArrivals = filteredProducts.filter(p => p.isNew);
  const bestSellers = filteredProducts.filter(p => p.isBestSeller);
  const kidsProducts = products.filter(p => p.gender === 'Kids');
  const womenPromoProducts = products.filter(p => p.gender === 'Women' && p.isPromo);
  const apparelProducts = products.filter(p => p.category === 'Apparel');

  const handleSelectCategory = (cat: string) => {
    setCategoryFilter(cat);
    // Smooth scroll to product grid if a category is selected
    if (cat) {
      window.scrollTo({ top: 900, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToAllProducts = () => {
    allProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero onShopNow={scrollToAllProducts} />
        
        {/* Flash Sale / Points Promo Marquee */}
        <div className="bg-[#002B5C] py-4 overflow-hidden border-b border-gray-200">
          <motion.div 
            animate={{ x: [0, -1200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="whitespace-nowrap flex gap-12 text-[10px] sm:text-xs font-bold text-white uppercase tracking-widest"
          >
            <span>Selamat datang di website resmi OutletSKECHERS semua produk di jamin asli/original 100% Vietnam, jika terbukti palsu/kW uang kembali</span>
            <span className="text-yellow-400">Nikmati produk promo potongan harga 79% BUY 2 GET 1 saat ini</span>
            <span>Belanja sekarang dapat promonya super wow</span>
            <span className="flex items-center gap-2">Layanan online center via WhatsApp 📞 0831-4006-6147</span>
            <span>Selamat datang di website resmi OutletSKECHERS semua produk di jamin asli/original 100% Vietnam, jika terbukti palsu/kW uang kembali</span>
            <span className="text-yellow-400">Nikmati produk promo potongan harga 79% BUY 2 GET 1 saat ini</span>
            <span>Belanja sekarang dapat promonya super wow</span>
            <span className="flex items-center gap-2">Layanan online center via WhatsApp 📞 0831-4006-6147</span>
          </motion.div>
        </div>

        <CategorySection onSelectCategory={handleSelectCategory} />

        {categoryFilter && (
          <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-8">
            <div className="bg-blue-50 border border-blue-100 p-4 rounded flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Kategori Aktif:</span>
                <span className="text-sm font-black text-blue-700 uppercase italic">{categoryFilter}</span>
              </div>
              <button 
                onClick={() => setCategoryFilter('')}
                className="text-xs font-bold text-gray-400 hover:text-red-500 flex items-center gap-1 uppercase tracking-widest"
              >
                Hapus Filter <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        <div className="bg-gradient-to-b from-white to-gray-50">
          <ProductGrid 
            title={categoryFilter ? `Koleksi Baru: ${categoryFilter}` : "Koleksi Baru"} 
            products={newArrivals} 
          />
        </div>

        {/* Mid-page Banner */}
        <section className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="relative h-[350px] lg:h-[500px] overflow-hidden group rounded-sm shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=80&w=1920" 
              alt="Promotion"
              className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 lg:p-16">
              <div className="max-w-xl text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4 leading-none">
                    Skechers <br /> Arch Fit®
                  </h3>
                  <p className="font-medium mb-10 text-sm lg:text-lg text-gray-200">
                    Sistem insole bersertifikat podiatris yang dikembangkan selama 20 tahun. Kenyamanan dukungan yang anatomis.
                  </p>
                  <button 
                    onClick={scrollToAllProducts}
                    className="bg-white text-[#002B5C] px-10 py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
                  >
                    Belanja Sekarang
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Kids Collection & Promo Section (Below Banner) */}
        <div className="bg-red-50/10">
          <ProductGrid 
            title="Promo Happy Sale Anak-anak - Rp 199.000" 
            products={kidsProducts} 
            scrollable={true}
          />
        </div>
        
        {/* Apparel Section */}
        <div className="bg-gray-50/50">
          <ProductGrid 
            title="Koleksi Pakaian - Promo Seru Rp 159.000 s/d Rp 299.000" 
            products={apparelProducts} 
            scrollable={true}
          />
        </div>

        {/* Women's Promo Section */}
        <div className="bg-blue-50/10 border-t border-gray-100">
          <ProductGrid 
            title="Promo Spesial Wanita - Rp 255.000 s/d Rp 333.000" 
            products={womenPromoProducts} 
            scrollable={true}
          />
        </div>

        <ProductGrid 
          title={categoryFilter ? `Produk Terlaris: ${categoryFilter}` : "Produk Terlaris"} 
          products={bestSellers} 
        />

        {/* Explore All Products Section */}
        <div ref={allProductsRef} className="pt-8">
          <ProductGrid 
            title={categoryFilter ? `Eksplor Semua Produk ${categoryFilter}` : "Eksplor Semua Produk"} 
            products={filteredProducts} 
          />
        </div>

        {/* Brand Story / Commitment Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-black italic text-[#002B5C] uppercase tracking-tighter mb-12">
              Kenyamanan Bertemu Gaya
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-blue-600 font-black text-xl italic">S</span>
                </div>
                <h4 className="font-bold text-[#002B5C] uppercase tracking-widest text-sm">Teknologi Inovatif</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[250px] mx-auto">Dari Arch Fit hingga Slip-ins, kami memimpin dalam inovasi kenyamanan kaki.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-blue-600 font-black text-xl italic">K</span>
                </div>
                <h4 className="font-bold text-[#002B5C] uppercase tracking-widest text-sm">Kualitas Global</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[250px] mx-auto">Produk asli yang didistribusikan langsung melalui jaringan resmi Indonesia.</p>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-blue-600 font-black text-xl italic">G</span>
                </div>
                <h4 className="font-bold text-[#002B5C] uppercase tracking-widest text-sm">Gaya Hidup Aktif</h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[250px] mx-auto">Desain yang cocok untuk segala aktivitas, mulai dari olahraga hingga kasual.</p>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>

      <Footer />
      <AdminTool onAddProduct={(newProd) => setProducts([newProd, ...products])} />
      <FloatingContact />
    </div>
  );
}

export default App;
