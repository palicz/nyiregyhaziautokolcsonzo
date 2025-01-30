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
        <div className="flex justify-between items-center text-[12px] sm:text-[14px] font-bold tracking-wide [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center space-x-6 sm:space-x-6 w-full sm:w-auto justify-between sm:justify-start"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white" />
              <span className="hidden sm:inline">
                4400 Nyíregyháza, Lujza utca 20
              </span>
              <span className="sm:hidden">4400 Nyíregyháza, Lujza utca 20</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white" />
              <a
                href="tel:+36301234567"
                className="text-white whitespace-nowrap"
              >
                +06 70 214 8844
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2"
          >
            <Clock size={16} className="text-white" />
            <span>Nyitva: H-P 8:00-17:00</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
