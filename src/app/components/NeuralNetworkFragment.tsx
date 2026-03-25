import { useEffect, useRef } from 'react';

type FragmentVariant = 'neutral' | 'sage' | 'lime';

const VARIANT_COLORS: Record<
  FragmentVariant,
  { node: string; line: string; lineBoost: number }
> = {
  neutral: { node: '92, 88, 80', line: '157, 156, 153', lineBoost: 1 },
  sage: { node: '156, 159, 91', line: '127, 130, 75', lineBoost: 1.1 },
  lime: { node: '222, 234, 85', line: '156, 159, 91', lineBoost: 0.85 },
};

interface NeuralNetworkFragmentProps {
  particleCount?: number;
  connectionDistance?: number;
  particleSpeed?: number;
  opacity?: number;
  variant?: FragmentVariant;
  className?: string;
}

export function NeuralNetworkFragment({
  particleCount = 8,
  connectionDistance = 120,
  particleSpeed = 0.15,
  opacity = 0.4,
  variant = 'neutral',
  className = ''
}: NeuralNetworkFragmentProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { node: nodeRgb, line: lineRgb, lineBoost } = VARIANT_COLORS[variant];

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      }
      init();
    };

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * particleSpeed;
        this.vy = (Math.random() - 0.5) * particleSpeed;
        this.size = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Soft bounce off walls
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${opacity * 0.75})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            const a =
              opacity * lineBoost * 0.45 * (1 - distance / connectionDistance);
            ctx.strokeStyle = `rgba(${lineRgb}, ${a})`;
            ctx.lineWidth = 0.75;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, connectionDistance, particleSpeed, opacity, variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute pointer-events-none ${className}`}
    />
  );
}
