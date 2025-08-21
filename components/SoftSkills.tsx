const soft = ["Reliable","Detail-oriented","Calm under pressure","Fast turnaround","Collaborative","Problem solver"];
export default function SoftSkills() {
  return (
    <div className="flex flex-wrap gap-2">
      {soft.map(s => (<span key={s} className="px-3 py-1.5 rounded-full bg-card backdrop-blur border border-white/10 text-sm">{s}</span>))}
    </div>
  );
}
