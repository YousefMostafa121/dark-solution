import React from "react";
import Image from "next/image";
import productsBack from "@/public/images/ProductBack.jpg";
import applyNow from "@/public/images/applyNow.svg";

const TypeOfCandidates = () => {
  return (
    <div className=" w-full relative">
      <Image
        src={productsBack}
        alt="productsBack"
        fill
        sizes="100vw"
        className="  object-cover z-[-1]"
        priority
      />
      <div className=" container py-[50px] md:py-[100px] relative grid grid-cols-1 md:grid-cols-2 place-content-between  gap-10">
        <div className=" flex flex-col gap-10 justify-between ">
          <p className=" text-[40px] leading-[48px] xl:text-[64px] xl:leading-[72px] text-white font-[700] uppercase">
            What type of candidates are we ideally looking for?
          </p>
          <div>
            <p className=" text-16 text-white">01</p>
            <p className=" text-40 text-white font-[700] uppercase max-w-[387px] ml-2 mb-5">
              BUSINESS DEVELOPMENT MANAGER
            </p>
            <ul className=" list-disc list-inside ml-10">
              <li className=" text-14 text-white">Warehouse & Distribution</li>
              <li className=" text-14 text-white">Sydney</li>
              <li className=" text-14 text-white">Permanent / Full Time</li>
            </ul>
            <p className=" text-18 text-white font-[700] mt-5 uppercase">
              Description
            </p>
            <p className=" text-14 text-white max-w-[505px]">
              Lorem ipsum dolor sit amet consectetur. A nunc dolor eget feugiat
              egestas enim accumsan sapien. Pellentesque{" "}
              <span className=" font-[700] underline"> More </span>
            </p>
            <button
              type="submit"
              className=" w-fit px-10 h-[64px] border border-white rounded-[10px] mt-5 flex items-center justify-center gap-5"
            >
              <Image src={applyNow} alt="applyNow" />
              <p className=" text-18 text-white font-[700] uppercase underline">
                apply now
              </p>
            </button>
          </div>
        </div>
        <div className=" flex flex-col gap-10 justify-between md:items-end ">
          <div>
            <p className=" text-16 text-white">02</p>
            <p className=" text-40 text-white font-[700] uppercase max-w-[387px] ml-2 mb-5">
            HR PROJECT & CHANGE LEAD
            </p>
            <ul className=" list-disc list-inside ml-10">
              <li className=" text-14 text-white">Warehouse & Distribution</li>
              <li className=" text-14 text-white">Sydney</li>
              <li className=" text-14 text-white">Permanent / Full Time</li>
            </ul>
            <p className=" text-18 text-white font-[700] mt-5 uppercase">
              Description
            </p>
            <p className=" text-14 text-white max-w-[505px]">
              Lorem ipsum dolor sit amet consectetur. A nunc dolor eget feugiat
              egestas enim accumsan sapien. Pellentesque{" "}
              <span className=" font-[700] underline"> More </span>
            </p>
            <button
              type="submit"
              className=" w-fit px-10 h-[64px] border border-white rounded-[10px] mt-5 flex items-center justify-center gap-5"
            >
              <Image src={applyNow} alt="applyNow" />
              <p className=" text-18 text-white font-[700] uppercase underline">
                apply now
              </p>
            </button>
          </div>
          <div>
            <p className=" text-16 text-white">03</p>
            <p className=" text-40 text-white font-[700] uppercase max-w-[387px] ml-2 mb-5">
            WAREHOUSE COORDINATOR
            </p>
            <ul className=" list-disc list-inside ml-10">
              <li className=" text-14 text-white">Warehouse & Distribution</li>
              <li className=" text-14 text-white">Sydney</li>
              <li className=" text-14 text-white">Permanent / Full Time</li>
            </ul>
            <p className=" text-18 text-white font-[700] mt-5 uppercase">
              Description
            </p>
            <p className=" text-14 text-white max-w-[505px]">
              Lorem ipsum dolor sit amet consectetur. A nunc dolor eget feugiat
              egestas enim accumsan sapien. Pellentesque{" "}
              <span className=" font-[700] underline"> More </span>
            </p>
            <button
              type="submit"
              className=" w-fit px-10 h-[64px] border border-white rounded-[10px] mt-5 flex items-center justify-center gap-5"
            >
              <Image src={applyNow} alt="applyNow" />
              <p className=" text-18 text-white font-[700] uppercase underline">
                apply now
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeOfCandidates;
