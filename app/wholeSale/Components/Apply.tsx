"use client";
import React from "react";
import productsBack from "@/public/images/ProductBack.jpg";
import Image from "next/image";
import { ErrorMessage, Field, Form, Formik } from "formik";
import upload from "@/public/images/upload.svg";
import applyNow from "@/public/images/applyNow.svg";
import { useAppDispatch } from "@/redux/store";
import APP from "@/redux/APP";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  commercial_registration: Yup.mixed()
    .required("File is required")
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value &&
        ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
      );
    }),
  tax_id: Yup.mixed()
    .required("File is required")
    .test("fileSize", "File size is too large", (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      return (
        value &&
        ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
      );
    }),
});
const Apply = () => {
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
      <div className=" container">
        <p className="text-64 strokeText font-[600] uppercase  text-center">
          Apply for wholesale
        </p>
        <p className=" text-96 text-white font-[700] uppercase -mt-12 mb-10 text-center">
          Apply for wholesale
        </p>
        <Formik
          initialValues={{
            name: "",
            email: "",
            commercial_registration: "",
            tax_id: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values, "values");
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append(
              "commercial_registration",
              values.commercial_registration
            );
            formData.append("tax_id", values.tax_id);
            dispatch(APP.thunks.doCreateWholeSale(formData));
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
                <div className=" relative w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7 flex items-center justify-center gap-5">
                  <Image src={upload} alt="upload" />
                  <p className=" text-18 text-[#979796] font-[700] uppercase">
                    upload commercial registration{" "}
                  </p>
                  <Field
                    type="file"
                    name="commercial_registration"
                    className=" absolute inset-0 w-full h-full z-20  opacity-0"
                    value={undefined}
                    onChange={(e: any) =>
                      props.setFieldValue(
                        "commercial_registration",
                        e.target.files[0]
                      )
                    }
                  />
                  <ErrorMessage name="commercial_registration" component="div" className="text-red-500" />
                </div>
                <div className=" relative w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7 flex items-center justify-center gap-5">
                  <Image src={upload} alt="upload" />
                  <p className=" text-18 text-[#979796] font-[700] uppercase">
                    upload tax id
                  </p>
                  <Field
                    type="file"
                    name="tax_id"
                    className=" absolute inset-0 w-full h-full z-20  opacity-0"
                    value={undefined}
                    onChange={(e: any) =>
                      props.setFieldValue("tax_id", e.target.files[0])
                    }
                  />
                  <ErrorMessage name="tax_id" component="div" className="text-red-500" />
                </div>
              </div>
              <button
                type="submit"
                className=" w-full h-[64px] border border-white rounded-[10px] mt-5 flex items-center justify-center gap-5"
              >
                <Image src={applyNow} alt="applyNow" />
                <p className=" text-18 text-white font-[700] uppercase underline">
                  apply now
                </p>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Apply;
