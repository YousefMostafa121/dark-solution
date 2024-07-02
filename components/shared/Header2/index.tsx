"use client";
import React, { useState } from "react";
import cart from "@/public/images/cartB.svg";
import cartW from "@/public/images/cart.svg";
import cartW from "@/public/images/cart.svg";
import menu from "@/public/images/menu.svg";
import close from "@/public/images/close.svg";
import contactUs from "@/public/images/contactUsB.svg";
import contactUsW from "@/public/images/contactUs.svg";
import darkSolution from "@/public/images/darkSolutionB.svg";
import darkSolutionW from "@/public/images/darkSolutionW.svg";
import Image from "next/image";
import pin from "@/public/images/pin.svg";
import Link from "next/link";

const Index = () => {
  const [showMenu, setshowMenu] = useState(false);
  const handleChange = () => {
    setshowMenu(!showMenu);
  };
  return (
    <header className=" absolute py-5 top-0 left-0 w-full z-50">
      <div className=" container">
        <div className="flex items-center justify-between gap-5">
          <div
            className=" fixed w-[121px] h-[44px] flex items-center justify-center gap-3 bg-[#1D1D1B] rounded-[10px] cursor-pointer mt-10 md:mt-4"
            onClick={handleChange}
          >
            <Image src={menu} alt="menu" />
            <p className=" text-18 text-white font-[700] uppercase">Menu</p>
          </div>
          <div></div>
          <Link href={"/"}>
            <Image
              src={darkSolution}
              alt="darkSolution"
              priority
              className=" absolute right-5 md:left-1/2 md:-translate-x-1/2 top-5"
            />
          </Link>
          <div className="hidden md:flex items-center gap-7 mt-4">
            <Link href={"/cart"}>
              <Image src={cart} alt="cart" />
            </Link>
            <Link href={'/contactUs'} className=" flex items-center gap-3">
              <p className=" text-18 text-[#0C0C0B] font-[700] uppercase underline">
                Contact us
              </p>
              <Image src={contactUs} alt="contactUs" />
            </Link>
          </div>
        </div>
        </div>

        <span className=" bg-[#B9B9B8] w-[90%] h-[1px] block mx-auto mt-16 md:mt-10"></span>
      </div>

      <div
        className={` w-full min-h-screen fixed top-0 left-0 ${
          showMenu ? "translate-y-0" : "-translate-y-full"
        } transition-all duration-300 z-[60] bg-[url('/images/ProductBack.jpg')] bg-cover bg-no-repeat`}
      >
        <div className=" container py-5 flex items-center justify-between gap-5">
          <div
            className=" w-[121px] h-[44px] flex items-center justify-center gap-3 bg-[#1D1D1B] rounded-[10px] cursor-pointer"
            onClick={handleChange}
          >
            <Image src={close} alt="menu" />
            <p className=" text-18 text-white font-[700] uppercase">close</p>
          </div>
          <Link href={"/"}>
            <Image src={darkSolutionWite} alt="darkSolution" priority />
          </Link>

          <div className="hidden md:flex items-center gap-7">
            <Link href={"/cart"}>
              <Image src={cartW} alt="cart" />
            </Link>
            <Link href={"/contactUs"} className="flex items-center gap-3">
            <Link href={"/cart"}>
              <Image src={cartW} alt="cart" />
            </Link>
            <Link href={"/contactUs"} className="flex items-center gap-3">
              <p className=" text-18 text-white font-[700] uppercase underline">
                Contact us
              </p>
              <Image src={contactUsW} alt="contactUs" />
            </Link>
              <Image src={contactUsW} alt="contactUs" />
            </Link>
          </div>
        </div>
        <div className="container flex flex-col-reverse md:flex-row gap-14 justify-between">
          <div className=" flex justify-between gap-5 md:self-end">
            <div>
              <p className=" text-14 text-[#B5B5B5] font-[700] uppercase max-w-[150px] mb-5">
                We’re waiting for your visits at:
              </p>
              <div className=" flex items-center gap-3 mb-2">
                <Image src={pin} alt="pin" />
                <p className=" text-16 text-[#B5B5B5] font-[500]">
                  18 Street 218, Maadi
                </p>
              </div>
              <div className=" flex items-center gap-3 mb-2">
                <Image src={pin} alt="pin" />
                <p className=" text-16 text-[#B5B5B5] font-[500]">
                  18 Street 218, Maadi
                </p>
              </div>
              <div className=" flex items-center gap-3 mb-2">
                <Image src={pin} alt="pin" />
                <p className=" text-16 text-[#B5B5B5] font-[500]">
                  18 Street 218, Maadi
                </p>
              </div>
            </div>
          </div>
          <ul className=" text-end">
            <li className=" -mb-6">
              <Link
                href={"/"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Home
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/menu"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Menu
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/shop"}
                href={"/shop"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Shop
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/concept"}
                href={"/concept"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Concept
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/ourSpaces"}
                href={"/ourSpaces"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Our spaces
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/wholeSale"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Wholesale
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/careers"}
                href={"/careers"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Careers
              </Link>
            </li>
            <li className=" -mb-6">
              <Link
                href={"/franchise"}
                href={"/franchise"}
                className=" text-64 font-[600] uppercase strokeHeader"
              >
                Franchise
              </Link>
            </li>
          </ul>
        </div>
        <span className=" h-[1px] w-[80%] mx-auto bg-[#686866] block mt-10"></span>
      </div>
    </header>
  );
};

export default Index;
