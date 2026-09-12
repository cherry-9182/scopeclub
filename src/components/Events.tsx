import { ArrowRight, Calendar, Zap, Cloud, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { ActionBurst, SakuraField } from './AnimeEffects';

const EVENTS = [
  {
    no: '01',
    name: 'Zenith',
    description: "SCOPE Club's flagship event — a celebration of technology, talent, and the spirit of building. Where the community comes together to compete and create.",
    category: 'Flagship Event',
    status: 'Signature',
    featured: false,
    icon: Zap,
    color: '#fbbf24',
    glow: 'hover:border-amber-400/40 hover:shadow-[0_0_40px_-12px_rgba(251,191,36,0.2)]',
    iconColor: 'text-amber-400/50',
    badgeBorder: 'border-amber-400/30',
    badgeText: 'text-amber-300',
    bg: 'bg-amber-500/5',
  },
  {
    no: '02',
    name: 'AWS Cloud Trek 2026',
    description: "A cloud-focused workshop and competition exploring AWS technologies. This website is being built as part of today's Cloud Trek workshop — live and in progress.",
    category: 'Cloud Workshop',
    status: 'Live Now',
    featured: true,
    icon: Cloud,
    color: '#a78bfa',
    glow: 'hover:border-violet-400/50 hover:shadow-[0_0_50px_-10px_rgba(167,139,250,0.3)]',
    iconColor: 'text-violet-300/60',
    badgeBorder: 'border-violet-400/40',
    badgeText: 'text-violet-300',
    bg: 'bg-gradient-to-b from-violet-500/8 to-ink-900/60',
  },
  {
    no: '03',
    name: "Today's Workshop",
    description: "A hands-on building session where members collaborate in real time — learning, shipping, and pushing the boundaries of what's possible together.",
    category: 'Hands-On Session',
    status: 'Active',
    featured: false,
    icon: Wrench,
    color: '#34d399',
    glow: 'hover:border-emerald-400/40 hover:shadow-[0_0_40px_-12px_rgba(52,211,153,0.2)]',
    iconColor: 'text-emerald-400/50',
    badgeBorder: 'border-emerald-400/30',
    badgeText: 'text-emerald-300',
    bg: 'bg-emerald-500/5',
  },
];

function EventCard({ event, index }: { event: (typeof EVENTS)[number]; index: number }) {
  const Icon = event.icon;
  return (
    <Reveal delay={index * 150} as="article">
      <div className={`group relative flex h-full flex-col overflow-hidden rounded-lg border transition-all duration-500 ${event.featured ? `border-violet-400/30 ${event.bg} ${event.glow}` : `border-ink-400/40 bg-ink-800/40 ${event.glow}`}`}>
        {/* Featured badge */}
        {event.featured && (
          <div className={`absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border ${event.badgeBorder} bg-ink-950/60 px-3 py-1 backdrop-blur-sm`}>
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-violet-400" />
            <span className={`font-mono text-[10px] uppercase tracking-wider-2 ${event.badgeText}`}>{event.status}</span>
          </div>
        )}

        {/* Visual header with anime action burst */}
        <div className="relative h-32 overflow-hidden border-b border-ink-400/30">
          <div className="absolute inset-0 bg-grid-pattern bg-grid-sm opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-ink-900/60" />
          <ActionBurst className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-30 transition-opacity duration-500 group-hover:opacity-60" color={event.color} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Icon size={40} strokeWidth={0.75} className={`${event.iconColor} transition-all duration-500 group-hover:scale-110`} />
          </div>
          <span className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">{event.no}</span>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2">
            <Calendar size={12} strokeWidth={1.5} className="text-ash-500" />
            <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">{event.category}</span>
          </div>

          <h3 className="mt-4 font-display text-xl font-bold tracking-tight text-ash-100">{event.name}</h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-ash-300">{event.description}</p>

          <a href="#contact" className="group/link mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider-2 text-ash-400 transition-colors hover:text-violet-300">
            View Event
            <ArrowRight size={12} strokeWidth={1.5} className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function Events() {
  return (
    <section id="events" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-1/3 top-1/4 h-[50vh] w-[50vh] rounded-full bg-violet-500/6 blur-[120px]" />
        <div className="absolute left-1/4 bottom-1/4 h-[40vh] w-[40vh] rounded-full bg-amber-500/4 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-15" />
      </div>
      <SakuraField count={10} className="z-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading label="03 — Events" title={<>Events</>} description="From flagship gatherings to live workshops — the moments where SCOPE comes alive." />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EVENTS.map((event, i) => (
            <EventCard key={event.name} event={event} index={i} />
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-12 flex items-center gap-3 border-t border-violet-500/15 pt-8">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-violet-400" />
            <p className="font-mono text-xs uppercase tracking-wider-2 text-ash-400">
              AWS Cloud Trek 2026 — this website is being built live as part of today's workshop
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
