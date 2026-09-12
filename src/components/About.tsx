import { Reveal } from './Reveal';
import { MangaPanel, ActionBurst } from './AnimeEffects';

const STATS = [
  { value: '03', label: 'Core Activities', sub: 'Hackathons · Contests · Projects', color: 'text-cyan-300', glow: 'group-hover:shadow-[0_0_30px_-12px_rgba(34,211,238,0.4)]' },
  { value: '04', label: 'Resource Tracks', sub: 'App · Python · Front · Back', color: 'text-violet-300', glow: 'group-hover:shadow-[0_0_30px_-12px_rgba(167,139,250,0.4)]' },
  { value: '03', label: 'Flagship Events', sub: 'Zenith · Cloud Trek · Workshop', color: 'text-pink-300', glow: 'group-hover:shadow-[0_0_30px_-12px_rgba(244,114,182,0.4)]' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/4 h-[40vh] w-[40vh] rounded-full bg-violet-500/6 blur-[100px]" />
        <div className="absolute left-0 bottom-1/4 h-[35vh] w-[35vh] rounded-full bg-cyan-500/5 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/50" />
            <span className="section-label">01 — About</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-bold leading-[1.1] tracking-tight text-ash-100 sm:text-5xl lg:text-6xl">
            Inside <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">SCOPE</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: editorial text */}
          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <p className="font-display text-xl font-light leading-relaxed text-ash-200 sm:text-2xl">
                SCOPE Club is a technology-focused student community where
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent"> ambition meets execution</span>.
                We exist to push the boundaries of what students can build, compete in,
                and create — together.
              </p>
            </Reveal>

            <Reveal delay={250}>
              <div className="mt-8 space-y-5 border-l border-violet-400/30 pl-6">
                <p className="text-sm leading-relaxed text-ash-300 sm:text-base">
                  Through hackathons, coding contests, and hands-on projects, members
                  sharpen their skills, collaborate with peers, and turn ideas into
                  working solutions. It's a space to experiment, fail forward, and
                  grow as developers.
                </p>
                <p className="text-sm leading-relaxed text-ash-300 sm:text-base">
                  SCOPE is built on the belief that the best way to learn technology is
                  to <span className="text-cyan-300">build with it</span>. Whether you're
                  shipping your first app or solving complex algorithmic problems, the
                  club provides the structure, community, and momentum to keep evolving.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink-400/30 pt-6">
                {['Community', 'Technology', 'Collaboration', 'Growth'].map((tag, i) => (
                  <span key={tag} className="font-mono text-xs uppercase tracking-wider-2" style={{ color: ['#a78bfa', '#22d3ee', '#f472b6', '#34d399'][i] }}>
                    / {tag}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: identity panel */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <MangaPanel className="card-base grain p-8">
                <div className="flex items-center justify-between border-b border-ink-400/30 pb-4">
                  <span className="font-mono text-xs uppercase tracking-wider-2 text-ash-400">Club Identity</span>
                  <span className="flex h-2 w-2">
                    <span className="h-2 w-2 animate-pulse-soft rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">Designation</span>
                    <p className="mt-1 font-display text-lg font-medium text-ash-100">Student Technology Community</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">Focus</span>
                    <p className="mt-1 font-display text-lg font-medium text-ash-100">Hackathons · Contests · Projects</p>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">Mission</span>
                    <p className="mt-1 text-sm leading-relaxed text-ash-300">
                      Build solutions, challenge technical skills, and experiment with
                      new technologies — as a community.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-ink-400/30 pt-6">
                  <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">// SCOPE_ID</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">EST. Student Run</span>
                </div>
              </MangaPanel>
            </Reveal>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-lg border border-ink-400/40 bg-ink-400/30 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className={`group h-full bg-ink-900/80 p-8 transition-all duration-500 hover:bg-ink-800/60 ${stat.glow}`}>
                <span className={`font-display text-5xl font-bold transition-colors duration-500 ${stat.color}`}>{stat.value}</span>
                <p className="mt-3 font-mono text-xs uppercase tracking-wider-2 text-ash-300">{stat.label}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">{stat.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
