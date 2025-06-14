/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { Calculator, FileText, ListChecks, Users } from "lucide-react"
import { useState } from "react"

import Call3 from "../icon/Call3"
import Emergency2 from "../icon/Emergency2"
import Link from "next/link"

export default function DataOverview() {
  // This is a mock state to simulate if a driver exists
  // In a real application, you would get this from your data source/context/props
  const [driverExists, setDriverExists] = useState(true) // Set to true for testing, change as needed

  return (
    <div className="bg-[#2F2D2E] py-8 rounded-lg">
      <div className="px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="md:text-lg font-semibold font-nunito text-[#D1B574]">Data Overview</h1>

          {driverExists && (
            <div className="flex gap-4">
              <button className="bg-[#790000] hover:bg-red-800 text-white md:text-sm text-xs font-nunito font-bold px-[18px] py-3 rounded-md flex items-center gap-2">
              
       <Call3/>
       <Link href="/emergency-features#emergency-buddy">      Emergency Buddy</Link>
           
              </button>
              <button className="bg-[#790000] hover:bg-red-800 text-white md:text-sm text-xs font-nunito font-bold px-4 py-2 rounded-md flex items-center gap-2">
              <Emergency2/>
      <Link href="/emergency-features"> Emergency </Link>
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Revenue Card */}
          <div className="bg-[#434243] rounded-lg p-6 py-12">
            <div className="flex items-start">
              <div className="bg-[#565455] p-4 rounded-full mr-4">
                <Calculator className="h-6 w-6 text-[#e6c15a]" />
              </div>
              <div>
                <p className="text-white font-nunito font-normal mb-1">Total Revenue</p>
                <p className="text-[#D1B574] text-xl font-nunito font-semibold">$12,0</p>
              </div>
            </div>
          </div>

          {/* Total Bookings Card */}
          <div className="bg-[#434243] rounded-lg p-6 py-12">
            <div className="flex items-start">
              <div className="bg-[#565455] p-4 rounded-full mr-4">
                <FileText className="h-6 w-6 text-[#e6c15a]" />
              </div>
              <div>
                <p className="text-white font-nunito font-normal mb-1">Total Bookings</p>
                <p className="text-[#D1B574] text-xl font-nunito font-semibold">1200</p>
              </div>
            </div>
          </div>

          {/* Active Drivers Card */}
          <div className="bg-[#434243] rounded-lg p-6 py-12">
            <div className="flex items-start">
              <div className="bg-[#565455] p-4 rounded-full mr-4">
                <ListChecks className="h-6 w-6 text-[#e6c15a]" />
              </div>
              <div>
                <p className="text-white font-nunito font-normal mb-1">Active Drivers</p>
                <p className="text-[#D1B574] text-xl font-nunito font-semibold">400</p>
              </div>
            </div>
          </div>

          {/* Users Card */}
          <div className="bg-[#434243] rounded-lg p-6 py-12">
            <div className="flex items-start">
              <div className="bg-[#565455] p-4 rounded-full mr-4">
                <Users className="h-6 w-6 text-[#e6c15a]" />
              </div>
              <div>
                <p className="text-white font-nunito font-normal mb-1">Users</p>
                <p className="text-[#D1B574] text-xl font-nunito font-semibold">400</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
