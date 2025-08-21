"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY && y > 80);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header className={`sticky top-0 z-50 transition-transform ${hidden ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="backdrop-blur bg-black/30 border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-14 flex items-center justify-between">
          <Link href="/" className="font-semibold">Shayan Hezarkhani</Link>
          <div className="flex gap-6 text-sm">
            <Link href="/#about" className="hover:underline">About</Link>
            <Link href="/work" className="hover:underline">Work</Link>
            <Link href="/#contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
