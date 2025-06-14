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
import LoginDriverBg from "@/components/shared/LoginDriverBg";
import { useResetPassMutation } from "@/redux/api/authApi";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// Define Zod schema for password reset
const setNewPasswordSchema = z
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

type SetNewPasswordFormData = z.infer<typeof setNewPasswordSchema>;

export default function SetNewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SetNewPasswordFormData>({
    resolver: zodResolver(setNewPasswordSchema),
  });
  const [resetPass] = useResetPassMutation();
  const router = useRouter();
  const params = useSearchParams();
  const resetToken = params.get("token");

  const onSubmit = async (data: SetNewPasswordFormData) => {
    try {
      console.log(data.password);
      resetPass({ password: data.password, resetToken }).unwrap();
      router.push("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-screen p-6 md:p-20">
      <LoginDriverBg />

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-6 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f0d68a] rounded-full p-3">
                <Image src={lock} alt="Lock icon" width={30} height={30} />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-[48px] font-roboto font-medium text-white mb-2">
              Create Password
            </h2>
            <p className="text-sm sm:text-base md:text-[16px] text-white font-medium font-inter">
              Your new password must be different to previously used passwords.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-xs sm:text-sm font-medium font-roboto text-[#E7E7E7] block"
              >
                Create Password *{" "}
                <span className="text-[#ff4250] font-roboto font-normal text-[10px] sm:text-[12px]">
                  ( A minimum of 8 characters )
                </span>
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
                <p className="text-red-500 text-xs sm:text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="confirmPassword"
                className="text-xs sm:text-sm font-medium font-roboto text-[#E7E7E7] block"
              >
                Confirm Password *
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
                <p className="text-red-500 text-xs sm:text-sm">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full flex justify-center rounded items-center text-xs sm:text-sm md:text-[16px] font-inter font-semibold py-4 sm:py-5 bg-[#F1E1A3] hover:bg-[#e0c67a] transition-colors"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
