/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AddCoupon() {
  const [couponCode, setCouponCode] = useState("")
  const [discount, setDiscount] = useState("")
  const [minOrderValue, setMinOrderValue] = useState("")
  const [validFrom, setValidFrom] = useState("")
  const [validUntil, setValidUntil] = useState("")
  const [couponType, setCouponType] = useState("percentage")
  const [creditAmount, setCreditAmount] = useState(0)

  const handleSubmit = () => {
    const newCoupon = {
      code: couponCode,
      discount: couponType === "percentage" ? discount : 0,
      creditAmount: couponType === "credit" ? creditAmount : 0,
      minOrderValue,
      validFrom,
      validUntil,
      type: couponType
    }

    console.log("New coupon created:", newCoupon)
    // Add logic here to submit the coupon to the API
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Add New Coupon</h1>

      <div>
        <label>Coupon Code</label>
        <Input value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
      </div>

      <div>
        <label>Coupon Type</label>
        <select onChange={(e) => setCouponType(e.target.value)} value={couponType}>
          <option value="percentage">Percentage Discount</option>
          <option value="fixed">Fixed Amount Discount</option>
          <option value="credit">Account Credit</option>
        </select>
      </div>

      {couponType === "percentage" && (
        <div>
          <label>Discount Percentage</label>
          <Input value={discount} onChange={(e) => setDiscount(e.target.value)} />
        </div>
      )}

      {couponType === "fixed" && (
        <div>
          <label>Discount Amount</label>
          <Input value={discount} onChange={(e) => setDiscount(e.target.value)} />
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
        <Input value={minOrderValue} onChange={(e) => setMinOrderValue(e.target.value)} />
      </div>

      <div>
        <label>Valid From</label>
        <Input type="date" value={validFrom} onChange={(e) => setValidFrom(e.target.value)} />
      </div>

      <div>
        <label>Valid Until</label>
        <Input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} />
      </div>

      <Button onClick={handleSubmit}>Create Coupon</Button>
    </div>
  )
}
