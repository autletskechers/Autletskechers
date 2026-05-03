import React, { useState } from 'react';
import { X, Heart, Share2, Ruler, ShieldCheck, Truck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { type Product } from '../data';
import { cn } from '../lib/utils';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(product.image);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    province: '',
    regency: '',
    district: '',
    village: '',
    size: '',
    expedition: 'J&T'
  });

  const [provinces, setProvinces] = useState<any[]>([]);
  const [regencies, setRegencies] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [villages, setVillages] = useState<any[]>([]);
  const [loadingLocations, setLoadingLocations] = useState({
    p: false, r: false, d: false, v: false
  });

  // Fetch Provinces on mount
  React.useEffect(() => {
    const fetchProvinces = async () => {
      setLoadingLocations(prev => ({ ...prev, p: true }));
      try {
        const res = await fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
        const data = await res.json();
        setProvinces(data);
      } catch (e) {
        console.error("Error fetching provinces", e);
      } finally {
        setLoadingLocations(prev => ({ ...prev, p: false }));
      }
    };
    fetchProvinces();
  }, []);

  // Fetch Regencies
  React.useEffect(() => {
    if (!formData.province) {
      setRegencies([]);
      return;
    }
    const fetchRegencies = async () => {
      setLoadingLocations(prev => ({ ...prev, r: true }));
      const provId = provinces.find(p => p.name === formData.province)?.id;
      if (!provId) return;
      try {
        const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provId}.json`);
        const data = await res.json();
        setRegencies(data);
      } catch (e) {
        console.error("Error fetching regencies", e);
      } finally {
        setLoadingLocations(prev => ({ ...prev, r: false }));
      }
    };
    fetchRegencies();
  }, [formData.province, provinces]);

  // Fetch Districts
  React.useEffect(() => {
    if (!formData.regency) {
      setDistricts([]);
      return;
    }
    const fetchDistricts = async () => {
      setLoadingLocations(prev => ({ ...prev, d: true }));
      const regId = regencies.find(r => r.name === formData.regency)?.id;
      if (!regId) return;
      try {
        const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regId}.json`);
        const data = await res.json();
        setDistricts(data);
      } catch (e) {
        console.error("Error fetching districts", e);
      } finally {
        setLoadingLocations(prev => ({ ...prev, d: false }));
      }
    };
    fetchDistricts();
  }, [formData.regency, regencies]);

  // Fetch Villages
  React.useEffect(() => {
    if (!formData.district) {
      setVillages([]);
      return;
    }
    const fetchVillages = async () => {
      setLoadingLocations(prev => ({ ...prev, v: true }));
      const distId = districts.find(d => d.name === formData.district)?.id;
      if (!distId) return;
      try {
        const res = await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${distId}.json`);
        const data = await res.json();
        setVillages(data);
      } catch (e) {
        console.error("Error fetching villages", e);
      } finally {
        setLoadingLocations(prev => ({ ...prev, v: false }));
      }
    };
    fetchVillages();
  }, [formData.district, districts]);

  const gallery = product.gallery || [product.image];
  const sizes = product.sizes || (product.gender === 'Kids' 
    ? Array.from({ length: 8 }, (_, i) => (28 + i).toString())
    : Array.from({ length: 12 }, (_, i) => (34 + i).toString()));

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const fullAddress = `${formData.address}, ${formData.village}, ${formData.district}, ${formData.regency}, ${formData.province}`;
    const message = `Halo Skechers Indonesia,\n\nSaya ingin memesan produk:\n*${product.name}*\nHarga: *${product.price}*\n\nData Pengiriman:\n- Nama: ${formData.name}\n- No WA: ${formData.phone}\n- Ukuran: ${formData.size}\n- Alamat: ${fullAddress}\n- Ekspedisi: ${formData.expedition}\n\nTerima kasih!`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6283140066147?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 lg:p-10">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-6xl bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col lg:flex-row max-h-[95vh] lg:max-h-[90vh]"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors lg:hidden"
          >
            <X className="w-6 h-6 text-[#002B5C]" />
          </button>

          {/* Gallery Section */}
          {!showCheckout && (
            <div className="w-full lg:w-3/5 bg-gray-50 flex flex-col lg:flex-row p-4 lg:p-6 gap-4 overflow-y-auto">
              <div className="hidden lg:flex flex-col gap-3 order-1 lg:order-1">
                {gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "w-20 h-20 border-2 transition-all overflow-hidden",
                      activeImage === img ? "border-[#002B5C]" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              
              <div className="flex-grow order-2 lg:order-2 flex items-center justify-center">
                <motion.img 
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={activeImage} 
                  alt={product.name} 
                  className="max-h-[250px] lg:max-h-[600px] w-auto object-contain"
                />
              </div>

              {/* Mobile Horizontal Gallery */}
              <div className="flex lg:hidden gap-3 overflow-x-auto pb-2 order-3">
                 {gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={cn(
                      "w-16 h-16 shrink-0 border-2 transition-all",
                      activeImage === img ? "border-[#002B5C]" : "border-transparent opacity-60"
                    )}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Form / Details Section */}
          <div className={cn(
            "w-full p-6 lg:p-12 overflow-y-auto border-l border-gray-100",
            showCheckout ? "lg:w-full" : "lg:w-2/5"
          )}>
            <button 
              onClick={onClose}
              className="hidden lg:block absolute top-8 right-8 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-[#002B5C]" />
            </button>

            {!showCheckout ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em]">
                    {product.gender}'s {product.category}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-black italic text-[#002B5C] uppercase tracking-tighter leading-none">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-black text-red-600">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-gray-400 line-through">
                          {product.originalPrice}
                        </span>
                        <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-50 px-2 py-0.5 self-start">
                          Hemat {product.discountPercentage}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {product.description && (
                  <p className="text-gray-600 text-sm leading-relaxed border-b border-gray-100 pb-6">
                    {product.description}
                  </p>
                )}

                {/* Quick Selection for Size */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xs uppercase tracking-widest">Pilih Ukuran (Pesan via WA)</span>
                    <button className="flex items-center gap-1 text-[10px] font-bold text-blue-600 uppercase">
                      <Ruler className="w-3 h-3" /> Size Guide
                    </button>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                    {sizes.slice(0, 8).map(size => (
                      <button 
                        key={size} 
                        onClick={() => setFormData(prev => ({ ...prev, size }))}
                        className={cn(
                          "py-3 border text-sm font-medium transition-colors",
                          formData.size === size ? "border-[#002B5C] bg-[#002B5C] text-white" : "border-gray-200 hover:border-[#002B5C]"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <button 
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-[#002B5C] text-white py-4 font-bold uppercase text-xs tracking-widest hover:bg-[#003d82] transition-colors"
                  >
                    Beli Sekarang via WhatsApp
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-orange-500" />
                    Free Delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    100% Original
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-3xl mx-auto py-4">
                <button 
                  onClick={() => setShowCheckout(false)}
                  className="mb-6 text-xs font-bold text-gray-500 hover:text-[#002B5C] flex items-center gap-2 uppercase tracking-widest"
                >
                  ← Kembali ke Detail Produk
                </button>
                
                <h3 className="text-2xl font-black italic text-[#002B5C] uppercase tracking-tighter mb-8">
                  Data Pengiriman
                </h3>

                <form onSubmit={handleWhatsAppOrder} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Nama Lengkap</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Contoh: Budi Santoso"
                        className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Nomor WhatsApp</label>
                      <input 
                        required
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="Contoh: 08123456789"
                        className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Ukuran Sepatu</label>
                    <div className="flex flex-wrap gap-2">
                      {sizes.map(size => (
                        <button 
                          key={size}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, size }))}
                          className={cn(
                            "w-12 h-12 flex items-center justify-center border text-sm font-bold transition-all",
                            formData.size === size ? "bg-[#002B5C] border-[#002B5C] text-white" : "border-gray-200 hover:border-[#002B5C]"
                          )}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                    {formData.size === '' && <p className="text-[10px] text-red-500 font-bold uppercase">Wajib memilih ukuran</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Provinsi</label>
                      <select 
                        required
                        value={formData.province}
                        onChange={(e) => setFormData(prev => ({ ...prev, province: e.target.value, regency: '', district: '', village: '' }))}
                        className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium bg-transparent"
                      >
                        <option value="">{loadingLocations.p ? 'Memuat...' : 'Pilih Provinsi'}</option>
                        {provinces.map(p => (
                          <option key={p.id} value={p.name}>{p.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Kota / Kabupaten</label>
                      <select 
                        required
                        disabled={!formData.province}
                        value={formData.regency}
                        onChange={(e) => setFormData(prev => ({ ...prev, regency: e.target.value, district: '', village: '' }))}
                        className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium bg-transparent disabled:opacity-50"
                      >
                        <option value="">{loadingLocations.r ? 'Memuat...' : 'Pilih Kabupaten/Kota'}</option>
                        {regencies.map(r => (
                          <option key={r.id} value={r.name}>{r.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Kecamatan</label>
                      <select 
                        required
                        disabled={!formData.regency}
                        value={formData.district}
                        onChange={(e) => setFormData(prev => ({ ...prev, district: e.target.value, village: '' }))}
                        className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium bg-transparent disabled:opacity-50"
                      >
                        <option value="">{loadingLocations.d ? 'Memuat...' : 'Pilih Kecamatan'}</option>
                        {districts.map(d => (
                          <option key={d.id} value={d.name}>{d.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Kelurahan / Desa</label>
                      <select 
                        required
                        disabled={!formData.district}
                        value={formData.village}
                        onChange={(e) => setFormData(prev => ({ ...prev, village: e.target.value }))}
                        className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium bg-transparent disabled:opacity-50"
                      >
                        <option value="">{loadingLocations.v ? 'Memuat...' : 'Pilih Kelurahan/Desa'}</option>
                        {villages.map(v => (
                          <option key={v.id} value={v.name}>{v.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Alamat Lengkap</label>
                    <textarea 
                      required
                      rows={3}
                      value={formData.address}
                      onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                      placeholder="Nama jalan, Nomor rumah, RT/RW, Kecamatan"
                      className="w-full border-2 border-gray-100 p-4 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500">Pilih Ekspedisi</label>
                    <select 
                      value={formData.expedition}
                      onChange={(e) => setFormData(prev => ({ ...prev, expedition: e.target.value }))}
                      className="w-full border-b-2 border-gray-100 py-3 outline-none focus:border-[#002B5C] transition-colors text-sm font-medium bg-transparent"
                    >
                      <option value="J&T">J&T Express</option>
                      <option value="JNE">JNE Regular/YES</option>
                      <option value="SiCepat">SiCepat</option>
                      <option value="ID Express">ID Express</option>
                    </select>
                  </div>

                  <div className="pt-6">
                    <button 
                      disabled={!formData.size}
                      type="submit"
                      className="w-full bg-[#25D366] text-white py-5 font-black uppercase text-sm tracking-[0.2em] hover:bg-[#128C7E] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale"
                    >
                      Kirim Pesanan ke WhatsApp Sekarang
                    </button>
                    <p className="text-center text-[10px] text-gray-400 mt-4 font-bold uppercase tracking-widest">
                      Anda akan diarahkan ke WhatsApp untuk menyelesaikan pembayaran.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;
