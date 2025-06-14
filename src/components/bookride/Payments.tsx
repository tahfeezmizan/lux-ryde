"use client";

import { useBookingMutation } from "@/redux/api/userApi";
import { CreditCard, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPaypal } from "react-icons/fa";

export default function Payments({ onClose }: { onClose: () => void }) {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [otp, setOtp] = useState<number | null>(null);
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [bookings] = useBookingMutation();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOtp = Math.floor(100 + Math.random() * 900); // 3-digit OTP
    setOtp(generatedOtp);
    setShowOtpPopup(true);

    setTimeout(() => {
      handleBooking();
      router.push("/dashboard/myorder");
    }, 5000);
  };

  const handleBooking = async () => {
    try {
      await bookings({
        driverName: "John Doe",
        pickup: "Central Station",
        destination: "Airport Terminal 1",
        fare: "450.50",
      });
    } catch (err) {
      console.error("Booking failed:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999999] p-4">
      <div className="bg-white text-black rounded-xl max-w-md w-full p-6 shadow-2xl relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Payment Method</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Payment options */}
        <div className="flex gap-4 mb-6">
          <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer w-full transition hover:shadow-md bg-gray-50">
            <input
              type="radio"
              name="payment"
              value="stripe"
              checked={paymentMethod === "stripe"}
              onChange={() => setPaymentMethod("stripe")}
              className="accent-indigo-600"
            />
            <CreditCard className="text-indigo-600" size={20} />
            <span className="text-sm font-medium text-gray-700">Stripe</span>
          </label>
          <label className="flex items-center gap-2 p-3 border rounded-lg cursor-pointer w-full transition hover:shadow-md bg-gray-50">
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="accent-indigo-600"
            />
            <FaPaypal className="text-indigo-600" size={20} />
            <span className="text-sm font-medium text-gray-700">PayPal</span>
          </label>
        </div>

        {/* Payment form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
            <label className="block text-sm font-medium ">Coupon code </label>
            <p className="text-xs mb-3">If you have valid coupon?</p>
           
            <input
              type="text"
              placeholder="FCxxxxx"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Cardholder Name</label>
            <input
              type="text"
              required
              
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              required
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">CVC</label>
              <input
                type="text"
                placeholder="123"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition font-medium"
          >
            Save & Continue
          </button>
        </form>
      </div>

      {/* OTP Popup */}
      {showOtpPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[99999999]">
          <div className="bg-white p-6 rounded-lg shadow-xl w-80 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Enter OTP</h3>
            <p className="text-3xl font-bold text-indigo-600">{otp}</p>
          </div>
        </div>
      )}
    </div>
  );
}
