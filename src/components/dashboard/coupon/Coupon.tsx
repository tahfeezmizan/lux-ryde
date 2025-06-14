/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { ChevronDown, ChevronLeft, ChevronRight, Trash2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useAddCouponMutation, useDeleteCouponMutation, useGetCouponQuery } from "@/redux/api/couponApi"
import Link from "next/link"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

export default function Coupon() {
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage, setUsersPerPage] = useState(10)
  const [activeFilter, setActiveFilter] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isAddCouponModalOpen, setIsAddCouponModalOpen] = useState(false)  // State for Add Coupon Modal
  const [selectedCouponId, setSelectedCouponId] = useState<string | null>(null)

  // API hooks for adding, deleting, and fetching coupons
  const [addCoupon, { isLoading: isAddingCoupon }] = useAddCouponMutation()
  const [deleteCoupon] = useDeleteCouponMutation()

  // State for managing coupon details in the form
  const [couponType, setCouponType] = useState<string>("percentage")
  const [creditAmount, setCreditAmount] = useState<number>(0)
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState("")
  const [minOrderValue, setMinOrderValue] = useState("")
  const [validFrom, setValidFrom] = useState("")
  const [validUntil, setValidUntil] = useState("")

  // Fetching coupons
  const { data, isLoading, refetch } = useGetCouponQuery({
    page: currentPage,
    limit: usersPerPage,
  })
  const users = data?.data.coupons || []
  const pagination = data?.data?.pagination || { page: 1, limit: 10, total: 0, totalPage: 1 }

  const formatDate = (dateString: any) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleCancelCoupon = (couponId: string) => {
    setSelectedCouponId(couponId)
    setIsModalOpen(true)
  }

  const confirmCancelCoupon = async () => {
    if (selectedCouponId) {
      try {
        await deleteCoupon(selectedCouponId).unwrap()
        console.log("Coupon deleted successfully:", selectedCouponId)
        setIsModalOpen(false)
        refetch() // Refetch to update the list of coupons
      } catch (error) {
        console.error("Error deleting coupon:", error)
      }
    }
    setSelectedCouponId(null)
  }

  const handleAddCoupon = async () => {
    // Handle the coupon creation logic here, e.g., send data to an API
    const newCoupon = {
      code: couponCode,
      discount: couponType === "percentage" ? discount : 0,
      creditAmount: couponType === "credit" ? creditAmount : 0,
      minOrderValue,
      validFrom,
      validUntil,
      type: couponType,
    }

    try {
      const response = await addCoupon(newCoupon).unwrap()
      console.log("New coupon created:", response)
      setIsAddCouponModalOpen(false)  // Close modal after submitting the coupon
      refetch()  // Refetch to update the coupon list
    } catch (error) {
      console.error("Error adding coupon:", error)
    }
  }

  return (
    <div className="dark flex flex-col min-h-screen min-w-max bg-black text-white font-roboto">
      <div className="mx-auto p-6 w-full">
        <h1 className="text-2xl font-nunito font-bold mb-6">Coupon Management</h1>

        <div className="flex justify-between items-center mb-6">
          <p>All Coupons</p>
          <div>
            <Button className="bg-secondery px-7 py-2 rounded-md text-black" onClick={() => setIsAddCouponModalOpen(true)}>
              Add Coupon
            </Button>
          </div>
        </div>

        <div className="border border-[#555354] rounded-md overflow-hidden">
          <Table className="w-full">
            <TableHeader className="bg-[#2B2621]">
              <TableRow className="border-gray-800 hover:bg-transparent hover:text-[#D1B574] m-2">
                <TableHead className="text-gray-400 font-medium">Coupon Code</TableHead>
                <TableHead className="text-gray-400 font-medium">Discount</TableHead>
                <TableHead className="text-gray-400 font-medium">Minimum Value</TableHead>
                <TableHead className="text-gray-400 font-medium">Valid From</TableHead>
                <TableHead className="text-gray-400 font-medium">Valid Until</TableHead>
                <TableHead className="text-gray-400 font-medium">Cancel Coupon</TableHead>
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
                    No coupons found
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user: any) => (
                  <TableRow key={user.id} className="border-[#555354] bg-[#2F2D2E] hover:bg-[#2B2621] hover:text-white">
                    <TableCell>{user.code}</TableCell>
                    <TableCell>
                      {user.type === "credit" ? `Credit: $${user.creditAmount}` : `${user.discount}%`}
                    </TableCell>
                    <TableCell>{user.minOrderValue}</TableCell>
                    <TableCell>{formatDate(user.validFrom)}</TableCell>
                    <TableCell>{formatDate(user.validUntil)}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-red-500 hover:bg-red-500 hover:text-white"
                        onClick={() => handleCancelCoupon(user.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {pagination.totalPage > 0 && (
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-400">
              Showing {users.length} of {pagination.total} coupons
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

      {/* Add Coupon Modal */}
      <Dialog open={isAddCouponModalOpen} onOpenChange={setIsAddCouponModalOpen}>
        <DialogContent className="rounded-sm border border-[#C7C2D7] bg-white bg-opacity-10 backdrop-blur-lg">
          <DialogHeader>
            <DialogTitle>Add New Coupon</DialogTitle>
          </DialogHeader>
          <div>
            <label>Coupon Code</label>
            <Input className="border border-white" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
          </div>

          <div className="mt-4">
            <label>Coupon Type</label>
            <select
              className="border border-red bg-red-50 bg-opacity-10 backdrop-blur-md p-2 rounded-lg text-black"
              onChange={(e) => setCouponType(e.target.value)}
              value={couponType}
            >
              <option value="percentage">Percentage Discount</option>
              <option value="fixed">Fixed Amount Discount</option>
              <option value="credit">Account Credit</option>
            </select>
          </div>

          {couponType === "percentage" && (
            <div>
              <label>Discount Percentage</label>
              <Input className="border border-white"  value={discount} onChange={(e) => setDiscount(e.target.value)} />
            </div>
          )}

          {couponType === "fixed" && (
            <div>
              <label>Discount Amount</label>
              <Input value={discount}  onChange={(e) => setDiscount(e.target.value)} />
            </div>
          )}

          {couponType === "credit" && (
            <div>
              <label>Credit Amount ($)</label>
              <Input
                type="number"
                value={creditAmount}
                onChange={(e) => setCreditAmount(Number(e.target.value))}
              />
            </div>
          )}

          <div>
            <label>Minimum Order Value</label>
            <Input className="border border-white" value={minOrderValue} onChange={(e) => setMinOrderValue(e.target.value)} />
          </div>

          <div>
            <label>Valid From</label>
            <Input type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} />
          </div>

          <div>
            <label>Valid Until</label>
            <Input className="border border-white"  type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddCouponModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleAddCoupon} disabled={isAddingCoupon}>
              {isAddingCoupon ? "Adding..." : "Add Coupon"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Modal for Cancel Coupon */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-[#2B2621] text-white">
          <DialogHeader>
            <DialogTitle>Cancel Coupon</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to cancel this coupon?</p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmCancelCoupon}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
