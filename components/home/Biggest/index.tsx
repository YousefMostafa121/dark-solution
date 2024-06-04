import React from "react";
import pinW from "@/public/images/pinW.svg";
import Image from "next/image";

const Index = () => {
  return (
    <div className=' bg-[url("/images/biggestBack.jpg")] bg-cover bg-no-repeat h-[600px]'>
      <div className=" container flex items-center justify-between w-full h-full ">
        <div className=" h-[64px] flex items-center justify-center gap-3 w-fit py-3 px-7 border border-white rounded-[10px]">
          <Image src={pinW} alt="pinW" />
          <p className=" text-18 text-white font-[700] uppercase underline">
            Our Spaces
          </p>
        </div>
        <p className=" text-96 text-white font-[700] uppercase text-right max-w-[1024px]">the biggest Franchising 
Egyptian stores </p>
      </div>
    </div>
  );
};

export default Index;
