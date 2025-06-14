import Image from "next/image";
import support from "@/assets/support.png";
import Emergency from "../icon/Emergency";

import Link from "next/link";
import Call2 from "../icon/Call-2";

export default function SafetySupport() {
  return (
    <div className=" my-4">
      <div className="relative bg-[#2F2D2E] py-16 md:pb-28 px-6 md:my-44 ">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="container items-center pt-[4%] md:pt-[5%]">
            <h2 className="text-2xl md:text-4xl font-roboto font-normal text-white ">
              Need More Help? Contact Our Safety Team
            </h2>
            <p className="mt-3 text-white font-base font-roboto">
              Need non-life-threatening assistance? Connect with our 24/7 Safety
              Team. Your security is our top priority—help is just a tap away.
            </p>

           <div>
            <Link href='/emergency-features'>
            <button className="flex justify-center font-roboto text-xl font-normal rounded-[24px] gap-4 bg-[#74000D] px-5 py-3 mt-4 text-white">
              <Emergency /> <span>Emergency</span>
            </button></Link>
           </div>
          </div>

            <div className="lg:block">
              <div className="flex justify-center md:justify-end absolute right-0 md:mt-0">
              <div className="relative">
                <div className="absolute -left-6 md:-top-16 md:-left-16 bg-[#D1B574] rounded-full w-[70px] h-[70px] md:w-[188px] md:h-[188px] flex flex-col justify-center items-center shadow-lg z-50">
                <p className="text-xl md:text-3xl text-white font-bold">24/7</p>
                <p className="text-[12px] text-center md:text-2xl font-medium text-black">Hours Lifeline</p>
                </div>

                <div className="relative -top-24  md:-top-44 z-10 ">
                <Image
                  src={support}
                  alt="Safety Support"
                  height={574}
                  width={574}
                  className="w-full h-auto max-w-[120px] sm:max-w-[200px] md:max-w-[400px] lg:max-w-[574px]"
                />
                </div>
              </div>
              </div>
            </div>
        </div>

        {/* Hotline Box */}
        <div className="absolute left-1/2 -bottom-[12%] lg:block hidden">
          <div className="mt-8 mx-auto max-w-md flex items-center bg-secondery text-black py-4 px-6 rounded-lg shadow-md">
            <span className="text-2xl mr-3"><Call2/></span>
            <div>
              <p className="text-sm font-normal font-roboto md:text-2xl text-[#3A3A3A]">Safety Support Hotline</p>
              <p className="text-lg font-bold text-[#2D2D2D]">1-844-987-7933</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
