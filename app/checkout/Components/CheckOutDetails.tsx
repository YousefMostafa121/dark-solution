"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import cart from "@/public/images/cart.svg";
import master from "@/public/images/masterCard.svg";
import visa from "@/public/images/visa.svg";
import meza from "@/public/images/meza.svg";

const CheckOutDetails = () => {
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
            <BreadcrumbLink href="/cart" className="text-[#1D1D1B] text-16">
              Cart
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#1D1D1B] text-16">
              Checkout
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className=" flex flex-col gap-5 ">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className=" bg-[#F9F9F9] rounded-[20px] py-4 px-6">
              <div className=" flex justify-between">
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase">
                  Plantation a
                </p>
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase">
                  150 EGp{" "}
                </p>
              </div>
              <div className=" flex justify-between mt-3">
                <p className=" text-16 text-[#1D1D1B]">
                  Size : 1 Kelo <span className=" mx-3" />
                  Grinding : Chemex
                </p>
                <p className=" text-16 text-[#1D1D1B] ">Quantity : 1 </p>
              </div>
            </div>
          ))}
          <Formik
            initialValues={{
              name: "",
              mobile: "",
              address: "",
              country: "",
              city: "",
              code: "",
            }}
            onSubmit={(values) => console.log(values)}
          >
            {(props) => (
              <Form className=" mt-10">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                      Full Name
                    </p>
                    <Field
                      type="text"
                      name="name"
                      className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                      placeholder="Name.."
                    />
                  </div>
                  <div>
                    <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                      Phone Number
                    </p>
                    <Field
                      type="text"
                      name="mobile"
                      className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                      placeholder="+02)"
                    />
                  </div>
                </div>
                <div className=" my-5">
                  <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                    address
                  </p>
                  <Field
                    type="text"
                    name="address"
                    className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                    placeholder="Your Address..."
                  />
                </div>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                      Country
                    </p>
                    <Field
                      type="text"
                      name="country"
                      className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                      placeholder="Your Country..."
                    />
                  </div>
                  <div>
                    <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                      City
                    </p>
                    <Field
                      type="text"
                      name="city"
                      className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                      placeholder="Your City..."
                    />
                  </div>
                </div>
                <div className=" my-5">
                  <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                    Postal Code
                  </p>
                  <Field
                    type="text"
                    name="code"
                    className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                    placeholder="Your Address..."
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className=" flex flex-col bg-[#F9F9F9] py-[20px] px-[24px] rounded-[20px]">
          <p className=" text-20 text-[#212121] font-[700] uppercase">
            Payment details
          </p>
          <p className=" text-14 text-[#212121] mb-5">
            All transactions are secure and encrypted.
          </p>
          <div >
            <div className=" flex items-center justify-between border-b border-[#B9B9B8] pb-3 mb-5">
              <div className=" flex items-center gap-5 ">
                <input
                  type="radio"
                  name="radio"
                  id="radio"
                  className=" w-8 h-8  accent-[#B9B9B8] outline-none"
                />
                <p className=" text-16 text-[#1D1D1B] ">
                  Pay via <br />
                  (Debit/Credit cards)
                </p>
              </div>
              <div className=" flex gap-1 md:gap-2 lg:gap-5">
                <Image src={master} alt="masterCard" />
                <Image src={visa} alt="visa" />
                <Image src={meza} alt="paypal" />
              </div>
            </div>
            <div className=" flex items-center justify-between  mb-10">
              <div className=" flex items-center gap-5 ">
                <input
                  type="radio"
                  name="radio"
                  id="radio"
                  className=" w-8 h-8  accent-[#B9B9B8] outline-none"
                />
                <p className=" text-16 text-[#1D1D1B] ">Pay cash on delivery</p>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 grow ">
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
          </div>
          <div className="  mt-auto flex items-center gap-3 h-[64px] justify-center px-7 bg-[#1D1D1B] transition-all duration-300 rounded-[10px] cursor-pointer">
            <Image src={cart} alt="cart" />
            <p className=" text-18 text-white font-[700] uppercase underline">
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOutDetails;
