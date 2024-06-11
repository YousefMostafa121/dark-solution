import React from "react";
import client from "@/public/images/client1.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Clients = () => {
  return (
    <div className=" container py-[50px] md:py-[100px]">
      <p className=" text-48 text-[#1D1D1B] font-[700] uppercase text-center mb-5">
      Our Clients
      </p>
      <p className=" text-16 text-[#1D1D1B] font-[500] text-center max-w-[602px] mx-auto mb-20">
      Lorem ipsum dolor sit amet consectetur. Ut aliquam velit accumsan 
      </p>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" basis-full md:basis-1/2 lg:basis-1/4"
            >
              <Image src={client} alt="founder" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Clients;
