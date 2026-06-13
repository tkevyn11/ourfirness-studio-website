import { Clock, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/content/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { Section, SectionHeader } from "@/components/sections/Section";
import { Button } from "@/components/ui/Button";

export function LocationMap() {
  return (
    <Section id="location" variant="warm">
      <SectionHeader
        eyebrow="Find Us"
        title="Visit Us in Melaka"
        description="Conveniently located in Taman Kota Laksamana — easy to find and welcoming from the moment you walk in."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <div className="space-y-5">
            <div className="flex gap-3 rounded-2xl border border-brand-plum/10 bg-white p-5">
              <MapPin className="h-5 w-5 shrink-0 text-brand-coral mt-0.5" aria-hidden />
              <div>
                <p className="font-semibold text-brand-plum">Address</p>
                <p className="mt-1 text-sm text-brand-plum/75">{siteConfig.address.full}</p>
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-medium text-brand-coral hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-brand-plum/10 bg-white p-5">
              <Phone className="h-5 w-5 shrink-0 text-brand-coral" aria-hidden />
              <div>
                <p className="font-semibold text-brand-plum">Phone / WhatsApp</p>
                <a
                  href={whatsappUrl(siteConfig.whatsappMessages.contact)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-brand-plum/75 hover:text-brand-coral"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3 rounded-2xl border border-brand-plum/10 bg-white p-5">
              <Clock className="h-5 w-5 shrink-0 text-brand-coral mt-0.5" aria-hidden />
              <div>
                <p className="font-semibold text-brand-plum">Business Hours</p>
                <ul className="mt-2 space-y-1 text-sm text-brand-plum/75">
                  {siteConfig.hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span>
                        {h.open === "Closed" ? "Closed" : `${h.open} – ${h.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-brand-plum/10 shadow-lg">
            <iframe
              title={`Map showing ${siteConfig.name} location in Melaka`}
              src={siteConfig.mapEmbedUrl}
              className="h-80 w-full lg:h-full min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
