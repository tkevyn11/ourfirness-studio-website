export type ScheduleRow = {
  day: string;
  time: string;
  className: string;
  instructor: string;
  level: string;
};

export const scheduleNote =
  "[Class Schedule] — Update this section with your latest weekly timetable.";

export const schedule: ScheduleRow[] = [
  {
    day: "Monday",
    time: "7:00 PM – 8:00 PM",
    className: "Zumba Fitness",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Wednesday",
    time: "7:00 PM – 8:00 PM",
    className: "Zumba Fitness",
    instructor: "Pearly Kong",
    level: "All levels",
  },
  {
    day: "Friday",
    time: "7:30 PM – 8:30 PM",
    className: "Zumba Toning",
    instructor: "Pearly Kong",
    level: "Moderate",
  },
  {
    day: "Saturday",
    time: "10:00 AM – 11:00 AM",
    className: "Zumba Gold",
    instructor: "Pearly Kong",
    level: "Beginner-friendly",
  },
];
