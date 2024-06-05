'use client';
import React from "react";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import brokenBondok from "@/public/images/brokenBondok.png";
const Index = () => {
  return (
    <div className=" w-full h-[1050px] relative  bg-white ">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image src={brokenBondok} alt="grabe" className=" absolute left-1/2 -translate-x-1/2 -top-10 " />
      </motion.div>
    </div>
  );
};

export default Index;
