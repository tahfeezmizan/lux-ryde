/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
import LoginDriverBg from "@/components/shared/LoginDriverBg";
import { useForgotPassMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import CommonBg from "@/components/shared/CommonBg";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const [forgotPassword, { data, isLoading }] = useForgotPassMutation();
  const router = useRouter();

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      localStorage.setItem("email", data.email); // ✅ Save email

      const res = await forgotPassword({ email: data.email }).unwrap();

      console.log("API Response:", res); // 🔍 Debug

      if (res?.success) {
        toast.success(res?.message || "Password reset link sent to your email");

        // ✅ Slight delay (optional, helps ensure localStorage is set before navigation)
        setTimeout(() => {
          router.push("/check-email");
        }, 100);
      } else {
        toast.error(res?.message || "Unexpected response from server");
      }
    } catch (error: any) {
      const apiError = error?.data;

      if (apiError?.message) {
        toast.error(apiError.message);
      } else if (apiError?.error) {
        toast.error(apiError.error);
      } else {
        toast.error("Something went wrong. Please try again.");
      }

      console.error("Forgot password error:", error);
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

            <Button
              type="submit"
              className="w-full flex justify-center rounded items-center text-[#181617] md:text-[16px] font-semibold py-3 bg-[#] bg-[#f0d68a] transition-colors"
            >
              {isLoading ? "Reset Password..." : "Reset Password"}
            </Button>
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
