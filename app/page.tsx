import Biggest from "@/components/home/Biggest";
import HeroSection from "@/components/home/HeroSection";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection />
      <Biggest/>
      <Footer />
    </div>
  );
}
