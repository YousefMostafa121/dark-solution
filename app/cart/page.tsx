import Biggest from "@/components/home/Biggest";
import Footer from "@/components/shared/Footer";
import Header2 from "@/components/shared/Header2";
import React from "react";
import CartDetails from "./Components/CartDetails";

const Page = () => {
  return (
    <div>
      <Header2 />
      <CartDetails />
      <Biggest />
      <Footer />
    </div>
  );
};

export default Page;
