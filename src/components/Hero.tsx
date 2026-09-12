import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ParticleField } from './ParticleField';
import { SakuraField, SpeedLines, ActionBurst } from './AnimeEffects';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-ink-950 grain scanlines">
      {/* Aurora background layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-[15%] top-[10%] h-[50vh] w-[50vh] rounded-full bg-violet-500/12 blur-[120px] animate-aurora" />
        <div className="absolute right-[10%] top-[20%] h-[45vh] w-[45vh] rounded-full bg-cyan-500/10 blur-[110px] animate-aurora-2" />
        <div className="absolute left-[40%] bottom-[5%] h-[40vh] w-[40vh] rounded-full bg-pink-500/8 blur-[100px] animate-aurora-3" />
        <div className="absolute right-[25%] bottom-[15%] h-[35vh] w-[35vh] rounded-full bg-blue-500/8 blur-[100px] animate-aurora" />
        {/* Grid */}
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-30" style={{ transform: `translateY(${scrollY * 0.1}px)` }} />
        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-fade from-transparent via-transparent to-ink-950" />
        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink-950 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      {/* Particles */}
      <ParticleField count={55} className="z-10" />

      {/* Anime speed lines radiating from center */}
      <SpeedLines className="z-5" />

      {/* Action burst behind heading */}
      <ActionBurst className="absolute left-1/2 top-1/2 z-5 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 opacity-50 animate-pulse-soft" color="#a78bfa" />

      {/* Sakura petals */}
      <SakuraField count={18} className="z-10" />

      {/* Floating UI elements */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute left-[8%] top-[22%] hidden md:block" style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
          <div className="animate-float-slow rounded border border-violet-400/20 bg-violet-500/5 px-3 py-2 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider-2 text-violet-300/70">// sys.init</span>
          </div>
        </div>
        <div className="absolute right-[10%] top-[30%] hidden md:block" style={{ transform: `translateY(${scrollY * -0.12}px)` }}>
          <div className="animate-float rounded border border-cyan-400/20 bg-cyan-500/5 px-3 py-2 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider-2 text-cyan-300/70">status: active</span>
          </div>
        </div>
        <div className="absolute bottom-[20%] left-[12%] hidden lg:block" style={{ transform: `translateY(${scrollY * -0.05}px)` }}>
          <div className="animate-float-slow rounded border border-pink-400/20 bg-pink-500/5 px-3 py-2 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider-2 text-pink-300/70">v.2026</span>
          </div>
        </div>
        <div className="absolute bottom-[25%] right-[15%] hidden lg:block" style={{ transform: `translateY(${scrollY * -0.15}px)` }}>
          <div className="animate-float rounded border border-amber-400/20 bg-amber-500/5 px-3 py-2 backdrop-blur-sm">
            <span className="font-mono text-[10px] uppercase tracking-wider-2 text-amber-300/70">[ scope_club ]</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 lg:px-12">
        <div className={`mb-8 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-violet-400/50" />
            <span className="font-mono text-xs uppercase tracking-ultra-wide text-ash-300">Technology Community</span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400/50" />
          </div>
        </div>

        <h1 className={`text-center transition-all duration-1000 delay-200 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <span className="block font-display text-6xl font-bold tracking-tight text-gradient text-glow-accent sm:text-7xl md:text-8xl lg:text-9xl">
            SCOPE
          </span>
          <span className="mt-2 block font-display text-2xl font-light tracking-[0.4em] text-ash-200 sm:text-3xl md:text-4xl">
            CLUB
          </span>
        </h1>

        <p className={`mt-8 text-center font-display text-lg font-medium tracking-wider text-ash-100 sm:text-xl md:text-2xl transition-all duration-1000 delay-700 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          Build. Compete. Create. Evolve.
        </p>

        <p className={`mt-5 max-w-xl text-center text-sm leading-relaxed text-ash-300 sm:text-base transition-all duration-1000 delay-900 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          A technology-focused student community pushing the boundaries of code,
          creativity, and collaboration — through hackathons, contests, and real-world projects.
        </p>

        <div className={`mt-10 flex flex-col items-center gap-4 transition-all duration-1000 delay-[1100ms] ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} sm:flex-row`}>
          <a href="#about" className="btn-primary group">
            Explore SCOPE
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a href="#events" className="btn-ghost group">
            Explore Events
            <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${mounted && scrollY < 100 ? 'opacity-60' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-400">Scroll</span>
          <ChevronDown size={16} strokeWidth={1.5} className="animate-pulse-soft text-violet-400/60" />
        </div>
      </div>
    </section>
  );
}
