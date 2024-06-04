import React from "react";
import cart from "@/public/images/cart.svg";
import menu from "@/public/images/menu.svg";
import contactUs from "@/public/images/contactUs.svg";
import darkSolutionW from "@/public/images/darkSolutionW.svg";
import Image from "next/image";

const Index = () => {
  return (
    <header className=" absolute top-0 left-0 w-full z-50">
      <div className=" container py-5 flex items-center justify-between gap-5">
        <div className=" w-[121px] h-[44px] flex items-center justify-center gap-3 bg-[#1D1D1B] rounded-[10px]">
          <Image src={menu} alt="menu" />
          <p className=" text-18 text-white font-[700]">Menu</p>
        </div>
        <Image src={darkSolutionW} alt="darkSolution" priority />
        <div className=" flex items-center gap-7">
          <Image src={cart} alt="cart" />
          <div className=" flex items-center gap-3">
            <p className=" text-18 text-white font-[700] uppercase underline">
              Contact us
            </p>
            <Image src={contactUs} alt="contactUs" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Index;
