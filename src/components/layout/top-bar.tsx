"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { useMemo } from "react";

export const TopBar = () => {
  const motionProps = useMemo(
    () => ({
      initial: { y: -100, opacity: 0 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5, ease: "easeOut" },
    }),
    []
  );

  const contentMotionProps = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
    }),
    []
  );

  return (
    <motion.div
      {...motionProps}
      className="bg-gradient-to-r from-green-400 to-green-500 text-white py-2 sticky top-0 z-[60] w-full shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-[12px] sm:text-[14px] font-bold tracking-wide [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]">
          <motion.div
            {...contentMotionProps}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center space-x-6 sm:space-x-6 w-full sm:w-auto justify-between sm:justify-start"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white" />
              <span className="hidden sm:inline">
                {CONTACT_INFO.address.fullAddress}
              </span>
              <span className="sm:hidden">
                {CONTACT_INFO.address.fullAddress}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-white" />
              <a
                href={`tel:${CONTACT_INFO.phone.href}`}
                className="text-white whitespace-nowrap"
              >
                {CONTACT_INFO.phone.display}
              </a>
            </div>
          </motion.div>
          <motion.div
            {...contentMotionProps}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="hidden sm:flex items-center gap-2"
          >
            <Clock size={16} className="text-white" />
            <span>Nyitva: H-P {CONTACT_INFO.openingHours.weekdays}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
