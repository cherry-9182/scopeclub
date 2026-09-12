import { useMemo } from 'react';

const PETAL_COLORS = ['#f9a8d4', '#f472b6', '#fbcfe8', '#fda4d8'];

type SakuraFieldProps = {
  count?: number;
  className?: string;
};

export function SakuraField({ count = 20, className = '' }: SakuraFieldProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 10 + 6,
        duration: Math.random() * 12 + 10,
        delay: Math.random() * 12,
        swayDuration: Math.random() * 4 + 3,
        opacity: Math.random() * 0.3 + 0.1,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
        rotateStart: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-[-20px]"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.6}px`,
            opacity: p.opacity,
            backgroundColor: p.color,
            borderRadius: '50% 0 50% 50%',
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite, petalSway ${p.swayDuration}s ease-in-out ${p.delay}s infinite alternate`,
            transform: `rotate(${p.rotateStart}deg)`,
          }}
        />
      ))}
      <style>{`
        @keyframes petalFall {
          0% { top: -20px; }
          100% { top: 105%; }
        }
        @keyframes petalSway {
          0% { margin-left: -15px; }
          100% { margin-left: 15px; }
        }
      `}</style>
    </div>
  );
}

export function SpeedLines({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1200 800" fill="none">
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * 22.5) * (Math.PI / 180);
          const cx = 600;
          const cy = 400;
          const len = 900;
          const x1 = cx + Math.cos(angle) * 120;
          const y1 = cy + Math.sin(angle) * 120;
          const x2 = cx + Math.cos(angle) * len;
          const y2 = cy + Math.sin(angle) * len;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#speedGrad)"
              strokeWidth="1"
              opacity={0.06 + (i % 3) * 0.02}
            />
          );
        })}
        <defs>
          <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function ActionBurst({ className = '', color = '#f472b6' }: { className?: string; color?: string }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 15) * (Math.PI / 180);
        const inner = 30;
        const outer = 90;
        const x1 = 100 + Math.cos(angle) * inner;
        const y1 = 100 + Math.sin(angle) * inner;
        const x2 = 100 + Math.cos(angle) * outer;
        const y2 = 100 + Math.sin(angle) * outer;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity={0.12}
          />
        );
      })}
    </svg>
  );
}

export function MangaPanel({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-violet-400/40" />
      <div className="absolute -right-px -top-px h-3 w-3 border-r-2 border-t-2 border-cyan-400/40" />
      <div className="absolute -bottom-px -left-px h-3 w-3 border-b-2 border-l-2 border-pink-400/40" />
      <div className="absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-amber-400/40" />
      {children}
    </div>
  );
}
