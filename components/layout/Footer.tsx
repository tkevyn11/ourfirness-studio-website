import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/content/site";
import { Logo } from "@/components/layout/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-brand-plum/10 bg-brand-plum text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
            aria-label={`${siteConfig.name} home`}
          >
            <Logo variant="footer" />
          </Link>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            Beginner-friendly Zumba classes in Taman Kota Laksamana, Melaka.
            Move, sweat, and smile with us.
          </p>
        </div>

        <div>
          <p className="font-semibold">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="hover:text-brand-coral transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral rounded"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold">Contact</p>
          <ul className="mt-3 space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-brand-coral mt-0.5" aria-hidden />
              <span>{siteConfig.address.full}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brand-coral" aria-hidden />
              <a
                href={whatsappUrl(siteConfig.whatsappMessages.contact)}
                className="hover:text-brand-coral transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-semibold">Follow Us</p>
          <div className="mt-3 flex gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
