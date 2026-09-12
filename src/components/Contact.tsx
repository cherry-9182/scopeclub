import { useState } from 'react';
import { Instagram, Linkedin, Send, Check } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';
import { SakuraField } from './AnimeEffects';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-1/2 h-[50vh] w-[60vh] -translate-x-1/2 rounded-full bg-violet-500/6 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[35vh] w-[35vh] rounded-full bg-pink-500/4 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid-lg opacity-15" />
      </div>
      <SakuraField count={8} className="z-5" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading label="05 — Contact" title={<>Connect With SCOPE</>} description="Ready to build, compete, and create? Reach out — whether you want to join, collaborate, or just learn more." />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} className="card-base grain p-8 sm:p-10">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wider-2 text-ash-400">Name</label>
                    <input
                      id="name" type="text" required value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-lg border border-ink-400/40 bg-ink-800/40 px-4 py-3 text-sm text-ash-100 placeholder-ash-500 transition-all duration-300 focus:border-violet-400/50 focus:bg-ink-800/60 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wider-2 text-ash-400">Email</label>
                    <input
                      id="email" type="email" required value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-lg border border-ink-400/40 bg-ink-800/40 px-4 py-3 text-sm text-ash-100 placeholder-ash-500 transition-all duration-300 focus:border-violet-400/50 focus:bg-ink-800/60 focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wider-2 text-ash-400">Message</label>
                    <textarea
                      id="message" required rows={5} value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full resize-none rounded-lg border border-ink-400/40 bg-ink-800/40 px-4 py-3 text-sm text-ash-100 placeholder-ash-500 transition-all duration-300 focus:border-violet-400/50 focus:bg-ink-800/60 focus:outline-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button type="submit" disabled={submitted} className="btn-primary group w-full disabled:cursor-not-allowed">
                    {submitted ? (
                      <><Check size={14} strokeWidth={2} /> Message Sent</>
                    ) : (
                      <>Send Message <Send size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" /></>
                    )}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          {/* Right: Social + Info */}
          <div className="lg:col-span-5">
            <Reveal delay={150}>
              <div className="flex h-full flex-col gap-6">
                {/* Social links */}
                <div className="card-base p-8">
                  <span className="font-mono text-xs uppercase tracking-wider-2 text-ash-400">Follow SCOPE</span>
                  <p className="mt-3 text-sm leading-relaxed text-ash-300">Stay connected and keep up with events, projects, and community updates.</p>

                  <div className="mt-6 space-y-3">
                    <a href="#" className="group flex items-center gap-4 rounded-lg border border-ink-400/40 bg-ink-800/40 p-4 transition-all duration-300 hover:border-pink-400/40 hover:bg-pink-500/10">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300/40 bg-ink-800/60 transition-all duration-300 group-hover:border-pink-400/40 group-hover:bg-pink-500/10">
                        <Instagram size={18} strokeWidth={1.5} className="text-ash-300 transition-colors group-hover:text-pink-300" />
                      </span>
                      <div className="flex-1">
                        <p className="font-display text-sm font-medium text-ash-100">Instagram</p>
                        <p className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">@scopeclub — placeholder link</p>
                      </div>
                    </a>

                    <a href="#" className="group flex items-center gap-4 rounded-lg border border-ink-400/40 bg-ink-800/40 p-4 transition-all duration-300 hover:border-blue-400/40 hover:bg-blue-500/10">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300/40 bg-ink-800/60 transition-all duration-300 group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                        <Linkedin size={18} strokeWidth={1.5} className="text-ash-300 transition-colors group-hover:text-blue-300" />
                      </span>
                      <div className="flex-1">
                        <p className="font-display text-sm font-medium text-ash-100">LinkedIn</p>
                        <p className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">SCOPE Club — placeholder link</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Info card */}
                <div className="card-base flex-1 p-8">
                  <span className="font-mono text-xs uppercase tracking-wider-2 text-ash-400">Community</span>
                  <p className="mt-4 text-sm leading-relaxed text-ash-300">
                    SCOPE Club is a student-run technology community. We're always
                    looking for builders, problem solvers, and creative minds to join us.
                  </p>
                  <div className="mt-6 space-y-2 border-t border-ink-400/30 pt-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">Status</span>
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider-2 text-violet-300">
                        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-violet-400" />Active
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-500">Open To</span>
                      <span className="font-mono text-[10px] uppercase tracking-wider-2 text-ash-300">All Students</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
