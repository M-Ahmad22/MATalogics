import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TestOne from "../../assets/TestOne.svg";
import TestTwo from "../../assets/TestTwo.svg";
import TestThree from "../../assets/TestThree.svg";
import TestData from "../../assets/TestData.jpg";
import TestLina from "../../assets/TestLina.jpg";
import TestSophia from "../../assets/TestSophia.jpg";
import TestHassan from "../../assets/TestHassan.jpg";
import QuoteImg from "../../assets/bxs_quote-left.svg";
import Star from "../../assets/Star.svg";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "CTO, NovaCore Systems",
    quote:
      "Partnering with MATalogics completely transformed our workflow. Their team delivered a powerful, scalable product beyond our vision. Every step was smooth and on point.",
    image: TestTwo,
    NoOfStars: 5,
    rating: "4.8",
  },
  {
    name: "Hassan Mirza",
    role: "Founder, SecureSphere",
    quote:
      "Their live monitoring and instant mitigation tools have drastically cut our risks. We’re now operating with unmatched confidence in our security framework.",
    image: TestHassan,
    NoOfStars: 4,
    rating: "4.9",
  },
  {
    name: "Sophia Lin",
    role: "Marketing Director, PixelNova",
    quote:
      "With their AI-driven strategies and SEO mastery, our traffic exploded in just 3 months. The team is proactive, attentive, and truly focused on results.",
    image: TestSophia,
    NoOfStars: 4,
    rating: "4.5",
  },
  {
    name: "Omar Shah",
    role: "Product Lead, DataForge",
    quote:
      "MATalogics gave us a seamless platform upgrade with zero downtime. Their professionalism and technical expertise blew us away at every stage of the project.",
    image: TestData,
    NoOfStars: 5,
    rating: "4.9",
  },
  {
    name: "Lina Torres",
    role: "Operations Head, CloudCrest",
    quote:
      "We’ve never seen such dedication and innovation. The MATalogics team helped us streamline our processes and drive results faster than we imagined possible.",
    image: TestLina,
    NoOfStars: 4,
    rating: "4.7",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // auto change every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="Testimonials"
      className="flex flex-col justify-center items-center w-full h-auto my-[60px] bg-[#fff] mobile:h-[h-auto] table:h-[auto]"
    >
      <motion.div
        initial={{ opacity: 0, y: 250 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="BlogTitle gap-[8px] h-auto w-[100%] flex flex-col justify-center items-center "
      >
        <h1 className="font-[Outfit] text-[48px] not-italic font-bold leading-[52.5px] tracking-[-0.84px] capitalize text-[#1E1D28] mb-3  mobile:text-[30px] mobile:leading-[40px]  ">
          <span className="text-[#0045E6]">What </span>Our Clients Say
        </h1>
        <h3 className="font-outfit text-[16px] font-normal leading-[24px] tracking-[0.5px] ml-3 w-[546px] text-center text-[#1D2939] mobile:w-auto mobile:ml-0 ">
          We take pride in empowering businesses worldwide to craft exceptional
          digital solutions that drive growth, efficiency, and innovation.
        </h3>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className=" overflow-hidden TestimonialCardsCon  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[0px] justify-items-center justify-center place-content-center w-[100%] h-auto mobile:flex-col mobile:my-[20px] mobile:h-[auto] mobile:gap-2 mt-[30px] tablet:w-[90%] tablet:my-[0px] tablet:gap-0 tablet:mt-[40px] medium:w-[90%] medium:my-[0px] medium:gap-0 medium:mt-[40px] SpecificLarge:w-[90%] SpecificLarge:my-[0px] SpecificLarge:gap-0 SpecificLarge:mt-[40px]"
      >
        {testimonials.map((item, index) => {
          const scale = index === current ? 1 : 0.9;
          const zIndex = index === current ? 10 : 0;
          const opacity = index === current ? 1 : 0.5;

          return (
            <motion.div
              key={index}
              animate={{ scale, opacity }}
              transition={{ duration: 0.4 }}
              style={{ zIndex }}
              className="relative TestimonialCard w-[541px] h-[308px] p-38px flex flex-col justify-center items-center gap-[18px] rounded-[20px] mx-0 my-0 bg-[#F9F8FF] mobile:w-[90%] mobile:rounded-[10px] mobile:mt-1 mobile:h-[180px] mobile:my-0 mobile:py-0 tablet:w-full  tablet:h-[260px] medium:w-full  medium:h-[260px] SpecificLarge:w-full  SpecificLarge:h-[260px]"
            >
              <h1 className="absolute top-4 font-Satoshi text-[18px] font-medium leading-[25.2px] tracking-[-0.1px] mx-7 my-4 mobile:text-[13px] mobile:leading-[15px] mobile:tracking-[-0.2px] mobile:mt-1 mobile:mx-5 tablet:text-[18px] tablet:leading-[24px] tablet:tracking-[-0.2px] tablet:mt-1 tablet:mx-5 medium:text-[17px] medium:leading-[22px] medium:tracking-[0.2px] medium:mt-1 medium:mx-5 medium:text-justify SpecificLarge:text-[17.5px] SpecificLarge:leading-[24px] SpecificLarge:tracking-[-0.2px] SpecificLarge:mt-1 SpecificLarge:mx-5 SpecificLarge:text-justify">
                {item.quote}
              </h1>
              <div className="absolute top-[150px] mx-7 left-0 flex justify-center items-center gap-[10px] mobile:left-0 mobile:top-[100px] mobile:gap-[5px] mobile:mx-5 medium:mx-4 SpecificLarge:mx-4 ">
                {[...Array(item.NoOfStars)].map((_, i) => (
                  <img
                    src={Star}
                    alt="star"
                    key={i}
                    className="w-[24px] h-[24px] mobile:w-[10px] mobile:h-[10px] tablet:w-[28px] tablet:h-[16px] medium:w-[28px] medium:h-[16px] SpecificLarge:w-[28px] SpecificLarge:h-[16px]"
                  />
                ))}
                <span className="text-[18px] font-medium leading-[25.2px] font-Satoshi text-center mt-1 mobile:text-[12px] mobile:mt-0 mobile:tracking-[-0.1px] ">
                  {item.rating}
                </span>
              </div>

              <div className="absolute bottom-5 left-0 w-full h-[58.3px] flex justify-center items-center mobile:bottom-0   ">
                <img
                  src={item.image}
                  alt=""
                  className="h-[58px] w-[58px] rounded-[73.542px] ml-8  mobile:h-[30px] mobile:w-[30px] mobile:ml-[4px] tablet:w-[40px] tablet:h-[40px] tablet:ml-4 medium:w-[40px] medium:h-[40px] medium:ml-2 SpecificLarge:w-[40px] SpecificLarge:h-[40px] SpecificLarge:ml-2  "
                />
                <div className="w-[80%] flex flex-col justify-center items-start h-full mx-3 mr-7 gap-2">
                  <h1 className="font-Satoshi text-[20px] font-[700] leading-[25.278px] tracking-[0.2px] text-[#1D2939] mobile:text-[13px] mobile:leading-[10px] tablet:text-[13px] tablet:leading-[10px] medium:text-[13px] medium:leading-[10px]   ">
                    {item.name}
                  </h1>
                  <h2 className="font-Satoshi text-[18.882px] font-[400] leading-[14.778px] tracking-[0.4px] text-[#667085] mobile:text-[12px]  mobile:leading-[10px] mobile:tracking-tighter tablet:leading-[10px] tablet:tracking-tighter SpecificLarge:leading-[10px] SpecificLarge:tracking-tighter">
                    {item.role}
                  </h2>
                </div>
                <div className="absolute w-[40.65px] h-[40.65px]  mx-7 right-3 flex justify-center items-center mobile:right-1  mobile:bottom-1 mobile:mx-7  tablet:right-1  tablet:bottom-1 tablet:mx-7 medium:right-1  medium:bottom-1 medium:mx-7 SpecificLarge:right-1  SpecificLarge:bottom-1 SpecificLarge:mx-7">
                  <img
                    src={QuoteImg}
                    alt=""
                    className="w-[40.65px] h-[40.65px] mobile:w-[25px] tablet:w-[30px] medium:w-[30px] SpecificLarge:w-[30px] "
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Testimonials;
