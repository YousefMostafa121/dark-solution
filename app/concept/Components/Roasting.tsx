import React from "react";
import roastingBack from "@/public/images/roastingBack.jpg";
import roastingBackMobile from "@/public/images/roastingBackMobile.jpg";
import roastingImage from "@/public/images/roastingImage.svg";
import Image from "next/image";
import rigth from "@/public/images/rigth.svg";

const Roasting = () => {
  return (
    <div className=" w-full h-fit  relative py-[50px] lg:py-[100px] ">
      <Image
        src={roastingBack}
        alt="selecting"
        fill
        sizes="100vw"
        className=" object-cover  z-[-1] hidden md:block "
      />
      <Image
        src={roastingBackMobile}
        alt="selecting"
        fill
        sizes="100vw"
        className=" object-cover  z-[-1]  md:hidden "
      />

      <div className=" container  grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className=" flex flex-col gap-3 ">
          <div className=" max-w-[470px] flex flex-col gap-5  mt-auto">
            <div className=" flex items-center gap-3">
              <Image src={rigth} alt="rigth" />
              <p className=" text-16 text-white font-[500]">
                Process control by our master roasters.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <Image src={rigth} alt="rigth" />
              <p className=" text-16 text-white font-[500]">
                Physical product checks.Colorimetric measurements.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <Image src={rigth} alt="rigth" />
              <p className=" text-16 text-white font-[500]">
                Periodic analysis of acrylamide.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <Image src={rigth} alt="rigth" />
              <p className=" text-16 text-white font-[500]">
                Objective: Obtain the optimum roast for different cup profiles.
              </p>
            </div>
          </div>
        </div>
        <div className=" relative ">
          <p className=" text-48 text-white font-[700] uppercase max-w-[603px]">
            Roasting
          </p>
          <p className=" text-16 font-[500] text-white max-w-[510px] ">
            Exhaustive control of roasting temperature and time to deliver
            optimum flavor
          </p>
          <Image src={roastingImage} alt="quality" priority />
        </div>
      </div>
    </div>
  );
};

export default Roasting;
