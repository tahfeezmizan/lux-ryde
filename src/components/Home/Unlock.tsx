import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Unlock() {
  return (
    <div className="w-full font-roboto bg-[#181617]  relative h-[500px] md:h-[760px] overflow-hidden mt-8">
 
<div className="relative w-full h-full py-36 flex justify-center items-center">
<Image
        src="/assets/shape.png"
        alt="Shape background"
        fill
        className="object-cover z-0"
      />

   
      <div className="absolute inset-0 bg-black/60 z-10" />


      <div className="relative z-20 flex justify-center items-center h-full text-center px-4">
        <div className="text-white container max-w-3xl">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold font-roboto leading-snug">
            Unlock Earnings with a 10-Level Deep Network
          </h2>
          <p className="mt-4 md:text-sm lg:text-base font-normal font-roboto">
            Refer riders and drivers to Your Ryde and earn commissions from their trips.
            Level up by reaching 25 direct referrals and watch your earnings grow.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#F1E1A3] text-black rounded-full font-semibold   hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/mlm">MLM</Link>
          </button>
        </div>
      </div>
</div>
    </div>
  );
}
