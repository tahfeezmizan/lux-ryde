"use client";
import Image from "next/image";
import { useGetmeQuery } from "@/redux/api/authApi";
import { useEffect, useState } from "react";
import referal from "@/assets/refaral.png"; // The image for the content area (Referral Illustration)
import { Copy } from "lucide-react";

export default function ReferralBonusCard() {
  const { data } = useGetmeQuery({});
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect ensures that the clipboard API is only accessed on the client-side
    setIsClient(true);
  }, []);

  const userId = data?.data?.id;

  const [isOpen, setIsOpen] = useState(false);

  const referralLink1 = `http://204.197.173.249:3000/rider-sign-up?referToken=${userId}`;
  const referralLink2 = `http://204.197.173.249:3000/driver-sign-up?referToken=${userId}&type=bonus`;

  const handleCopy = async (text: string) => {
    if (isClient && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        console.log("Copied to clipboard:", text);
      } catch (err) {
        console.error("Copy failed:", err);
      }
    } else {
      console.error("Clipboard API is not supported in this environment.");
    }
  };
  // const handleCopy = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //   } catch (err) {
  //     console.error("Copy failed:", err);
  //   }
  // };

  // navigator.clipboard
  // .writeText(text)
  // .then(() => {
  //   toast.success("Link copied to the clipboard");
  // })
  // .catch(() => {
  //   toast.error("Failed to copy the link");
  // });

  return (
    <div className="p-20 bonuses-bottom-bg bg-white-alpha-10 backdrop-blur-3xl font-roboto">
      <div className="text-white p-6 md:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto bg-white/10 backdrop-blur-sm bg-opacity-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            Exclusive Bonuses for{" "}
            <span className="text-[#D1B574]">Top Referrers!</span>
          </h2>
          <p className="text-white mt-2 text-sm md:text-base">
            Earn exclusive rewards for being a top referrer! The more you refer,
            the bigger the bonuses. Start sharing and unlock premium perks!
          </p>
          <ul className="mt-4 text-sm md:text-base space-y-2 mb-3">
            <li className="flex items-center gap-2 text-[#DADADA] font-normal">
              <Image src="/assets/tik.png" alt="Check" width={20} height={20} />{" "}
              <span>Monthly Leaderboard</span>
            </li>
            <li className="flex items-center gap-2 text-[#DADADA] font-normal">
              <Image src="/assets/tik.png" alt="Check" width={20} height={20} />{" "}
              <span>Monthly Leaderboard</span>{" "}
              <span>Milestone achievements!</span>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-secondery  text-black font-bold z-50 w-[140px] h-[48px] rounded-full p-5 flex justify-center items-center  hover:bg-yellow-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Share Now
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src={referal}
            alt="Referral Illustration"
            height={300}
            width={300}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
      {/* Modal */}
      {isOpen && (
        <div className="fixed bg-white/50 inset-0 z-[99999] flex items-center justify-center p-4">
          <div className="bg-black/90 rounded-xl shadow-xl max-w-md w-full p-6 relative">
            <h2 className="text-2xl font-semibold text-center mb-6 text-white">
              Your Referral Links
            </h2>

            <div className="space-y-4 text-white">
              {[
                { label: "Rider Referral Link", link: referralLink1 },
                { label: "Driver Referral Link", link: referralLink2 },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-xs font-medium text-amber-300 mb-1">
                    {item.label}
                  </p>
                  <div className="flex items-center justify-between bg-white/10 px-4 py-3 rounded-lg border border-gray-600">
                    <span className="text-xs truncate w-[80%] text-white">
                      {item.link}
                    </span>
                    <button
                      onClick={() => {
                        handleCopy(item.link);
                        setCopiedIdx(idx);
                        setTimeout(() => setCopiedIdx(null), 2000);
                      }}
                      className="flex items-center gap-1 text-amber-300 hover:text-white transition text-xs"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedIdx === idx ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="absolute top-3 right-4 text-white text-xl hover:text-amber-400"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
