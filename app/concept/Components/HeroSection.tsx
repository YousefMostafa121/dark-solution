import React from "react";
import Image from "next/image";
import heroHome from "@/public/images/heroConcept.jpg";
const HeroSection = () => {
  return (
    <div className=" w-full h-screen relative">
      <Image
        src={heroHome}
        alt="heroHome"
        fill
        sizes="100vw"
        className=" object-cover z-[-1]"
        priority
      />
      <div className=" container flex flex-col items-end justify-center w-full h-full">
        <p className=" text-96 text-white font-[700] uppercase max-w-[534px] text-right">
        Concept
        </p>
        <p className=" text-16 font-[500] text-white">
        QUALITY AT THE SOURCE
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
