import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-start font-extrabold uppercase group mix-blend-difference", className)}>
      <div className="flex items-center mb-1 ml-3 md:ml-4">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-brand-white rounded-full mr-2 transition-transform duration-300 group-hover:scale-[1.5]"></div>
        <span className="text-brand-white opacity-80 text-[10px] md:text-xs tracking-[0.4em] transition-opacity duration-300 group-hover:opacity-100">
          PETR
        </span>
      </div>
      <div className="bg-brand-white px-3 pt-1.5 pb-1 md:px-4 md:pt-2 md:pb-1.5 flex items-end">
        <span className="text-brand-black text-2xl md:text-3xl tracking-tighter leading-none block">
          SLAVÍK
        </span>
      </div>
    </div>
  );
}
