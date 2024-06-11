import React from "react";
import Image from "next/image";
import franchise1 from "@/public/images/franchise1.jpg";
import franchise2 from "@/public/images/franchise2.jpg";

const BecomeAnFranchise = () => {
  return (
    <div className="  py-[50px] md:py-[100px] bg-[url(/images/flower.jpg)] bg-cover bg-no-repeat ">
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className=" text-48 text-[#1D1D1B] font-[700] uppercase max-w-[329px] mx-auto text-right mb-5">
            Become a franchise
          </p>
          <Image
            src={franchise1}
            alt="franchise1"
            className=" max-w-[340px] md:max-w-[419px]  max-h-[469px] mx-auto"
          />
        </div>
        <div className="  flex flex-col justify-between gap-5">
          <p className=" text-16 text-black max-w-[547px]">
            Lorem ipsum dolor sit amet consectetur. Ut aliquam velit accumsan
            nibh. Lectus diam facilisis ut tellus lectus. Risus rutrum quis
            aliquam a lacinia. Tempus in tristique egestas id lacus. Sit massa
            mauris lacus scelerisque maecenas feugiat sit scelerisque. Fames
            nisl nisl eleifend adipiscing condimentum pellentesque. Mauris
            adipiscing senectus consequat nec ornare molestie. Malesuada
            pellentesque aliquet eget fermentum urna blandit quis. Sapien erat
            nec sed vitae etiam tempor sit. At dui dolor lacus in.{" "}
          </p>
          <Image
            src={franchise2}
            alt="franchise2"
            className=" md:-ml-[20%] 2xl:-ml-[28%] max-w-[340px]   md:max-w-[422px] max-h-[269px]"
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeAnFranchise;
