import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Link } from "react-router-dom";

import { IoSearchOutline } from "react-icons/io5";
import { Input } from "./ui/input";

const FeedbackTable = () => {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
        <div className="flex-1">
          <h1 className="font-semibold text-lg">Feedbacks</h1>
        </div>
        <form className="flex-initial">
          <div className="relative">
            <IoSearchOutline className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="pl-8 bg-white shadow-none appearance-none sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search feedback..."
              type="search"
            />
          </div>
        </form>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="border shadow-sm rounded-lg p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Student</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Feedback</TableHead>
                <TableHead className="w-[150px]">Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Alice Johnson</TableCell>
                <TableCell>alice@example.com</TableCell>
                <TableCell>
                  The quality of the food served in the mess has improved
                  significantly over the past few weeks. The variety of dishes
                  offered is also commendable. Keep up the good work!
                </TableCell>
                <TableCell>2023-03-16 10:24 AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Bob Smith</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell>
                  I've noticed a lack of communication regarding changes in the
                  menu or special meal events. It would be helpful to have a
                  notice board or digital platform where such information is
                  regularly updated.
                </TableCell>
                <TableCell>2023-03-16 10:24 AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Eva Brown</TableCell>
                <TableCell>eva@example.com</TableCell>
                <TableCell>
                  The mess environment could be made more inviting and
                  comfortable for students to dine in. Simple enhancements like
                  better lighting, comfortable seating, and a clean ambiance
                  would make a difference.
                </TableCell>
                <TableCell>2023-03-16 10:24 AM</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default FeedbackTable;