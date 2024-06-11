import React from "react";
import selectingImage from "@/public/images/selecting.jpg";
import selectingImageMobile from "@/public/images/selectingMobile.jpg";
import Image from "next/image";
import rigth from "@/public/images/rigth.svg";

const Selecting = () => {
  return (
    <div className=" w-full min-h-[720px]  relative py-[100px]  ">
      <Image
        src={selectingImage}
        alt="selecting"
        fill
        sizes="100vw"
        className=" object-cover  z-[-1] hidden md:block "
      />
      <Image
        src={selectingImageMobile}
        alt="selecting"
        fill
        sizes="100vw"
        className=" object-cover  z-[-1]  md:hidden "
      />
      <div className=" container">
        <div className="ml-auto max-w-[325px] md:max-w-[410px] mb-32">
          <p className=" text-48 text-white font-[700] uppercase text-right">
            Selecting and receiving green coffee
          </p>
          <p className=" text-16 text-white font-[500] mt-5 text-right">
            Every time we recieve beans, we carry out different types of quality
            control:
          </p>
        </div>
        <div className=" max-w-[410px] flex flex-col gap-5">
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-white font-[500]">Suppliers</p>
          </div>
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-white font-[500]">Organoleptic testing through tastings.</p>
          </div>
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-white font-[500]">Physical, chemical and microbiological parameters.</p>
          </div>
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-white font-[500]">Review certificates of origin.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selecting;
