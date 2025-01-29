"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const TopBar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-gradient-to-r from-green-400 to-green-500 text-white py-2 sticky top-0 z-50 w-full shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-[13px] font-semibold tracking-wide">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center space-x-6"
          >
            <div className="flex items-center gap-2">
              <MapPin size={15} className="hidden sm:inline-block text-white" />
              <span className="hidden sm:inline">
                4400 Nyíregyháza, Példa utca 123.
              </span>
              <span className="sm:hidden">Nyíregyháza</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} className="hidden sm:inline-block text-white" />
              <a href="tel:+36301234567" className="text-white">
                +36 30 123 4567
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2"
          >
            <Clock size={15} className="text-white" />
            <span>Nyitva: H-P 8:00-17:00</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
