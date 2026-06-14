"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-cream">
      <Image
        src="/images/hero-background.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream/90 via-brand-warm/80 to-brand-coral/40" />

      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-coral/20 blur-3xl z-0" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-teal/20 blur-3xl z-0" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16">
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-cream shadow-2xl shadow-brand-coral/20">
            <Image
              src="/images/hero-main.png"
              alt="Zumba class in action"
              fill
              priority
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
