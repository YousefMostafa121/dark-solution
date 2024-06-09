import React from "react";
import pinW from "@/public/images/pinW.svg";
import Image from "next/image";

const Index = () => {
  return (
    <div className=' bg-[url("/images/biggestBack.jpg")] bg-cover bg-no-repeat h-[600px] overflow-hidden'>
      <div className=" container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full h-full gap-10 ">
        <div className=" h-[64px] flex items-center justify-center gap-3 w-fit py-3 px-7 border border-white rounded-[10px]">
          <Image src={pinW} alt="pinW" />
          <p className=" text-18 text-white font-[700] uppercase underline">
            Our Spaces
          </p>
        </div>
        <p className=" text-[48px] lg:text-[52px] xl:text-[64px] 2xl:text-[96px] text-white font-[700] uppercase lg:max-w-[630px]  max-w-[790px] 2xl:max-w-[1025px] text-center lg:text-right leading-[56px] xl:leading-[80px] 2xl:leading-[100px] ">
          the biggest Franchising Egyptian stores{" "}
        </p>
      </div>
    </div>
  );
};

export default Index;
