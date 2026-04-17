import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useMotionValue, MotionValue } from 'motion/react';

interface SpotlightContextType {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  tick: MotionValue<number>;
  isCoarse: boolean;
}

const SpotlightContext = createContext<SpotlightContextType | null>(null);

export function SpotlightProvider({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const tick = useMotionValue(0);

  const [isCoarse] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: coarse)').matches : false
  );

  useEffect(() => {
    if (isCoarse) return;

    let lastX = -1000;
    let lastY = -1000;
    let frameId: number;
    let ticking = false;

    const requestTick = () => {
      if (!ticking) {
        frameId = requestAnimationFrame(() => {
          mouseX.set(lastX);
          mouseY.set(lastY);
          tick.set(tick.get() + 1);
          ticking = false;
        });
        ticking = true;
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      requestTick();
    };

    const handleScrollOrResize = () => {
      requestTick();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      cancelAnimationFrame(frameId);
    };
  }, [isCoarse, mouseX, mouseY, tick]);

  const value = useMemo(() => ({ mouseX, mouseY, tick, isCoarse }), [mouseX, mouseY, tick, isCoarse]);

  return (
    <SpotlightContext.Provider value={value}>
      {children}
    </SpotlightContext.Provider>
  );
}

export function useSpotlight() {
  const ctx = useContext(SpotlightContext);
  if (!ctx) throw new Error('useSpotlight must be used within SpotlightProvider');
  return ctx;
}
