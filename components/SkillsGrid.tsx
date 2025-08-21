import Image from "next/image";
const skills = [
  { name: "After Effects", icon: "/icons/after-effects.svg" },
  { name: "Photoshop", icon: "/icons/photoshop.svg" },
  { name: "Illustrator", icon: "/icons/illustrator.svg" },
  { name: "Premiere", icon: "/icons/premiere.svg" },
  { name: "DaVinci", icon: "/icons/davinci.svg" },
  { name: "Blender", icon: "/icons/blender.svg" },
  { name: "Dragonframe", icon: "/icons/dragonframe.svg" },
  { name: "FL Studio", icon: "/icons/flstudio.svg" },
];
export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
      {skills.map(s => (
        <div key={s.name} className="p-3 rounded-2xl bg-card backdrop-blur border border-white/10 text-center">
          <div className="relative w-12 h-12 mx-auto mb-2">
            <Image src={s.icon} alt={s.name} fill sizes="48px" className="object-contain" />
          </div>
          <div className="text-sm">{s.name}</div>
        </div>
      ))}
    </div>
  );
}
