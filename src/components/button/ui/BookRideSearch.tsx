/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback } from "react";
import CommonButton from "../CommonButton";
import { useRouter } from "next/navigation";

export default function BookRideSearch() {
  const router = useRouter();
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState("luxury");

  const search = useCallback(() => {
    router.push(`/book-ride`);
  }, [pickup, destination, vehicleType, router]);

  return (
    <div className="pt-4 p-5 w-full z-[9999]">
      <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg w-full">
        <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap gap-6 items-end">
          <div className="space-y-2 z-[99999] w-full sm:w-full md:w-72 lg:w-72">
            <label
              htmlFor="pickup"
              className="md:text-sm font-roboto font-medium text-white text-left block"
            >
              Pickup location
            </label>
            <input
              id="pickup"
              placeholder="Enter your location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full font-inter font-normal text-[#c4c4c4] bg-transparent border border-[#737373] rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div className="space-y-2 z-[99999] w-full sm:w-full md:w-72 lg:w-72">
            <label
              htmlFor="destination"
              className="md:text-sm font-roboto font-medium text-white text-left block"
            >
              Destination
            </label>
            <input
              id="destination"
              placeholder="Dropoff location"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full bg-transparent font-inter font-normal text-[#c4c4c4] border border-[#737373] rounded-md p-2 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div className="space-y-2 z-[99999] w-full sm:w-full md:w-96 lg:w-96">
            <label
              htmlFor="vehicle-type"
              className="md:text-sm font-roboto font-medium text-white text-left block"
            >
              Vehicle Type
            </label>
            <div className="relative">
              <select
                id="vehicle-type"
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="w-full appearance-none border-[#737373] bg-transparent border font-inter font-normal text-[#c4c4c4] rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-amber-400 pr-8"
              >
                <option value="luxury" className="bg-black">
                  Luxury Car
                </option>
                <option value="suv" className="bg-gray">
                  SUV
                </option>
                <option value="sedan" className="bg-gray">
                  Sedan
                </option>
                <option value="economy" className="bg-gray">
                  Economy
                </option>
              </select>
              <div className="absolute text-white inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="self-end z-30">
            <CommonButton text="Search" onClick={search} />
          </div>
        </div>
      </div>
    </div>
  );
}
