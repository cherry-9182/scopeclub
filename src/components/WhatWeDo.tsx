import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const ACTIVITIES = [
  {
    no: '01',
    title: 'Hackathons',
    description: 'Build solutions, collaborate with teams, and turn ideas into working products. Intense, time-bound challenges that push creativity and execution.',
    tags: ['Team Building', 'Rapid Prototyping', 'Real Solutions'],
    visual: 'hackathons',
    color: '#22d3ee',
    glow: 'hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.25)]',
    iconBg: 'group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 group-hover:text-cyan-300',
  tagBorder: 'border-cyan-400/30 text-cyan-300/70',
  gradient: 'from-cyan-500/8 to-transparent',
  stroke: 'rgba(34,211,238,',
  },
  {
    no: '02',
    title: 'Coding Contests',
    description: 'Challenge technical skills through competitive programming and problem solving. Sharpen algorithms, data structures, and speed under pressure.',
    tags: ['Algorithms', 'Problem Solving', 'Competition'],
    visual: 'contests',
    color: '#a78bfa',
    glow: 'hover:border-violet-400/40 hover:shadow-[0_0_40px_-12px_rgba(167,139,250,0.25)]',
    iconBg: 'group-hover:border-violet-400/40 group-hover:bg-violet-500/10 group-hover:text-violet-300',
    tagBorder: 'border-violet-400/30 text-violet-300/70',
    gradient: 'from-violet-500/8 to-transparent',
    stroke: 'rgba(167,139,250,',
  },
  {
    no: '03',
    title: 'Projects',
    description: 'Build practical projects and experiment with new technologies. Apply what you learn, explore frameworks, and ship things that actually work.',
    tags: ['Hands-On', 'Experimentation', 'Shipping'],
    visual: 'projects',
    color: '#f472b6',
    glow: 'hover:border-pink-400/40 hover:shadow-[0_0_40px_-12px_rgba(244,114,182,0.25)]',
    iconBg: 'group-hover:border-pink-400/40 group-hover:bg-pink-500/10 group-hover:text-pink-300',
    tagBorder: 'border-pink-400/30 text-pink-300/70',
    gradient: 'from-pink-500/8 to-transparent',
    stroke: 'rgba(244,114,182,',
  },
];

function ActivityVisual({ type, stroke }: { type: string; stroke: string }) {
  return (
    <div className="relative h-40 overflow-hidden border-b border-ink-400/30">
      <div className={`absolute inset-0 bg-gradient-to-b ${type === 'hackathons' ? 'from-cyan-500/8' : type === 'contests' ? 'from-violet-500/8' : 'from-pink-500/8'} to-transparent`} />
      <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20" />

      {type === 'hackathons' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
            <circle cx="60" cy="60" r="6" stroke={`${stroke}0.5)`} strokeWidth="1" />
            <circle cx="100" cy="40" r="6" stroke={`${stroke}0.4)`} strokeWidth="1" />
            <circle cx="140" cy="60" r="6" stroke={`${stroke}0.5)`} strokeWidth="1" />
            <circle cx="100" cy="85" r="6" stroke={`${stroke}0.4)`} strokeWidth="1" />
            <line x1="66" y1="60" x2="94" y2="40" stroke={`${stroke}0.2)`} strokeWidth="0.5" />
            <line x1="106" y1="40" x2="134" y2="60" stroke={`${stroke}0.2)`} strokeWidth="0.5" />
            <line x1="60" y1="66" x2="100" y2="79" stroke={`${stroke}0.2)`} strokeWidth="0.5" />
            <line x1="140" y1="66" x2="100" y2="79" stroke={`${stroke}0.2)`} strokeWidth="0.5" />
            <line x1="66" y1="60" x2="134" y2="60" stroke={`${stroke}0.15)`} strokeWidth="0.5" strokeDasharray="2 4" />
            <text x="100" y="108" textAnchor="middle" fill={`${stroke}0.4)`} fontSize="6" fontFamily="monospace">COLLABORATE</text>
          </svg>
        </div>
      )}

      {type === 'contests' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
            <path d="M70 35 L55 60 L70 85" stroke={`${stroke}0.4)`} strokeWidth="1" strokeLinecap="round" />
            <path d="M130 35 L145 60 L130 85" stroke={`${stroke}0.4)`} strokeWidth="1" strokeLinecap="round" />
            <line x1="85" y1="45" x2="115" y2="45" stroke={`${stroke}0.25)`} strokeWidth="0.5" />
            <line x1="90" y1="60" x2="110" y2="60" stroke={`${stroke}0.25)`} strokeWidth="0.5" />
            <line x1="85" y1="75" x2="115" y2="75" stroke={`${stroke}0.25)`} strokeWidth="0.5" />
            <text x="100" y="108" textAnchor="middle" fill={`${stroke}0.4)`} fontSize="6" fontFamily="monospace">COMPETE</text>
          </svg>
        </div>
      )}

      {type === 'projects' && (
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 120" className="h-full w-full" fill="none">
            <rect x="75" y="30" width="50" height="20" rx="2" stroke={`${stroke}0.4)`} strokeWidth="1" />
            <rect x="75" y="55" width="50" height="20" rx="2" stroke={`${stroke}0.3)`} strokeWidth="1" />
            <rect x="75" y="80" width="50" height="20" rx="2" stroke={`${stroke}0.2)`} strokeWidth="1" />
            <line x1="85" y1="40" x2="115" y2="40" stroke={`${stroke}0.25)`} strokeWidth="0.5" />
            <line x1="85" y1="65" x2="105" y2="65" stroke={`${stroke}0.25)`} strokeWidth="0.5" />
            <line x1="85" y1="90" x2="110" y2="90" stroke={`${stroke}0.25)`} strokeWidth="0.5" />
            <text x="100" y="115" textAnchor="middle" fill={`${stroke}0.4)`} fontSize="6" fontFamily="monospace">BUILD</text>
          </svg>
        </div>
      )}
    </div>
  );
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden border-y border-ink-400/20 bg-ink-900/40 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/4 top-0 h-[40vh] w-[40vh] rounded-full bg-violet-500/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-0 h-[35vh] w-[35vh] rounded-full bg-cyan-500/4 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading label="02 — Activities" title={<>What We Do</>} description="Three core pillars define how SCOPE members learn, grow, and compete." />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {ACTIVITIES.map((activity, i) => (
            <Reveal key={activity.title} delay={i * 150}>
              <article className={`card-base group h-full transition-all duration-500 ${activity.glow}`}>
                <ActivityVisual type={activity.visual} stroke={activity.stroke} />

                <div className="p-7">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider-2 text-ash-500">{activity.no}</span>
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-ink-300/40 text-ash-400 transition-all duration-500 ${activity.iconBg}`}>
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-ash-100">{activity.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ash-300">{activity.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <span key={tag} className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-wider-2 ${activity.tagBorder}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
