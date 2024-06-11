import React from "react";
import wholesale from "@/public/images/wholesale1.jpg";
import wholesale2 from "@/public/images/wholesale2.jpg";
import flower from "@/public/images/flower.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className=" py-[50px] md:py-[100px] bg-[url(/images/flower.jpg)] bg-cover bg-no-repeat">
      <div className=" container">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center mb-5 md:mb-40">
          <Image
            src={wholesale}
            alt="wholesale"
            className="max-w-[340px] md:max-w-[505px] max-h-[525px] mx-auto"
          />
          <div>
            <p className=" text-48 text-[#1D1D1B] font-[700] uppercase max-w-[505px] mb-5">
              About Whole Sale section
            </p>
            <p className=" text-16 text-black max-w-[525px]">
              Lorem ipsum dolor sit amet consectetur. Ut aliquam velit accumsan
              nibh. Lectus diam facilisis ut tellus lectus. Risus rutrum quis
              aliquam a lacinia. Tempus in tristique egestas id lacus. Sit massa
              mauris lacus scelerisque maecenas feugiat sit scelerisque. Fames
              nisl nisl eleifend adipiscing condimentum pellentesque. Mauris
              adipiscing senectus consequat nec ornare molestie. Malesuada
              pellentesque aliquet eget fermentum urna blandit quis. Sapien erat
              nec sed vitae etiam tempor sit. At dui dolor lacus in.{" "}
            </p>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center ">
          <div>
            <p className=" text-48 text-[#1D1D1B] font-[700] uppercase max-w-[505px] mb-5">
              Our Quality
            </p>
            <p className=" text-16 text-black max-w-[525px] mb-5">
              Lorem ipsum dolor sit amet consectetur. Nec turpis pretium eget
              elementum laoreet accumsan nulla. Mauris in augue eu feugiat nunc
              sit sed ut.
            </p>
            <p className=" text-16 text-black max-w-[525px]">
              Lorem ipsum dolor sit amet consectetur. Condimentum purus nibh
              tellus cras morbi volutpat libero adipiscing nunc. Mattis felis
              faucibus id luctus arcu tempor luctus dignissim. Justo dolor risus
              vulputate sem et. Malesuada odio ipsum id mi. Eget ornare varius
              tellus sed gravida ornare enim. Pellentesque in non diam arcu
              aliquet bibendum. Lobortis massa in in sit at tempor senectus.
              Aliquet sit morbi vel nunc. Non lacus scelerisque amet sit sit et
              diam. Euismod non tellus adipiscing eleifend sed sit feugiat
              tempor. Non fringilla nulla at mauris urna bibendum. Cursus amet
              libero dignissim fermentum sollicitudin. Cras lectus nunc arcu
              quam.
            </p>
          </div>
          <Image
            src={wholesale2}
            alt="wholesale"
            className=" max-w-[340px] md:max-w-[505px] max-h-[525px] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
