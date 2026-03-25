import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NeuralFragmentsLayer } from './components/NeuralFragmentsLayer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F7F5] text-[#5C5850] selection:bg-[#DEEA55]/45 selection:text-[#5C5850] font-sans antialiased relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-15%] w-[70vw] max-w-[900px] h-[70vw] max-h-[900px] rounded-full bg-[#9C9F5B]/[0.06] blur-[100px]" />
        <div className="absolute bottom-[-25%] left-[-10%] w-[55vw] max-w-[700px] h-[55vw] max-h-[700px] rounded-full bg-[#DEEA55]/[0.07] blur-[90px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <NeuralFragmentsLayer />
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
