import { FeatureType as SafetyType } from "@/types/interface";
import Feature1 from "@/assets/lock-icon.png";
import Feature2 from "@/assets/ambulance-icon.png";
import Feature3 from "@/assets/alert-icon.png";
import Image from "next/image";

export const safetyData: SafetyType[] = [
  {
    icon: <Image src={Feature1} alt="Feature 1 Icon" width={50} height={50} />,
    title: "Emergency Button",
    description:
      "Instantly alerts 911 and sends your live location to pre-selected emergency contacts.",
  },
  {
    icon: <Image src={Feature2} alt="Feature 2 Icon" width={50} height={50} />,
    title: "👁️ Live Trip Sharing",
    description:
      "Share your ride in real-time with family or friends for extra safety and peace of mind.",
  },
  {
    icon: <Image src={Feature3} alt="Feature 3 Icon" width={50} height={50} />,
    title: "🔐 Driver & Vehicle Verification",
    description:
      "Rider must confirm driver's photo, car model, and license plate before entry using the app.",
  }
];
