import React from "react";
import rigth from "@/public/images/rigth.svg";
import rigthB from "@/public/images/rigthB.svg";
import Image from "next/image";
import packagingImage from "@/public/images/packaging.jpg";

const Packaging = () => {
  return (
    <div className=" container pt-[50px] lg:pt-[100px]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10  mb-10">
        <div>
          <p className=" text-48 text-[#1D1D1B] font-[700] uppercase mb-5">
            Packaging
          </p>
          <p className=" text-16 text-[#1D1D1B] font-[500] max-w-[315px]">
            Protected atmosphere to conserve coffee qualities.Respectful and
            sustainable.
          </p>
        </div>
        <div>
          <div className=" max-w-[410px] flex flex-col gap-5 mx-auto">
            <div className=" flex items-center gap-3">
              <Image src={rigthB} alt="rigth" />
              <p className=" text-16 text-[#1D1D1B] font-[500]">
                Repeat detection of foreign matter.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <Image src={rigthB} alt="rigth" />
              <p className=" text-16 text-[#1D1D1B] font-[500]">
                Careful bean transportation until packaging.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <Image src={rigthB} alt="rigth" />
              <p className=" text-16 text-[#1D1D1B] font-[500]">
                Organoleptic analysis: odor, color, flavor and appearance.
              </p>
            </div>
            <div className=" flex items-center gap-3">
              <Image src={rigthB} alt="rigth" />
              <p className=" text-16 text-[#1D1D1B] font-[500]">
                Filling control.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-fit relative py-[100px]">
        <Image
          src={packagingImage}
          alt="packaging"
          fill
          sizes="100vw"
          className=" object-cover z-[-1]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div></div>
          <div>
            <div className=" max-w-[410px] flex flex-col gap-5 mx-auto px-5 md:px-0 md:pr-3">
              <div className=" flex items-center gap-3">
                <Image src={rigth} alt="rigth" />
                <p className=" text-16 text-white font-[500]">
                  Use of different grind sizes to adapt the coffee to consumer
                  tastes and preparation methods.
                </p>
              </div>
              <div className=" flex items-center gap-3">
                <Image src={rigth} alt="rigth" />
                <p className=" text-16 text-white font-[500]">
                  Exhaustive control of capsules, verifying performance in all
                  types of coffee makers and models.
                </p>
              </div>
              <div className=" flex items-center gap-3">
                <Image src={rigth} alt="rigth" />
                <p className=" text-16 text-white font-[500]">
                  Continuous improvement by searching for packaging materials
                  that guarantee optimum coffee preservation. Packages and
                  capsules that are 100% environmentally friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
