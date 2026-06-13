import { Heart, Shield, Users } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";

const points = [
  {
    icon: Shield,
    title: "No experience needed",
    text: "Every move is broken down step by step. You do not need to be a dancer.",
  },
  {
    icon: Users,
    title: "All ages & fitness levels welcome",
    text: "Our community is friendly, inclusive, and supportive from your very first class.",
  },
  {
    icon: Heart,
    title: "Go at your own pace",
    text: "Take breaks when you need. Nobody is judging — everyone is here to have fun.",
  },
];

export function BeginnerCallout() {
  return (
    <Section id="beginners" variant="warm">
      <SectionHeader
        eyebrow="New to Zumba?"
        title="You'll Fit Right In"
        description="Feeling shy, unfit, or unsure about joining? That is completely normal — and exactly why we built a studio where beginners feel at home."
      />
      <div className="grid gap-6 md:grid-cols-3">
        {points.map((point, index) => (
          <FadeIn key={point.title} delay={index * 0.08}>
            <div className="rounded-2xl border border-brand-plum/10 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-coral/10 text-brand-coral">
                <point.icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="font-display text-lg font-bold text-brand-plum">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-plum/70">
                {point.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
