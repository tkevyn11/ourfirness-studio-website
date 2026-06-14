"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "navbar" | "footer";
  showTagline?: boolean;
  className?: string;
};

/** Tight-cropped SVG wordmark (~160×30). */
const LOGO_INTRINSIC = { width: 160, height: 30 } as const;

const logoSizes = {
  navbar: {
    imageClass:
      "h-auto w-52 max-w-[calc(100vw-4.5rem)] sm:w-60 md:w-64",
    taglineClass: "text-brand-plum/60",
  },
  footer: {
    imageClass: "h-auto w-56 max-w-full sm:w-64 lg:w-72",
    taglineClass: "text-white/60",
  },
} as const;

export function Logo({
  variant = "navbar",
  showTagline = false,
  className,
}: LogoProps) {
  const size = logoSizes[variant];

  return (
    <div className={cn("flex flex-col leading-tight", className)}>
      <Image
        src={siteConfig.logo.svg}
        alt={siteConfig.logo.alt}
        width={LOGO_INTRINSIC.width}
        height={LOGO_INTRINSIC.height}
        className={cn(size.imageClass, "object-contain object-left")}
        priority={variant === "navbar"}
      />
      {showTagline && (
        <span className={cn("mt-0.5 text-xs", size.taglineClass)}>
          Zumba · Melaka
        </span>
      )}
    </div>
  );
}
