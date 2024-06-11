import React from "react";
import quality from "@/public/images/quality.jpg";
import award1 from "@/public/images/award1.svg";
import award2 from "@/public/images/award2.svg";
import award3 from "@/public/images/award3.svg";
import Image from "next/image";

const Quality = () => {
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10 py-[50px] lg:py-[100px]">
      <div className=" flex flex-col gap-5">
        <p className=" text-48 text-black font-[700] uppercase max-w-[603px]">
          Quality Lorem ipsum dolor sit amet
        </p>
        <p className=" text-16 text-black max-w-[501px]">
          Lorem ipsum dolor sit amet consectetur. Nec turpis pretium eget
          elementum laoreet accumsan nulla. Mauris in augue eu feugiat nunc sit
          sed ut.
        </p>
        <p className=" text-16 text-black max-w-[501px]">
          Lorem ipsum dolor sit amet consectetur. Condimentum purus nibh tellus
          cras morbi volutpat libero adipiscing nunc. Mattis felis faucibus id
          luctus arcu tempor luctus dignissim. Justo dolor risus vulputate sem
          et. Malesuada odio ipsum id mi. Eget ornare varius tellus sed gravida
          ornare enim. Pellentesque in non diam arcu aliquet bibendum. Lobortis
          massa in in sit at tempor senectus. Aliquet sit morbi vel nunc. Non
          lacus scelerisque amet sit sit et diam. Euismod non tellus adipiscing
          eleifend sed sit feugiat tempor. Non fringilla nulla at mauris urna
          bibendum. Cursus amet libero dignissim fermentum sollicitudin. Cras
          lectus nunc arcu quam.
        </p>
        <p className=" text-48 text-black font-[700] uppercase max-w-[603px]">
          Quality awards
        </p>
        <div className=" flex gap-3">
          <Image src={award1} alt="award1" />
          <Image src={award2} alt="award2" />
          <Image src={award3} alt="award3" />
        </div>
        <p className=" text-16 text-black max-w-[501px]">
          Lorem ipsum dolor sit amet consectetur. Nec turpis pretium eget
          elementum laoreet accumsan nulla.
        </p>
      </div>
      <div className=" relative ">
        <Image src={quality} alt="quality" />
      </div>
    </div>
  );
};

export default Quality;
