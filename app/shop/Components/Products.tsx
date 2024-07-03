"use client";
import React, { useEffect } from "react";
import search from "@/public/images/search.svg";
import Image from "next/image";
import ProductCard from "@/components/shared/ProductCard";
import product from "@/public/images/product.svg";
import cart from "@/public/images/cart.svg";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import APP, { SelectAllProducts } from "@/redux/APP";

const Products = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(SelectAllProducts);
  console.log(products, "products");
  useEffect(() => {
    dispatch(APP.thunks.doGetAllProducts({}));
  }, []);
  return (
    <div className=" container py-[50px] xl:py-[100px]">
      <div className=" flex flex-col md:flex-row  gap-5 justify-between">
        <p className=" text-16  ttext-[#0C0C0B] font-[500]">
          Show : {products.length} Products
        </p>
        <div className=" relative">
          <input
            type="text"
            placeholder="Search here.."
            className=" py-[15px] px-[20px] border border-[#E8E8E8] bg-[#E8E8E8] rounded-[10px] w-full md:w-[300px] outline-none h-[64px] flex items-center"
          />
          <Image
            src={search}
            alt="search"
            className=" absolute right-[20px] top-1/2 -translate-y-1/2"
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {products?.map((item: any, index: number) => (
          <div
            key={index}
            className=" border border-[#B9B9B8]  group transition-all duration-300 rounded-[20px] p-5"
          >
            <div className=" relative w-full max-h-[330px]">
              <Image src={item.image} alt="product" className=" mb-5 object-cover" fill sizes="100vw"  />
            </div>
            <div className=" flex flex-col gap-3">
              <p className=" text-24  font-[500] text-[#1D1D1B] transition-all duration-300">
                {item.name}
              </p>
              <p className=" text-16 text-[#1D1D1B] transition-all duration-300">
               {item.description}
              </p>
              <div className=" flex items-center justify-between">
                <div>
                  <p className=" text-16  font-[500] text-[#1D1D1B] transition-all duration-300">
                    1 Kelo
                  </p>
                  <p className=" text-24  font-[500] uppercase text-[#1D1D1B] transition-all duration-300">
                    {item.price} EGp{" "}
                  </p>
                </div>
                <div className=" flex items-center gap-3 h-[64px] justify-center px-7 bg-[#1D1D1B] transition-all duration-300 rounded-[10px] cursor-pointer">
                  <Image src={cart} alt="cart" />
                  <p className=" text-18 text-white font-[700] uppercase underline">
                    Add To Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
