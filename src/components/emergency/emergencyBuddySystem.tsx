import type React from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import img1 from "@/assets/gallery1.png";
import img2 from "@/assets/gallery2.png";
import img3 from "@/assets/gallery3.png";
import img4 from "@/assets/gallery4.png";
import Check from "../icon/Checks";
export default function EmergencyBuddySystem() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white safety-gallery">
      <div className="absolute inset-0   z-10" />

      <div className="relative z-20 container mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row gap-8" id="emergency-buddy" >
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold font-roboto">
            Your Ride Emergency Buddy System
          </h1>

          <p className="text-gray-300 font-roboto text-[16px]  leading-relaxed">
            If you ever experience a breakdown while driving, simply call our
            dedicated 800 number. We&lsquo;ll dispatch another Your Ride driver
            to pick you up, and a tow truck will be on its way to help.
            We&lsquo;ll also give you a $100 credit towards your next emergency
            breakdown.
          </p>

          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <Check
              //  className="h-5 w-5 text-[#F1E1A3] mt-0.5 flex-shrink-0"
              />
              <span>Call the 800 number to get assistance</span>
            </div>

            <div className="flex items-start gap-2">
              <Check
              // className="h-5 w-5 text-[#F1E1A3] mt-0.5 flex-shrink-0"
              />
              <span>A driver and tow truck will be dispatched.</span>
            </div>

            <div className="flex items-start gap-2">
              <Check
              // className="h-5 w-5 text-[#F1E1A3] mt-0.5 flex-shrink-0"
              />
              <span>$100 credit to cover the cost.</span>
            </div>

            <div className="flex items-start gap-2">
              <Check
              //  className="h-5 w-5 text-[#F1E1A3] mt-0.5 flex-shrink-0"
              />
              <span>Available for any breakdown during Your Ride shifts.</span>
            </div>
          </div>

          <Button className="bg-red-800 hover:bg-red-700 text-white w-[300px] py-6 mt-4 flex items-center gap-2 rounded-full">
            <PhoneIcon className="h-6 w-6" />
            <span className="md:text-lg text-sm">Emergency Buddy</span>
          </Button>
          <span className="text-white text-start ml-24 text-xs">
            (In app use only)
          </span>
        </div>

        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <div className="col-span-2">
              <Image
                src={img1}
                alt="Car accident scene with emergency services"
                width={500}
                height={300}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={img2}
                alt="Emergency services at night"
                width={300}
                height={150}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <Image
                src={img3}
                alt="Person using phone app for emergency assistance"
                width={300}
                height={150}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            <div>
              <Image
                src={img4}
                alt="Person using phone app for emergency assistance"
                width={500}
                height={300}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Phone icon component
function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
