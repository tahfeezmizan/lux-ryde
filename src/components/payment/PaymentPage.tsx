"use client"

import { useState } from "react"
import { CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PaymentForm() {
  const [selectedPayment, setSelectedPayment] = useState<"mastercard" | "paypal" | "stripe">("mastercard")

  return (
    <div className="min-h-screen payment-bg flex items-center justify-center p-4 text-white">
      <div className="max-w-6xl w-full mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-roboto font-normal text-[#F1E1A3] mb-2">YOUR RYDE</h1>
          <p className="text-base md:text-xl font-roboto text-white">Easy payment processing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-6">
            <div className="rounded-[4px] border border-[#C7C2D7] bg-white/10 backdrop-blur-[10px] p-4 md:p-5">
              <h2 className="text-xl sm:text-2xl md:text-[32px] mb-4 text-[#F1E1A3] font-poppins font-normal">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="w-full">
                  <label htmlFor="firstName" className="block text-sm text-gray-400 mb-1">
                    First Name
                  </label>
                  <Input
                    type="text"
                    id="firstName"
                    className="h-12 md:h-[64px] p-3 md:p-[20px_16px] rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="John"
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="lastName" className="block text-sm text-gray-400 mb-1">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    id="lastName"
                    className="h-12 md:h-[64px] p-3 md:p-[20px_16px] rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    className="h-12 md:h-[64px] p-3 md:p-[20px_16px] rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="john@gmail.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-400 mb-1">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    id="phone"
                    className="h-12 md:h-[64px] p-3 md:p-[20px_16px] rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="+1(415)555-0123"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm text-gray-400 mb-1">
                  Address
                </label>
                <Input
                  type="text"
                  id="address"
                  className="h-12 md:h-[64px] p-3 md:p-[20px_16px] rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                  placeholder="Boston"
                />
              </div>
            </div>

            <div className="rounded-[4px] border border-[#C7C2D7] bg-white/10 backdrop-blur-[10px] p-4 md:p-5">
              <h2 className="text-xl sm:text-2xl md:text-[32px] text-[#F1E1A3] font-poppins font-normal mb-4">
                Billing Details
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-400">Pickup location:</span>
                  <span>Mc Donald st</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-400">Destination:</span>
                  <span>Purusimam Blvd</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-400">Distance:</span>
                  <span>10 km</span>
                </div>
                <div className="flex justify-between text-sm md:text-base">
                  <span className="text-gray-400">Service Fee:</span>
                  <span>$5</span>
                </div>
                <div className="h-px bg-gray-700 my-2"></div>
                <div className="flex justify-between font-medium text-sm md:text-base">
                  <span>Total:</span>
                  <span>$480</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Option */}
          <div className="space-y-6">
            <div className="rounded-[4px] border border-[#C7C2D7] bg-white/10 backdrop-blur-[10px] p-4 md:p-5">
              <h2 className="text-xl sm:text-2xl md:text-[32px] mb-4 text-[#F1E1A3] font-poppins font-normal">
                Payment Option
              </h2>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  className={`flex-1 p-3 rounded border ${selectedPayment === "mastercard" ? "border-yellow-400" : "border-gray-700"} flex items-center justify-center`}
                  onClick={() => setSelectedPayment("mastercard")}
                >
                  <div className="w-8 h-8 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-red-500 opacity-80"></div>
                      <div className="w-4 h-4 rounded-full bg-yellow-500 opacity-80 absolute ml-2"></div>
                    </div>
                  </div>
                  <input type="radio" checked={selectedPayment === "mastercard"} onChange={() => {}} className="ml-2" />
                </button>

                <button
                  className={`flex-1 p-3 rounded border ${selectedPayment === "paypal" ? "border-yellow-400" : "border-gray-700"} flex items-center justify-center`}
                  onClick={() => setSelectedPayment("paypal")}
                >
                  <div className="text-blue-400 font-bold">
                    <span className="text-blue-600">P</span>
                    <span className="text-blue-800">P</span>
                    <span className="text-blue-400">ay</span>
                  </div>
                  <input type="radio" checked={selectedPayment === "paypal"} onChange={() => {}} className="ml-2" />
                </button>

                <button
                  className={`flex-1 p-3 rounded border ${selectedPayment === "stripe" ? "border-yellow-400" : "border-gray-700"} flex items-center justify-center`}
                  onClick={() => setSelectedPayment("stripe")}
                >
                  <span className="text-purple-400 font-medium">stripe</span>
                  <input type="radio" checked={selectedPayment === "stripe"} onChange={() => {}} className="ml-2" />
                </button>
              </div>
            </div>

            <div className="rounded-[4px] border border-[#C7C2D7] bg-white/10 backdrop-blur-[10px] p-4 md:p-5">
              <div className="mb-4 flex items-center">
                <CreditCard className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-sm text-gray-400">Card</span>
              </div>

              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-sm text-gray-400 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <Input
                    type="text"
                    id="cardNumber"
                    className="h-12 md:h-[64px] p-3 pr-12 rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="4242 4242 4242 4242"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="w-10 h-6 bg-white rounded flex items-center justify-center">
                      <div className="text-blue-800 font-bold text-xs">VISA</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="expDate" className="block text-sm text-gray-400 mb-1">
                    Expiration date
                  </label>
                  <Input
                    type="text"
                    id="expDate"
                    className="h-12 md:h-[64px] p-3 rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="MM / YYYY"
                  />
                </div>
                <div>
                  <label htmlFor="securityCode" className="block text-sm text-gray-400 mb-1">
                    Security code
                  </label>
                  <Input
                    type="text"
                    id="securityCode"
                    className="h-12 md:h-[64px] p-3 rounded-[10px] border border-[rgba(39,21,99,0.26)] bg-[rgba(241,225,163,0.10)] text-white w-full"
                    placeholder="CVC"
                  />
                </div>
              </div>

              <Button className="w-full h-12 md:h-14 text-base md:text-lg font-medium">Pay $480</Button>

              <p className="text-xs text-gray-500 text-center mt-3">All payments are protected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

