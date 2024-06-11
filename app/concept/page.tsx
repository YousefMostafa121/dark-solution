import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import React from "react";
import HeroSection from "./Components/HeroSection";
import Quality from "./Components/Quality";
import Selecting from "./Components/Selecting";
import BlendCreation from "./Components/BlendCreation";
import Roasting from "./Components/Roasting";
import Packaging from "./Components/Packaging";
import Founders from "./Components/Founders";
import TeamMember from "./Components/TeamMember";

const Page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Quality />
      <Selecting/>
      <BlendCreation/>
      <Roasting/>
      <Packaging/>
      <Founders/>
      <TeamMember/>
      <Footer />
    </div>
  );
};

export default Page;
