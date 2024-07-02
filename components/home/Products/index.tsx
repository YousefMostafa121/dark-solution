import ProductCard from "@/components/shared/ProductCard";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import productsBack from "@/public/images/ProductBack.jpg";
import Image from "next/image";
import cart from '@/public/images/cart.svg'
import Link from "next/link";

const Index = () => {
  return (
    <div className=" w-full  relative py-[100px] ">
      <Image
        src={productsBack}
        alt="productsBack"
        fill
        sizes="100vw"
        className="  object-cover z-[-1]"
        priority
      />
      <div className=" container">
        <p className="text-64 strokeText font-[600] uppercase lg:ml-[7.5rem] text-center">
          Products
        </p>
        <p className=" text-96 text-white font-[700] uppercase -mt-12 mb-10 text-center">
          Products
        </p>
        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem
                key={index}
                className=" basis-full md:basis-1/2 lg:basis-1/3"
              >
                <ProductCard />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
        <Link href={'/shop'} className=" h-[64px] flex items-center justify-center gap-3 w-fit py-3 px-7 border border-white rounded-[10px] mx-auto mt-10">
          <Image src={cart} alt="pinW" />
          <p className=" text-18 text-white font-[700] uppercase underline">
          Shop All
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Index;
