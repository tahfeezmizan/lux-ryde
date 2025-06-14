"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function BookingSuccessModal() {
  const [open, setOpen] = useState(true);
  const [showOTP, setShowOTP] = useState(false);

  const handleOkClick = () => {
    setShowOTP(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[450px] rounded-md bg-[#302E2F] p-6 py-32 border-none shadow-lg font-inter">
          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Success Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F1E1A3]">
              <Check className="h-10 w-10 text-white" />
            </div>

            {/* Success Message */}
            <div className="text-center space-y-5 pb-4">
              <h3 className="text-xl md:text-[30px] font-inter text-white ">
                Booking successful!
              </h3>
              <p className="mt-1 text-sm text-gray-300 text-white  md:text-[16px] font-inter">
                Your ride is now booked{showOTP ? "" : " Press OK to view OTP"}
              </p>
            </div>

            <Button
              onClick={handleOkClick}
              className="w-full bg-[#f0e68c] text-[#04090D] hover:bg-[#e6dc82] rounded-sm font-medium font-roboto "
            >
              Ok
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
