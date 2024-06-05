"use client";
import React from "react";
import Image from "next/image";
import imageBack from "@/public/images/animation2.png";
import whiteBondok from "@/public/images/whiteBondok.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const Index = () => {
  const { scrollY } = useViewportScroll();
  const imageY = useTransform(scrollY, [20, -500], [30, 500]);
  console.log(imageY);

  return (
    <div className=" w-full h-[1050px] relative pt-[100px]">
      <Image
        src={imageBack}
        alt="image"
        fill
        sizes="100vw"
        className=" object-cover z-[-1]  "
        priority
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, translateY: 500 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5 }}
        style={{
          position: "sticky",
            top: 0,
          zIndex: -1,
          //   y: imageY,
        }}
      >
        <Image src={whiteBondok} alt="grabe" className=" mx-auto -mt-32" />
      </motion.div>
      <div>
        <motion.div
          className=" container flex items-end"
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className=" ml-auto mt-[28rem] ">
            <p className=" text-24 text-white font-[500] uppercase">
              to the Roasting
            </p>
            <p className=" text-14 text-white max-w-[295px] mt-5">
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
