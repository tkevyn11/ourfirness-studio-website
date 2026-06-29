import {
  pricing,
  pricingNote,
  pricingSpecialDeal,
  pricingTerms,
  pricingRegistrationFee,
  pricingEntranceFee,
} from "@/content/pricing";
import { siteConfig, whatsappUrl } from "@/content/site";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export function PricingCards() {
  const trialTier = pricing.find((tier) => tier.id === "trial");
  const mainTiers = pricing.filter((tier) => tier.id !== "trial");

  return (
    <Section id="pricing" variant="warm">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, Flexible Options"
        description={pricingNote}
      />

      {trialTier && (
        <FadeIn>
          <div className="mb-8 overflow-hidden rounded-2xl border-2 border-brand-coral bg-white p-6 shadow-xl shadow-brand-coral/15 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                {trialTier.badge && (
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-coral">
                    {trialTier.badge}
                  </p>
                )}
                <h3 className="mt-2 font-display text-2xl font-bold text-brand-plum md:text-3xl">
                  Try Your First Session for {trialTier.price}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-plum/75 md:text-base">
                  {trialTier.description} Walk-in rate after trial is RM25 per
                  entry.
                </p>
              </div>
              <div className="shrink-0 text-center md:text-right">
                <p className="font-display text-4xl font-bold text-brand-coral">
                  {trialTier.price}
                </p>
                <Button
                  href={whatsappUrl(siteConfig.whatsappMessages.pricing)}
                  external
                  variant="primary"
                  className="mt-4"
                >
                  Try Your First Class
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      )}

      <FadeIn delay={0.05}>
        <div className="mb-8 rounded-2xl border border-brand-plum/10 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-teal">
            {pricingSpecialDeal.title}
          </p>
          <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h3 className="font-display text-xl font-bold text-brand-plum">
                {pricingSpecialDeal.description}
              </h3>
              <p className="mt-1 text-sm text-brand-plum/70">
                {pricingSpecialDeal.detail}
              </p>
            </div>
            <p className="font-display text-3xl font-bold text-brand-coral">
              {pricingSpecialDeal.price}
            </p>
          </div>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {mainTiers.map((tier, index) => (
          <FadeIn key={tier.id} delay={index * 0.06}>
            <div
              className={cn(
                "flex h-full flex-col rounded-2xl border p-6",
                tier.badge === "Best Value"
                  ? "border-brand-coral bg-white shadow-xl shadow-brand-coral/15 ring-2 ring-brand-coral/20"
                  : "border-brand-plum/10 bg-white shadow-sm",
              )}
            >
              {tier.badge && (
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-brand-coral">
                  {tier.badge}
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
              {tier.savingsNote && (
                <p className="mt-2 text-xs font-semibold text-brand-teal">
                  {tier.savingsNote}
                </p>
              )}
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
                variant={tier.badge === "Best Value" ? "primary" : "outline"}
                className="mt-6 w-full"
              >
                Ask About Pricing
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-8 rounded-2xl border border-brand-plum/10 bg-white p-6 text-sm text-brand-plum/75">
          <h3 className="font-display text-lg font-bold text-brand-plum">
            Terms & Conditions
          </h3>
          <ul className="mt-3 space-y-2">
            {pricingTerms.map((term) => (
              <li
                key={term}
                className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-brand-plum/30 before:content-['']"
              >
                {term}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-brand-plum/65">
            Registration fee: {pricingRegistrationFee} (one-time). Entrance fee:{" "}
            {pricingEntranceFee} per person for all attendees.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}
