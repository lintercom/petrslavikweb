const services = [
  "TVORBA WEBU",
  "REDESIGN WEBU",
  "ROZŠÍŘENÍ WEBU",
  "MĚSÍČNÍ SPRÁVA",
  "REZERVAČNÍ SYSTÉMY",
  "DLOUHODOBÝ ROZVOJ",
];

export function MarqueeServices() {
  return (
    <div className="w-full overflow-hidden bg-brand-white border-y-2 border-brand-black py-8 md:py-10">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...services, ...services].map((service, index) => (
          <div key={`${service}-${index}`} className="flex items-center mx-8 md:mx-12">
            <div className="w-20 h-10 md:w-24 md:h-12 rounded-full overflow-hidden mr-8 border-2 border-brand-black bg-brand-off-white">
              <img
                src={`https://picsum.photos/seed/${service}/200/100?grayscale`}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight text-brand-black">
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
