"use client";
import React from "react";
import productsBack from "@/public/images/ProductBack.jpg";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import upload from "@/public/images/upload.svg";
import applyNow from "@/public/images/applyNow.svg";

const Candidates = () => {
  return (
    <div className=" relative py-[50px] md:py-[100px]">
      <Image
        src={productsBack}
        alt="productsBack"
        fill
        sizes="100vw"
        className="  object-cover z-[-1]"
        priority
      />
      <div className=" container grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className=" text-48 text-white font-[700] uppercase max-w-[476px]">
            Type of candidates to be a dark solution franchisee
          </p>
          <p className=" text-16 text-white font-[500] mt-5">
            Become a dark solution franchisee
          </p>
        </div>

        <Formik
          initialValues={{ name: "", address: "", mobile: "", revenue: "" }}
          onSubmit={(values) => {
            console.log(values, "values");
          }}
        >
          {(props) => (
            <Form>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <p className=" text-20 text-white font-[700] uppercase mb-2">
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
                  <p className=" text-20 text-white font-[700] uppercase mb-2">
                    Email address
                  </p>
                  <Field
                    type="email"
                    name="email"
                    className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                    placeholder="Email "
                  />
                </div>
              </div>
              <div className=" my-5">
                <p className=" text-20 text-white font-[700] uppercase mb-2">
                  Mobile number
                </p>
                <Field
                  type="text"
                  name="mobile"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="+02#######"
                />
              </div>
              <div>
                <p className=" text-20 text-white font-[700] uppercase mb-2">
                  Yearly revenue
                </p>
                <Field
                  type="text"
                  name="revenue"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="Revenue "
                />
              </div>
              <button
                type="submit"
                className=" w-full h-[64px] border border-white rounded-[10px] mt-5 flex items-center justify-center gap-4 md:gap-5 px-2"
              >
                <Image src={applyNow} alt="applyNow" />
                <p className=" text-16 text-white font-[700] uppercase underline">
                Become a dark solution franchisee
                </p>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Candidates;
