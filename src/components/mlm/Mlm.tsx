/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import differ from "@/assets/rydedif.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useGetmeQuery } from "@/redux/api/authApi";
import { Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { useRefaralQuery } from "@/redux/api/refaralApi";
import avatar from "@/assets/avatar2.png";

export default function Mlm() {
  const { data } = useGetmeQuery({});
  const { data: refer } = useRefaralQuery({});
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect ensures that the clipboard API is only accessed on the client-side
    setIsClient(true);
  }, []);

  const avatarSrc =
    data?.data?.avatarUrl && data?.data?.avatarUrl.trim().length > 0
      ? data.data.avatarUrl
      : avatar;
  const avatarRefer =
    refer?.data?.avatarUrl && data?.data?.avatarUrl.trim().length > 0
      ? data.data.avatarUrl
      : avatar;
  const user = data?.data;

  const userId = data?.data?.id;
  const referal = refer?.data;
  if (referal) {
    console.log(referal[0]?.referred);
  }

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
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10"></div>
        <Image
          src={differ}
          alt="Background"
          width={1440}
          height={600}
          className="object-cover h-full w-full opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex items-center justify-center p-4">
          <div className="w-full bg-white/10 rounded-3xl border border-gray-800/50 shadow-xl">
            <div className="p-6 pb-4 text-center">
              <h1 className="text-4xl font-bold text-amber-200">MLM</h1>
              <p className="text-xs tracking-widest uppercase text-amber-200/80 mt-1">
                REFERRAL PROGRAM
              </p>
            </div>

            <div className="px-4">
              <div className="rounded-xl p-4 mb-4 flex items-center justify-between bg-black/70">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage src={avatarSrc} alt="Al Hasan" />
                    <AvatarFallback className="bg-amber-900/20 text-amber-200">
                      AH
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="text-white font-medium">{user?.name}</p>
                    <p className="text-xs text-white">{user?.email}</p>
                  </div>
                </div>
                <div className="text-right flex justify-center items-center gap-2">
                  <p className="text-xs text-white">Total Referrals:</p>
                  <p className="text-white font-medium">
                    {referal?.length || 0}
                  </p>
                </div>
              </div>
            </div>

            <div className="px-4 space-y-2 pb-4">
              {/* Scrollable Referral List */}
              <div className="max-h-80 overflow-y-auto space-y-2 pr-2">
                {referal && referal.length > 0 ? (
                  referal.map((referral: any, index: number) => (
                    <div
                      key={index}
                      className="rounded-xl p-3 flex items-center gap-3 border border-gray-700/30"
                    >
                      <Avatar className="h-10 w-10 border border-amber-200/20">
                        <AvatarImage
                          src={avatarRefer}
                          alt={referral?.referred?.name}
                        />
                        <AvatarFallback className="bg-amber-900/20 text-amber-200">
                          {referral?.referred?.name?.[0] || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="text-secondery font-medium">
                          {referral?.referred?.name}
                        </p>
                        <p className="text-xs text-white">
                          {referral?.referred?.email}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm text-center text-white/70">
                    No referrals yet.
                  </p>
                )}
              </div>
            </div>

            <div className="p-4">
                <div className="flex justify-center">
                <Button
                  className="w-[50%] py-6 text-black font-medium bg-secondery rounded-full border-none justify-center"
                  onClick={() => setIsOpen(true)}
                >
                  Refer and Earn
                </Button>
                </div>
            </div>
          </div>
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
