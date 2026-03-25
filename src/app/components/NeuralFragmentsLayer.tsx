import { NeuralNetworkFragment } from './NeuralNetworkFragment';

/** Rozptýlené fragmenty neuronové sítě — fixní „náhodné“ pozice pro stabilní layout */
const FRAGMENTS = [
  { className: 'top-[4%] left-[2%] w-[140px] h-[120px]', particleCount: 7, connectionDistance: 95, speed: 0.1, opacity: 0.22, variant: 'neutral' as const },
  { className: 'top-[12%] right-[8%] w-[180px] h-[160px]', particleCount: 9, connectionDistance: 110, speed: 0.08, opacity: 0.18, variant: 'sage' as const },
  { className: 'top-[28%] left-[18%] w-[100px] h-[90px]', particleCount: 5, connectionDistance: 70, speed: 0.12, opacity: 0.2, variant: 'lime' as const },
  { className: 'top-[42%] right-[4%] w-[220px] h-[200px]', particleCount: 11, connectionDistance: 125, speed: 0.09, opacity: 0.16, variant: 'neutral' as const },
  { className: 'top-[55%] left-[6%] w-[160px] h-[140px]', particleCount: 8, connectionDistance: 100, speed: 0.11, opacity: 0.19, variant: 'sage' as const },
  { className: 'top-[68%] right-[22%] w-[130px] h-[110px]', particleCount: 6, connectionDistance: 85, speed: 0.1, opacity: 0.21, variant: 'neutral' as const },
  { className: 'top-[78%] left-[35%] w-[90px] h-[80px]', particleCount: 5, connectionDistance: 65, speed: 0.14, opacity: 0.17, variant: 'lime' as const },
  { className: 'top-[88%] right-[12%] w-[170px] h-[150px]', particleCount: 9, connectionDistance: 105, speed: 0.07, opacity: 0.15, variant: 'sage' as const },
  { className: 'top-[36%] left-[48%] w-[120px] h-[100px]', particleCount: 6, connectionDistance: 78, speed: 0.11, opacity: 0.14, variant: 'neutral' as const },
  { className: 'top-[62%] right-[40%] w-[110px] h-[95px]', particleCount: 5, connectionDistance: 72, speed: 0.13, opacity: 0.18, variant: 'lime' as const },
  { className: 'top-[18%] left-[55%] w-[80px] h-[70px]', particleCount: 4, connectionDistance: 58, speed: 0.15, opacity: 0.16, variant: 'neutral' as const },
  { className: 'top-[50%] left-[72%] w-[150px] h-[130px]', particleCount: 8, connectionDistance: 92, speed: 0.09, opacity: 0.17, variant: 'sage' as const },
];

export function NeuralFragmentsLayer() {
  return (
    <div className="relative w-full h-full min-h-full overflow-hidden" aria-hidden>
      {FRAGMENTS.map((f, i) => (
        <NeuralNetworkFragment
          key={i}
          particleCount={f.particleCount}
          connectionDistance={f.connectionDistance}
          particleSpeed={f.speed}
          opacity={f.opacity}
          variant={f.variant}
          className={`absolute z-0 ${f.className}`}
        />
      ))}
    </div>
  );
}
