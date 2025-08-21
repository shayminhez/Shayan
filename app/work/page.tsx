import Link from "next/link";
import categories from "@/content/categories.json";

export default function WorkIndex() {
  return (
    <div className="px-6 md:px-10 lg:px-16 max-w-6xl mx-auto py-10 space-y-8">
      <h1 className="text-2xl mb-4">Work Categories</h1>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <li key={cat.slug} className="p-5 rounded-2xl bg-card backdrop-blur border border-white/10 hover:shadow-soft transition">
            <div className="text-lg font-medium mb-2">{cat.title}</div>
            <p className="text-sm text-neutral-300 mb-4">{cat.description}</p>
            <Link href={`/work/${cat.slug}`} className="underline">Open</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
