export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-8 flex items-center justify-between">
        <p className="text-sm text-neutral-400">Crafted with care. Let’s build something clean & impactful.</p>
        <div className="flex gap-3 text-sm">
          <a href="mailto:example@email.com" className="underline">Email</a>
          <a href="https://www.instagram.com/" target="_blank" className="underline">Instagram</a>
          <a href="https://www.linkedin.com/" target="_blank" className="underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
