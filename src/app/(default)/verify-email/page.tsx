/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useVerifyMutation } from "@/redux/api/authApi";
import mail from "@/assets/mail.png";

import LoginDriverBg from "@/components/shared/LoginDriverBg";
import { toast } from "sonner";

export default function Page() {
  const [verifyToken] = useVerifyMutation();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const router = useRouter();

  useEffect(() => {
    if (token) {
      verifyToken(token)
        .unwrap()
        .then((res: any) => {
          toast.success(res?.message || "Verification successful");
          setTimeout(() => {
            router.push("/login");
          }, 2000); // redirect after 2 seconds
        })
        .catch((err: any) => {
          const apiError = err?.data?.message || "Verification failed";
          toast.error(apiError);
          setTimeout(() => {
            router.push("/login");
          }, 2000);
        });
    }
  }, [token, verifyToken, router]);

  return (
    <div className="flex h-screen p-20">
      <LoginDriverBg />

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f0d68a] rounded-full p-3">
                <Image src={mail} alt="Mail icon" width={30} height={30} />
              </div>
            </div>
            <h2 className="md:text-3xl font-semibold font-inter text-white mb-2">
              Check your email
            </h2>
            <p className="text-white text-sm">
              We are verifying your account, please wait...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
