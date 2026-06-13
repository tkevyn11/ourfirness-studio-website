"use client";

import { Sparkles } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-cream via-brand-warm to-brand-coral/10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-coral/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-coral/10 px-4 py-1.5 text-sm font-semibold text-brand-coral">
            <Sparkles className="h-4 w-4" aria-hidden />
            Beginner-friendly · Melaka
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-brand-plum sm:text-5xl lg:text-6xl">
            Zumba Classes in Melaka — Fun Dance Fitness for Everyone
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-plum/75">
            {siteConfig.description} Join instructor {siteConfig.instructor.name}{" "}
            for high-energy classes in Taman Kota Laksamana. No dance experience
            needed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              href={whatsappUrl(siteConfig.whatsappMessages.default)}
              external
              variant="primary"
              className="text-base px-8 py-4"
            >
              Try a Class
            </Button>
            <Button href="/schedule" variant="outline" className="text-base px-8 py-4">
              View Schedule
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} direction="left">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-coral via-brand-orange to-brand-teal shadow-2xl shadow-brand-coral/20">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
              <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
                Studio Gallery
              </p>
              <p className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                [Images To Be Added Later]
              </p>
              <p className="mt-2 text-sm opacity-80">
                Real class photos coming soon
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
