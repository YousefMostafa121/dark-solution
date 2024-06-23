import React from "react";
import attractive from "@/public/images/attractive.svg";
import socialInsurance from "@/public/images/socialInsurance.svg";
import medical from "@/public/images/medical.svg";
import funny from "@/public/images/funny.svg";
import Image from "next/image";

const Card = ({
  icon,
  label,
  description,
}: {
  icon: string;
  label: string;
  description: string;
}) => (
  <div className=" flex flex-col p-5 items-center justify-center gap-5 border border-[#979796] rounded-[10px]">
    <Image src={icon} alt="icon" />
    <p className=" text-20 text-black font-[700] uppercase text-center max-w-[200px]">
      {label}
    </p>
    <p className=" text-12 text-[#686866] text-center max-w-[220px]">{description}</p>
  </div>
);
const Offer = () => {
  return (
    <div className=" bg-[#F9F9F9]">
            <div className=" container py-[50px] md:py-[100px]">
      <p className=" text-40 text-[#000000] font-[500] uppercase text-center mb-5">
        What we offer
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        <Card
          icon={attractive}
          label="attractive salary"
          description="Lorem ipsum dolor sit amet consectetur. Integer dui potenti consectetur metus donec. Integer suscipit justo et arcu aliquet nibh pulvinar tincidunt risus. Vulputate fusce risus."
        />
        <Card
          icon={socialInsurance}
          label="Social insurance"
          description="Lorem ipsum dolor sit amet consectetur. Integer dui potenti consectetur metus donec. Integer suscipit justo et arcu aliquet nibh pulvinar tincidunt risus. Vulputate fusce risus."
        />
        <Card
          icon={medical}
          label="medical insurance"
          description="Lorem ipsum dolor sit amet consectetur. Integer dui potenti consectetur metus donec. Integer suscipit justo et arcu aliquet nibh pulvinar tincidunt risus. Vulputate fusce risus."
        />
        <Card
          icon={funny}
          label="Funny environment"
          description="Lorem ipsum dolor sit amet consectetur. Integer dui potenti consectetur metus donec. Integer suscipit justo et arcu aliquet nibh pulvinar tincidunt risus. Vulputate fusce risus."
        />
      </div>
    </div>
    </div>

  );
};

export default Offer;
