import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ProblemDescription from "@/components/problems/ProblemDescription";
import ProfileIconWithAuthModal from "@/components/common/ProfileIconWithAuthModal";

export default function LeftPanel() {
  return (
    <div className="flex flex-col ">
      <LeftPanelHeader />
      <ScrollArea className="flex-1">
        <ProblemDescription />
      </ScrollArea>
    </div>
  );
}

function LeftPanelHeader() {
  return (
    <div className="flex items-center justify-between gap-2 border-b p-2">
      <div>
        <Button variant="ghost" size="icon">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      <ProfileIconWithAuthModal />
    </div>
  );
}
