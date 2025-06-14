import { additionalSafetyData } from "@/constant/additionalSafetyData";

import { Safety } from "./safeCards";



type SafetyHeaderProps = Record<string, unknown>;

const AdditionalSafety: React.FC<SafetyHeaderProps> = () => {
  return (
    <div className="bg-gray safety-additional ">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 md:px-8 pt-[100px]">
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-xl md:text-[36px] font-semibold text-white mb-4 z-10 top-4">
        Additional Safety Features
        </h1>
        <p className="relative text-sm md:text-[16px] pt-[20px] z-10 text-white lg:w-[700px] w-full leading-[160%]">
        Your Ryde provides our Ryders with security feature that guarantees your safety before your Ryde begins. Below are a few of our security features.
        </p>

     

        <div className="py-[40px]">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSafetyData.map((feature, index) => (
              <Safety key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalSafety;
