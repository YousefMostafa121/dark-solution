import React from "react";
import Image from "next/image";
import heroHome from "@/public/images/homeHeroSection.jpg";
import bottomArrow from "@/public/images/bottomArrow.svg";
import Link from "next/link";
const Index = () => {
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
          Specialty coffee roasters
        </p>
        <p className=" text-16 font-[500] text-white">
          Let’s make your day deliciously perfect!
        </p>
      </div>
      <Link href={'#howToStart'} className=" absolute bottom-5 left-1/2 -translate-x-1/2 w-fit flex flex-col items-center justify-center gap-2">
        <p className=" text-14 text-white">Scroll Down</p>
        <Image src={bottomArrow} alt="bottomArrow" />
      </Link>
    </div>
  );
};

export default Index;
