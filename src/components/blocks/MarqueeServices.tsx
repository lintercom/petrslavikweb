import { Code2, Gauge, RefreshCcw, Settings2, ShieldCheck, TrendingUp } from 'lucide-react';

const services = [
  "TVORBA WEBU",
  "REDESIGN WEBU",
  "ROZŠÍŘENÍ WEBU",
  "MĚSÍČNÍ SPRÁVA",
  "REZERVAČNÍ SYSTÉMY",
  "DLOUHODOBÝ ROZVOJ",
];

const icons = [Code2, RefreshCcw, Settings2, ShieldCheck, Gauge, TrendingUp];

export function MarqueeServices() {
  const renderGroup = (groupIndex: number) => (
    <div className="flex shrink-0 items-center" aria-hidden={groupIndex > 0}>
      {services.map((service, index) => {
        const Icon = icons[index % icons.length];

        return (
          <div key={`${service}-${groupIndex}`} className="flex items-center">
            <span className="mx-6 md:mx-8 text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-brand-black">
              {service}
            </span>
            <span className="mx-3 md:mx-5 flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center border-2 border-brand-black bg-brand-white shadow-[3px_3px_0px_0px_rgba(18,18,18,1)] rotate-[-3deg]">
              <Icon className="h-6 w-6 md:h-7 md:w-7 text-brand-black" strokeWidth={2.5} />
            </span>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full overflow-hidden bg-brand-white border-y-2 border-brand-black py-8 md:py-10">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {renderGroup(0)}
        {renderGroup(1)}
      </div>
    </div>
  );
}
