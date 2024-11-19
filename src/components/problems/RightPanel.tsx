import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Flag, ListChecks, PlayCircle } from "lucide-react";

import TestCase from "@/components/problems/Testcase";
import CodeEditor from "@/components/problems/CodeEditor";

export default function RightPanel({
  code,
  onCodeChange,
}: {
  code: string;
  onCodeChange: (value: string | undefined) => void;
}) {
  return (
    <Tabs defaultValue="code" className="flex h-full flex-col">
      <RightPanelHeader />
      <TabsContent value="code" className="flex-1 -0">
        <CodeEditor code={code} onCodeChange={onCodeChange} />
      </TabsContent>
      <TabsContent value="testcase" className="flex-1 p-4">
        <TestCase />
      </TabsContent>
    </Tabs>
  );
}

function RightPanelHeader() {
  return (
    <div className="flex items-center justify-between border-b px-4 p-2">
      <TabsList>
        <TabsTrigger value="code" className="gap-2">
          <Code2 className="h-4 w-4" />
          Code
        </TabsTrigger>
        <TabsTrigger value="testcase" className="gap-2">
          <ListChecks className="h-4 w-4" />
          Testcase
        </TabsTrigger>
      </TabsList>
      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="gap-2">
          <PlayCircle className="h-4 w-4" />
          Run
        </Button>
        <Button size="sm" className="gap-2">
          <Flag className="h-4 w-4" />
          Submit
        </Button>
      </div>
    </div>
  );
}
