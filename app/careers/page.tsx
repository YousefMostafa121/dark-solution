import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";
import HeroSection from "./Components/HeroSection";
import TypeOfCandidates from "./Components/TypeOfCandidates";
import SelectionProcess from "./Components/SelectionProcess";
import Biggest from "@/components/home/Biggest";
import Offer from "./Components/Offer";
import FormSection from "./Components/FormSection";


const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <TypeOfCandidates />
      <SelectionProcess />
      <Offer />
      <FormSection />
      <Biggest />
      <Footer />
    </div>
  );
};

export default Page;
