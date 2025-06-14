"use client";

import Image from "next/image";

import mail from "@/assets/key-01.png";
import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";
import CommonBg from "@/components/shared/CommonBg";

export default function PasswordReset() {
  const router = useRouter();

  const handlePassword = () => {
    router.push("/set-new-password");
  };

  return (
    <div className="flex h-screen p-20">
    <CommonBg />

      <div className="w-full md:w-1/2 bg-[#1D2530] text-white p-8 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8">
          <div className="mb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#f0d68a] rounded-full p-3">
                <Image src={mail} alt="Mail icon" width={30} height={30} />
              </div>
            </div>
            <h2 className="md:text-3xl font-semibold font-inter text-white mb-2">
              Password reset
            </h2>
            <p className="md:text-[16px] text-white font-medium font-inter">
              Your password has been successfully reset. Click below to log in
              magically.
            </p>
          </div>

          <div className="text-center mt-4">
            <Button type="submit" onClick={handlePassword}>
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
