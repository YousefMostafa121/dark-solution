import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import produc from '@/public/images/product.svg'

const ProductDetails = () => {
  return (
    <div className=" container mt-[8rem] pb-[100px]">
      <Breadcrumb className=" mx-auto w-fit">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-[#1D1D1B] text-16">
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop" className="text-[#1D1D1B] text-16">
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-[#1D1D1B] text-16">
              Plantaion A
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className=" text-48 text-[#1D1D1B] uppercase font-[700] text-center mt-3">
        Plantation a
      </p>
      <p className=" text-16 font-[500] text-[#1D1D1B] text-center mt-3">
        1 Kelo
      </p>
      <p className=" text-40 font-[500] text-[#1D1D1B] text-center uppercase -mt-1">
        150 EGp{" "}
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center mt-5">
        <div>
          <p className=" text-18 text-[#1D1D1B] uppercase font-[700] mb-2">
            Description
          </p>
          <p className=" text-14 text-[#1D1D1B] max-w-[295px] ">
            Lorem ipsum dolor sit amet consectetur. Augue quam eleifend semper
            quam sagittis. Cras auctor neque at laoreet. Aliquam sed magna
            placerat volutpat semper. Accumsan blandit orci auctor montes. Sit
            aenean nibh elit pulvinar et. Risus vel sed pharetra sollicitudin
            viverra elit aliquet malesuada. Nunc a commodo massa imperdiet duis
            elit sem elementum pharetra.
          </p>
        </div>
        <div>

        </div>
        <div>
          <p className=" text-18 text-[#1D1D1B] uppercase font-[700] mb-2">
            Size
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
