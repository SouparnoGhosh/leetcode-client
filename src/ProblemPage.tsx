"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  Code2,
  Flag,
  ListChecks,
  PlayCircle,
} from "lucide-react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

import { useState } from "react";

const initialCode = `class Solution {
    private List<String> ans;
    private StringBuilder cur;
    
    public void bt(int open, int close, int n) {
        if (open == n && close == n) {
            ans.add(cur.toString());
            return;
        }
        
        if (open < n) {
            cur.append('(');
            bt(open+1, close, n);
            cur.deleteCharAt(cur.length()-1);
        }
        
        if (close < open) {
            cur.append(')');
            bt(open, close+1, n);
            cur.deleteCharAt(cur.length()-1);
        }
        
        return;
    }
    
    public List<String> generateParenthesis(int n) {
        ans = new ArrayList<String>();
        cur = new StringBuilder();
        
        bt(0, 0, n);
        return ans;
    }
}`;

export default function Component() {
  const [code, setCode] = useState(initialCode);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  return (
    <div className="h-[800px] w-full">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={40} minSize={25}>
          <div className="flex h-full flex-col">
            <div className="flex items-center gap-2 border-b p-2">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">
                Problem List
              </span>
            </div>
            <ScrollArea className="flex-1">
              <Card className="rounded-none border-0 shadow-none">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>22. Generate Parentheses</CardTitle>
                    <Badge variant="secondary">Medium</Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-sm">
                  <p className="mb-4">
                    Given n pairs of parentheses, write a function to generate
                    all combinations of well-formed parentheses.
                  </p>
                  <div className="mb-4 space-y-2">
                    <p className="font-semibold">Example 1:</p>
                    <pre className="mb-4 rounded-lg bg-muted p-2 overflow-x-auto max-w-full">
                      Input: n = 3{"\n"}
                      Output: ["((()))","(()())","(())()","()(())","()()()"]
                    </pre>
                  </div>
                  <div className="mb-4 space-y-2">
                    <p className="font-semibold">Example 2:</p>
                    <pre className="mb-4 rounded-lg bg-muted p-2 overflow-x-auto max-w-full">
                      Input: n = 1{"\n"}
                      Output: ["()"]
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Constraints:</p>
                    <ul className="list-inside list-disc">
                      <li>1 ≤ n ≤ 8</li>
                    </ul>
                  </div>
                  <Separator className="my-4" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span>Accepted: 2.1M</span>
                      <span>Submissions: 2.7M</span>
                    </div>
                    <span>Acceptance Rate: 75.8%</span>
                  </div>
                </CardContent>
              </Card>
            </ScrollArea>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={60} minSize={25}>
          <Tabs defaultValue="code" className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-4">
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
            <TabsContent value="code" className="flex-1 p-0">
              <AceEditor
                mode="java"
                theme="monokai"
                value={code}
                onChange={handleEditorChange}
                name="ace-code-editor"
                width="100%"
                height="100%"
                fontSize={14}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={true}
                wrapEnabled={true}
                setOptions={{
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
                editorProps={{ $blockScrolling: true }}
              />
            </TabsContent>
            <TabsContent value="testcase" className="flex-1 p-4">
              <textarea
                className="h-full w-full resize-none rounded-lg border bg-muted p-4 font-mono"
                placeholder="Input testcase here..."
                defaultValue="n = 3"
              />
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
