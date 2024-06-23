"use client";
import React from "react";
import Image from "next/image";
import HowItWorks from "@/public/images/howItStart.png";
import grabe from "@/public/images/grabe.svg";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const Index = () => {
  const { scrollY } = useViewportScroll();
  const imageY = useTransform(scrollY, [0, -1500], [0, 1500]);
  return (
    <div id="howToStart" className=" w-full h-[1850px] relative pt-[100px]">
      <Image
        src={HowItWorks}
        alt="image"
        fill
        sizes="100vw"
        className=" object-cover z-[-1]"
        priority
      />
      <p className=" text-96 text-[#1D1D1B] font-[700] uppercase text-center strokeTextW ">
        How it
      </p>
      <p className=" text-96 text-[#1D1D1B] font-[700] uppercase text-center -mt-5">
        starts
      </p>
      <motion.div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          y: imageY,
        }}
      >
        <Image src={grabe} alt="grabe" className=" mx-auto -mt-32" />
      </motion.div>
      <motion.div
        className=" container"
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className=" ml-20">
          <p className=" text-24 text-[#1D1D1B] font-[500] uppercase">
            From the nature
          </p>
          <p className=" text-14 text-[#686866] max-w-[295px] mt-5">
            Lorem ipsum dolor sit amet consectetur. Augue integer curabitur
            bibendum et sed vitae dignissim tellus. Vel pharetra nulla proin
            aliquam.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
