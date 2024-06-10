"use client";
import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import product from "@/public/images/product.svg";
import Image from "next/image";
import cart from '@/public/images/cart.svg'

const ProductDetails = () => {
  const [count, setcount] = useState(1);
  return (
    <div className=" container mt-[8rem] pb-[100px]">
      <Breadcrumb className=" mx-auto w-fit">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#1D1D1B] text-16">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop" className="text-[#1D1D1B] text-16">
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#1D1D1B] text-16">
              Plantaion A
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className=" text-48 text-[#1D1D1B] uppercase font-[700] text-center mt-3">
        Plantation a
      </p>
      <p className=" text-16 font-[500] text-[#1D1D1B] text-center mt-3">
        1 Kelo
      </p>
      <p className=" text-40 font-[500] text-[#1D1D1B] text-center uppercase -mt-1">
        150 EGp{" "}
      </p>
      <div className=" flex justify-between gap-5  mt-10">
        <div>
          <p className=" text-18 text-[#1D1D1B] uppercase font-[700] mb-2">
            Description
          </p>
          <p className=" text-14 text-[#1D1D1B] max-w-[295px] ">
            Lorem ipsum dolor sit amet consectetur. Augue quam eleifend semper
            quam sagittis. Cras auctor neque at laoreet. Aliquam sed magna
            placerat volutpat semper. Accumsan blandit orci auctor montes. Sit
            aenean nibh elit pulvinar et. Risus vel sed pharetra sollicitudin
            viverra elit aliquet malesuada. Nunc a commodo massa imperdiet duis
            elit sem elementum pharetra.
          </p>
        </div>
        <div className=" flex gap-5 items-center ">
          <div className=" flex flex-col gap-5">
            <Image src={product} alt="product" className=" w-[120px] h-[140px]"  />
            <Image src={product} alt="product" className=" w-[120px] h-[140px]"/>
            <Image src={product} alt="product"  className=" w-[120px] h-[140px]"/>
            <Image src={product} alt="product" className=" w-[120px] h-[140px]"/>
          </div>
          <Image src={product} alt="product" />
        </div>
        <div className=" flex flex-col gap-8 lg:max-w-[350px] xl:w-auto ">
          <div>
            <p className=" text-18 text-[#1D1D1B] uppercase font-[700] mb-2">
              Size
            </p>
            <div className=" flex gap-3 flex-wrap">
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                1/4 Kelo
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                1/4 Kelo
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                1/4 Kelo
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                1/4 Kelo
              </p>
            </div>
          </div>
          <div>
            <p className=" text-18 text-[#1D1D1B] uppercase font-[700] mb-2">
              Grinding
            </p>
            <div className=" flex gap-3 flex-wrap">
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                Whole bean
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                Whole bean
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                Whole bean
              </p>
              <p className=" text-16 text-[#1D1D1B] font-[500] py-[8px] px-[15px] border border-[#1D1D1B] rounded-[10px]">
                Whole bean
              </p>
            </div>
          </div>
          <div>
            <p className=" text-18 text-[#1D1D1B] uppercase font-[700] mb-2">
              Quantity
            </p>
            <div className=" flex items-center justify-between  gap-5 border border-[#1D1D1B] rounded-[10px]">
              <div
                className=" grow py-[8px] flex items-center justify-center cursor-pointer"
                onClick={() => {
                  if (count > 1) setcount(count - 1);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path d="M4.16675 13V10H20.1667V13H4.16675Z" fill="#1D1D1B" />
                </svg>
              </div>
              <p className="text-20 text-[#1D1D1B] font-[700] grow py-[8px] flex items-center justify-center border-x border-[#1D1D1B]">
                {count}
              </p>
              <div
                className=" grow py-[8px] flex items-center justify-center cursor-pointer"
                onClick={() => setcount(count + 1)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M20.8335 10.029V12.9711L14.5074 12.971V20H11.3335V12.971L4.8335 12.9711V10.029L11.3335 10.029V4H14.5074V10.029L20.8335 10.029Z"
                    fill="#1D1D1B"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" flex items-center gap-3 h-[64px] justify-center px-7 bg-[#1D1D1B] transition-all duration-300 rounded-[10px] cursor-pointer">
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

export default ProductDetails;
