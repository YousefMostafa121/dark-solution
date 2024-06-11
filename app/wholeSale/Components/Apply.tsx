"use client";
import React from "react";
import productsBack from "@/public/images/ProductBack.jpg";
import Image from "next/image";
import { Field, Form, Formik } from "formik";
import upload from "@/public/images/upload.svg";
import applyNow from '@/public/images/applyNow.svg'
const Apply = () => {
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
      <div className=" container">
        <p className="text-64 strokeText font-[600] uppercase  text-center">
          Apply for wholesale
        </p>
        <p className=" text-96 text-white font-[700] uppercase -mt-12 mb-10 text-center">
          Apply for wholesale
        </p>
        <Formik
          initialValues={{ name: "", email: "", commercial: "", taxId: "" }}
          onSubmit={(values) => {
            console.log(values, "values");
          }}
        >
          {(props) => (
            <Form>
              <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <p className=" text-20 text-white font-[700] uppercase mb-2">
                    {" "}
                    company name
                  </p>
                  <Field
                    type="text"
                    name="name"
                    className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                    placeholder="Company "
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
                <div className=" relative w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7 flex items-center justify-center gap-5">
                  <Image src={upload} alt="upload" />
                  <p className=" text-18 text-[#979796] font-[700] uppercase">
                    upload commercial registration{" "}
                  </p>
                  <Field
                    type="file"
                    name="commercial"
                    className=" absolute inset-0 w-full h-full z-20  opacity-0"
                  />
                </div>
                <div className=" relative w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7 flex items-center justify-center gap-5">
                  <Image src={upload} alt="upload" />
                  <p className=" text-18 text-[#979796] font-[700] uppercase">
                    upload tax id
                  </p>
                  <Field
                    type="file"
                    name="taxId"
                    className=" absolute inset-0 w-full h-full z-20  opacity-0"
                  />
                </div>
              </div>
              <button type="submit" className=" w-full h-[64px] border border-white rounded-[10px] mt-5 flex items-center justify-center gap-5" >
                <Image src={applyNow} alt="applyNow" />
                <p className=" text-18 text-white font-[700] uppercase underline">apply now</p>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Apply;
