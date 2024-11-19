import { Card, CardContent } from "@/components/ui/card";

export default function SolvedProblemsCard() {
  return (
    <Card className="bg-card border-border">
      <CardContent className="p-6">
        <div className="relative w-48 h-48 mx-auto">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              className="text-green-500" // Tailwind CSS green color
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              className="text-slate-200" // Tailwind CSS zinc color
              strokeWidth="11"
              strokeDasharray="283"
              strokeDashoffset="70"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="text-3xl font-bold">951</div>
            <div className="text-muted-foreground">Solved</div>
            <div className="text-sm text-muted-foreground">/3357</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}