import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Events', href: '#events' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-violet-500/20 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5" aria-label="SCOPE Club home">
            <span className="relative flex h-8 w-8 items-center justify-center rounded border border-violet-400/40 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 transition-all duration-300 group-hover:border-violet-300/60">
              <span className="font-display text-sm font-bold tracking-tight text-ash-100">S</span>
              <span className="absolute inset-0 rounded border border-violet-400/0 transition-all duration-500 group-hover:border-violet-400/30 group-hover:shadow-[0_0_20px_-4px_rgba(139,92,246,0.4)]" />
            </span>
            <span className="font-display text-base font-bold tracking-wider-2 text-ash-100">SCOPE</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative px-4 py-2 font-mono text-xs uppercase tracking-wider-2 text-ash-300 transition-colors duration-300 hover:text-ash-100"
                >
                  {link.label}
                  <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-400 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full border border-violet-400/40 bg-violet-500/10 px-5 py-2 font-mono text-xs uppercase tracking-wider-2 text-ash-100 transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-500/20 lg:inline-flex"
            >
              Join SCOPE
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-ash-200 transition-colors hover:text-ash-100 lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-ink-950/95 backdrop-blur-xl transition-opacity duration-500 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm border-l border-violet-500/20 bg-ink-900/90 transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex h-16 items-center justify-between px-5">
            <span className="font-display text-base font-bold tracking-wider-2 text-ash-100">SCOPE</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center text-ash-200 transition-colors hover:text-ash-100"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
          <ul className="flex flex-col gap-1 px-5 pt-6">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.href}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.4s ease-out ${100 + i * 60}ms, transform 0.4s ease-out ${100 + i * 60}ms`,
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between border-b border-ink-400/30 py-4 font-display text-lg font-medium text-ash-200 transition-colors hover:text-ash-100"
                >
                  {link.label}
                  <span className="font-mono text-xs text-ash-500 transition-colors group-hover:text-violet-400">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pt-8">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 px-6 py-3.5 font-mono text-xs uppercase tracking-wider-2 text-ash-100 transition-all duration-300 hover:border-violet-300/60 hover:bg-violet-500/20"
            >
              Join SCOPE
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
