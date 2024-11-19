import { useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { initialCode } from "@/constants/code";
import LeftPanel from "@/components/problems/LeftPanel";
import RightPanel from "@/components/problems/RightPanel";

export default function ProblemPage() {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <div className="h-screen w-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40} minSize={25}>
          <LeftPanel />
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60} minSize={25}>
          <RightPanel code={code} onCodeChange={handleEditorChange} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
