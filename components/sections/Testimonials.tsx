"use client";

import { testimonials } from "@/content/testimonials";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Reveal } from "@/components/motion/Reveal";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeader
        eyebrow="Social Proof"
        title="What Our Members Say"
        description="Real stories from people who started exactly where you are now."
      />
      <Stagger className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <StaggerItem key={t.name}>
            <Reveal>
              <blockquote className="flex h-full flex-col rounded-2xl border border-brand-plum/10 bg-white p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-coral">
                  {t.highlight}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-plum/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-4 border-t border-brand-plum/10 pt-4 text-sm font-semibold text-brand-plum">
                  — {t.name}
                </footer>
              </blockquote>
            </Reveal>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
