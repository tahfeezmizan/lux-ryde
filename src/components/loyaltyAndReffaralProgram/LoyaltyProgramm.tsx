"use client";
import { Trophy, Star, Check } from "lucide-react";
import Image from "next/image";
import l1 from "@/assets/l1.jpg";
import l2 from "@/assets/l2.png";
import Payments from "../bookride/Payments";
import { useState } from "react";
import { Button } from "../ui/button";

export default function LoyaltyProgram() {
  const [showPayments, setShowPayments] = useState(false);

  return (
    <div className="min-h-screen policy-bg text-white font-roboto">
      {showPayments && <Payments onClose={() => setShowPayments(false)} />}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Your Ryde Loyalty Program
        </h1>

        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-center md:text-3xl text-2xl font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-center text-sm md:text-xl font-normal text-gray-300 max-w-2xl mx-auto mb-8">
            Every time you take a ride with Your Ryde, you earn loyalty points.
            These points can be redeemed later and also come with special
            benefits, rewards, or even cash credit for your future rides.
          </p>

          {/* Points System */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Earning Points */}
            <div className="flex flex-col justify-center items-center gap-8 p-6 flex-1 rounded-lg bg-white/10 backdrop-blur-md">
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-2xl md:text-[32px] font-medium text-yellow-500">
                  Earning Points
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Every Ride Completed: Earn 20 points per ride.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Refer a Friend: Earn 50 bonus points when your referral
                    completes their first ride.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Ride During Peak Hours: Get an extra 50 bonus points.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Double Points Days: Occasionally announced – you&apos;ll
                    earn 2x the points per ride on these days.
                  </span>
                </li>
              </ul>
            </div>

            {/* Redeeming Points */}
            <div className="flex flex-col items-center gap-8 p-6 flex-1 rounded-lg bg-white/10 backdrop-blur-md">
              <div className="flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-yellow-500 mr-2" />
                <h3 className="text-2xl md:text-[32px] font-medium text-yellow-500">
                  Redeeming Points
                </h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Redeem $1 off your next ride: 50 points.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Convert to $5 cash: use 500 Points in digital wallet.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Pay zero premium (Surcharge in rainy/peak hours): 100 points
                    per ride (only available for Gold & Platinum tiers).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="relative" id="loyaltySubscription">
          <h2 className="text-center md:text-3xl text-2xl font-semibold mb-12">
            Loyalty Tiers
          </h2>

          <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
            {/* Bronze Tier */}
            <div className="flex flex-col gap-8 p-4 rounded-lg bg-white/10 backdrop-blur-md h-full">
              <div className="h-12 w-12">
                <Image
                  src="/assets/1.png"
                  alt="Bronze Tier"
                  width={48}
                  height={48}
                  className="object-cover mt-2"
                />
              </div>
              <h3 className="md:text-xl text-lg font-semibold mb-1 pt-1 text-yellow-500">
                1. Bronze Tier (0 – 999 Points)
              </h3>
              <ul className="space-y-4 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Earn points on every ride.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Access to referral bonuses.
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowPayments(true)}
                className="mt-auto md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>


               {/* Silver Tier */}
               <div className="flex flex-col gap-8 p-4 rounded-lg bg-white/10 backdrop-blur-md h-full">
              <div className="h-12 w-12">
                <Image
                  src="/assets/2.png"
                  alt="Silver Tier"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <h3 className="md:text-xl text-lg font-semibold mb-1 pt-1 text-gray-300">
                2. Silver Tier (1,000 – 4,999 Points)
              </h3>
              <ul className="space-y-4 flex-grow">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    5% discount on every 5th ride.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Access to early booking hours during peak times.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Priority support in the app.
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowPayments(true)}
                className="mt-auto md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>

            <Image
              src={l2}
              alt="Platinum Tier"
              width={400}
              height={400}
              className="object-cover absolute z-30 bottom-[10%] right-[-10%] "
            />
            <div className="flex flex-col gap-8 p-4 rounded-lg bg-white/10 backdrop-blur-md">
              <div className="h-12 w-12">
                <Image
                  src="/assets/3.png"
                  alt="Gold Tier"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <h3 className="md:text-xl text-lg font-semibold mb-1 pt-1 text-yellow-300">
                3. Gold Tier (5,000 – 9,999 Points)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    10% off every ride.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Free luxury rides match and assign (up to 3).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Free long-haul match (limited).
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                    <Check className="text-black h-4 w-4" />
                  </div>
                  <span className="ml-3 text-sm md:text-lg text-white font-normal">
                    Double points on holidays.
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowPayments(true)}
                className="mt-6 md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>

          </div>

          <Image
            src={l1}
            alt="Platinum Tier"
            width={300}
            height={300}
            className="object-cover absolute left-50 bottom-[10%]"
          />

          <div className="flex flex-col gap-8 p-4 rounded-lg bg-white/10 backdrop-blur-md md:max-w-[320px] self-center mx-auto max-h-[462px] mt-6">
            <div className="h-12 w-12">
              <Image
                src="/assets/4.png"
                alt="Platinum Tier"
                width={48}
                height={48}
                className="object-cover relative"
              />
            </div>
            <h3 className="md:text-xl text-lg font-semibold mb-1 pt-1 text-blue-400">
              4. Diamond Tier (10,000+ Points)
            </h3>
            <ul className="space-y-4 flex-grow">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                  <Check className="text-black h-4 w-4" />
                </div>
                <span className="ml-3 text-sm md:text-lg text-white font-normal">
                  15% off all rides.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                  <Check className="text-black h-4 w-4" />
                </div>
                <span className="ml-3 text-sm md:text-lg text-white font-normal">
                  VIP Concierge Support.
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                  <Check className="text-black h-4 w-4" />
                </div>
                <span className="ml-3 text-sm md:text-lg text-white font-normal">
                  3 free VIP credits monthly (up to $15 per ride).
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1 bg-yellow-500 rounded-full h-6 w-6 p-1 flex items-center justify-center">
                  <Check className="text-black h-4 w-4" />
                </div>
                <span className="ml-3 text-sm md:text-lg text-white font-normal">
                  Lifetime access to premium event giveaways & exclusive perks.
                </span>
              </li>
            </ul>
            <Button
              onClick={() => setShowPayments(true)}
              className="md:text-lg font-roboto font-medium w-full py-5 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Subscribe
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}
