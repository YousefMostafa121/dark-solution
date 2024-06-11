import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import founder from "@/public/images/founder.jpg";
const Founders = () => {
  return (
    <div className=" w-full  relative py-[50px] md:py-[100px] bg-[#161513] ">
      <div className=" container">
        <p className="text-64 strokeText font-[600] uppercase  text-center">
          Founders
        </p>
        <p className=" text-96 text-white font-[700] uppercase -mt-12 mb-10 text-center">
          Founders
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
                <div className=" flex flex-col gap-3">
                  <Image
                    src={founder}
                    alt="founder"
                    className=" rounded-[10px]"
                  />
                  <p className=" text-48 text-white font-[700] uppercase text-right">
                    Lucille Trantow
                  </p>
                  <p className=" text-16 font-[500] text-white text-right">Owner</p>
                  <p className=" text-14 text-[#B5B5B5] text-right max-w-[352px] ml-auto">Lorem ipsum dolor sit amet consectetur. Consectetur posuere eu mattis lorem et facilisi. Non integer risus vel ultrices.</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Founders;
