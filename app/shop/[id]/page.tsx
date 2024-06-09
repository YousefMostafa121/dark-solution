import Biggest from "@/components/home/Biggest";
import Footer from "@/components/shared/Footer";
import Header2 from "@/components/shared/Header2";
import React from "react";
import ProductDetails from "./Components/ProductDetails";

const Page = () => {
  return (
    <div>
      <Header2 />
      <ProductDetails/>
      <Biggest />
      <Footer />
    </div>
  );
};

export default Page;
