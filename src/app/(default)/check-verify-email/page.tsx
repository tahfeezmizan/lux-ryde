"use client";

import Image from "next/image";

import mail from "@/assets/mail.png";
import { Button } from "@/components/ui/button";
import LoginDriverBg from "@/components/shared/LoginDriverBg";

export default function Page() {
  const handleOpen = () => {
    window.open("https://mail.google.com/mail/u/0/#inbox", "_blank");
  };

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
          </div>

          <div className="text-center mt-4">
            <Button onClick={handleOpen} type="submit">
              Open Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
