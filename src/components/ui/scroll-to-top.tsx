"use client";

import { useEffect, useState } from "react";
import { Button } from "./button";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Throttle scroll event for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        return;
      }

      timeoutId = setTimeout(() => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300);
        timeoutId = undefined!;
      }, 100); // Throttle to 100ms
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Handle animation mounting/unmounting
  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 rounded-full p-3 shadow-lg z-50",
        "transition-all duration-300 hover:translate-y-[-2px]",
        "animate-in fade-in slide-in-from-bottom-8",
        "bg-green-400 hover:bg-green-500",
        !isVisible && "animate-out fade-out slide-out-to-bottom-8"
      )}
      size="icon"
      aria-label="Görgetés az oldal tetejére"
    >
      <ArrowUp className="h-5 w-5 text-white" />
    </Button>
  );
}
