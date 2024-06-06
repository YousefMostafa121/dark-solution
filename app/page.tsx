import Animation2 from "@/components/home/Animation2";
import Animation3 from "@/components/home/Animation3";
import Animation4 from "@/components/home/Animation4";
import Biggest from "@/components/home/Biggest";
import HeroSection from "@/components/home/HeroSection";
import HowItStart from "@/components/home/HowItStart";
import Products from "@/components/home/Products";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      {/* <Header/> */}
      {/* <HeroSection /> */}
      {/* <HowItStart/> */}
      {/* <Animation2/> */}
      {/* <Animation3/> */}
      {/* <Animation4/> */}
      <Biggest/>
      <Products/>
      <Footer />
    </div>
  );
}
