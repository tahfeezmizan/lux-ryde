/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";

import mail from "@/assets/mail.png";
import { Button } from "@/components/ui/button";

import { useForgotPassMutation } from "@/redux/api/authApi";
import { toast } from "sonner";
import CommonBg from "@/components/shared/CommonBg";

export default function CheckEmail() {
  const [forgot] = useForgotPassMutation();

  const emails = localStorage.getItem("email");

  const handleResendEmail = () => {
    const email = localStorage.getItem("email");
    if (email) {
      forgot({ email: email })
        .unwrap()
        .then((res) => {
          if (res?.success) {
            toast.success(
              res?.message || "Password reset link sent to your email"
            );
          } else {
            toast.error(res?.message || "Unexpected response from server");
          }
        })
        .catch((error: any) => {
          const apiError = error?.data;
          if (apiError?.message) {
            toast.error(apiError.message);
          } else if (apiError?.error) {
            toast.error(apiError.error);
          } else {
            toast.error("An unexpected error occurred.");
          }
        });
    }
  };
  const handleOpen = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
  };

  return (
    <div className="flex h-screen p-20">
 <CommonBg/>

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
            <p className="md:text-[16px] text-white font-medium font-inter">
              We sent a password reset link to {emails}
            </p>
          </div>

          <div className="text-center mt-4">
            <Button onClick={handleOpen} type="submit">
              Open Email
            </Button>
          </div>

          <div className="text-center mt-4">
            <h1 className="text-[14px] text-[#667085] font-medium font-inter">
              Didn’t receive the email?{" "}
              <span
                className="text-[#005DFF] hover:text-[#e0c67a] cursor-pointer"
                onClick={handleResendEmail}
              >
                Click to resend
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
