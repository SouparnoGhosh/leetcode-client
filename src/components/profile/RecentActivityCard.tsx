import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { problems } from "@/constants/problems";
import Pagination from "@/components/Pagination";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export default function RecentActivityCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const totalPages = Math.ceil(problems.length / itemsPerPage);

  const currentProblems = problems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <h3 className="text-xl font-bold text-slate-700">Recent Activity</h3>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Problem</TableHead>
              <TableHead className="text-right">Last Attempted</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentProblems.map((problem) => (
              <TableRow key={problem.id}>
                <TableCell>{problem.title}</TableCell>
                <TableCell className="text-right text-muted-foreground">
                  5 months ago
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* Pagination Controls */}
        <div className="flex items-center justify-between pt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <Select
            defaultValue={itemsPerPage.toString()}
            onValueChange={(value) => {
              setItemsPerPage(parseInt(value));
              setCurrentPage(1); // Reset to page 1 when itemsPerPage changes
            }}
          >
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Items per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 / page</SelectItem>
              <SelectItem value="10">10 / page</SelectItem>
              <SelectItem value="20">20 / page</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
