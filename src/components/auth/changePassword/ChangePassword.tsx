"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";

import lock from "@/assets/key-01.png";



import CommonBg from "@/components/shared/CommonBg";

const changePasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordFormData>({
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      // Handle password reset request
      console.log("Reset password for:", data.email);
      // Add your actual reset password logic here
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex h-screen p-20">
 <CommonBg />

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f0d68a] rounded-full p-3">
                <Image src={lock} alt="Lock icon" width={30} height={30} />
              </div>
            </div>
            <h2 className="md:text-3xl font-semibold font-inter text-white mb-2">
              Forgot password?
            </h2>
            <p className="md:text-[16px] text-white font-inter">
              No worries, we&apos;ll send you reset instructions.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium font-roboto text-white block"
              >
                Email *
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="w-full px-3 py-2 rounded bg-[#32373B] border-0 text-[#667085] focus:outline-none focus:ring-2 focus:ring-[#f0d68a]/50"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Button type="submit">Reset password</Button>
          </form>
          <div className="text-center mt-4">
            <Link
              href="/login"
              className="text-sm text-[#f0d68a] hover:text-[#e0c67a]"
            >
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
