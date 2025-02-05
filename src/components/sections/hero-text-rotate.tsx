"use client";

import { TextRotate } from "@/components/text-rotate";
import { LayoutGroup, motion } from "framer-motion";
import { HERO_ROTATE_TEXTS } from "@/lib/constants";
import { useMemo } from "react";

export function HeroTextRotate() {
  const springTransition = useMemo(
    () => ({ type: "spring", damping: 30, stiffness: 400 }),
    []
  );

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
            transition={springTransition}
          >
            Szeretne
          </motion.span>
          <TextRotate
            texts={HERO_ROTATE_TEXTS}
            mainClassName="text-white px-3 bg-green-500 overflow-hidden py-1 justify-center rounded-lg whitespace-nowrap"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={0.02}
            transition={springTransition}
            rotationInterval={2500}
            animatePresenceMode="wait"
          />
          <motion.span className="ml-2" layout transition={springTransition}>
            autót bérelni?
          </motion.span>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
