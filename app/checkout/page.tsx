import Biggest from "@/components/home/Biggest";
import Footer from "@/components/shared/Footer";
import Header2 from "@/components/shared/Header2";
import React from "react";
import CheckOutDetails from "./Components/CheckOutDetails";

const Page = () => {
  return (
    <>
      <Header2 />
      <CheckOutDetails />
      <Biggest />
      <Footer />
    </>
  );
};

export default Page;
