import { type ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ label, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Reveal>
        <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400/50" />
          <span className="section-label">{label}</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/50" />
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-ash-100 sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={200}>
          <p className={`mt-5 text-base leading-relaxed text-ash-300 ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
