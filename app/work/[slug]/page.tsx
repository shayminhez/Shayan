import { notFound } from "next/navigation";
import categories from "@/content/categories.json";
import Link from "next/link";

type Props = { params: { slug: string } };

export default function CategoryPage({ params }: Props) {
  const cat = categories.find(c => c.slug === params.slug);
  if (!cat) return notFound();

  return (
    <div className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-10 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{cat.title}</h1>
        <Link href="/work" className="underline text-sm">Back</Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (<CollageItem key={i} idx={i} />))}
      </div>
    </div>
  );
}

function CollageItem({ idx }: { idx: number }) {
  const thumb = `https://picsum.photos/seed/${idx}/800/600`;
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-white/10">
      <button className="relative w-full aspect-video flex items-center justify-center sweep">
        <img src={thumb} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition" />
        <span className="relative z-10 px-3 py-1.5 text-sm rounded-full bg-black/50 border border-white/10">Click to expand</span>
      </button>
      <div className="p-4 space-y-2">
        <div className="font-medium">Project {idx}</div>
        <p className="text-sm text-neutral-300">Description appears on the right in expanded view (mobile stacks).</p>
      </div>
    </div>
  );
}
