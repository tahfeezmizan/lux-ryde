/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Car, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import ChooseRideModal from "./ChooseRideModal";
import map from "@/assets/map.png";
import Image from "next/image";
import chooseCar from "@/assets/chooseCar.png";

// Sample ride data

export default function RideHailingApp({ driverPositions, rides }: any) {
  const [selectedDriver, setSelectedDriver] = useState<any>(null);

  return (
    <div className="container mx-auto px-4 my-4">
      <div className="py-6 pt-16 space-y-2">
        <h1 className="text-2xl md:text-4xl font-roboto font-semibold text-white">
          Choose a ride
        </h1>
        <p className="text-base md:text-2xl font-roboto font-semibold text-white">
          Recommended
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
        {/* Left side - Ride options */}
        <div className="col-span-1 md:col-span-2 overflow-y-auto">
          <div className="space-y-3">
            {rides?.map((ride: any) => (
              <div
                key={ride.id}
                className="bg-[#2E2C2D] rounded-lg border border-[#6F6F6F] p-4 flex items-center justify-between cursor-pointer hover:bg-[#6F6F6F]/50 transition-colors"
                onClick={() => setSelectedDriver(ride)}
              >
                <div className="flex items-center gap-4">
                  <div className="border border-[#6F6F6F] p-2 rounded-lg w-[100px] h-[100px]">
                    <Image
                      src={chooseCar.src}
                      alt="choose car"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold font-roboto md:text-2xl">
                      {ride.type}
                    </h3>
                    <p className="md:text-base font-roboto text-white">
                      {ride.time}
                    </p>
                    <p className="md:text-base font-roboto text-white mt-1">
                      {ride.description}
                    </p>
                    <div className="flex items-center mt-1">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-3 w-3",
                              i < Math.floor(ride.rating)
                                ? "fill-[#F1E1A3] text-[#F1E1A3]"
                                : "text-slate-500"
                            )}
                          />
                        ))}
                      <span className="md:text-base font-roboto text-white ml-1">
                        ({ride.reviews} Reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="md:text-4xl font-roboto text-white">
                    ${ride.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Static Map */}
        <div className="col-span-1 h-[400px] md:h-auto relative bg-slate-800 rounded-xl">
          <Image
            src={map}
            alt="City Map"
            height={531}
            width={575}
            className="w-full h-full object-cover opacity-80 rounded-xl"
          />

          {/* Driver icons on the map */}
          {rides?.map((ride: any, index: any) => (
            <div
              key={ride.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{
                top: driverPositions[index].top,
                left: driverPositions[index].left,
              }}
              onClick={() => setSelectedDriver(ride)}
            >
              <div className="rounded-full p-2  transition-colors">
                <Car className="h-8 w-8 text-black" />
              </div>
              <div className="bg-black bg-opacity-70 text-white text-xs p-1 rounded mt-1 text-center">
                {ride.driver.name}
              </div>
            </div>
          ))}

          {/* Destination and origin markers */}
          <div className="absolute bottom-10 right-10 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
            Destination
          </div>
          <div className="absolute top-10 left-10 bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
            Your Location
          </div>
        </div>
      </div>

      {/* Driver Modal */}
      <div className="relative">
        {selectedDriver && (
          <ChooseRideModal
            driver={selectedDriver}
            onClose={() => setSelectedDriver(null)}
          />
        )}
      </div>

      {/* Bottom buttons */}
    </div>
  );
}
