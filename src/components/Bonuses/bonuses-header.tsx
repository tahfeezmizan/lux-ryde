"use client";

import Link from "next/link";

export default function BonusesHeader() {
  return (
    <div className="relative bg-gray-900 bonus-hero  w-full">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center px-4 md:px-8 pt-32 pb-32 z-10">
        <h1 className="text-secondery text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Share & Earn – MLM Referral System
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-white pt-8 max-w-2xl leading-relaxed">
          Refer friends, grow your network, and earn commissions on every ride
          they take. The more you refer, the more you earn — unlock unlimited
          income potential!
        </p>
        <div className="pt-8">
          <button className="bg-secondery text-black font-bold w-44 h-12 rounded-full flex justify-center items-center shadow-md hover:bg-secondary transition-all  hover:bg-yellow-500  duration-300 ease-in-out transform hover:scale-105">
        <Link href="/mlm">
        Refer Now & Earn
        </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
