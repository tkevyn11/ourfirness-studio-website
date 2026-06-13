"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-plum/10 bg-brand-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 rounded-lg"
        >
          <span className="font-display text-lg font-bold text-brand-plum group-hover:text-brand-coral transition-colors">
            {siteConfig.name}
          </span>
          <span className="text-xs text-brand-plum/60">Zumba · Melaka</span>
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-plum/80 transition-colors hover:text-brand-coral focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral rounded"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={whatsappUrl(siteConfig.whatsappMessages.default)}
            external
            variant="primary"
          >
            Try a Class
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-brand-plum md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-brand-plum/10 bg-brand-cream md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-brand-plum hover:bg-brand-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button
            href={whatsappUrl(siteConfig.whatsappMessages.default)}
            external
            variant="primary"
            className="mt-2 w-full"
          >
            Try a Class
          </Button>
        </nav>
      </div>
    </header>
  );
}
