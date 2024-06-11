import Header from "@/components/shared/Header";
import Vibe from "@/components/shared/Vibe";
import React from "react";
import HeroSection from "./Components/HeroSection";
import Footer from "@/components/shared/Footer";
import Candidates from "./Components/Candidates";
import BecomeAnFranchise from "./Components/BecomeAnFranchise";

const Page = () => {
  return (
    <>
      <Header />
      <HeroSection/>
      <BecomeAnFranchise/>
      <Candidates/>
      <Vibe/>
      <Footer/>
    </>
  );
};

export default Page;
