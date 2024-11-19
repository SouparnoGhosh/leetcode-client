import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Statistics from "@/components/problems/Statistics";
import ExamplesAndConstraints from "@/components/problems/ExamplesAndConstraints";

export default function ProblemDescription() {
  return (
    <Card className="rounded-none border-0 shadow-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>22. Generate Parentheses</CardTitle>
          <Badge variant="secondary">Medium</Badge>
        </div>
      </CardHeader>
      <CardContent className="text-sm">
        <p className="mb-4">
          Given n pairs of parentheses, write a function to generate all
          combinations of well-formed parentheses.
        </p>
        <ExamplesAndConstraints />
        <Separator className="my-4" />
        <Statistics />
      </CardContent>
    </Card>
  );
}
