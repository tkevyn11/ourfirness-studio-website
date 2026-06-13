import {
  Heart,
  Music,
  Smile,
  Target,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { benefits } from "@/content/benefits";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";
import { siteConfig } from "@/content/site";

const iconMap: Record<string, LucideIcon> = {
  heart: Heart,
  users: Users,
  zap: Zap,
  smile: Smile,
  target: Target,
  music: Music,
};

export function Benefits() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Why Join Us"
        title={`Why Join ${siteConfig.name}`}
        description="More than a workout — it is a party that happens to be great for your body and mind."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = iconMap[benefit.icon];
          return (
            <FadeIn key={benefit.title} delay={index * 0.06}>
              <div className="group h-full rounded-2xl border border-brand-plum/10 bg-white p-6 transition-shadow hover:shadow-lg hover:shadow-brand-coral/10">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal transition-colors group-hover:bg-brand-coral/10 group-hover:text-brand-coral">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-plum">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-plum/70">
                  {benefit.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
