export function Logo({ scrolled: _scrolled = false }: { scrolled?: boolean }) {
  return (
    <a
      href="#"
      className="relative group flex flex-col justify-center items-start z-50 py-1"
      aria-label="Petr Slavík - Domů"
    >
      <div className="flex flex-col items-start hover:opacity-80 transition-opacity duration-300">
        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#9D9C99] uppercase leading-none mb-0.5">
          Petr
        </span>
        <span className="text-xl sm:text-2xl font-black tracking-[-0.03em] text-[#5C5850] uppercase leading-[0.92]">
          Slavík<span className="text-[#7E7B76]">.</span>
        </span>
      </div>
    </a>
  );
}
