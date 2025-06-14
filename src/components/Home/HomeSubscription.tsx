import { useState } from "react";
import Check from "../icon/Checks";
import Payments from "../bookride/Payments";

export default function HomeSubscription() {
  const [selectedTier, setSelectedTier] = useState("bronze"); // Default to "bronze"
  const [showPayments, setShowPayments] = useState(false);

  // Function to handle the tier selection
  const handleSelectTier = (tier: string) => {
    setSelectedTier(tier);
  };

  return (
    <div>
      {showPayments && <Payments onClose={() => setShowPayments(false)} />}

      <div className="w-full bg-black text-white ">
        <div className="subscription">
          <div className="z-10 flex flex-col lg:flex-row container items-center justify-center md:py-[100px] py-[50px] px-4">
            {/* Left Section */}
            <div className="text-center lg:text-left lg:w-1/2">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roboto font-bold">
                    YOUR RYDE LOYALTY PROGRAM
                  </h2>
                  <p className="mt-2 text-sm sm:text-base md:text-lg lg:text-xl font-roboto text-white text-opacity-70 lg:text-opacity-70">
                    Unlock Exclusive Rewards & Savings with Every Ride! 4
                    Loyalty Tiers – Pick the One That Suits You Best!
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-4 lg:justify-start">
                    {/* Bronze Button */}
                    <button
                      onClick={() => handleSelectTier("bronze")}
                      className={`px-4 py-6 rounded-lg border text-white hover:bg-yellow-500 hover:text-black bg-neutral-500/50 font-roboto font-medium text-sm sm:text-base md:text-[18px] w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 ${
                        selectedTier === "bronze"
                          ? "bg-yellow-500 text-black"
                          : ""
                      }`}
                    >
                      🟤 Bronze
                    </button>
                    {/* Silver Button */}
                    <button
                      onClick={() => handleSelectTier("silver")}
                      className={`px-6 py-8 rounded-lg border text-gray-400 hover:bg-gray-400 hover:text-black bg-neutral-500/50 font-roboto font-medium text-sm sm:text-base md:text-[18px] w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 ${
                        selectedTier === "silver"
                          ? "bg-gray-400 text-black"
                          : ""
                      }`}
                    >
                      ⚪ Silver
                    </button>
                    {/* Gold Button */}
                    <button
                      onClick={() => handleSelectTier("gold")}
                      className={`px-6 py-8 rounded-lg border text-yellow-300 hover:bg-yellow-300 hover:text-black bg-neutral-500/50 font-roboto font-medium text-sm sm:text-base md:text-[18px] w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 ${
                        selectedTier === "gold"
                          ? "bg-yellow-300 text-black"
                          : ""
                      }`}
                    >
                      🟡 Gold
                    </button>
                    {/* Platinum Button */}
                    <button
                      onClick={() => handleSelectTier("platinum")}
                      className={`px-6 py-8 rounded-lg border text-white hover:bg-blue-400 hover:text-black bg-neutral-500/50 font-roboto font-medium text-sm sm:text-base md:text-[18px] w-full sm:w-auto transition duration-300 ease-in-out transform hover:scale-105 ${
                        selectedTier === "platinum"
                          ? "bg-blue-400 text-black"
                          : ""
                      }`}
                    >
                      💎 Diamond
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2">
              <div>
                <div className="mt-10 lg:mt-0 md:mx-[100px] bg-white bg-opacity-10 border-none backdrop-blur-[10px] md:pt-10 md:pb-6 px-20 py-6 rounded-lg">
                  {/* Conditional Rendering based on selected tier */}
                  {selectedTier === "bronze" && (
                    <div>
                      <div className="flex justify-center items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-[32px] font-semibold font-roboto">
                            Bronze Tier{" "}
                            <span className="md:text-xl">
                              {" "}
                              (0 – 999 Points)
                            </span>
                          </h3>
                          <p className="text-lg sm:text-xl md:text-[32px] font-semibold font-roboto text-[#F1E1A3] mt-2">
                            $19.99{" "}
                            <span className="text-sm sm:text-base font-roboto text-white">
                              /year
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <ul className="space-y-4">
                          <li className="flex items-center font-roboto text-lg font-normal text-[#EBEBEB] gap-1">
                            <Check /> {"  "}
                            Earn points on every ride.
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Access to referral bonuses.
                          </li>
                        </ul>
                      </div>

                      <button
                        onClick={() => setShowPayments(true)}
                        className="mt-6 md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Subscribe
                      </button>
                    </div>
                  )}

                  {selectedTier === "silver" && (
                    <div>
                      <div className="flex justify-center items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-[32px] font-semibold font-roboto">
                            Silver Tier{" "}
                            <span className="md:text-xl">
                              {" "}
                              (1,000 – 4,999 Points){" "}
                            </span>
                          </h3>
                          <p className="text-lg sm:text-xl md:text-[32px] font-semibold font-roboto text-[#F1E1A3] mt-2">
                            $29.99{" "}
                            <span className="text-sm sm:text-base font-roboto text-white">
                              /year
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <ul className="space-y-4">
                          <li className="flex items-center font-roboto text-lg font-normal text-[#EBEBEB] gap-1">
                            <Check /> 5% discount on every 5th ride.
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Access to early booking hours during peak
                            times.
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Priority support in the app.
                          </li>
                        </ul>
                      </div>

                      <button
                        onClick={() => setShowPayments(true)}
                        className="mt-6 md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Subscribe
                      </button>
                    </div>
                  )}

                  {selectedTier === "gold" && (
                    <div>
                      <div className="flex justify-center items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-[32px] font-semibold font-roboto">
                            Gold Tier
                            <span className="md:text-xl">
                              {" "}
                              (5,000 – 9,999 Points)
                            </span>
                          </h3>
                          <p className="text-lg sm:text-xl md:text-[32px] font-semibold font-roboto text-[#F1E1A3] mt-2">
                            $59.99{" "}
                            <span className="text-sm sm:text-base font-roboto text-white">
                              /year
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <ul className="space-y-4">
                          <li className="flex items-center font-roboto text-lg font-normal text-[#EBEBEB] gap-1">
                            <Check /> 10% off every ride.
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Free luxury rides match and assign (up to
                            3).
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Free long-haul match (limited).
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Double points on holidays.
                          </li>
                        </ul>
                      </div>

                      <button
                        onClick={() => setShowPayments(true)}
                        className="mt-6 md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Subscribe
                      </button>
                    </div>
                  )}

                  {selectedTier === "platinum" && (
                    <div>
                      <div className="flex justify-center items-center">
                        <div>
                          <h3 className="text-xl sm:text-2xl md:text-[32px] font-semibold font-roboto">
                            Platinum Tier{" "}
                            <span className="md:text-xl">(10,000+ Points)</span>
                          </h3>
                          <p className="text-lg sm:text-xl md:text-[32px] font-semibold font-roboto text-[#F1E1A3] mt-2">
                            $99.99{" "}
                            <span className="text-sm sm:text-base font-roboto text-white">
                              /year
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center items-center mt-4">
                        <ul className="space-y-4">
                          <li className="flex items-center font-roboto text-lg font-normal text-[#EBEBEB] gap-1">
                            <Check /> 15% off all rides.
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> VIP Concierge Support.
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> 3 free VIP credits monthly (up to $15 per
                            ride).
                          </li>
                          <li className="flex items-center gap-1">
                            <Check /> Lifetime access to premium event giveaways
                            & exclusive perks.
                          </li>
                        </ul>
                      </div>

                      <button
                        onClick={() => setShowPayments(true)}
                        className="mt-6 md:text-lg font-roboto font-medium w-full py-3 bg-[#F1E1A3] text-[#04090D] rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Subscribe
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
