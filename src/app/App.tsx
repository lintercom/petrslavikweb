import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F2F2F2] text-[#0D0D0D] selection:bg-[#D9D4C5]/40 selection:text-[#0D0D0D] font-sans antialiased relative overflow-x-hidden">
      
      {/* Premium Multi-layered Background */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden flex justify-center">
        {/* Soft Ambient Light Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-[#D9D4C5]/40 via-[#A6A297]/20 to-transparent blur-[120px] opacity-80" />
        <div className="absolute top-[20%] right-[-20%] w-[1200px] h-[1200px] rounded-full bg-gradient-to-tl from-[#A6A297]/30 via-[#D9D4C5]/40 to-transparent blur-[150px] opacity-70" />
        <div className="absolute bottom-[-10%] left-[10%] w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-[#737068]/20 to-[#A6A297]/10 blur-[100px] opacity-60" />
        
        {/* Ultra-refined Premium Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSJyZ2JhKDE2NiwgMTYyLCAxNTEsIDAuMSkiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTYwIDBoLTYwdjYwSDB6Ii8+PC9nPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] opacity-70"></div>
      </div>
      
      <Header />
      <main className="relative z-10 flex flex-col items-center w-full">
        <div className="w-full">
          <Hero />
          <Services />
          <Portfolio />
          <Process />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}