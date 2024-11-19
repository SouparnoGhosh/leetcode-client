import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function LanguagesCard() {
  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <h3 className="text-lg font-semibold">Languages</h3>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Python3</span>
            <span className="text-muted-foreground">931 problems</span>
          </div>
          <Progress value={80} className="h-2 bg-muted" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Java</span>
            <span className="text-muted-foreground">280 problems</span>
          </div>
          <Progress value={40} className="h-2 bg-muted" />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>C++</span>
            <span className="text-muted-foreground">1 problem</span>
          </div>
          <Progress value={5} className="h-2 bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}
