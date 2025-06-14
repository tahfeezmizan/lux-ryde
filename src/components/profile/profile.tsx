"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PencilIcon, Upload } from "lucide-react"
import { toast } from "sonner"
import { useUpdateUserMutation } from "@/redux/api/authApi"


interface User {
  id: string
  avatarUrl: string
  name: string
  email: string
  role: string
  createdAt: string
  updatedAt: string
}

interface UpdateProfileProps {
  user: User
  onUpdate: (updatedUser: Partial<User>) => void
}

export function UpdateProfile({ user, onUpdate }: UpdateProfileProps) {
  const [upadate]=useUpdateUserMutation()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(user?.name)
  const [email, setEmail] = useState(user.email)
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [avatarFile, setAvatarFile] = useState<File | null>(null)

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatarFile(file)
      const reader = new FileReader()
      reader.onload = () => {
        setAvatarPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const formData = new FormData()
  
    // Prepare JSON data for `bodyData`
    const bodyData = JSON.stringify({ name })
    formData.append("bodyData", bodyData)
  
    // Add image file with key `profileImage`
    if (avatarFile) {
      formData.append("profileImage", avatarFile)
    }
  
    try {
      const res = await upadate(formData).unwrap()
  
      toast.success("Profile updated successfully!")
  
      onUpdate({
        name: res.name,
        avatarUrl: res.avatarUrl,
        updatedAt: res.updatedAt,
      })
  
      setOpen(false)
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update profile.")
    }
  }
  
  
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full gap-2">
          <PencilIcon className="h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile information here. Click save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center gap-2 mb-2">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src={avatarPreview || user.avatarUrl || "/placeholder.svg"} alt={name} />
                <AvatarFallback className="text-3xl">
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2">
                <Label
                  htmlFor="avatar"
                  className="cursor-pointer text-sm px-3 py-1 border rounded-md hover:bg-muted flex items-center gap-1"
                >
                  <Upload className="h-3 w-3" />
                  Change Avatar
                </Label>
                <Input id="avatar" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" required />
            </div>
          
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
