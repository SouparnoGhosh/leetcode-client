import ProfileCard from "@/components/profile/ProfileCard";
import DifficultyDistributionCard from "@/components/profile/DifficultyDistributionCard";
import RecentActivityCard from "@/components/profile/RecentActivityCard";

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-[300px,1fr]">
        {/* Left Column */}
        <div className="space-y-6">
          <ProfileCard />
          <DifficultyDistributionCard />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <RecentActivityCard />
        </div>
      </div>
    </div>
  );
}
