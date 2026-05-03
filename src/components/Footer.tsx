import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#002B5C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand & Social */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex flex-col mb-6">
              <h1 className="text-3xl font-black tracking-tighter italic leading-none text-white">OutletSKECHERS</h1>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-[0.3em] mt-1">Level 21 Mall</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-sm">
              Skechers adalah merek gaya hidup global pemenang penghargaan, yang menawarkan alas kaki, pakaian, dan aksesori yang menarik bagi pria, wanita, dan anak-anak yang sadar akan tren.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Belanja</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Wanita</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pria</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Anak-anak</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Koleksi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Bantuan</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Lacak Pesanan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Status Pesanan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cara Pengembalian</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hubungi Kami</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Hubungi</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex gap-3"><MapPin className="w-5 h-5 shrink-0" /> <span>Level 21 Mall, Jl. Teuku Umar No.1 lantai 1, Dauh Puri Klod, Kec. Denpasar Bar., Denpasar, Bali 80113</span></li>
              <li className="flex gap-3"><Phone className="w-5 h-5 shrink-0" /> <span>083140066147</span></li>
              <li className="flex gap-3"><MessageCircle className="w-5 h-5 shrink-0 text-[#25D366]" /> <a href="https://wa.me/6283140066147" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp: 0831-4006-6147</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400 font-medium">
          <p>© 2024 SKECHERS INDONESIA. SELURUH HAK CIPTA DILINDUNGI.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition-colors">Kebijakan Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
