import React from "react";
import founder from "@/public/images/founder.jpg";
import Image from "next/image";
const TeamMember = () => {
  return (
    <div className=" container py-[50px] md:py-[100px]">
      <p className=" text-48 text-[#1D1D1B] font-[700] uppercase text-center mb-5">
        Team members
      </p>
      <p className=" text-16 text-[#1D1D1B] font-[500] text-center max-w-[602px] mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur. Fermentum tristique arcu a
        integer diam dictum risus. Ullamcorper in rutrum
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div className=" flex flex-col gap-3">
            <Image src={founder} alt="founder" className=" rounded-[10px]" />
            <p className=" text-48 text-[#1A1A19] font-[700] uppercase text-right">
              Lucille Trantow
            </p>
            <p className=" text-16 font-[500] text-[#1A1A19] text-right">
              Chef
            </p>
            <p className=" text-14 text-[#282623] text-right max-w-[352px] ml-auto">
              Lorem ipsum dolor sit amet consectetur. Consectetur posuere eu
              mattis lorem et facilisi. Non integer risus vel ultrices.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
