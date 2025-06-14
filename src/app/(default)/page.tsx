'use client';

import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import HomeSubscripiton from "@/components/Home/HomeSubscription";
import RydeDiffrent from "@/components/Home/RydeDiffrent";
import SafetySupport from "@/components/Home/SafteySupport";
import { TestimonialSlider } from "@/components/Home/TestimonialSlider";
import UbervsLyft from "@/components/Home/UbervsLyft";
import Unlock from "@/components/Home/Unlock";




export default function page() {
  return (
    <div>
      <Hero/>
      <RydeDiffrent/>
      <UbervsLyft/>
      <Unlock/>
      <Faq/>
      <HomeSubscripiton/>
      <TestimonialSlider/>
      <SafetySupport/>
     

   
    </div>
  );
}
