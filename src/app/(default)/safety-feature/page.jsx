import React from 'react';
import { featureData } from "@/constant/featureData";
import { Feature } from '@/components/Home/Feature';
const SafetyFeaturePage = () => {
    return (
        <div className="bg-gray hero">
           {/* Hero Section */}
           <div className="relative w-full flex flex-col items-center justify-center text-center px-4 md:px-8 pt-[100px]">
             <div className="absolute inset-0 bg-black/50" />
             <h1 className="relative text-2xl md:text-[64px] font-bold text-secondery mb-4 z-10 top-4">
               Your Ride
             </h1>
             <p className="relative text-sm md:text-[20px] pt-[32px] z-10 text-white lg:w-[700px] w-full leading-[160%]">
               Effortless rides at your fingertips. Experience luxury, convenience, and savings with every ride. Join us in redefining urban transportation.
             </p>
     
         
     
         
     
             <div className="py-[120px]">
               <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {featureData.map((feature, index) => (
                   <Feature key={index} {...feature} />
                 ))}
               </div>
             </div>
           </div>
         </div>
    );
};

export default SafetyFeaturePage;