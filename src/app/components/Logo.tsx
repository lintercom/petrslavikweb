export function Logo({ scrolled = false }: { scrolled?: boolean }) {
  return (
    <a 
      href="#" 
      className="relative group flex flex-col justify-center items-start z-50 py-2"
      aria-label="Petr Slavík - Domů"
    >
      <div className="flex flex-col items-start hover:opacity-70 transition-opacity duration-300">
        <span className="text-sm sm:text-[15px] font-bold tracking-[0.35em] text-[#737068] uppercase leading-none -mb-0.5 sm:-mb-1 z-10">
          Petr
        </span>
        <span className="text-2xl sm:text-3xl font-black tracking-[-0.04em] text-[#0D0D0D] uppercase leading-[0.85]">
          Slavík<span className="text-[#737068]">.</span>
        </span>
      </div>
    </a>
  );
}