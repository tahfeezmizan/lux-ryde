/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useState } from "react"
import Image from "next/image"
import { PencilIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    companyName: "YOUR RYDE INC.",
    email: "support@yourryde.com",
    phone: "+13249789722",
    address: "Lorem ipsum dolor sit amet lorem",
    currency: "USD",
  })

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: any, name: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Here you would typically save the data to your backend
    console.log("Saving data:", formData)
    setOpen(false)
  }

  return (
    <div className="min-h-screen text-white relative overflow-hidden font-roboto">
      <div className="absolute inset-0 z-0 opacity-40">
        <Image src="/assets/payment-bg.png" alt="Car background" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6">
        <h1 className="text-xl font-semibold mb-2">Settings</h1>

        <h2 className="text-sm font-medium text-yellow-500 mb-6">General Details</h2>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Company logo"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{formData.companyName}</h3>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild className="">
                <Button className="bg-[#D1B574] hover:bg-yellow-600 text-black text-xs font-medium py-2 px-3 rounded-md flex items-center gap-1 h-auto w-auto">
                  <PencilIcon size={14} />
                  Edit Details
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white bg-opacity-20 border border-gray-800 text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-white">Edit Company Details</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 justify-between mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="logo" className="text-sm text-gray-100">
                      Company Logo
                    </Label>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center overflow-hidden border border-gray-700">
                        <Image
                          src="/assets/Avatar1.png?height=64&width=64"
                          alt="Company logo"
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        className="text-xs h-9 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        Change Logo
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companyName" className="text-sm text-gray-300">
                      Company Name
                    </Label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus-visible:ring-yellow-500 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-gray-300">
                      Support Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus-visible:ring-yellow-500 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm text-gray-300">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus-visible:ring-yellow-500 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm text-gray-300">
                      Address
                    </Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="bg-gray-800 border-gray-700 focus-visible:ring-yellow-500 text-white min-h-[80px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currency" className="text-sm text-gray-300">
                      Currency
                    </Label>
                    <Select value={formData.currency} onValueChange={(value) => handleSelectChange(value, "currency")}>
                      <SelectTrigger className="bg-gray-800 border-gray-700 focus:ring-yellow-500 text-white">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800 border-gray-700 text-white">
                        <SelectItem value="USD">USD - US Dollar</SelectItem>
                        <SelectItem value="EUR">EUR - Euro</SelectItem>
                        <SelectItem value="GBP">GBP - British Pound</SelectItem>
                        <SelectItem value="CAD">CAD - Canadian Dollar</SelectItem>
                        <SelectItem value="AUD">AUD - Australian Dollar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setOpen(false)}
                      className="border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black">
                      Save Changes
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="rounded-[12px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[12px] p-6">
          <h3 className="text-lg font-medium mb-6">Basic Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Support Email</p>
              <p className="text-sm">{formData.email}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Phone number</p>
              <p className="text-sm">{formData.phone}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Address</p>
              <p className="text-sm">{formData.address}</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">Currency</p>
              <p className="text-sm">{formData.currency}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
