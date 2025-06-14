import { FeatureType as SafetyType } from "@/types/interface";
import Feature1 from "@/assets/security1.png";
import Feature2 from "@/assets/license1.png";
import Feature3 from "@/assets/real-time-tracking1.png";
import Feature4 from "@/assets/notes1.png";
import Image from "next/image";

export const additionalSafetyData: SafetyType[] = [
  {
    icon: <Image src={Feature1} alt="Feature 1 Icon" width={50} height={50} />,
    title: "4-Digit PIN Entry System",
    description:
      "Always confirm your driver before starting a ride.",
  },
  {
    icon: <Image src={Feature2} alt="Feature 2 Icon" width={50} height={50} />,
    title: "Driver & Vehicle Verification",
    description:
      "Check the driver's name, car model, and license plate.",
  },
  {
    icon: <Image src={Feature3} alt="Feature 3 Icon" width={50} height={50} />,
    title: "Live GPS Tracking",
    description:
      "Share your ride in real time with trusted contacts.",
  },
  {
    icon: <Image src={Feature4} alt="Feature 3 Icon" width={50} height={50} />,
    title: "Ride Recording Feature",
    description:
      "Enable in-app voice or video recording for added security.",
  }
];
