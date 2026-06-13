export type ClassItem = {
  id: string;
  name: string;
  description: string;
  intensity: string;
  complexity: string;
  duration: string;
  highlights: string[];
};

export const classes: ClassItem[] = [
  {
    id: "zumba-fitness",
    name: "Zumba Fitness",
    description:
      "Our signature class blends Latin rhythms with easy-to-follow dance moves. Burn calories, boost mood, and have fun — no dance experience required.",
    intensity: "Medium",
    complexity: "Easy to Moderate",
    duration: "60 mins",
    highlights: ["Full-body cardio", "Beginner-friendly", "High-energy music"],
  },
  {
    id: "zumba-gold",
    name: "Zumba Gold",
    description:
      "A lower-impact version perfect for beginners, seniors, or anyone returning to fitness. Same great music, gentler moves, and a supportive pace.",
    intensity: "Low to Medium",
    complexity: "Easy",
    duration: "45 mins",
    highlights: ["Low impact", "Joint-friendly", "Great for beginners"],
  },
  {
    id: "zumba-toning",
    name: "Zumba Toning",
    description:
      "Combine dance fitness with light toning using maraca-style weights. Sculpt arms, core, and legs while keeping the party going.",
    intensity: "Medium to High",
    complexity: "Moderate",
    duration: "60 mins",
    highlights: ["Strength + cardio", "Toning focus", "Weights optional"],
  },
];
