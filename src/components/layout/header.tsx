"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { SECTION_IDS } from "@/lib/constants";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-xl flex items-center gap-2"
        >
          <Image
            src="/images/logo.png"
            alt="Nyíregyházi Autókölcsönző Logo"
            width={100}
            height={100}
            quality={100}
            className="object-contain h-16 w-auto [filter:hue-rotate(15deg)_brightness(1.05)_saturate(0.9)]"
          />
          <span>
            <span className="text-green-400">Nyíregyházi</span> Autókölcsönző
          </span>
        </Link>

        {/* Desktop Navigation*/}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Autóink", href: `/#${SECTION_IDS.cars}` },
            { name: "Információk", href: `/#${SECTION_IDS.info}` },
            { name: "Kapcsolat", href: `/#${SECTION_IDS.contact}` },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative hover:text-green-500 transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-400 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Phone Navigation*/}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-green-500" />
          ) : (
            <Menu className="h-6 w-6 text-green-500" />
          )}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-white/90 backdrop-blur-md z-40 md:hidden transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {[
              { name: "Autóink", href: `/#${SECTION_IDS.cars}` },
              { name: "Információk", href: `/#${SECTION_IDS.info}` },
              { name: "Kapcsolat", href: `/#${SECTION_IDS.contact}` },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-semibold group relative hover:text-green-500 transition-colors"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-green-400 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
