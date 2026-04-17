export function MarqueeServices() {
  const services = [
    "WEBOVÉ STRÁNKY",
    "E-SHOPY",
    "WEBOVÉ APLIKACE",
    "UX/UI DESIGN",
    "INTEGRACE POHODA",
    "AUTOMATIZACE"
  ];

  const duplicatedServices = [...services, ...services];

  return (
    <section className="py-16 bg-brand-white overflow-hidden flex flex-col items-center justify-center border-y border-brand-black">
      <div className="relative w-full flex overflow-hidden whitespace-nowrap">
        <div className="flex items-center gap-8 md:gap-16 animate-marquee">
          {duplicatedServices.map((service, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-12">
              <span className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-brand-black uppercase">
                {service}
              </span>
              <div className="w-16 h-8 md:w-24 md:h-12 rounded-full bg-brand-grey-light overflow-hidden relative shrink-0 grayscale">
                <img 
                  src={`https://picsum.photos/seed/${index}/400/200?blur=2`} 
                  alt="" 
                  width={96}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
