"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import upload from "@/public/images/upload.svg";
import Image from "next/image";
import applyNow from '@/public/images/applyNow.svg'

const FormSection = () => {
  return (
    <div className=" container py-[50px] md:py-[100px]">
      <p className=" text-48 text-black font-[700] uppercase text-end mb-5">
        Fill the form
      </p>
      <Formik
        initialValues={{
          name: "",
          jobTitle: "",
          email: "",
          phone: "",
          job: "",
          bio: "",
          cv: null,
        }}
        onSubmit={(values) => {
          console.log(values, "values");
        }}
      >
        {(props) => (
          <Form className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className=" flex flex-col gap-5">
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
                  Job title
                </p>
                <Field
                  type="text"
                  name="jobTitle"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="Job Title......"
                />
              </div>
              <div>
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                  Email addres
                </p>
                <Field
                  type="text"
                  name="email"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="Email.."
                />
              </div>
              <div>
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                  Phone Number
                </p>
                <Field
                  type="text"
                  name="phone"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="+02)"
                />
              </div>
            </div>
            <div className=" flex flex-col gap-5">
              <div>
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                  Job
                </p>
                <Select>
                  <SelectTrigger className="w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7 ">
                    <SelectValue placeholder="Select.." />
                  </SelectTrigger>
                  <SelectContent></SelectContent>
                </Select>
              </div>
              <div>
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                  Bio
                </p>
                <Field
                  as="textarea"
                  name="bio"
                  className=" w-full h-[112px] bg-[#E8E8E8] outline-none rounded-[10px] pt-5 px-7"
                  placeholder="Write here...."
                />
              </div>
              <div className=" relative w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7 flex items-center justify-center gap-5">
                <Image src={upload} alt="upload" />
                <p className=" text-18 text-[#979796] font-[700] uppercase">
                Upload your CV
                </p>
                <Field
                  type="file"
                  name="taxId"
                  className=" absolute inset-0 w-full h-full z-20  opacity-0"
                />
              </div>
              <button type="submit" className=" w-full h-[64px]  bg-[#1D1D1B] rounded-[10px] mt-5 flex items-center justify-center gap-5" >
                <Image src={applyNow} alt="applyNow" />
                <p className=" text-18 text-white font-[700] uppercase underline">apply now</p>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormSection;
