# Our Fitness Studio — Zumba Website

A conversion-focused, SEO + GEO optimized marketing website for a Zumba studio in Melaka, Malaysia.

**Stack:** Next.js (App Router) · Tailwind CSS · Framer Motion · Vercel

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app`
4. Deploy

## Updating Content

Edit files in the `content/` folder — no component changes needed:

| File | What to update |
|------|----------------|
| `content/site.ts` | Studio name, address, phone, social links, hours, map |
| `content/classes.ts` | Class types, descriptions, intensity badges |
| `content/schedule.ts` | Weekly class timetable |
| `content/pricing.ts` | Pricing tiers and rates |
| `content/faqs.ts` | FAQ questions and answers |
| `content/testimonials.ts` | Member testimonials |
| `content/benefits.ts` | Why-join benefit cards |
| `content/whatToBring.ts` | First-class checklist |

## Pages

- `/` — Home (full landing page)
- `/classes` — Class types
- `/schedule` — Schedule & pricing
- `/about` — About the studio & instructor
- `/contact` — Contact, map, social links

## WhatsApp CTA

All "Try a Class" buttons link to WhatsApp with prefilled messages. Update messages in `content/site.ts` → `whatsappMessages`.

## SEO / GEO

- Per-page metadata in `lib/metadata.ts`
- JSON-LD schema in `lib/schema.ts` (HealthClub, FAQPage, BreadcrumbList, Organization)
- Auto-generated `sitemap.xml` and `robots.txt`

## Project Structure

```
app/           # Next.js routes
components/    # UI, layout, sections, motion wrappers
content/       # Editable content (update here)
lib/           # Metadata & schema helpers
public/        # Static assets
```

## Reference Skills (in .cursor/)

Design and SEO reference skills from GitHub stars are copied to `.cursor/skills/` for agent guidance during development.
