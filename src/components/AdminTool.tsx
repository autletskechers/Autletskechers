import React, { useState, useRef } from 'react';
import { analyzeProductImage, ProductDetails } from '../services/geminiService';
import { motion, AnimatePresence } from 'motion/react';
import { Wand2, Loader2, X, Plus, Copy, Check, Upload, Image as ImageIcon } from 'lucide-react';
import { Product } from '../data';

interface AdminToolProps {
  onAddProduct: (product: Product) => void;
}

const AdminTool: React.FC<AdminToolProps> = ({ onAddProduct }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProductDetails | null>(null);
  const [copied, setCopied] = useState(false);
  const [added, setAdded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString('id-ID').replace(/,/g, '.')}`;
  };

  const handleAnalyze = async (url?: string) => {
    const targetUrl = url || imageUrl;
    if (!targetUrl) return;
    setLoading(true);
    setResult(null);
    try {
      const details = await analyzeProductImage(targetUrl);
      setResult(details);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImageUrl(base64);
        handleAnalyze(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddLive = () => {
    if (!result) return;
    const newProduct: Product = {
      id: `ai-${Date.now()}`,
      name: result.name,
      price: formatPrice(result.discountedPrice),
      originalPrice: formatPrice(result.originalPrice),
      discountPercentage: 79,
      image: imageUrl,
      gallery: [imageUrl],
      description: result.description,
      category: result.category,
      gender: result.gender,
      isNew: true
    };
    onAddProduct(newProduct);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const generateCode = () => {
    if (!result) return '';
    return `{
    id: '${Math.floor(Math.random() * 1000)}',
    name: "${result.name}",
    price: "${formatPrice(result.discountedPrice)}",
    originalPrice: "${formatPrice(result.originalPrice)}",
    discountPercentage: 79,
    image: "${imageUrl}",
    gallery: ["${imageUrl}"],
    description: "${result.description}",
    category: "${result.category}",
    gender: "${result.gender}",
    isNew: true
  },`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="bg-[#002B5C] text-white p-4 rounded-full shadow-2xl flex items-center gap-2 font-bold text-sm tracking-widest uppercase border-4 border-white"
      >
        <Wand2 size={20} />
        <span className="hidden sm:inline">AI Smart Tool</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-[450px] bg-white border border-gray-200 shadow-2xl rounded-xl z-[201] flex flex-col overflow-hidden"
          >
            <div className="bg-[#002B5C] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wand2 size={18} />
                <h3 className="font-bold text-xs uppercase tracking-widest">Deteksi Produk Otomatis</h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto max-h-[80vh]">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Sumber Gambar</label>
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={imageUrl.startsWith('data:') ? 'Image uploaded...' : imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Paste Image URL..."
                      className="flex-1 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <button
                      onClick={() => handleAnalyze()}
                      disabled={loading || !imageUrl}
                      className="bg-[#002B5C] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-widest disabled:opacity-50"
                    >
                      {loading ? <Loader2 size={16} className="animate-spin" /> : 'Deteksi'}
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="h-px bg-gray-100 flex-1" />
                    <span className="text-[10px] text-gray-400 font-bold uppercase">Atau</span>
                    <div className="h-px bg-gray-100 flex-1" />
                  </div>

                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    className="hidden" 
                    accept="image/*" 
                  />
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full border-2 border-dashed border-gray-200 hover:border-blue-400 hover:bg-blue-50 py-4 rounded-lg flex flex-col items-center gap-2 transition-all group"
                  >
                    <Upload size={20} className="text-gray-400 group-hover:text-blue-500" />
                    <span className="text-[10px] font-bold text-gray-400 group-hover:text-blue-500 uppercase tracking-widest">Upload File Gambar</span>
                  </button>
                </div>
              </div>

              {result && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6 pt-4 border-t border-gray-100"
                >
                  {/* Result Preview Card */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex gap-4">
                      <div className="w-24 h-24 bg-white rounded overflow-hidden shadow-sm flex-shrink-0 border border-gray-100">
                        <img src={imageUrl} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-block bg-blue-700 text-white text-[8px] font-black italic px-2 py-0.5 rounded-full mb-1 uppercase">
                          Detected: {result.gender}
                        </div>
                        <h4 className="text-sm font-black text-[#002B5C] leading-tight mb-1">{result.name}</h4>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black text-blue-700">{formatPrice(result.discountedPrice)}</span>
                          <span className="text-[10px] text-gray-400 line-through">{formatPrice(result.originalPrice)}</span>
                          <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1 rounded">-79%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Kategori</label>
                      <p className="text-sm text-gray-600">{result.category}</p>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gender</label>
                      <p className="text-sm text-gray-600">{result.gender}</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Deskripsi AI</label>
                    <p className="text-xs text-gray-600 leading-relaxed italic">"{result.description}"</p>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      onClick={handleAddLive}
                      className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white py-4 rounded text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
                    >
                      {added ? <Check size={16} /> : <Plus size={16} />}
                      {added ? 'Berhasil Ditambah!' : 'Tampilkan di Grid'}
                    </button>
                    <button
                      onClick={copyToClipboard}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-4 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors uppercase"
                    >
                      {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                      {copied ? 'Copied' : 'Script'}
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminTool;
