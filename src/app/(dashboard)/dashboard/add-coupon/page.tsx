/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRouter } from "next/navigation";
import { useAddCouponMutation } from "@/redux/api/couponApi";
import { useState } from "react";

export default function AddCouponPage() {
  const router = useRouter();
  const [addCoupon, { isLoading }] = useAddCouponMutation();

  // Form state
  const [formData, setFormData] = useState({
    code: "",
    discount: 0,
    minOrderValue: 0,
    validFrom: new Date().toISOString().split("T")[0],
    validUntil: new Date(new Date().setMonth(new Date().getMonth() + 1))
      .toISOString()
      .split("T")[0],
  });

  // Error state
  const [errors, setErrors] = useState({
    code: "",
    discount: "",
    minOrderValue: "",
    validFrom: "",
    validUntil: "",
  });

  // Success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  // Validate form
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate code
    if (!formData.code || formData.code.length < 3) {
      newErrors.code = "Coupon code must be at least 3 characters";
      isValid = false;
    }

    // Validate discount
    const discountValue = Number(formData.discount);
    if (isNaN(discountValue) || discountValue < 1 || discountValue > 100) {
      newErrors.discount = "Discount must be between 1 and 100";
      isValid = false;
    }

    // Validate minimum order value
    const minOrderValue = Number(formData.minOrderValue);
    if (isNaN(minOrderValue) || minOrderValue < 0) {
      newErrors.minOrderValue = "Minimum order value must be positive";
      isValid = false;
    }

    // Validate dates
    if (!formData.validFrom) {
      newErrors.validFrom = "Start date is required";
      isValid = false;
    }

    if (!formData.validUntil) {
      newErrors.validUntil = "End date is required";
      isValid = false;
    }

    if (
      formData.validFrom &&
      formData.validUntil &&
      new Date(formData.validFrom) >= new Date(formData.validUntil)
    ) {
      newErrors.validUntil = "End date must be after start date";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) {
      return;
    }

    try {
      // Format data for API
      const apiData = {
        ...formData,
        discount: Number(formData.discount),
        minOrderValue: Number(formData.minOrderValue),
        validFrom: new Date(formData.validFrom).toISOString(),
        validUntil: new Date(formData.validUntil).toISOString(),
      };

      await addCoupon(apiData).unwrap();
      setSuccessMessage(
        `Coupon ${formData.code} has been created successfully!`
      );

      // Reset form after success
      setTimeout(() => {
        router.push("/dashboard/coupon");
      }, 2000);
    } catch (error) {
      console.error("Failed to create coupon:", error);
      setErrors({
        ...errors,
      });
    }
  };

  return (
    <div className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Card container */}
        <div className="bg-black rounded-xl shadow-lg overflow-hidden border border-white/10">
          {/* Header */}
          <div className="bg-black px-6 py-8 text-white border-b border-white/10">
            <h1 className="text-2xl font-bold">Add New Coupon</h1>
            <p className="mt-2 text-white/70">
              Create a new discount coupon for your customers
            </p>
          </div>

          {/* Success message */}
          {successMessage && (
            <div className="bg-black border-l-4 border-secondary p-4 m-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-secondary"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-white">{successMessage}</p>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-8 space-y-6">
            {/* Coupon Code */}
            <div>
              <label
                htmlFor="code"
                className="block text-sm font-medium text-white"
              >
                Coupon Code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="code"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  placeholder="SUMMER2025"
                  className="block w-full px-4 py-3 rounded-lg border border-white/20 shadow-sm bg-black text-white focus:ring-2 focus:ring-white/50 focus:border-white/50"
                />
              </div>
              {errors.code && (
                <p className="mt-1 text-sm text-red-500">{errors.code}</p>
              )}
              <p className="mt-1 text-sm text-white/60">
                Enter a unique code for this coupon.
              </p>
            </div>

            {/* Discount */}
            <div>
              <label
                htmlFor="discount"
                className="block text-sm font-medium text-white"
              >
                Discount Percentage (%)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="discount"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  min="1"
                  max="100"
                  className="block w-full px-4 py-3 rounded-lg border border-white/20 shadow-sm bg-black text-white focus:ring-2 focus:ring-white/50 focus:border-white/50"
                />
              </div>
              {errors.discount && (
                <p className="mt-1 text-sm text-red-500">{errors.discount}</p>
              )}
              <p className="mt-1 text-sm text-white/60">
                Enter a discount percentage between 1 and 100.
              </p>
            </div>

            {/* Minimum Order Value */}
            <div>
              <label
                htmlFor="minOrderValue"
                className="block text-sm font-medium text-white"
              >
                Minimum Order Value
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  id="minOrderValue"
                  name="minOrderValue"
                  value={formData.minOrderValue}
                  onChange={handleChange}
                  min="0"
                  className="block w-full px-4 py-3 rounded-lg border border-white/20 shadow-sm bg-black text-white focus:ring-2 focus:ring-white/50 focus:border-white/50"
                />
              </div>
              {errors.minOrderValue && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.minOrderValue}
                </p>
              )}
              <p className="mt-1 text-sm text-white/60">
                Minimum order value required to use this coupon.
              </p>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Valid From */}
              <div>
                <label
                  htmlFor="validFrom"
                  className="block text-sm font-medium text-white"
                >
                  Valid From
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="validFrom"
                    name="validFrom"
                    value={formData.validFrom}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border border-white/20 shadow-sm bg-black text-white focus:ring-2 focus:ring-white/50 focus:border-white/50"
                  />
                </div>
                {errors.validFrom && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.validFrom}
                  </p>
                )}
              </div>

              {/* Valid Until */}
              <div>
                <label
                  htmlFor="validUntil"
                  className="block text-sm font-medium text-white"
                >
                  Valid Until
                </label>
                <div className="mt-1">
                  <input
                    type="date"
                    id="validUntil"
                    name="validUntil"
                    value={formData.validUntil}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 rounded-lg border border-white/20 shadow-sm bg-black text-white focus:ring-2 focus:ring-white/50 focus:border-white/50"
                  />
                </div>
                {errors.validUntil && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.validUntil}
                  </p>
                )}
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-between pt-6">
              <button
                type="button"
                onClick={() => router.push("/dashboard/coupon")}
                className="px-6 py-3 border border-white/20 shadow-sm text-white text-base font-medium rounded-md bg-black hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary shadow-md ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Create Coupon"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
