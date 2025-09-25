import React from "react";
import Line1 from "../../assets/VectorTest1.png";
import Line2 from "../../assets/VectorTest2.png";
import { motion } from "framer-motion";

const features = [
  {
    title: "Expert Team",
    desc: "Skilled professionals dedicated to delivering quality code and creative solutions.",
  },
  {
    title: "Agile Delivery",
    desc: "Rapid iterations and adaptive workflows to meet deadlines efficiently.",
  },
  {
    title: "Scalable Solutions",
    desc: "Built with growth in mind, ready to expand as your business evolves.",
  },
  {
    title: "24/7 Support",
    desc: "Reliable assistance whenever you need us your success is our priority.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="whyChooseUs"
      className="relative w-full h-[385.9932px] bg-[#06142A] my-16 mobile:h-[850px] mobile:w-[100%] tablet:h-[550px] tablet:w-[100%] "
    >
      <div className="Lines w-[90%] z-20 mobile:w-[90%] ">
        <img
          src={Line1}
          alt=""
          className="w-[1985.323px]  h-[166.295px] rotate-[0] z-20 object-center tablet:scale-100 "
        />
        <img
          src={Line2}
          alt=""
          className="w-[2197.98px]  h-[230.05px] z-20 object-center mobile:mt-[50px] tablet:scale-150"
        />
        <img
          src={Line2}
          alt=""
          className="w-[2197.98px] hidden  h-[230.05px] z-20 object-center mobile:block tablet:block mobile:mt-[80px] tablet:mt-[120px] rotate-[130deg] tablet:scale-150"
        />
      </div>
      <div className="absolute inset-0 top-0 left-0 w-full h-full flex justify-center items-center mobile:flex-col tablet:flex-col  ">
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="TextWhyUs flex flex-col w-[340px] align-items-start mobile:w-[90%] tablet:w-[90%] medium:ml-[30px] "
        >
          <h1 className="font-outfit leading-[45px] tracking-[-0.72px] font-semibold text-[36px] text-[#fff] mb-3">
            Why Choose Us
          </h1>
          <h2 className="font-outfit leading-[29.13px] tracking-[-0.22px] font-normal text-[16px] text-[#fff] ">
            At MATalogics, we combine smart engineering with strategic insight
            to help businesses scale and succeed.
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="Features d-inline-flex items-center gap-[24px] mx-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mobile:mt-[70px] mobile:mx-0 tablet:mt-[70px] tablet:mx-0 medium:mx-[50px] "
        >
          {features.map((features, index) => (
            <div
              className="CardWhyUs w-[316px] h-[117px] flex-shrink-0 border-[0.4px] border-[#FFFFFF] rounded-2xl bg-[#FFFFFF]/[5%] px-5 py-5 medium:px-3 medium:w-[250px] tablet:w-[280px]"
              key={index}
            >
              <h1 className="font-outfit text-[22px] font-medium leading-[27.5px] tracking-[-0.14px] text-[#FFFFFF] mb-2">
                {features.title}
              </h1>
              <h2 className="font-outfit text-[14px] font-light leading-[18.775px] tracking-[-0.1px] text-[#FFFFFF]">
                {features.desc}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
