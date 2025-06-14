/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit3Icon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface UpdateProfileProps {
  user: {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    role?: "driver" | "user";
    carModel?: string;
    licensePlate?: string;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onUpdate: (updatedUser: any) => void
}

export default function UpdateProfile({ user, onUpdate }: UpdateProfileProps) {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    phoneNumber: user.phoneNumber || "",
    address: user.address || "",
    city: user.city || "",
    state: user.state || "",
    zipCode: user.zipCode || "",
    ...(user.role === "driver" && {
      carModel: user.carModel || "",
      licensePlate: user.licensePlate || "",
    }),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically make an API call to update the user profile
    // For now, we'll just simulate a successful update

    onUpdate(formData)

    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    })

    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
     
          className="w-full "
        >
          <Edit3Icon className="mr-2 h-4 w-4" /> Edit Profile
        </Button>
      </DialogTrigger>
    <DialogContent className="sm:max-w-[500px] bg-white/30 backdrop-blur-md border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Edit Profile</DialogTitle>
          <DialogDescription className="text-gray-400">
            Update your profile information below. Click save when you&lsquoe done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className=" border-[#F0D68A] text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className=" border-[#F0D68A] text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-white">
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className=" border-[#F0D68A] text-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-white">
                Address
              </Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className=" border-[#F0D68A] text-white"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-white">
                  City
                </Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className=" border-[#F0D68A] text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-white">
                  State
                </Label>
                <Input
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className=" border-[#F0D68A] text-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-white">
                  Zip Code
                </Label>
                <Input
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className=" border-[#F0D68A] text-white"
                />
              </div>
            </div>

            {user.role === "driver" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="carModel" className="text-white">
                    Car Model
                  </Label>
                  <Input
                    id="carModel"
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    className=" border-[#F0D68A] text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="licensePlate" className="text-white">
                    License Plate
                  </Label>
                  <Input
                    id="licensePlate"
                    name="licensePlate"
                    value={formData.licensePlate}
                    onChange={handleChange}
                    className=" border-[#F0D68A]0 text-white"
                  />
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" className="">
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
