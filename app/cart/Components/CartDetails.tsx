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
import product from "@/public/images/product2.svg";
import edit from "@/public/images/edit.svg";
import remove from "@/public/images/remove.svg";
import cart from "@/public/images/cart.svg";
import Image from "next/image";
import Link from "next/link";

const CartDetails = () => {
  const [count, setcount] = useState(1);
  return (
    <div className=" container mt-[8rem] pb-[100px]">
      <Breadcrumb className=" mb-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#1D1D1B] text-16">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#1D1D1B] text-16">
              Cart
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=" flex flex-col lg:flex-row gap-5">
        <div className=" flex flex-col gap-5 grow-[1]">
        <div className=" flex flex-col md:flex-row gap-5 bg-[#F9F9F9] py-[20px] px-[24px] rounded-[20px]">
            <Image src={product} alt="product" width={138} height={161} className=" mx-auto" />
            <div className=" flex flex-col grow gap-3">
              <div className=" flex items-center gap-5 ml-auto">
                <div className=" flex items-center gap-2 cursor-pointer">
                  <Image src={edit} alt="edit" />
                  <p className=" text-14 text-[#0C0C0B] font-[700]">Edit</p>
                </div>
                <div className=" flex items-center gap-2 cursor-pointer">
                  <Image src={remove} alt="edit" />
                  <p className=" text-14 text-[#0C0C0B] font-[700]">Remove</p>
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <p className=" text-24 text-[#1D1D1B] font-[700] uppercase">
                  Plantation a
                </p>
                <p className=" text-24 text-[#1D1D1B] font-[500] uppercase">
                  150 EGp{" "}
                </p>
              </div>
              <div className=" flex items-center flex-wrap gap-3">
                <div>
                  <p className=" text-16 text-[#1D1D1B] font-[400] mb-1">
                    Size
                  </p>
                  <p className=" text-16 text-[#E8E8E8] font-[500] bg-[#10100F] rounded-[10px] py-2 px-4 md:px-7">
                    1 Kelo
                  </p>
                </div>
                <div>
                  <p className=" text-16 text-[#1D1D1B] font-[400] mb-1">
                    Grinding
                  </p>
                  <p className=" text-16 text-[#E8E8E8] font-[500] bg-[#10100F] rounded-[10px] py-2 px-4 md:px-7">
                    Chemex
                  </p>
                </div>
                <div>
                  <p className=" text-16 text-[#1D1D1B] font-[400] mb-1">
                    Quantity
                  </p>
                  <div className="min-w-[140px] md:min-w-[200px]  flex items-center justify-between   border border-[#1D1D1B] rounded-[15px]">
                    <div
                      className=" grow py-[8px] flex  items-center justify-center cursor-pointer "
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
                        <path
                          d="M4.16675 13V10H20.1667V13H4.16675Z"
                          fill="#1D1D1B"
                        />
                      </svg>
                    </div>
                    <p className="text-20 text-[#1D1D1B] font-[700] grow py-[8px] flex items-center justify-center border-x border-[#1D1D1B] ">
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
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:flex-row gap-5 bg-[#F9F9F9] py-[20px] px-[24px] rounded-[20px]">
            <Image src={product} alt="product" width={138} height={161} className=" mx-auto" />
            <div className=" flex flex-col grow gap-3">
              <div className=" flex items-center gap-5 ml-auto">
                <div className=" flex items-center gap-2 cursor-pointer">
                  <Image src={edit} alt="edit" />
                  <p className=" text-14 text-[#0C0C0B] font-[700]">Edit</p>
                </div>
                <div className=" flex items-center gap-2 cursor-pointer">
                  <Image src={remove} alt="edit" />
                  <p className=" text-14 text-[#0C0C0B] font-[700]">Remove</p>
                </div>
              </div>
              <div className=" flex items-center justify-between">
                <p className=" text-24 text-[#1D1D1B] font-[700] uppercase">
                  Plantation a
                </p>
                <p className=" text-24 text-[#1D1D1B] font-[500] uppercase">
                  150 EGp{" "}
                </p>
              </div>
              <div className=" flex items-center flex-wrap gap-3">
                <div>
                  <p className=" text-16 text-[#1D1D1B] font-[400] mb-1">
                    Size
                  </p>
                  <p className=" text-16 text-[#E8E8E8] font-[500] bg-[#10100F] rounded-[10px] py-2 px-4 md:px-7">
                    1 Kelo
                  </p>
                </div>
                <div>
                  <p className=" text-16 text-[#1D1D1B] font-[400] mb-1">
                    Grinding
                  </p>
                  <p className=" text-16 text-[#E8E8E8] font-[500] bg-[#10100F] rounded-[10px] py-2 px-4 md:px-7">
                    Chemex
                  </p>
                </div>
                <div>
                  <p className=" text-16 text-[#1D1D1B] font-[400] mb-1">
                    Quantity
                  </p>
                  <div className="min-w-[140px] md:min-w-[200px]  flex items-center justify-between   border border-[#1D1D1B] rounded-[15px]">
                    <div
                      className=" grow py-[8px] flex  items-center justify-center cursor-pointer "
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
                        <path
                          d="M4.16675 13V10H20.1667V13H4.16675Z"
                          fill="#1D1D1B"
                        />
                      </svg>
                    </div>
                    <p className="text-20 text-[#1D1D1B] font-[700] grow py-[8px] flex items-center justify-center border-x border-[#1D1D1B] ">
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
              </div>
            </div>
          </div>
        </div>
        <div className=" grow-[1] flex flex-col gap-5 bg-[#F9F9F9] py-[20px] px-[24px] rounded-[20px]">
          <p className=" text-20 text-[#212121] font-[700] uppercase">
            Cart total
          </p>
          <div className=" flex items-center justify-between gap-5 w-full border-b border-[#B9B9B8] pb-3">
            <p className=" text-14 text-[#1D1D1B] font-[700] uppercase">
              Subtotal
            </p>
            <p className=" text-14 text-[#1D1D1B] font-[400] uppercase">
              250 EGP
            </p>
          </div>
          <div className=" flex items-center justify-between gap-5 w-full border-b border-[#B9B9B8] pb-3">
            <p className=" text-14 text-[#1D1D1B] font-[700] uppercase">
              Delivery Fees
            </p>
            <p className=" text-14 text-[#1D1D1B] font-[400] uppercase">
              50 EGP
            </p>
          </div>
          <div className=" flex items-center justify-between gap-5 w-full border-b border-[#B9B9B8] pb-3">
            <p className=" text-14 text-[#1D1D1B] font-[700] uppercase">
              Promo Code Discount
            </p>
            <p className=" text-14 text-[#1D1D1B] font-[400] uppercase">
              0 EGP
            </p>
          </div>
          <div className=" flex items-center justify-between gap-5 w-full border-b border-[#B9B9B8] pb-3">
            <p className=" text-14 text-[#1D1D1B] font-[700] uppercase">
              2st Order Discount (10%)
            </p>
            <p className=" text-14 text-[#E00000] font-[400] uppercase">
              10 EGP
            </p>
          </div>
          <div className=" flex items-center justify-between gap-5 w-full  pb-3 mb-10">
            <p className=" text-14 text-[#1D1D1B] font-[700] uppercase">
              Total
            </p>
            <p className=" text-14 text-[#1D1D1B] font-[400] uppercase">
              290 EGP
            </p>
          </div>
          <Link href={'/checkout'} className=" flex items-center gap-3 h-[64px] justify-center px-7 bg-[#1D1D1B] transition-all duration-300 rounded-[10px] cursor-pointer">
            <Image src={cart} alt="cart" />
            <p className=" text-18 text-white font-[700] uppercase underline">
              Checkout
            </p>
          </Link>
          <p className=" text-16 text-[#4A4A49] font-[500] text-center">
            Do you have a promo code? Enter here
          </p>
          <form className=" flex flex-col lg:flex-row items-center gap-3 ">
            <input
              type="email"
              className=" bg-[#E8E8E8] h-[64px] px-[32px] outline-none rounded-[10px] placeholder:text-[#979796] placeholder:text-16 w-full  grow "
              placeholder="A promo code"
            />
            <button
              type="submit"
              className="  h-[64px] flex items-center justify-center gap-3 text-18 text-white bg-[#1D1D1B] rounded-[10px] px-[32px] w-full  lg:w-fit xl:min-w-[203px] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.086 12.9999H15.672L11.172 17.4999L12.586 18.9139L19.5 11.9999L12.586 5.08594L11.172 6.49994L15.672 10.9999H4.086V12.9999Z"
                  fill="white"
                />
              </svg>
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
