import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          <span className="text-green-400">Nyíregyházi</span> Autókölcsönző
        </Link>

        {/* Desktop Navigation*/}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: "Autóink", href: "/#autoink" },
            { name: "Információk", href: "/" },
            { name: "Kapcsolat", href: "/" },
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
      </div>
    </header>
  );
};
