import React, { useState } from 'react';
import { Search, User, Heart, Menu, X, ChevronDown, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#002B5C] text-white py-2 text-[10px] font-medium px-4 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden lg:flex items-center gap-4 opacity-80">
            <button className="flex items-center gap-1 hover:opacity-100 transition-opacity">
              <Globe className="w-3 h-3" />
              <span>Indonesia / IDR</span>
            </button>
            <button className="hover:opacity-100 transition-opacity cursor-pointer">Bantuan</button>
          </div>
          <p className="flex-grow text-center lg:pr-32">GRATIS ONGKIR UNTUK PESANAN DI ATAS RP 750.000* | <span className="underline cursor-pointer font-bold">SKECHERS PLUS</span></p>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <button 
              className="lg:hidden p-2 -ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl lg:text-2xl font-black tracking-tighter text-[#002B5C] italic leading-none">OutletSKECHERS</h1>
              <span className="text-[8px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">Level 21 Mall</span>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 font-bold text-sm uppercase text-[#002B5C]">
            <a href="#" className="hover:text-blue-600 transition-colors">Wanita</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pria</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Anak-anak</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Pakaian</a>
            <a href="#" className="text-red-600 hover:text-red-700 transition-colors">Sale</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Koleksi</a>
          </div>

          {/* Icons & Search */}
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1.5 focus-within:ring-2 focus-within:ring-blue-500 transition-all border border-transparent">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Cari Produk..." 
                className="bg-transparent border-none outline-none text-sm w-32 xl:w-48 placeholder-gray-400"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors relative">
                <Heart className="w-6 h-6 text-gray-700" />
              </button>
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <User className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col pt-20">
          <button 
            className="absolute top-4 right-4 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <X className="w-8 h-8 text-gray-700" />
          </button>
          
          <div className="flex flex-col gap-6 px-8 py-8 font-bold text-xl uppercase text-[#002B5C]">
            <a href="#" onClick={() => setIsMenuOpen(false)}>Wanita</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Pria</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Anak-anak</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Pakaian</a>
            <a href="#" onClick={() => setIsMenuOpen(false)} className="text-red-600">Sale</a>
            <div className="pt-6 border-t border-gray-100">
              <button className="flex items-center gap-2 text-sm text-gray-600 uppercase">
                <Globe className="w-4 h-4" />
                Bahasa / IDR
              </button>
            </div>
          </div>

          <div className="px-8 pb-8">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 w-full">
              <Search className="w-5 h-5 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Cari Produk..." 
                className="bg-transparent border-none outline-none text-base w-full placeholder-gray-400"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
