"use client";
import React from "react";
import productsBack from "@/public/images/ProductBack.jpg";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import upload from "@/public/images/upload.svg";
import applyNow from "@/public/images/applyNow.svg";
import { useAppDispatch } from "@/redux/store";
import APP from "@/redux/APP";
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
    .required('Phone number is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  yearly_revenue: Yup.number()
    .typeError('Yearly revenue must be a number')
    .positive('Yearly revenue must be a positive number')
    .required('Yearly revenue is required'),
});

const Candidates = () => {
  const dispatch = useAppDispatch();
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
          initialValues={{ name: "", email: "", phone: "", yearly_revenue: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values, "values");
            dispatch(APP.thunks.doApplyForFranchise(values));
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
                  <ErrorMessage name="name" component="div" className="text-red-500" />
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
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
              </div>
              <div className=" my-5">
                <p className=" text-20 text-white font-[700] uppercase mb-2">
                  Mobile number
                </p>
                <Field
                  type="text"
                  name="phone"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="+02#######"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500" />
              </div>
              <div>
                <p className=" text-20 text-white font-[700] uppercase mb-2">
                  Yearly revenue
                </p>
                <Field
                  type="number"
                  name="yearly_revenue"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="Revenue "
                />
                <ErrorMessage name="yearly_revenue" component="div" className="text-red-500" />
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
