"use client";
import { useEffect } from "react";

export default function PlayerModal({ open, onClose, src }: { open: boolean; onClose: () => void; src: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black border border-white/10 shadow-soft">
        <button aria-label="Close" onClick={onClose} className="absolute top-3 right-3 z-10 rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20">Close</button>
        <div className="relative w-full aspect-video">
          <iframe className="absolute inset-0 w-full h-full" src={src} title="Video player" loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
      </div>
    </div>
  );
}
