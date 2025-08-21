"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import categories from "@/content/categories.json";

export default function CategoryOrbit() {
  useReducedMotion(); // respected by framer-motion if user prefers reduced motion
  return (
    <div className="relative h-72 md:h-80 rounded-2xl border border-white/10 bg-card overflow-hidden">
      <div className="absolute inset-0">
        {categories.map((cat, idx) => (
          <FloatingIcon key={cat.slug} index={idx} slug={cat.slug} title={cat.title} />
        ))}
      </div>
    </div>
  );
}

function FloatingIcon({
  index,
  slug,
  title,
}: {
  index: number;
  slug: string;
  title: string;
}) {
  const radius = 100 + ((index % 4) * 18);
  const duration = 20 + ((index % 3) * 5);

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: "linear", duration }}
      style={{ width: radius * 2, height: radius * 2 }}
    >
      <Link
        href={`/work/${slug}`}
        className="group absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/5 border border-white/10 backdrop-blur flex items-center justify-center overflow-hidden dissolve"
      >
        <span className="opacity-0 group-hover:opacity-100 absolute -bottom-8 group-hover:bottom-2 transition-all text-xs bg-black/50 px-2 py-1 rounded">
          {title}
        </span>
        <span className="text-xs">◎</span>
      </Link>
    </motion.div>
  );
}
