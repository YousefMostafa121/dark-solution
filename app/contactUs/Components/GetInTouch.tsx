import React from "react";
import instegram from "@/public/images/instegram.svg";
import faceboock from "@/public/images/faceboock.svg";
import email from "@/public/images/email.svg";
import Image from "next/image";
const GetInTouch = () => {
  return (
    <div className=" container py-[50px] md:py-[100px] flex flex-col md:flex-row justify-between gap-5">
      <div>
        <div className=" mb-12">
          <p className=" text-20 text-black font-[700] mb-4  uppercase ">
            Social media
          </p>
          <ul className=" flex  gap-8">
            <li className="flex items-center gap-3">
              <Image src={instegram} alt="pin" />
              <p className=" text-16 text-black underline">Instagram</p>
            </li>
            <li className="flex items-center gap-3">
              <Image src={faceboock} alt="pin" />
              <p className=" text-16 text-black underline">Facebook</p>
            </li>
          </ul>
        </div>
        <div>
          <p className=" text-20 text-black font-[700] mb-4  uppercase ">
            Email
          </p>
          <ul className=" flex  gap-8">
            <li className="flex items-center gap-3">
              <Image src={email} alt="pin" />
              <p className=" text-16 text-black underline">
                Info@Dark Solution Coffee.eg
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className=" text-96 text-black font-[700] uppercase text-right max-w-[782px]">Want to get in touch?</p>
        <p className=" text-24 text-black font-[500] uppercase text-right mt-3">find us or write us email</p>
      </div>
    </div>
  );
};

export default GetInTouch;
