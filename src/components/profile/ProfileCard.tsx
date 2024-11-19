// ProfileCard.tsx
import { Card, CardHeader } from "@/components/ui/card";
import ProfilePhoto from "./ProfilePhoto";

export default function ProfileCard() {
  const name = "John Developer";

  return (
    <Card className="bg-card border-border">
      <CardHeader className="space-y-4">
        <div className="flex gap-4 items-center">
          <ProfilePhoto name={name} />
          <h2 className="text-xl font-semibold">{name}</h2>
        </div>
        <button className="w-full px-4 py-2 bg-muted hover:bg-accent rounded-md transition">
          Log Out
        </button>
      </CardHeader>
    </Card>
  );
}
