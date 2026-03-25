import { NeuralNetworkFragment } from './NeuralNetworkFragment';

export function Footer() {
  return (
    <footer className="w-full bg-[#F2F2F2] pt-24 pb-12 relative z-0">
      {/* Neural Network Fragments */}
      <NeuralNetworkFragment 
        particleCount={9}
        connectionDistance={120}
        particleSpeed={0.09}
        opacity={0.24}
        className="top-10 right-10 w-[280px] h-[280px] z-0"
      />
      <NeuralNetworkFragment 
        particleCount={11}
        connectionDistance={135}
        particleSpeed={0.11}
        opacity={0.3}
        className="bottom-0 left-1/3 w-[360px] h-[360px] z-0"
      />
      
      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10 flex flex-col justify-between h-full">
        
        {/* Adjusted Typographic Base */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-[#D9D4C5] pb-10 mb-10 gap-8">
          <div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-[#0D0D0D] uppercase -ml-1">
              Petr Slavík.
            </h2>
          </div>
          
          <div className="pb-2 flex gap-8 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0D0D0D]">
            <a href="#" className="relative group transition-colors hover:text-[#737068] py-1">
              LinkedIn
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#737068] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left rounded-full"></span>
            </a>
            <a href="#" className="relative group transition-colors hover:text-[#737068] py-1">
              GitHub
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#737068] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left rounded-full"></span>
            </a>
            <a href="#" className="relative group transition-colors hover:text-[#737068] py-1">
              X (Twitter)
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#737068] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left rounded-full"></span>
            </a>
          </div>
        </div>
        
        {/* Bottom Metadata Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-xs sm:text-sm font-medium text-[#0D0D0D]/70">
          
          <div className="md:col-span-4">
            <p>Nezávislý Vývojář<br/>Praha, Česká republika</p>
          </div>
          
          <div className="md:col-span-4">
            <a href="mailto:ahoj@petrslavik.cz" className="text-[#0D0D0D] hover:text-[#737068] transition-colors block mb-1">ahoj@petrslavik.cz</a>
            <p>+420 123 456 789</p>
          </div>
          
          <div className="md:col-span-4 flex flex-col sm:flex-row justify-start md:justify-end gap-4 sm:gap-8">
            <a href="#" className="hover:text-[#0D0D0D] transition-colors">IČO: 12345678</a>
            <span>© {new Date().getFullYear()} Petr Slavík</span>
          </div>

        </div>

      </div>
    </footer>
  );
}