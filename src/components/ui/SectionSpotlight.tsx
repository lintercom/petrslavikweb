import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { useSpotlight } from '../providers/SpotlightProvider';

export const SectionSpotlight = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { mouseX, mouseY, tick, isCoarse } = useSpotlight();

  const localX = useMotionValue(-1000);
  const localY = useMotionValue(-1000);
  const opacity = useMotionValue(0);

  // Zvoleno nižší stiffness a damping, pro jemnější a přirozenější tlumení pohybu po zastavení
  const springConfig = { damping: 25, stiffness: 200, mass: 0.3 };
  const x = useSpring(localX, springConfig);
  const y = useSpring(localY, springConfig);

  useEffect(() => {
    if (isCoarse) return;

    const updatePosition = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const cx = mouseX.get();
      const cy = mouseY.get();

      if (cx === -1000 && cy === -1000) return;

      localX.set(cx - rect.left);
      localY.set(cy - rect.top);

      const buffer = 400; // Velikost kruhu
      const inBounds =
        cx >= rect.left - buffer &&
        cx <= rect.right + buffer &&
        cy >= rect.top - buffer &&
        cy <= rect.bottom + buffer;

      opacity.set(inBounds ? 1 : 0);
    };

    const unsubscribe = tick.on('change', updatePosition);
    updatePosition(); // Inicializační update

    return unsubscribe;
  }, [mouseX, mouseY, tick, isCoarse, localX, localY, opacity]);

  if (isCoarse) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
    >
      <motion.div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          x,
          y,
          z: 0,
          opacity,
          willChange: 'transform, opacity',
          transition: 'opacity 0.15s ease-out'
        }}
      >
        <div
          className="w-[400px] h-[400px] bg-white rounded-full mix-blend-difference"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      </motion.div>
    </div>
  );
});

SectionSpotlight.displayName = 'SectionSpotlight';
