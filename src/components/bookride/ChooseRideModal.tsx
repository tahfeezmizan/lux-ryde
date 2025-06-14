"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Star, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import Payments from "./Payments";

interface DriverDetailsModalProps {
  driver: any;
  onClose: () => void;
}

export default function ChooseRideModal({
  driver,
  onClose,
}: DriverDetailsModalProps) {
  const [showPayments, setShowPayments] = useState(false);

  return (
    <div>
      {showPayments && <Payments onClose={() => setShowPayments(false)} />}

      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999999] p-4 md:p-6 lg:p-8">
        <div className="bg-white/10 backdrop-blur-md text-white rounded-lg w-full max-w-lg sm:max-w-xl md:max-w-3xl">
          <div className="p-4 sm:p-6 md:p-8 flex justify-between items-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-roboto font-semibold">
              Ride Details
            </h2>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Driver Info */}
            <div className="bg-white/9 backdrop-blur-md rounded-lg p-3 sm:p-4">
              <h3 className="mb-3 text-center text-lg sm:text-xl md:text-2xl font-roboto font-semibold">
                Driver Info
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 bg-orange-500">
                  <Image
                    src={
                      driver.driver.image ||
                      "/placeholder.svg?height=56&width=56"
                    }
                    alt={driver.driver.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center mb-3">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6",
                          i < Math.floor(driver.driver.rating)
                            ? "fill-[#F1E1A3] text-[#F1E1A3]"
                            : "text-gray-500"
                        )}
                      />
                    ))}
                  <span className="text-xs sm:text-sm md:text-base text-white font-roboto font-normal ml-2">
                    ({driver.driver.reviews} Reviews)
                  </span>
                </div>
                <div className="w-full space-y-3 text-xs sm:text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Name:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.driver.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Email:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.driver.email}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Phone Number:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.driver.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Address:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.driver.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Car Info */}
            <div className="bg-white/9 backdrop-blur-md rounded-lg p-3 sm:p-4">
              <h3 className="mb-3 text-center text-lg sm:text-xl md:text-2xl font-roboto font-semibold">
                Car Info
              </h3>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-3 bg-gray-700">
                  <Image
                    src={
                      driver.car.image || "/placeholder.svg?height=56&width=56"
                    }
                    alt={driver.car.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full space-y-1 text-xs sm:text-sm md:text-base">
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Car Name:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.car.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Model:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.car.model}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Type:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.car.type}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-sans font-normal">
                      Color:
                    </span>
                    <span className="text-white font-sans font-normal">
                      {driver.car.color}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4 text-xs sm:text-sm md:text-base text-gray-300">
            <p className="mb-3 text-sm sm:text-base md:text-lg font-roboto font-normal">
              Your fare will be price presented before the trip is based on the
              rates shown and may change based on destination and other
              applicable surcharges and adjustments.
            </p>

            <div className="space-y-2 mb-3">
              <div className="flex items-baseline text-sm sm:text-base md:text-lg font-roboto font-normal">
                <span>Base Fare</span>
                <div className="flex-1 mx-2 border-b border-dotted border-gray-600 h-[0.5px] translate-y-[-5px]"></div>
                <span>$150.00</span>
              </div>
              <div className="flex items-baseline text-sm sm:text-base md:text-lg font-roboto font-normal">
                <span>Minimum Fare</span>
                <div className="flex-1 mx-2 border-b border-dotted border-gray-600 h-[0.5px] translate-y-[-5px]"></div>
                <span>$150.00</span>
              </div>
              <div className="flex items-baseline text-sm sm:text-base md:text-lg font-roboto font-normal">
                <span>+ Per Minute</span>
                <div className="flex-1 mx-2 border-b border-dotted border-gray-600 h-[0.5px] translate-y-[-5px]"></div>
                <span>$150.00</span>
              </div>
              <div className="flex items-baseline text-sm sm:text-base md:text-lg font-roboto font-normal">
                <span>+ Per Kilometer</span>
                <div className="flex-1 mx-2 border-b border-dotted border-gray-600 h-[0.5px] translate-y-[-5px]"></div>
                <span>$15.00</span>
              </div>
            </div>

            <p className="mb-4 text-sm sm:text-base md:text-lg font-roboto font-normal">
              Additional time charges may apply to your trip if the driver has
              to wait. Vehicle is unavailable. NEXT TRIP per minute.
            </p>

            <div className="mt-6 flex items-start justify-start gap-4 bg-[#222] p-3 rounded-lg my-4 px-4 md:px-10">
             

              <button 
                              onClick={() => setShowPayments(true)}
                              className="flex-1 px-4 py-4 bg-[#F1E1A3] hover:bg-yellow-500 text-black rounded-full text-sm font-medium  transition duration-300 ease-in-out transform hover:scale-105">
                Request XL Intercity
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
