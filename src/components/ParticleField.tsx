import { useMemo } from 'react';

const COLORS = ['#22d3ee', '#a78bfa', '#f472b6', '#fbbf24', '#34d399'];

type ParticleFieldProps = {
  count?: number;
  className?: string;
};

export function ParticleField({ count = 50, className = '' }: ParticleFieldProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.5 + 0.15,
        color: COLORS[i % COLORS.length],
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
