/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function RiderManagement() {
    const [currentPage, setCurrentPage] = useState(1)
    const [ridersPerPage, setRidersPerPage] = useState(10)
    const [activeFilter, setActiveFilter] = useState("All")
    const [updatingRiderId, setUpdatingRiderId] = useState<string | null>(null)

    // Dummy data for riders
    const riders = [
        { id: "1", name: "John Doe", email: "johndoe@example.com", phone: "+1234567890", status: "ACTIVE", vehicle: "Car", createdAt: "2023-04-01", activeDuration: "6 months", amountPaid: "$500" },
        { id: "2", name: "Jane Smith", email: "janesmith@example.com", phone: "+1234567891", status: "INACTIVE", vehicle: "Motorbike", createdAt: "2023-02-15", activeDuration: "3 months", amountPaid: "$300" },
        { id: "3", name: "Mike Johnson", email: "mikejohnson@example.com", phone: "+1234567892", status: "ACTIVE", vehicle: "Car", createdAt: "2023-03-10", activeDuration: "5 months", amountPaid: "$450" },
        { id: "4", name: "Emily Davis", email: "emilydavis@example.com", phone: "+1234567893", status: "INACTIVE", vehicle: "Bicycle", createdAt: "2023-01-25", activeDuration: "2 months", amountPaid: "$200" },
        { id: "5", name: "William Brown", email: "williambrown@example.com", phone: "+1234567894", status: "ACTIVE", vehicle: "Car", createdAt: "2023-05-08", activeDuration: "7 months", amountPaid: "$600" },
    ]

    const pagination = { page: currentPage, limit: ridersPerPage, total: riders.length, totalPage: Math.ceil(riders.length / ridersPerPage) }

    // Format date to a more readable format
    const formatDate = (dateString: any) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
    }

    const handleStatusToggle = (rider: any) => {
        setUpdatingRiderId(rider.id)
        const newStatus = rider.status === "ACTIVE" ? "INACTIVE" : "ACTIVE"

        // Simulate an update
        setTimeout(() => {
            console.log(`Rider status updated to ${newStatus}`)
            // After updating, just update the rider's status in the local state
            rider.status = newStatus
            setUpdatingRiderId(null)
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
                <h1 className="text-2xl font-nunito font-bold mb-6">Rider Management</h1>

                <div className="flex justify-between items-center mb-6">
                    <p>All Riders</p>

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
                                <TableHead className="text-gray-400 font-medium">Active Duration</TableHead>
                                <TableHead className="text-gray-400 font-medium">Amount Paid</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {riders.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={8} className="text-center py-4">
                                        No riders found
                                    </TableCell>
                                </TableRow>
                            ) : (
                                riders.slice((currentPage - 1) * ridersPerPage, currentPage * ridersPerPage).map((rider: any) => (
                                    <TableRow key={rider.id} className="border-[#555354] bg-[#2F2D2E] hover:bg-[#2B2621] hover:text-white">
                                        <TableCell>{rider.name}</TableCell>
                                        <TableCell>{rider.email}</TableCell>
                                        <TableCell>{rider.phone}</TableCell>
                                        <TableCell>
                                            <button
                                                onClick={() => handleStatusToggle(rider)}
                                                disabled={updatingRiderId === rider.id}
                                                className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${
                                                    rider.status === "ACTIVE"
                                                        ? "bg-green-100 text-green-800 hover:bg-green-200"
                                                        : "bg-red-100 text-red-800 hover:bg-red-200"
                                                } ${updatingRiderId === rider.id ? "opacity-50 cursor-not-allowed" : ""}`}
                                            >
                                                {updatingRiderId === rider.id ? "Updating..." : rider.status === "ACTIVE" ? "Active" : "Inactive"}
                                            </button>
                                        </TableCell>
                                        <TableCell>{rider.vehicle}</TableCell>
                                        <TableCell>{formatDate(rider.createdAt)}</TableCell>
                                        <TableCell>{rider.activeDuration}</TableCell>
                                        <TableCell>{rider.amountPaid}</TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>

                {pagination.totalPage > 0 && (
                    <div className="flex justify-between items-center mt-6">
                        <div className="text-sm text-gray-400">
                            Showing {riders.length} of {pagination.total} riders
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
