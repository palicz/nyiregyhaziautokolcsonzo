"use client";

import { TextRotate } from "@/components/text-rotate";
import { LayoutGroup, motion } from "framer-motion";

export function HeroTextRotate() {
  return (
    <div className="w-full text-4xl md:text-5xl flex flex-row items-center justify-center md:justify-start font-bold text-gray-900">
      <LayoutGroup>
        <motion.div
          className="flex flex-wrap whitespace-pre justify-center md:justify-start"
          layout
        >
          <motion.span
            className="w-full md:w-auto mr-0 md:mr-2 text-center md:text-left mb-2 md:mb-0"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            Szeretne
          </motion.span>
          <TextRotate
            texts={[
              "megbízható ⭐",
              "kényelmes 🚗",
              "prémium ✨",
              "modern 🔥",
              "családi 👨‍👩‍👧‍👦",
              "sportos 🏎️",
            ]}
            mainClassName="text-white px-3 bg-green-500 overflow-hidden py-1 justify-center rounded-lg whitespace-nowrap"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.02}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
              duration: 0.5,
            }}
            rotationInterval={2500}
            animatePresenceMode="wait"
          />
          <motion.span
            className="ml-2"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            autót bérelni?
          </motion.span>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
