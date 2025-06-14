<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */
=======
>>>>>>> c9dadefa123a42dc7b054897f6074b00bd98e7c8
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import {
  CalendarIcon,
  Mail,
  UserIcon,
  PhoneIcon,
  MapPinIcon,
  CarIcon,
  DiscIcon as LicenseIcon,
  ShieldIcon,
} from "lucide-react";
import UpdateProfile from "@/components/profile/UpdateProfile";

export default function ProfilePage() {
<<<<<<< HEAD
  const user = {
    avatarUrl: "/assets/avatar1.png",
=======
  const user: {
    avatarUrl: string;
    name: string;
    role: "driver" | "user";
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    carModel: string;
    licensePlate: string;
    id: string;
    createdAt: string;
    updatedAt: string;
  } = {
    avatarUrl: "/placeholder.svg?height=128&width=128",
>>>>>>> c9dadefa123a42dc7b054897f6074b00bd98e7c8
    name: "John Doe",
    role: "driver",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Main Street",
    city: "CityName",
    state: "StateName",
    zipCode: "12345",
    carModel: "Toyota Corolla",
    licensePlate: "ABC-123",
    id: "123456789",
    createdAt: "2021-01-01T00:00:00Z",
    updatedAt: "2022-01-01T00:00:00Z",
  };

  const [profileData, setProfileData] = useState<{ user: typeof user | null }>({
    user: null,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleProfileUpdate = (updatedUser: Partial<typeof user>) => {
    setProfileData((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        ...updatedUser,
        updatedAt: new Date().toISOString(),
      },
    }));
  };

  const handleCloseAccount = () => {
    alert("Account closed successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-10 px-4 sm:px-6 font-roboto">
      <Toaster />
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r ">
            Your Profile
          </h1>
          <p className="text-white max-w-2xl">View and manage your personal information and account settings</p>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
          {/* Profile Card */}
          <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 shadow-xl overflow-hidden backdrop-blur-sm">
<<<<<<< HEAD
            <div className="h-24 bg-gradient-to-r bg-"></div>
=======
            <div className="h-24 bg-[#F0D68A]"></div>
>>>>>>> c9dadefa123a42dc7b054897f6074b00bd98e7c8
            <CardContent className="p-6 flex flex-col items-center text-center -mt-12">
              <div className="mb-4">
                <Avatar className="h-32 w-32 border-4 border-gray-800 shadow-lg">
                  <AvatarImage src={user.avatarUrl} alt={user.name} />
                  <AvatarFallback className="text-4xl ">
                    {user.name.split(" ").map((n: string) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h2 className="text-2xl font-bold text-black mt-2">{user.name}</h2>
              <div className="mt-2 mb-6">
                <Badge
                  variant="secondary"
                  className="text-sm bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1"
                >
                  {user.role === "driver" ? (
                    <div className="flex items-center gap-1">
                      <ShieldIcon className="h-3 w-3" />
                      <span>Driver</span>
                    </div>
                  ) : (
                    user.role
                  )}
                </Badge>
              </div>

              <UpdateProfile user={user} onUpdate={handleProfileUpdate} />

              <div className="w-full mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">Member Since</p>
                    <p className="text-lg font-medium text-black">{new Date(user.createdAt).getFullYear()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-400">Status</p>
                    <p className="text-lg font-medium">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details Card */}
          <Card className="bg-gradient-to-b from-gray-800/80 to-gray-900/80 border-gray-700 shadow-xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Account Details</CardTitle>
              <CardDescription className="text-gray-400">
                Your personal information and account settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Personal Information */}
                <div className="space-y-1 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-3">
                    <UserIcon className="h-4 w-4 text-blue-400" /> Personal Information
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Full Name</p>
                      <p className="text-black">
                        {user.firstName} {user.lastName}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Email Address</p>
                      <p className="text-black flex items-center gap-2">
                        <Mail className="h-3 w-3 text-blue-400" />
                        {user.email}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">Phone Number</p>
                      <p className="text-black flex items-center gap-2">
                        <PhoneIcon className="h-3 w-3 text-blue-400" />
                        {user.phoneNumber || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Information */}
                <div className="space-y-1 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-3">
                    <MapPinIcon className="h-4 w-4 text-purple-400" /> Location
                  </h3>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500">Address</p>
                      <p className="text-black">{user.address || "Not provided"}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">City, State, Zip</p>
                      <p className="text-black">
                        {user.city}, {user.state} {user.zipCode}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Car Information (only if user is a driver) */}
              {user.role === "driver" && (
                <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                  <h3 className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-3">
                    <CarIcon className="h-4 w-4 text-green-400" /> Vehicle Information
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs text-gray-500">Car Model</p>
                      <p className="text-black">{user.carModel || "Not provided"}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">License Plate</p>
                      <p className="text-black flex items-center gap-2">
                        <LicenseIcon className="h-3 w-3 text-green-400" />
                        {user.licensePlate || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Account Details */}
              <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                <h3 className="text-sm font-medium text-gray-400 flex items-center gap-2 mb-3">
                  <ShieldIcon className="h-4 w-4 text-amber-400" /> Account Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-xs text-gray-500">User ID</p>
                    <p className="text-black font-mono text-sm truncate">{user.id}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Account Created</p>
                    <p className="text-black flex items-center gap-2">
                      <CalendarIcon className="h-3 w-3 text-amber-400" />
                      {formatDate(user.createdAt)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Last Updated</p>
                    <p className="text-black flex items-center gap-2">
                      <CalendarIcon className="h-3 w-3 text-amber-400" />
                      {formatDate(user.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Account Button */}
              <div className="pt-4 border-t border-gray-700 flex justify-end">
                <Button
                  onClick={handleCloseAccount}
                  variant="destructive"
                  className=" hover:bg-red-700 text-white"
                >
                  Close Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
