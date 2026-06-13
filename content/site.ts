export const siteConfig = {
  name: "Our Fitness Studio",
  tagline: "Fun Zumba dance fitness for everyone in Melaka",
  description:
    "Our Fitness Studio offers beginner-friendly Zumba classes in Taman Kota Laksamana, Melaka. No dance experience needed. Join a welcoming community and try a class today.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ourfitnessstudio.vercel.app",
  phone: "014-6067687",
  phoneE164: "60146067687",
  email: "hello@ourfitnessstudio.com",
  address: {
    street: "35-1 & 37-1, Jalan KLJ 6, Taman Kota Laksamana",
    city: "Melaka",
    postalCode: "75200",
    country: "Malaysia",
    full: "35-1 & 37-1, Jalan KLJ 6, Taman Kota Laksamana, 75200 Melaka.",
  },
  geo: {
    latitude: 2.1930799,
    longitude: 102.2383271,
  },
  social: {
    instagram: "https://www.instagram.com/ourfitnessstudio/",
    facebook:
      "https://www.facebook.com/profile.php?id=61579906989394&locale=fo_FO#",
  },
  instructor: {
    name: "Pearly Kong",
    role: "Lead Zumba Instructor",
    bio: "Pearly Kong brings energy, warmth, and years of dance-fitness experience to every class. She specializes in making first-timers feel welcome, confident, and excited to move — no matter your fitness level or dance background.",
    imageAlt: "Pearly Kong, lead Zumba instructor at Our Fitness Studio in Melaka",
  },
  hours: [
    { day: "Monday", open: "6:00 PM", close: "9:00 PM" },
    { day: "Tuesday", open: "6:00 PM", close: "9:00 PM" },
    { day: "Wednesday", open: "6:00 PM", close: "9:00 PM" },
    { day: "Thursday", open: "6:00 PM", close: "9:00 PM" },
    { day: "Friday", open: "6:00 PM", close: "9:00 PM" },
    { day: "Saturday", open: "9:00 AM", close: "12:00 PM" },
    { day: "Sunday", open: "Closed", close: "" },
  ],
  priceRange: "$$",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.5!2d102.2383271!3d2.1930799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1f17d52b2a945%3A0x185f721451b077d9!2sOurfitness%20Studio!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy",
  mapLink: "https://maps.app.goo.gl/7cFUrN8U4gwLmVyB6",
  whatsappMessages: {
    default: "Hi! I'd like to try a Zumba class at Our Fitness Studio.",
    schedule: "Hi! I'd like to ask about the Zumba class schedule.",
    pricing: "Hi! I'd like to ask about Zumba class pricing.",
    contact: "Hi! I have a question about Our Fitness Studio.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Classes", href: "/classes" },
    { label: "Schedule & Pricing", href: "/schedule" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  stats: {
    yearsActive: "5+",
    classesPerWeek: "10+",
    happyMembers: "200+",
  },
} as const;

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.phoneE164}?text=${encodeURIComponent(message)}`;
}
