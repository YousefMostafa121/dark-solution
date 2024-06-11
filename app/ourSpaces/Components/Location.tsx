import React from "react";
import Image from "next/image";
import map from "@/public/images/map.jpg";
import slider from "@/public/images/slider2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import pin from "@/public/images/pin.svg";

const Location = () => {
  return (
    <div className="  py-[50px] md:py-[100px] bg-[url(/images/flower.jpg)] bg-cover bg-no-repeat ">
      <div className="container grid grid-cols-1 md:grid-cols-2 place-content-between gap-5  ">
        <div>
          <div className=" flex gap-5">
            <p className=" text-24 text-[#979796] font-[500] uppercase underline">
              O1
            </p>
            <p className=" text-24 text-[#979796] font-[500] uppercase underline">
              Maadi
            </p>
            <p className=" text-24 text-black font-[500] uppercase underline">
              Zamalek
            </p>
          </div>
          <div className=" bg-[#FBFBFB] rounded-[10px] p-5 mt-5 flex flex-col gap-5 mb-5">
            <p className=" text-16 text-black">
              Lorem ipsum dolor sit amet consectetur. Tortor condimentum eget
              viverra consectetur aliquet et auctor faucibus. Bibendum ac
              sagittis sed mattis eget eget vulputate. Libero elit vestibulum
              bibendum leo rutrum a maecenas. Vitae duis arcu amet neque. Massa
              vehicula dolor faucibus sodales tempus egestas rhoncus tincidunt.
            </p>
            <div className=" flex gap-5">
              <Image src={pin} alt="pin" />
              <p className=" text-16 text-[#1D1D1B] font-[500]">
                6 Ibn Maiser, El Nabi, Zamalek
              </p>
            </div>
            <p className=" text-18 text-black font-[700] uppercase">
              Monday to Friday: 8:00am to 5:00pm <br />
              Saturday and Sunday: 9:00am to 6:00pm
            </p>
          </div>
          <Image src={map} alt="map" />
        </div>
        <Carousel
          opts={{
            loop: true,
          }}
          className=" max-w-[505px]  ml-auto"
        >
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index}>
                <Image src={slider} alt="founder" className=" max-h-[788px] " />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className=" absolute bottom-32 right-1/2">
            <CarouselNext />
          </div>
          <div className=" absolute bottom-32 left-1/2">
            <CarouselPrevious />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Location;
