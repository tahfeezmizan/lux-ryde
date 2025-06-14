/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useAlluserQuery,
  useMybookingQuery,
  useUpdateUserMutation,
} from "@/redux/api/userApi";

export default function Myorder() {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [activeFilter, setActiveFilter] = useState("All");

  const { data, isLoading, refetch } = useMybookingQuery({
    page: currentPage,
    limit: usersPerPage,
  });
  console.log(data);

  const users = data?.data || [];
  const pagination = data?.data?.pagination || {
    page: 1,
    limit: 10,
    total: 0,
    totalPage: 1,
  };

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
    // Refetch will happen automatically due to query parameter changes
  };

  // Handle pagination
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Refetch will happen automatically due to query parameter changes
  };

  return (
    <div className="dark flex flex-col min-h-screen min-w-max bg-black text-white">
      <div className="mx-auto p-6 w-full">
        <h1 className="text-2xl font-nunito font-bold mb-6">User details</h1>

        <div className="flex justify-between items-center mb-6">
          <p>All Orders</p>
        </div>

        <div className="border border-[#555354] rounded-md overflow-hidden">
          <Table className="w-full">
            <TableHeader className="bg-[#2B2621]">
              <TableRow className="border-gray-800 hover:bg-transparent hover:text-[#D1B574] m-2">
                <TableHead className="text-gray-400 font-medium">
                  Driver Name
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Destination
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Amount{" "}
                </TableHead>
                <TableHead className="text-gray-400 font-medium">
                  Pickup{" "}
                </TableHead>

                {/* <TableHead className="text-gray-400 font-medium">Actions</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    No users found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user: any) => (
                  <TableRow
                    key={user.id}
                    className="border-[#555354] bg-[#2F2D2E] hover:bg-[#2B2621] hover:text-white"
                  >
                    <TableCell>{user.driverName}</TableCell>
                    <TableCell>{user.destination}</TableCell>
                    <TableCell>{user.fare}</TableCell>
                    <TableCell>{user.pickup}</TableCell>

                    {/* <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="font-nunito font-medium text-sm bg-[#2F2D2E] border-[#D1B574] hover:bg-[#D1B574] hover:text-[#333333] text-[#D1B574]"
                      >
                        View
                      </Button>
                    </TableCell> */}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {pagination.totalPage > 0 && (
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-400">
              Showing {users.length} of {pagination.total} users
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 bg-gray-900 hover:bg-gray-800"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from(
                { length: pagination.totalPage },
                (_, i) => i + 1
              ).map((page) => (
                <Button
                  key={page}
                  variant="outline"
                  className={`border-gray-700 ${
                    currentPage === page
                      ? "bg-[#D1B574] text-black"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  onClick={() => paginate(page)}
                >
                  {page}
                </Button>
              ))}

              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 bg-gray-900 hover:bg-gray-800"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === pagination.totalPage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
