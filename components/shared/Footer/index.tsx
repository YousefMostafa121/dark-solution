import React from "react";
import darkSolution from "@/public/images/darkSolution.svg";
import subscribe from "@/public/images/subscribe.svg";
import pin from "@/public/images/pin.svg";
import instegram from "@/public/images/instegram.svg";
import faceboock from "@/public/images/faceboock.svg";
import Image from "next/image";
import Link from "next/link";
const Index = () => {
  return (
    <footer className="container pt-[100px] pb-[30px] ">

      <div className="  flex flex-col items-center gap-[64px] ">
        <Image src={darkSolution} alt="darkSolution" />
        <div className=" flex flex-col lg:flex-row items-center justify-between gap-10  w-full">
          <div className=" w-full lg:w-fit">
            <p className=" text-16 text-black font-[500] mb-4">
              Subscribe to our newsletter
            </p>
            <form className=" flex flex-col lg:flex-row items-center gap-3 ">
              <input
                type="email"
                className=" bg-[#E8E8E8] h-[64px] px-[32px] outline-none rounded-[10px] placeholder:text-[#979796] placeholder:text-16 w-full lg:max-w-[220px] xl:min-w-[395px] "
                placeholder="Email.."
              />
              <button
                type="submit"
                className="  h-[64px] flex items-center justify-center gap-3 text-18 text-white bg-[#1D1D1B] rounded-[10px] px-[32px] w-full  lg:w-fit xl:min-w-[203px] "
              >
                <Image src={subscribe} alt="subscribe" />
                Subscribe
              </button>
            </form>
          </div>
          <div>
            <p className=" text-40 text-[#1D1D1B] max-w-[570px] text-right font-[700] uppercase">
              Do you want to be aware of all our news?
            </p>
          </div>
        </div>
        <span className=" bg-[#B9B9B8] h-[2px] w-[80%]"></span>
        <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center">
          <div>
            <p className=" text-20 text-black font-[700] mb-4 uppercase">
              Quick Links
            </p>
            <ul className=" flex flex-col gap-2">
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Menu
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Concept
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Our spaces
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Whole sale
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Franchaise
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className=" text-20 text-black font-[700] mb-4 uppercase">
              other Links
            </p>
            <ul className=" flex flex-col gap-2">
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Returns policy
                </Link>
              </li>
              <li>
                <Link href={"#"} className=" text-16 text-[#1D1D1B]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className=" text-20 text-black font-[700] mb-4 max-w-[272px] uppercase">
              We’re waiting for your visits at:
            </p>
            <ul className=" flex flex-col gap-2">
              <li className="flex items-center gap-3">
                <Image src={pin} alt="pin" />
                <p className=" text-16 text-[#979796] font-[500]">
                  18 Street 218, Maadi
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Image src={pin} alt="pin" />
                <p className=" text-16 text-[#979796] font-[500]">
                  18 Street 218, Maadi
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Image src={pin} alt="pin" />
                <p className=" text-16 text-[#979796] font-[500]">
                  18 Street 218, Maadi
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p className=" text-20 text-black font-[700] mb-4  uppercase ">
              Social media
            </p>
            <ul className=" flex  gap-8">
              <li className="flex items-center gap-3">
                <Image src={instegram} alt="pin" />
                <p className=" text-16 text-black underline">Instagram</p>
              </li>
              <li className="flex items-center gap-3">
                <Image src={faceboock} alt="pin" />
                <p className=" text-16 text-black underline">Facebook</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className=" text-12 text-[#1D1D1B]">
            All rights reserved by Dark Solution
          </p>
          <p className=" text-12 text-[#1D1D1B]">
          © 2024 Proudly Powered by O-Projects
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Index;
