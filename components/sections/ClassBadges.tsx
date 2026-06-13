import { Badge } from "@/components/ui/Badge";
import type { ClassItem } from "@/content/classes";

export function ClassBadges({ cls }: { cls: ClassItem }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="coral">Intensity: {cls.intensity}</Badge>
      <Badge variant="teal">Complexity: {cls.complexity}</Badge>
      <Badge variant="muted">Duration: {cls.duration}</Badge>
    </div>
  );
}
