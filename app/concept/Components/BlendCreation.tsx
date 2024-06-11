import React from 'react'
import Image from 'next/image'
import blend from '@/public/images/blend.jpg'
import rigth from '@/public/images/rigthB.svg'

const BlendCreation = () => {
  return (
    <div className=" container grid grid-cols-1 md:grid-cols-2 gap-10 py-[50px] lg:py-[100px]">
      <div className=" flex flex-col gap-3 ">
        <p className=" text-48 text-black font-[700] uppercase max-w-[603px]">
        Blend creation
        </p>
        <p className=" text-16 font-[500] text-black max-w-[501px] ml-24 md:ml-32">
        Coffee blends with an “Oquendo” flavor
        </p>
        <div className=" max-w-[410px] flex flex-col gap-5  mt-auto">
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-[#1D1D1B] font-[500]">Stored per origin.</p>
          </div>
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-[#1D1D1B] font-[500]">Cleaning and detection of foreign matter.</p>
          </div>
          <div className=" flex items-center gap-3">
            <Image src={rigth} alt="rigth" />
            <p className=" text-16 text-[#1D1D1B] font-[500]">Careful product transportation.</p>
          </div>
        </div>
       

      </div>
      <div className=" relative ">
        <Image src={blend} alt="quality" />
      </div>
    </div>
  )
}

export default BlendCreation
