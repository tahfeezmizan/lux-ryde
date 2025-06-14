"use client";

import type React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useRef } from "react";
import { useRegisterMutation } from "@/redux/api/authApi";
import upload from "@/assets/upload.png";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import LoginRiderBg from "@/components/shared/LoginRiderBg";
import { RideConsent } from "./RideConsent";

const RegisterSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  country: z.string().min(1, "Country is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  referToken: z.string().optional(),
});

type RegisterFormData = z.infer<typeof RegisterSchema>;

const RiderRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
  });
  const [registerUser] = useRegisterMutation();
  const router = useRouter();
  const referTokens = useSearchParams();
  const referToken = referTokens.get("referToken");
  console.log(referToken);

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const avatarInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAvatarClick = () => {
    avatarInputRef.current?.click();
  };

  const onSubmit = async (data: RegisterFormData) => {
    try {
      toast.loading("Creating your account...", { toastId: "loading" });

      const formData = new FormData();
      const jsonData = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: data.password,
        address: data.address,
        country: data.country,
        referToken: referToken,
      };

      formData.append("bodyData", JSON.stringify(jsonData));

      // if (referToken) {
      //   formData.append("referToken", referToken);
      // }

      if (avatarFile) {
        formData.append("avatarImage", avatarFile);
      }

      const response = await registerUser(formData).unwrap();
      if (response) {
        router.push("/check-verify-email");
      }

      toast.update("loading", {
        render: "Account created successfully!",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      });
    } catch (error: unknown) {
      toast.error("An error occurred. Please try again.");
      if (error instanceof Error) {
        console.error("Registration error:", error.message);
      } else {
        console.error("Registration error:", error);
      }
    }
  };

  return (
    <div className="flex min-h-screen lg:p-20 p-3 rounded">
      <LoginRiderBg />
      <RideConsent />
      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-10">
          <div className="mb-8">
            <h2 className="md:text-6xl font-bold mb-8 font-nunito">Sign Up</h2>
            <p className="md:text-lg text-gray-400 font-roboto">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#f0d68a] hover:text-[#e0c67a]"
              >
                Log in now
              </Link>{" "}
              to access your rides and explore new possibilities with RydApp.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-2">
                <label
                  className="md:text-sm font-medium text-gray-300 block font-roboto"
                  htmlFor="name"
                >
                  Name *
                </label>
                <input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="md:text-sm font-medium text-gray-300 block font-roboto"
                  htmlFor="phone"
                >
                  Phone *
                </label>
                <input
                  id="phone"
                  placeholder="Enter your phone"
                  type="text"
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                  {...register("phone")}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="md:text-sm font-medium text-gray-300 block font-roboto"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="md:text-sm font-medium text-gray-300 block font-roboto"
                  htmlFor="address"
                >
                  Address *
                </label>
                <input
                  id="address"
                  placeholder="Enter your Address"
                  type="text"
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                  {...register("address")}
                />
                {errors.address && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="md:text-sm font-medium text-gray-300 block font-roboto"
                  htmlFor="country"
                >
                  Country *
                </label>
                <input
                  id="country"
                  placeholder="Enter your Country"
                  type="text"
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                  {...register("country")}
                />
                {errors.country && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.country.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  className="md:text-sm font-medium text-gray-300 block font-roboto"
                  htmlFor="password"
                >
                  Password *
                </label>
                <input
                  id="password"
                  placeholder="Enter your password"
                  type="password"
                  className="w-full px-3 py-2 rounded bg-[#333A44] border-0 text-[#C4C4C4] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50 font-inter md:text-[16px]"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="space-y-2 col-span-full">
                <label className="md:text-sm font-medium text-gray-300 block font-roboto">
                  Profile Image *
                </label>
                <div className="flex flex-col items-center justify-center min-h-[150px] p-4 border-2 border-dashed border-gray-600 rounded-lg">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    ref={avatarInputRef}
                    onChange={handleAvatarChange}
                  />
                  {avatarPreview ? (
                    <div className="relative group">
                      <Image
                        src={avatarPreview || "/placeholder.svg"}
                        alt="Profile avatar"
                        width={150}
                        height={150}
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <Button
                        onClick={handleAvatarClick}
                        variant="outline"
                        size="icon"
                        className="absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[#333A44] text-white hover:bg-[#444B55]"
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div
                      className="flex flex-col items-center justify-center cursor-pointer"
                      onClick={handleAvatarClick}
                    >
                      <Image
                        src={upload || "/placeholder.svg"}
                        alt="Upload Avatar"
                        width={100}
                        height={100}
                      />
                      <p className="text-gray-400 mt-2 text-sm">
                        Click to upload profile image
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[#f0d68a] text-[#1D2530] font-semibold font-nunito text-xl"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RiderRegisterForm;
