import React from 'react';
import belowhero from '@/assets/belowhero.png';

import Image from 'next/image';

function RydeDiffrent() {
  return (
    <div className="bg-black text-white rydediff  w-full h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Image Grid */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={belowhero.src}
                width={460}
                height={362}
                className="w-full h-auto"
                alt="Below Hero"
              />
            </div>
          </div>
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-roboto font-semibold mb-4 lg:mb-6">
              What Makes Your Ryde Different?
            </h1>
            <p className="text-sm md:text-base lg:text-lg font-roboto font-normal mb-6 lg:mb-8">
              Our Ryde is built for riders and drivers who deserve better. We prioritize fair pricing,
              driver-friendly earnings, and a seamless travel experience. Our mission is to make
              ride-sharing affordable and rewarding for everyone!
            </p>
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-center gap-2 font-roboto font-medium text-sm md:text-base lg:text-lg">
                <span className="text-red-500">🚗</span>
                <span>Lower Fares</span>
              </div>
              <div className="flex items-center gap-2 font-roboto font-medium text-sm md:text-base lg:text-lg">
                <span className="text-yellow-500">💰</span>
                <span>Higher Driver Earnings</span>
              </div>
              <div className="flex items-center gap-2 font-roboto font-medium text-sm md:text-base lg:text-lg">
                <span className="text-blue-500">🎯</span>
                <span>Loyalty Points</span>
              </div>
              <div className="flex items-center gap-2 font-roboto font-medium text-sm md:text-base lg:text-lg">
                <span className="text-green-500">🔄</span>
                <span>MLM Referral System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RydeDiffrent;