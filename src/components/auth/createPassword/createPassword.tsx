"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import lock from "@/assets/key-01.png";
import { LuEye, LuEyeClosed } from "react-icons/lu";

import CommonBg from "@/components/shared/CommonBg";

const createPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type CreatePasswordFormData = z.infer<typeof createPasswordSchema>;

export default function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePasswordFormData>({
    resolver: zodResolver(createPasswordSchema),
  });

  const onSubmit = async (data: CreatePasswordFormData) => {
    try {
      console.log("Password created for:", data.password);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex md:h-screen lg:h-screen sm:h-screen h-[90%] p-20">
 <CommonBg />

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f0d68a] rounded-full p-3">
                <Image src={lock} alt="Lock icon" width={30} height={30} />
              </div>
            </div>
            <h2 className="md:text-[48px] font-roboto font-medium text-white mb-2">
              Create Password
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium font-roboto text-[#E7E7E7] block"
              >
                Create Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  placeholder="Enter your password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded bg-[#32373B] border-0 text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#667085] hover:text-white"
                >
                  {showPassword ? <LuEye /> : <LuEyeClosed />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-sm font-medium font-roboto text-[#E7E7E7] block"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  type={showPassword ? "text" : "password"}
                  className="w-full px-3 py-2 rounded bg-[#32373B] border-0 text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50"
                  {...register("confirmPassword")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-[#667085] hover:text-white"
                >
                  {showPassword ? <LuEye /> : <LuEyeClosed />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
