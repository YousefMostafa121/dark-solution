import React from "react";
import product from "@/public/images/product.svg";
import cart from "@/public/images/cart.svg";
import Image from "next/image";
const Index = () => {
  return (
    <div className=" border border-[#B9B9B8] bg-[#1D1D1B] hover:bg-white group transition-all duration-300 rounded-[20px] p-5">
      <Image src={product} alt="product" className=" mb-5 mx-auto" />
      <div className=" flex flex-col gap-3">
        <p className=" text-24 text-white font-[500] group-hover:text-[#1D1D1B] transition-all duration-300">
          Plantation a
        </p>
        <p className=" text-16 text-white group-hover:text-[#1D1D1B] transition-all duration-300">
          Lorem ipsum dolor sit amet consectetur. Sed porta quis morbi blandit
          massa amet sit.
        </p>
        <div className=" flex items-center justify-between">
          <div>
            <p className=" text-16 text-white font-[500] group-hover:text-[#1D1D1B] transition-all duration-300">
              1 Kelo
            </p>
            <p className=" text-24 text-white font-[500] uppercase group-hover:text-[#1D1D1B] transition-all duration-300">
              150 EGp{" "}
            </p>
          </div>
          <div className=" flex items-center gap-3 h-[64px] justify-center px-7 group-hover:bg-[#1D1D1B] transition-all duration-300 rounded-[10px] cursor-pointer">
            <Image src={cart} alt="cart" />
            <p className=" text-18 text-white font-[700] uppercase underline">
              Add To Cart
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
