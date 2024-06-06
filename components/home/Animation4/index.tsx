"use client";
import React from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import brokenBondok from "@/public/images/brokenBondok.png";
import hand from "@/public/images/hand.png";
const Index = () => {
  return (
    <div className=" w-full h-[1050px] relative  bg-white ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src={brokenBondok}
          alt="grabe"
          className=" absolute left-1/2 -translate-x-1/2 -top-10 "
        />
      </motion.div>
      <Image
        src={hand}
        alt="hand"
        className=" absolute left-1/2 -translate-x-1/3 top-1/2 -translate-y-1/2 "
      />
      <div className=" ">
        <motion.div
          className=" container flex items-end"
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className=" ml-auto mt-[5rem] ">
            <p className=" text-24 text-[#1D1D1B] font-[500] uppercase">
            Then it is ground
            </p>
            <p className=" text-14 text-[#1D1D1B] max-w-[295px] mt-5">
              Lorem ipsum dolor sit amet consectetur. Augue integer curabitur
              bibendum et sed vitae dignissim tellus. Vel pharetra nulla proin
              aliquam.
            </p>
          </div>
        </motion.div>
        <motion.div
          className=" container flex items-end"
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className=" ml-10 mt-[30rem] ">
            <p className=" text-24 text-[#1D1D1B] font-[500] uppercase max-w-[400px]">
            It becomes a cup of coffee or delicious food
            </p>
            <p className=" text-14 text-[#1D1D1B] max-w-[295px] mt-5">
              Lorem ipsum dolor sit amet consectetur. Augue integer curabitur
              bibendum et sed vitae dignissim tellus. Vel pharetra nulla proin
              aliquam.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
