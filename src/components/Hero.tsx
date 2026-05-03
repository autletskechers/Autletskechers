import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BANNERS = [
  {
    id: 1,
    image: "https://cdn.phototourl.com/member/2026-05-03-4acea07b-d8cc-4783-9a5b-d9cca3d5ab5b.jpg",
    title: "HANDS-FREE SLIP-INS™",
    subtitle: "Kenyamanan Maksimal. Tanpa Tali. Cukup Langsung Melangkah.",
    tag: "Teknologi Terbaru"
  },
  {
    id: 2,
    image: "https://cdn.phototourl.com/member/2026-05-03-491efac9-1247-439c-a8cb-6f5358f4d4fc.jpg",
    title: "SKECHERS ARCH FIT®",
    subtitle: "Dukungan lengkungan kaki bersertifikat podiatris.",
    tag: "Koleksi Kenyamanan"
  },
  {
    id: 3,
    image: "https://cdn.phototourl.com/member/2026-05-03-68e81dca-124f-49bd-8b25-c2d0325c8f63.jpg",
    title: "GO WALK® SERIES",
    subtitle: "Didesain untuk aktivitas berjalan sepanjang hari.",
    tag: "Paling Populer"
  },
  {
    id: 4,
    image: "https://cdn.phototourl.com/member/2026-05-03-09980d0c-636b-498e-a975-3cdc3c237eaf.jpg",
    title: "SPORT & TRAINING",
    subtitle: "Lampaui batas kemampuan Anda dengan performa terbaik.",
    tag: "Performa Tinggi"
  },
  {
    id: 5,
    image: "https://cdn.phototourl.com/member/2026-05-03-35ca9a27-8b60-4c85-bf37-da87c17de79e.jpg",
    title: "KIDS COLLECTION",
    subtitle: "Gaya Ceria dan Nyaman untuk si Kecil.",
    tag: "Terbaru"
  }
];

interface HeroProps {
  onShopNow?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShopNow }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % BANNERS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <section className="relative w-full h-[275px] md:h-[350px] lg:h-[410px] overflow-hidden bg-gray-100">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center lg:bg-[center_top]"
            style={{ backgroundImage: `url("${BANNERS[current].image}")` }}
          >
            <div className="absolute inset-0 bg-black/20 lg:bg-black/10" />
          </div>

          {/* Content Overlay */}
          <div className="relative h-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col justify-center text-white">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl"
            >
              <div className="bg-[#002B5C] inline-block px-4 py-1 mb-4 text-[10px] font-bold tracking-widest uppercase">
                {BANNERS[current].tag}
              </div>
              <h2 className="text-4xl lg:text-7xl font-black italic tracking-tighter mb-4 leading-none drop-shadow-lg">
                {BANNERS[current].title}
              </h2>
              <p className="text-base lg:text-xl font-bold mb-8 text-white drop-shadow-md max-w-lg">
                {BANNERS[current].subtitle}
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onShopNow}
                  className="bg-white text-[#002B5C] px-10 py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#002B5C] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  Belanja Sekarang
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 lg:px-8 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-2 lg:p-4 bg-white/30 hover:bg-white/80 rounded-full transition-all pointer-events-auto backdrop-blur-sm group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#002B5C]" />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 lg:p-4 bg-white/30 hover:bg-white/80 rounded-full transition-all pointer-events-auto backdrop-blur-sm group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:text-[#002B5C]" />
        </button>
      </div>

      {/* Progress Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            }}
            className={cn(
              "w-2 lg:w-3 h-2 lg:h-3 rounded-full transition-all border-2 border-white",
              current === idx ? "bg-white w-8 lg:w-12" : "bg-transparent hover:bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};

// Helper inside file since CN is used
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}

export default Hero;
