import Biggest from "@/components/home/Biggest";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";
import HeroSection from "./Components/HeroSection";
import ListMenu from "./Components/ListMenu";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <ListMenu/>
      <Biggest />
      <Footer />
    </div>
  );
};

export default Page;
