export type Benefit = {
  title: string;
  description: string;
  icon: "heart" | "users" | "zap" | "smile" | "target" | "music";
};

export const benefits: Benefit[] = [
  {
    title: "Burn Calories While Having Fun",
    description:
      "Dance to Latin and chart-topping hits while getting a full-body workout that does not feel like exercise.",
    icon: "zap",
  },
  {
    title: "Welcoming Community",
    description:
      "Join a friendly group of all ages and fitness levels. Nobody judges — everyone is here to move and have a good time.",
    icon: "users",
  },
  {
    title: "Boost Your Mood",
    description:
      "Release stress, increase energy, and leave every class feeling happier and more confident.",
    icon: "smile",
  },
  {
    title: "Improve Fitness at Your Pace",
    description:
      "Build stamina, coordination, and strength gradually. Go as hard or as gentle as you want.",
    icon: "heart",
  },
  {
    title: "No Experience Needed",
    description:
      "Simple choreography and patient instruction make Zumba accessible even if you have never danced before.",
    icon: "target",
  },
  {
    title: "Great Music Every Class",
    description:
      "From salsa and reggaeton to pop hits — the soundtrack keeps you motivated from warm-up to cool-down.",
    icon: "music",
  },
];
