import { Instagram, Linkedin } from 'lucide-react';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Events', href: '#events' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-violet-500/15 bg-ink-950">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-8" />
        <div className="absolute left-0 top-0 h-[30vh] w-[40vh] rounded-full bg-violet-500/4 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="group flex items-center gap-2.5" aria-label="SCOPE Club home">
              <span className="relative flex h-9 w-9 items-center justify-center rounded border border-violet-400/40 bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                <span className="font-display text-base font-bold tracking-tight text-ash-100">S</span>
              </span>
              <span className="font-display text-lg font-bold tracking-wider-2 text-ash-100">SCOPE</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ash-400">
              Build. Compete. Create. Evolve. A technology-focused student community
              pushing the boundaries of code and creativity.
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-wider-2 text-ash-600">// student.tech.community</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-wider-2 text-ash-500">Navigation</span>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-ash-300 transition-colors hover:text-ash-100">
                    <span className="h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <span className="font-mono text-xs uppercase tracking-wider-2 text-ash-500">Connect</span>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="group flex h-11 w-11 items-center justify-center rounded-lg border border-ink-400/40 bg-ink-800/40 transition-all duration-300 hover:border-pink-400/40 hover:bg-pink-500/10">
                <Instagram size={18} strokeWidth={1.5} className="text-ash-300 transition-colors group-hover:text-pink-300" />
              </a>
              <a href="#" aria-label="LinkedIn" className="group flex h-11 w-11 items-center justify-center rounded-lg border border-ink-400/40 bg-ink-800/40 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10">
                <Linkedin size={18} strokeWidth={1.5} className="text-ash-300 transition-colors group-hover:text-blue-300" />
              </a>
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-wider-2 text-ash-600">
              Links are placeholders — replace with SCOPE Club URLs
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-400/20 py-6 sm:flex-row">
          <p className="font-mono text-xs text-ash-500">© {new Date().getFullYear()} SCOPE Club. All rights reserved.</p>
          <p className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-600">Built for AWS Cloud Trek 2026</p>
        </div>
      </div>
    </footer>
  );
}
