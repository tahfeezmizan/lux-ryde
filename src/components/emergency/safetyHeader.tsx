import Image from "next/image";
import img1 from "@/assets/need-help4.png";
import img2 from "@/assets/panic.png";
import img3 from "@/assets/call-911.png";
import { safetyData } from "@/constant/safetyData";
import { Safety } from "./safeCards";

type SafetyHeaderProps = Record<string, unknown>;

const SafetyHeader: React.FC<SafetyHeaderProps> = () => {
  return (
    <div className="safety-hero">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col items-center justify-center text-center px-4 md:px-8 pt-[100px]">
        <div className="absolute inset-0" />
        <h1 className="relative text-xl md:text-[48px] font-semibold text-secondery mb-4 z-10 top-4">
          Your Safety Comes First
        </h1>
        <p className="relative text-sm md:text-[20px] pt-[20px] z-10 text-white lg:w-[700px] w-full leading-[160%]">
          If you ever feel unsafe during Your Ryde please use the safety
          features below. In case of an emergency press the Red Panic Button
          below.
        </p>

        {/* Images Section */}
        <div className="flex flex-wrap items-center justify-center gap-16 mt-4">
          <Image
            src={img1}
            alt="Need Help"
            width={200}
            height={200}
            className="z-10"
          />

          {/* Panic Button Container */}
          <div className="flex flex-col items-center">
            <Image
              src={img2}
              alt="Panic Button"
              width={300}
              height={300}
              className="z-10 rounded-full object-cover"
            />
            {/* Caption text under panic button */}
            <p className="mt-2 text-white text-xs md:text-base">
              (In app use only)
            </p>
          </div>

          <Image
            src={img3}
            alt="Call 911"
            width={200}
            height={200}
            className="z-10"
          />
        </div>

        {/* Safety Features Section */}
        <div className="py-[40px]">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyData.map((feature, index) => (
              <Safety key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyHeader;
