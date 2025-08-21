"use client";
import Image from "next/image";
import { useState, useMemo } from "react";
import PlayerModal from "./PlayerModal";

type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  problem: string;
  approach: string;
  outcome: string;
  video: { src: string; thumbnail: string; platform?: string };
  stills: string[];
  tools: string[];
};

export default function CaseStudyCard({ data }: { data: CaseStudy }) {
  const [open, setOpen] = useState(false);
  const embedSrc = useMemo(() => {
    if (data.video.src.includes("youtube.com") || data.video.src.includes("youtu.be")) {
      const id = extractYouTubeId(data.video.src);
      return `https://www.youtube.com/embed/${id}?rel=0`;
    }
    return data.video.src;
  }, [data.video.src]);

  return (
    <article className="rounded-2xl overflow-hidden border border-white/10 bg-card backdrop-blur shadow-soft">
      <div className="grid lg:grid-cols-[2fr,1fr] gap-0">
        <button onClick={() => setOpen(true)} className="relative w-full aspect-video overflow-hidden sweep">
          <Image src={data.video.thumbnail} alt={data.title} fill sizes="(max-width:1024px) 100vw, 66vw" className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/20">Play</span>
          </div>
        </button>
        <div className="grid grid-rows-2">
          {data.stills.slice(0,2).map((src, i) => (
            <div key={i} className="relative">
              <Image src={src} alt={`${data.title} still ${i+1}`} fill sizes="33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-medium">{data.title}</h3>
        <p className="text-sm text-neutral-300">{data.problem} {data.approach} {data.outcome}</p>
        <div className="text-xs text-neutral-400">Tools: {data.tools.join(", ")}</div>
      </div>
      <PlayerModal open={open} onClose={() => setOpen(false)} src={embedSrc} />
    </article>
  );
}

function extractYouTubeId(url: string): string {
  const short = url.match(/youtu\.be\/([\w-]+)/);
  if (short) return short[1];
  const id = url.match(/[?&]v=([\w-]+)/);
  if (id) return id[1];
  const embed = url.match(/youtube\.com\/embed\/([\w-]+)/);
  if (embed) return embed[1];
  return url;
}
