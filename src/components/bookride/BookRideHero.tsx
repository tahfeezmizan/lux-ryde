"use client"

import BookRideSearch from "../button/ui/BookRideSearch"

export default function BookRideHero() {
  return (
    <div className="hero2 bg-black bg-opacity-30">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 md:px-8 py-[100px]">
        <div className="absolute inset-0 " />
        <h1 className="relative text-2xl md:text-4xl lg:text-[64px] font-roboto font-bold text-secondery mb-4 z-10 top-4">
          Your Ride, <span className="text-white">Your Way</span>
        </h1>
        <p className="relative text-sm md:text-[20px] pt-[32px] z-10 text-white lg:w-[700px] w-full leading-[160%]">
          Effortless rides at your fingertips. Experience luxury, convenience, and savings with every ride. Join us in redefining urban transportation.
        </p>

        {/* Center aligned BookRideSearch */}
        <div className="flex justify-center mt-10">
          <BookRideSearch />
        </div>
      </div>
    </div>
  )
}