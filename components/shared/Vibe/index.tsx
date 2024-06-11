import React from "react";
import Image from "next/image";
import contact from "@/public/images/contactUs.svg";

const index = () => {
  return (
    <div className=' bg-[url("/images/vibe.jpg")] bg-cover bg-no-repeat h-[600px] overflow-hidden'>
      <div className=" container flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between w-full h-full gap-10 ">
        <div className=" h-[64px] flex items-center justify-center gap-3 w-fit py-3 px-7 border border-white rounded-[10px]">
          <Image src={contact} alt="pinW" />
          <p className=" text-18 text-white font-[700] uppercase underline">
            contact us
          </p>
        </div>
        <p className=" text-[48px] lg:text-[52px] xl:text-[64px] 2xl:text-[96px] text-white font-[700] uppercase lg:max-w-[630px]  max-w-[790px] 2xl:max-w-[1025px] text-center lg:text-right leading-[56px] xl:leading-[80px] 2xl:leading-[100px] ">
          we’ve got your vibe covered!
        </p>
      </div>
    </div>
  );
};

export default index;
