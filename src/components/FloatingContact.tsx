import React from 'react';
import { MessageCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Live Chat Button */}
      <motion.a
        href="https://direct.lc.chat/19686844"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 transition-colors"
        title="Live Chat"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/6283140066147"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors"
        title="WhatsApp Kami"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.a>
    </div>
  );
};

export default FloatingContact;
