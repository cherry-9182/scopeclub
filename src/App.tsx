import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { WhatWeDo } from '@/components/WhatWeDo';
import { Events } from '@/components/Events';
import { Resources } from '@/components/Resources';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink-950 text-ash-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Events />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
