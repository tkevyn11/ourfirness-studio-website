import { pricing, pricingNote } from "@/content/pricing";
import { siteConfig, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export function PricingCards() {
  return (
    <Section id="pricing" variant="warm">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, Flexible Options"
        description={pricingNote}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {pricing.map((tier, index) => (
          <FadeIn key={tier.id} delay={index * 0.08}>
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-6",
                tier.highlighted
                  ? "border-brand-coral bg-white shadow-xl shadow-brand-coral/15 ring-2 ring-brand-coral/20"
                  : "border-brand-plum/10 bg-white shadow-sm",
              )}
            >
              {tier.highlighted && (
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-coral">
                  Most Popular
                </p>
              )}
              <h3 className="font-display text-xl font-bold text-brand-plum">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-brand-plum/65">{tier.description}</p>
              <p className="mt-4 font-display text-3xl font-bold text-brand-coral">
                {tier.price}
                <span className="ml-1 text-sm font-normal text-brand-plum/60">
                  {tier.period}
                </span>
              </p>
              <ul className="mt-5 flex-1 space-y-2">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-brand-plum/80 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand-teal before:content-['']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                href={whatsappUrl(siteConfig.whatsappMessages.pricing)}
                external
                variant={tier.highlighted ? "primary" : "outline"}
                className="mt-6 w-full"
              >
                Ask About Pricing
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
