import Image from "next/image";
import SkillsGrid from "@/components/SkillsGrid";
import SoftSkills from "@/components/SoftSkills";
import CaseStudyCard from "@/components/CaseStudyCard";
import CategoryOrbit from "@/components/CategoryOrbit";
import caseStudies from "@/content/case-studies.json";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="px-6 md:px-10 lg:px-16 max-w-7xl mx-auto space-y-20 py-10">
      <section id="hero" className="grid md:grid-cols-[auto,1fr] gap-8 items-center">
        <div className="relative size-40 md:size-48 lg:size-56 rounded-2xl overflow-hidden shadow-soft">
          <Image src="/portrait.jpg" alt="Shayan Hezarkhani" fill priority sizes="(max-width:768px) 160px, 220px" className="object-cover" />
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl md:text-3xl font-semibold">Shayan Hezarkhani</h1>
          <p className="text-neutral-300 max-w-prose">Motion &amp; Video Designer turning complex ideas into clean, high-impact visuals.</p>
          <div className="flex gap-4 pt-2">
            <Link className="underline" href="mailto:example@email.com">Email</Link>
            <Link className="underline" href="https://www.instagram.com/" target="_blank">Instagram</Link>
            <Link className="underline" href="https://www.linkedin.com/" target="_blank">LinkedIn</Link>
          </div>
        </div>
      </section>

      <section id="skills" className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl mb-4">Skills</h2>
          <SkillsGrid />
        </div>
        <div>
          <h2 className="text-xl mb-4">Soft Skills</h2>
          <SoftSkills />
        </div>
      </section>

      <section id="case-studies" className="space-y-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Case Studies</h2>
          <Link href="/work" className="text-sm underline">See all</Link>
        </div>
        <div className="grid gap-8">
          {caseStudies.map((cs) => (<CaseStudyCard key={cs.slug} data={cs} />))}
        </div>
      </section>

      <section id="categories" className="space-y-6">
        <h2 className="text-xl">Categories</h2>
        <CategoryOrbit />
      </section>
    </div>
  );
}
