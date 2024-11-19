import { Card, CardContent } from "@/components/ui/card";
import { ProgressColor as Progress } from "@/components/ui/progress";

function progressValue(completed: number, total: number): number {
  return Math.round((completed / total) * 100);
}

const problemsStats = {
  easy: {
    completed: 348,
    total: 836,
  },
  medium: {
    completed: 533,
    total: 1755,
  },
  hard: {
    completed: 70,
    total: 766,
  },
};

export default function DifficultyDistributionCard() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-green-600">Easy</span>
            <span>
              {problemsStats.easy.completed} / {problemsStats.easy.total}
            </span>
          </div>
          <Progress
            value={progressValue(
              problemsStats.easy.completed,
              problemsStats.easy.total
            )}
            className="h-2"
            color="green"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-yellow-600">Medium</span>
            <span>
              {problemsStats.medium.completed} / {problemsStats.medium.total}
            </span>
          </div>
          <Progress
            value={progressValue(
              problemsStats.medium.completed,
              problemsStats.medium.total
            )}
            className="h-2"
            color="yellow"
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-red-600">Hard</span>
            <span>
              {problemsStats.hard.completed} / {problemsStats.hard.total}
            </span>
          </div>
          <Progress
            value={progressValue(
              problemsStats.hard.completed,
              problemsStats.hard.total
            )}
            className="h-2"
            color="red"
          />
        </div>
      </CardContent>
    </Card>
  );
}
