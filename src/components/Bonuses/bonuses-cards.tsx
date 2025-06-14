"use client";

import { Feature } from "../Home/Feature";
import { bonusData } from "@/constant/bonusData";

export default function BonusesCards() {
  return (
    <div className="bg-gray-900 w-full relative bonus-car bg-cover bg-center">
    
      <div className="inset-0 bg-black/50 z-0" />

      <div className="container mx-auto flex flex-col items-center justify-center text-center px-4 md:px-8 pt-12 md:pt-12 relative z-10">
        <div>
          <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            Earn with Your Ryde: Refer, Build, and Get Paid!
          </h1>
          <p className="text-xs md:text-sm lg:text-base text-white pt-6 max-w-2xl leading-relaxed mx-auto">
            Make money by referring a friend and get paid through our MLM system
            10 levels deep. Read below and learn how.
          </p>
        </div>

        <div className="md:pt-14 py-12 md:pb-16 w-full">
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonusData.map((feature, index) => (
              <Feature title={""} key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
