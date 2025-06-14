/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DriverManagement() {
  const [currentPage, setCurrentPage] = useState(1)
  const [driversPerPage, setDriversPerPage] = useState(10)
  const [activeFilter, setActiveFilter] = useState("All")
  const [updatingDriverId, setUpdatingDriverId] = useState<string | null>(null)

  // Dummy data for drivers
  const drivers = [
    { id: "1", name: "John Doe", email: "johndoe@example.com", phone: "+1234567890", status: "ACTIVE", vehicle: "Car", registrationDate: "2023-04-01" },
    { id: "2", name: "Jane Smith", email: "janesmith@example.com", phone: "+1234567891", status: "INACTIVE", vehicle: "Motorbike", registrationDate: "2023-02-15" },
    { id: "3", name: "Mike Johnson", email: "mikejohnson@example.com", phone: "+1234567892", status: "ACTIVE", vehicle: "Car", registrationDate: "2023-03-10" },
    { id: "4", name: "Emily Davis", email: "emilydavis@example.com", phone: "+1234567893", status: "INACTIVE", vehicle: "Bicycle", registrationDate: "2023-01-25" },
    { id: "5", name: "William Brown", email: "williambrown@example.com", phone: "+1234567894", status: "ACTIVE", vehicle: "Car", registrationDate: "2023-05-08" },
  ]

  const pagination = { page: currentPage, limit: driversPerPage, total: drivers.length, totalPage: Math.ceil(drivers.length / driversPerPage) }

  // Format date to a more readable format
  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const handleStatusToggle = (driver: any) => {
    setUpdatingDriverId(driver.id)
    const newStatus = driver.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"

    // Simulate an update
    setTimeout(() => {
      console.log(`Driver status updated to ${newStatus}`)
      // After updating, just update the driver's status in the local state
      driver.status = newStatus
      setUpdatingDriverId(null)
    }, 500)
  }

  // Handle filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Handle pagination
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  return (
    <div className="dark flex flex-col min-h-screen min-w-max bg-black text-white">
      <div className="mx-auto p-6 w-full">
        <h1 className="text-2xl font-nunito font-bold mb-6">Driver Management</h1>

        <div className="flex justify-between items-center mb-6">
          <p>All Drivers</p>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-white bg-gray-900 hover:bg-gray-800 hover:text-white">
                {activeFilter} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#D1B574] border-gray-700">
              <DropdownMenuItem onClick={() => handleFilterChange("Active")} className="hover:bg-gray-800">
                Active
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange("Inactive")} className="hover:bg-gray-800">
                Inactive
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange("All")} className="hover:bg-gray-800">
                All
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="border border-[#555354] rounded-md overflow-hidden">
          <Table className="w-full">
            <TableHeader className="bg-[#2B2621]">
              <TableRow className="border-gray-800 hover:bg-transparent hover:text-[#D1B574] m-2">
                <TableHead className="text-gray-400 font-medium">Name</TableHead>
                <TableHead className="text-gray-400 font-medium">Email</TableHead>
                <TableHead className="text-gray-400 font-medium">Phone Number</TableHead>
                <TableHead className="text-gray-400 font-medium">Status</TableHead>
                <TableHead className="text-gray-400 font-medium">Vehicle</TableHead>
                <TableHead className="text-gray-400 font-medium">Reg. Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-4">
                    No drivers found
                  </TableCell>
                </TableRow>
              ) : (
                drivers.slice((currentPage - 1) * driversPerPage, currentPage * driversPerPage).map((driver: any) => (
                  <TableRow key={driver.id} className="border-[#555354] bg-[#2F2D2E] hover:bg-[#2B2621] hover:text-white">
                    <TableCell>{driver.name}</TableCell>
                    <TableCell>{driver.email}</TableCell>
                    <TableCell>{driver.phone}</TableCell>
                    <TableCell>
                      <button
                        onClick={() => handleStatusToggle(driver)}
                        disabled={updatingDriverId === driver.id}
                        className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                          driver.status === "ACTIVE"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                        } ${updatingDriverId === driver.id ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        {updatingDriverId === driver.id ? "Updating..." : driver.status === "ACTIVE" ? "Active" : "Inactive"}
                      </button>
                    </TableCell>
                    <TableCell>{driver.vehicle}</TableCell>
                    <TableCell>{formatDate(driver.registrationDate)}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {pagination.totalPage > 0 && (
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-400">
              Showing {drivers.length} of {pagination.total} drivers
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

              {Array.from({ length: pagination.totalPage }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant="outline"
                  className={`border-gray-700 ${currentPage === page ? "bg-[#D1B574] text-black" : "bg-gray-900 hover:bg-gray-800"}`}
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
  )
}
