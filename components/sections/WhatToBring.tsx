import { firstClassTips, whatToBring } from "@/content/whatToBring";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";

export function WhatToBring() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Your First Class"
        title="What to Bring & What to Expect"
        description="Come prepared and relaxed — we will take care of the rest."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <div className="rounded-2xl border border-brand-plum/10 bg-white p-6">
            <h3 className="font-display text-xl font-bold text-brand-plum">
              What to Bring
            </h3>
            <ul className="mt-4 space-y-3">
              {whatToBring.map((item) => (
                <li key={item.item} className="border-b border-brand-plum/5 pb-3 last:border-0 last:pb-0">
                  <p className="font-semibold text-brand-plum">{item.item}</p>
                  <p className="text-sm text-brand-plum/65">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-brand-plum/10 bg-brand-coral/5 p-6">
            <h3 className="font-display text-xl font-bold text-brand-plum">
              Tips for Your First Class
            </h3>
            <ol className="mt-4 space-y-3">
              {firstClassTips.map((tip, i) => (
                <li key={tip} className="flex gap-3 text-sm leading-relaxed text-brand-plum/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-coral text-xs font-bold text-white">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
