import { ArrowRight, Smartphone, Code2, Layout, Server } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { MangaPanel } from './AnimeEffects';

const RESOURCES = [
  {
    no: '01',
    title: 'App Development',
    description: 'Learn to design and build full applications — from concept to deployment. Explore frameworks, state management, and user experience.',
    icon: Smartphone,
    meta: 'Mobile · Desktop · Cross-Platform',
    color: '#22d3ee',
    hoverBorder: 'group-hover:border-cyan-400/40',
    hoverBg: 'group-hover:bg-cyan-500/10',
    hoverText: 'group-hover:text-cyan-300',
    hoverArrow: 'group-hover:text-cyan-300',
  },
  {
    no: '02',
    title: 'Python',
    description: 'Master one of the most versatile languages in technology. From scripting and automation to data science and backend systems.',
    icon: Code2,
    meta: 'Scripting · Data · Automation',
    color: '#fbbf24',
    hoverBorder: 'group-hover:border-amber-400/40',
    hoverBg: 'group-hover:bg-amber-500/10',
    hoverText: 'group-hover:text-amber-300',
    hoverArrow: 'group-hover:text-amber-300',
  },
  {
    no: '03',
    title: 'FrontEnd',
    description: 'Craft interfaces that feel alive. Modern frameworks, responsive design, animations, and the art of building for the browser.',
    icon: Layout,
    meta: 'React · CSS · UI/UX',
    color: '#f472b6',
    hoverBorder: 'group-hover:border-pink-400/40',
    hoverBg: 'group-hover:bg-pink-500/10',
    hoverText: 'group-hover:text-pink-300',
    hoverArrow: 'group-hover:text-pink-300',
  },
  {
    no: '04',
    title: 'BackEnd',
    description: 'Build the systems that power everything. APIs, databases, authentication, server architecture, and scalable infrastructure.',
    icon: Server,
    meta: 'APIs · Databases · Infrastructure',
    color: '#34d399',
    hoverBorder: 'group-hover:border-emerald-400/40',
    hoverBg: 'group-hover:bg-emerald-500/10',
    hoverText: 'group-hover:text-emerald-300',
    hoverArrow: 'group-hover:text-emerald-300',
  },
];

export function Resources() {
  return (
    <section id="resources" className="relative overflow-hidden border-y border-ink-400/20 bg-ink-900/40 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[40vh] w-[60vh] -translate-x-1/2 rounded-full bg-pink-500/4 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[35vh] w-[35vh] rounded-full bg-cyan-500/4 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading label="04 — Resources" title={<>Resources</>} description="A curated technical archive — learning tracks covering the full spectrum of modern development." />

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-ink-400/40 bg-ink-400/30 sm:grid-cols-2">
          {RESOURCES.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <Reveal key={resource.title} delay={i * 100}>
                <MangaPanel className="group relative flex h-full items-start gap-5 bg-ink-900/80 p-7 transition-all duration-500 hover:bg-ink-800/60 sm:p-8">
                  {/* Icon */}
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-ink-300/40 bg-ink-800/60 transition-all duration-500 ${resource.hoverBorder} ${resource.hoverBg}`}>
                    <Icon size={20} strokeWidth={1.25} className={`text-ash-400 transition-colors duration-500 ${resource.hoverText}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">{resource.no}</span>
                      <ArrowRight size={14} strokeWidth={1.5} className={`text-ash-500 transition-all duration-500 group-hover:translate-x-1 ${resource.hoverArrow}`} />
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-ash-100">{resource.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ash-300">{resource.description}</p>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">{resource.meta}</p>
                  </div>
                </MangaPanel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
