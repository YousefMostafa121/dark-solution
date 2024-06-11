"use client";
import React from "react";
import Image from "next/image";
import contactImage from "@/public/images/contactFormImage.jpg";
import { Field, Form, Formik } from "formik";
import send from "@/public/images/send.svg";
const ContactForm = () => {
  return (
    <div className=" relative w-full min-h-[800px] ">
      <Image
        src={contactImage}
        alt="productsBack"
        fill
        sizes="100vw"
        className="  object-cover "
        priority
      />
      <div className=" container  ">
        <Formik
          initialValues={{ name: "", mobile: "", email: "", message: "" }}
          onSubmit={(values) => {
            console.log(values, "values");
          }}
        >
          {(props) => (
            <Form className="w-full md:w-[80%] bg-white shadow p-10 rounded-[10px] mx-auto absolute -top-20 left-1/2 -translate-x-1/2">
              <p className=" text-48 text-[#1D1D1B] font-[700] uppercase text-center mb-5">
                Contact form
              </p>
              <p className=" text-16 text-[#1D1D1B]  text-center mb-7">
                Or you can contact us directly through <br />
                the following form:
              </p>
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
                  Email addres
                </p>
                <Field
                  type="email"
                  name="email"
                  className=" w-full h-[64px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="Email.."
                />
              </div>
              <div className=" my-5">
                <p className=" text-20 text-[#1D1D1B] font-[700] uppercase mb-2">
                  Message
                </p>
                <Field
                  as="textarea"
                  name="message"
                  className=" w-full min-h-[200px] bg-[#E8E8E8] outline-none rounded-[10px] p-3 px-7"
                  placeholder="Write here...."
                />
              </div>
              <button
                type="submit"
                className="  h-[64px] flex items-center justify-center gap-3 text-18 text-white bg-[#1D1D1B] rounded-[10px] uppercase px-[32px] w-full  lg:w-fit xl:min-w-[203px] "
              >
                <Image src={send} alt="send" />
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
