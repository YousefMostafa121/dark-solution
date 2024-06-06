"use client";
import React from "react";
import Image from "next/image";
import imageBack from "@/public/images/animation3.png";
import whiteBondok from "@/public/images/blackBondok.png";
import bondok1 from "@/public/images/bondok1.png";
import bondok2 from "@/public/images/bondok2.png";
import bondok3 from "@/public/images/bondok3.png";
import bondok4 from "@/public/images/bondok4.png";
import { motion, useViewportScroll, useTransform } from "framer-motion";
const Index = () => {
  const { scrollY } = useViewportScroll();
  const imageY = useTransform(scrollY, [20, -500], [30, 500]);
  console.log(imageY);

  return (
    <div className=" w-full h-[1050px] relative pt-[100px] ">
      <Image
        src={imageBack}
        alt="image"
        fill
        sizes="100vw"
        className=" object-cover z-[-1] "
        priority
      />
      <motion.div
        initial={{
          opacity: 0,
          x: -300,
        }}
        whileInView={{ opacity: 1, x: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={bondok1}
          alt="grabe"
          className=" absolute left-[20%] top-40"
        />
      </motion.div>
      {/* <motion.div
        initial={{
          opacity: 1,
          x: 20,
        }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      > */}
        <Image
          src={bondok2}
          alt="grabe"
          className=" absolute right-[20%] bottom-60"
        />
      {/* </motion.div> */}
      <motion.div
        initial={{
          opacity: 0,
          x:-300,
        }}
        whileInView={{ opacity: 1, x: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={bondok3}
          alt="grabe"
          className=" absolute right-[20%] top-20"
        />
      </motion.div>
      {/* <motion.div
        initial={{
          opacity: 1,
          y: 100,
          left:'20%',
          bottom:'8rem'
        }}
        whileInView={{ opacity: 1, left:'22%' , bottom:'10rem' }}
        transition={{ duration: 1.5 }}
      > */}
        <Image
          src={bondok4}
          alt="grabe"
          className=" absolute left-[22%] bottom-40"
        />
      {/* </motion.div> */}
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
      <motion.div
        className=" container flex "
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className="ml-10  mt-[28rem] ">
          <p className=" text-24 text-white font-[500] uppercase max-w-[295px]">
          Until it becomes a coffee bean
          </p>
          <p className=" text-14 text-white max-w-[295px] mt-5">
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
