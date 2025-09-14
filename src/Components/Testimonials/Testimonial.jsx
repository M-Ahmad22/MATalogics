import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestOne from "../../assets/TestOne.svg";
import TestTwo from "../../assets/TestTwo.svg";
import TestThree from "../../assets/TestThree.svg";
import QuoteImg from "../../assets/bxs_quote-left.svg";
import Star from "../../assets/Star.svg";

const testimonials = [
  {
    name: "Sarah Malik",
    role: "CTO, FutureTech Inc.",
    quote:
      "Working with MATalogics was a game-changer. Their team delivered a scalable solution that exceeded our expectations. Communication and execution were flawless.",
    image: TestTwo,
    NoOfStars: 5,
    rating: "4.8",
  },
  {
    name: "Ahmed Raza",
    role: "Founder, Appfinity",
    quote:
      "The real-time threat detection and automated response features have significantly reduced our risk exposure. We now feel more confident than ever about our data security posture.",
    image: TestOne,
    NoOfStars: 4,
    rating: "4.9",
  },
  {
    name: "Emily Zhao",
    role: "Marketing Director, CloudIQ",
    quote:
      "Their AI and SEO expertise helped us double our website traffic in just 3 months. The team is responsive, professional, and results-driven.",
    image: TestThree,
    NoOfStars: 4,
    rating: "4.5",
  },
];

const Testimonials = () => {
  return (
    <section
      id="Testimonials"
      className="flex flex-col justify-center items-center w-full h-[700px] my-[60px] bg-[#fff] mobile:h-[h-auto]"
    >
      <div className="BlogTitle gap-[8px] h-auto w-[100%] flex flex-col justify-center items-center ">
        <h1 className="font-[Outfit] text-[48px] not-italic font-bold leading-[52.5px] tracking-[-0.84px] capitalize text-[#1E1D28] mb-3  mobile:text-[30px] mobile:leading-[40px]  ">
          <span className="text-[#0045E6]">What </span>Our Client Say
        </h1>
        <h3 className="font-outfit text-[16px] font-normal leading-[24px] tracking-[0.5px] ml-3 w-[546px] text-center text-[#1D2939] mobile:w-auto mobile:ml-0 ">
          We’re proud to help global businesses build exceptional digital
          solutions.
        </h3>
      </div>
      <div className=" overflow-hidden TestimonialCardsCon flex justify-center items-center w-full h-[570px] mobile:flex-col mobile:my-[20px] mobile:h-[auto] mobile:gap-2 ">
        {testimonials.map((item, index) => (
          <div
            className="relative TestimonialCard w-[641px] h-[378px] p-38px flex flex-col justify-center items-center gap-[18px] rounded-[20px] mx-2 my-1 bg-[#F9F8FF] mobile:w-[90%] mobile:rounded-[10px] mobile:mt-1 "
            key={index}
          >
            <h1 className="absolute top-4 font-Satoshi text-[18px] font-medium leading-[25.2px] tracking-[-0.1px] mx-7 my-4 mobile:text-[13px] mobile:leading-[15px] mobile:tracking-[-0.2px] mobile:mt-1 mobile:mx-5">
              {item.quote}
            </h1>
            <div className="absolute top-[150px] mx-7 left-0 flex justify-center items-center gap-[10px] mobile:left-0 mobile:top-[100px] mobile:gap-[5px] mobile:mx-5">
              {[...Array(item.NoOfStars)].map((_, i) => (
                <img
                  src={Star}
                  alt="star"
                  key={i}
                  className="w-[24px] h-[24px] mobile:w-[10px] mobile:h-[10px]"
                />
              ))}
              <span className="text-[18px] font-medium leading-[25.2px] font-Satoshi text-center mt-1 mobile:text-[12px] mobile:mt-0 mobile:tracking-[-0.1px]">
                {item.rating}
              </span>
            </div>

            <div className="absolute bottom-5 left-4 w-full h-[58.3px] flex justify-center items-center mobile:bottom-0  ">
              <img
                src={item.image}
                alt=""
                className="h-[58px] w-[[583px]] rounded-[73.542px] mr-3  mobile:h-[30px] mobile:w-[30px] mobile:ml-[4px] "
              />
              <div className="w-[80%] flex flex-col justify-center items-start h-full mx-0 mr-7 gap-2">
                <h1 className="font-Satoshi text-[20px] font-[700] leading-[25.278px] tracking-[0.2px] text-[#1D2939] mobile:text-[13px] mobile:leading-[10px]">
                  {item.name}
                </h1>
                <h2 className="font-Satoshi text-[18.882px] font-[400] leading-[14.778px] tracking-[0.4px] text-[#667085] mobile:text-[12px]  mobile:leading-[10px] mobile:tracking-tighter">
                  {item.role}
                </h2>
              </div>
              <div className="absolute w-[40.65px] h-[40.65px]  mx-9 right-7 flex justify-center items-center mobile:right-1  mobile:bottom-1 mobile:mx-7 ">
                <img
                  src={QuoteImg}
                  alt=""
                  className="w-[40.65px] h-[40.65px] mobile:w-[25px] "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
