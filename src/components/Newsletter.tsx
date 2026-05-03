import React from 'react';
import { MessageCircle } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-[#f3f4f6] py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-3xl lg:text-4xl font-black italic text-[#002B5C] uppercase tracking-tighter mb-4">
              Promo Super Wow via WhatsApp
            </h3>
            <p className="text-gray-600 font-medium leading-relaxed">
              Dapatkan berita terbaru tentang koleksi, promo potongan harga 79%, BUY 2 GET 1, dan penawaran menarik lainnya langsung melalui WhatsApp kami.
            </p>
          </div>
          
          <div className="w-full max-w-lg">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-grow relative">
                <MessageCircle className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#25D366]" />
                <div className="w-full bg-white border border-gray-200 pl-12 pr-4 py-4 rounded-none h-full flex items-center font-bold text-[#002B5C]">
                  0831-4006-6147
                </div>
              </div>
              <a 
                href="https://wa.me/6283140066147"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 font-bold uppercase tracking-tight hover:bg-[#128C7E] transition-colors whitespace-nowrap flex items-center justify-center gap-2"
              >
                Chat WhatsApp
              </a>
            </div>
            <p className="mt-4 text-[10px] text-gray-500 text-center lg:text-left">
              *Layanan online center tersedia 24/7. Hubungi kami untuk bantuan dan informasi produk original.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
