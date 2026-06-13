import { siteConfig, whatsappUrl } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/motion/FadeIn";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-coral via-brand-orange to-brand-teal py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to Try Your First Zumba Class?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Message us on WhatsApp and we will help you pick a class time, answer
            your questions, and welcome you to {siteConfig.name}.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={whatsappUrl(siteConfig.whatsappMessages.default)}
              external
              variant="outline"
              className="border-white bg-white text-brand-plum hover:border-white hover:text-brand-coral px-8 py-4 text-base"
            >
              Try a Class on WhatsApp
            </Button>
            <Button
              href="/contact"
              variant="outline"
              className="border-white/60 bg-transparent text-white hover:bg-white/10 px-8 py-4 text-base"
            >
              Contact & Location
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
