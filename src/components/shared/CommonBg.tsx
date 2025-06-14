import Image from "next/image";
import React from "react";
import imgBg from "@/assets/login-img.png";
function CommonBg() {
  return (
    <div className="hidden md:flex md:w-1/2 text-white p-12 flex-col justify-center items-center relative overflow-hidden">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl md:text-[120px] font-nunito font-bold text-[#f0d68a] mb-4">
     Enjoy Your
          <br />
          Journey.
        </h1>
        <p className="md:text-lg max-w-[500px] opacity-80 mt-6 font-nunito text-left">
          Seamlessly connecting you to your destination with modern AI,
          empowering drivers while elevating journeys.
        </p>
      </div>
      <div className="absolute inset-0">
        <Image
          src={imgBg}
          alt="Login Image"
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default CommonBg;
