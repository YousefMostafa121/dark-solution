import Biggest from "@/components/home/Biggest";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";
import Products from "./Components/Products";
import HeroSection from "./Components/HeroSection";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Products/>
      <Biggest />
      <Footer />
    </div>
  );
};

export default Page;
