const links = [
  { label: 'Domů', href: '#' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'Reference', href: '#portfolio' },
  { label: 'Proces', href: '#proces' },
  { label: 'Kontakt', href: '#kontakt' },
  { label: 'O mně', href: '#o-nas' },
];

export function Footer() {
  return (
    <footer className="w-full bg-[#5C5850] text-[#F8F7F5] pt-16 md:pt-24 pb-10 relative z-10 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 pb-14 border-b border-white/10">
          <div className="max-w-md">
            <p className="text-sm font-medium text-[#F8F7F5]/80 leading-relaxed">
              Nezávislý vývojář zaměřený na frontend, architekturu a dlouhodobě
              udržitelný kód. Praha &amp; remote.
            </p>
            <div className="flex gap-3 mt-8">
              {['in', 'GH', 'X'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center text-[11px] font-bold uppercase hover:bg-[#DEEA55] hover:text-[#5C5850] hover:border-[#DEEA55] transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-4 text-[11px] font-semibold uppercase tracking-[0.22em]">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-[#F8F7F5]/75 hover:text-[#DEEA55] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-12 md:pt-16">
          <p className="text-[clamp(3rem,12vw,9rem)] font-black tracking-tighter leading-[0.85] text-[#F8F7F5]/15 select-none pointer-events-none">
            Petr Slavík
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 text-xs font-medium text-[#F8F7F5]/55">
          <p>© {new Date().getFullYear()} Petr Slavík</p>
          <a href="mailto:ahoj@petrslavik.cz" className="hover:text-[#DEEA55] transition-colors">
            ahoj@petrslavik.cz
          </a>
        </div>
      </div>
    </footer>
  );
}
