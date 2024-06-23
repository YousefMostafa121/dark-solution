import React from "react";
import selectionImage from "@/public/images/selectionProcess.jpg";
import Image from "next/image";

const SelectionProcess = () => {
  return (
    <div className="bg-[url(/images/flower.jpg)] bg-cover bg-no-repeat">
      <div className=" container py-[50px] md:py-[100px] grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Image
          src={selectionImage}
          alt="selectionImage"
          className=" max-h-[584px] "
        />
        <div className=" grow">
          <p className=" text-48 text-[#000] font-[700] uppercase text-end max-w-[400px] ml-auto mb-10">
            The selection process
          </p>
          <div>
            <div className=" flex items-center flex-wrap-reverse lg:flex-nowrap gap-5 lg:justify-between py-5 border-b border-[#979796]">
              <p className=" text-14 text-[#1D1D1B] lg:max-w-[284px] text-end">
                Lorem ipsum dolor sit amet consectetur. Auctor sed mi eu at eget
                turpis elit sit faucibus. Nibh augue in ultrices
              </p>
              <p className=" text-20 text-[#1D1D1B] font-[700] grow lg:grow-0 text-end uppercase lg:max-w-[204px]">
                review Applications
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500]">01</p>
            </div>
            <div className=" flex items-center flex-wrap-reverse lg:flex-nowrap gap-5 lg:justify-between py-5 border-b border-[#979796]">
              <p className=" text-14 text-[#1D1D1B] lg:max-w-[284px] text-end">
                Lorem ipsum dolor sit amet consectetur. Auctor sed mi eu at eget
                turpis elit sit faucibus. Nibh augue in ultrices
              </p>
              <p className=" text-20 text-[#1D1D1B] font-[700] grow lg:grow-0 text-end uppercase lg:max-w-[204px]">
              Short listed resumes
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500]">02</p>
            </div>
            <div className=" flex items-center flex-wrap-reverse lg:flex-nowrap gap-5 lg:justify-between py-5 border-b border-[#979796]">
              <p className=" text-14 text-[#1D1D1B] lg:max-w-[284px] text-end">
                Lorem ipsum dolor sit amet consectetur. Auctor sed mi eu at eget
                turpis elit sit faucibus. Nibh augue in ultrices
              </p>
              <p className=" text-20 text-[#1D1D1B] font-[700] grow lg:grow-0 text-end uppercase lg:max-w-[204px]">
              interviews with  applicant
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500]">03</p>
            </div>
            <div className=" flex items-center flex-wrap-reverse lg:flex-nowrap gap-5 lg:justify-between py-5 border-b border-[#979796]">
              <p className=" text-14 text-[#1D1D1B] lg:max-w-[284px] text-end">
                Lorem ipsum dolor sit amet consectetur. Auctor sed mi eu at eget
                turpis elit sit faucibus. Nibh augue in ultrices
              </p>
              <p className=" text-20 text-[#1D1D1B] font-[700] grow lg:grow-0 text-end uppercase lg:max-w-[204px]">
              contracrt with the candidates
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500]">04</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionProcess;
