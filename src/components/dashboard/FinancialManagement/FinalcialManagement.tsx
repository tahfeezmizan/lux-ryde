"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Status from "@/components/dashboard/common/statusButton";
import Download from "../../icon/Download";

export default function FinancialManagement() {
  // Sample data based on the image
  const payouts = [
    {
      id: 1,
      name: "Sergio",
      amount: "$2055",
      method: "Bank Transfer",
      status: "Completed",
      date: "01/08/2025",
    },
    {
      id: 2,
      name: "Sergio",
      amount: "$2055",
      method: "Paypal",
      status: "Processed",
      date: "01/08/2025",
    },
    {
      id: 3,
      name: "Sergio",
      amount: "$2055",
      method: "Bank Transfer",
      status: "Completed",
      date: "01/08/2025",
    },
    {
      id: 4,
      name: "Sergio",
      amount: "$2055",
      method: "Paypal",
      status: "Processed",
      date: "01/08/2025",
    },
    {
      id: 5,
      name: "Sergio",
      amount: "$2055",
      method: "Bank Transfer",
      status: "Completed",
      date: "01/08/2025",
    },
    {
      id: 6,
      name: "Sergio",
      amount: "$2055",
      method: "Paypal",
      status: "Processed",
      date: "01/08/2025",
    },
    {
      id: 7,
      name: "Sergio",
      amount: "$2055",
      method: "Bank Transfer",
      status: "Completed",
      date: "01/08/2025",
    },
    {
      id: 8,
      name: "Sergio",
      amount: "$2055",
      method: "Paypal",
      status: "Pending",
      date: "01/08/2025",
    },
    {
      id: 9,
      name: "Sergio",
      amount: "$2055",
      method: "Bank Transfer",
      status: "Completed",
      date: "01/08/2025",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(payouts.length / itemsPerPage);

  const currentPayouts = payouts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="mx-auto p-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <Tabs defaultValue="driver-payouts" className="w-auto">
            <TabsList className="bg-transparent border-b border-[#7F878E] rounded-none p-0 h-auto">
              <TabsTrigger
                value="transactions"
                className="px-6 py-2 text-[15px] font-nunito text-[#666666] font-medium rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#D1B574] data-[state=active]:bg-transparent data-[state=active]:text-[#D1B574] data-[state=active]:shadow-none"
              >
                Transactions
              </TabsTrigger>
              <TabsTrigger
                value="driver-payouts"
                className="px-6 py-2 md:text-[15px] text-sm font-nunito  rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#D1B574] data-[state=active]:bg-transparent data-[state=active]:text-[#D1B574] data-[state=active]:shadow-none text-[#666666] font-medium"
              >
                Driver Payouts
              </TabsTrigger>
              <TabsTrigger
                value="invoices"
                className="px-6 py-2 text-[15px] font-nunito  rounded-none data-[state=active]:border-b-2 data-[state=active]:border-[#D1B574] data-[state=active]:bg-transparent data-[state=active]:text-[#D1B574] data-[state=active]:shadow-none text-[#666666] font-medium"
              >
                Invoices
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button
            variant="outline"
            className="bg-[#D1B574] text-white hover:bg-[#c4a968] border-none flex items-center gap-1 text-black"
          >
            Export Payout <Download />
          </Button>
        </div>

        <div className="border border-[#555354] rounded-md overflow-hidden">
          <Table className="w-full">
            <TableHeader className="bg-[#2B2621]">
              <TableRow className="border-gray-800 hover:bg-transparent hover:text-[#D1B574]">
                <TableHead className="text-gray-400 font-medium">
                  Name
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Payout Amount
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Payout Method
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Status
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Date
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPayouts.map((payout) => (
                <TableRow
                  key={payout.id}
                  className="border-[#555354] bg-[#2F2D2E] hover:bg-[#2B2621] hover:text-white"
                >
                  <TableCell>{payout.name}</TableCell>
                  <TableCell>{payout.amount}</TableCell>
                  <TableCell>{payout.method}</TableCell>
                  <TableCell>
                    <Status status={payout.status} />
                  </TableCell>
                  <TableCell>{payout.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      className="font-nunito font-medium text-sm bg-[#2F2D2E] border-[#D1B574] hover:bg-[#D1B574] hover:text-[#333333] text-[#D1B574]"
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="flex justify-end mt-6">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 bg-gray-900 hover:bg-gray-800"
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                className={`${
                  currentPage === index + 1
                    ? "bg-[#D1B574] text-black border-[#D1B574]"
                    : "border-gray-700 bg-gray-900 hover:bg-gray-800"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}

            <Button
              variant="outline"
              size="icon"
              className="border-gray-700 bg-gray-900 hover:bg-gray-800"
              onClick={() =>
                currentPage < totalPages && setCurrentPage(currentPage + 1)
              }
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
