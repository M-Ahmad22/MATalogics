import React from "react";
import ArrowUp from "../../assets/arrow-up-rightS.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const WhyUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="WhyUsMainCon w-full h-[550px] flex justify-center items-center flex-shrink-0 bg-[#F8F8F9] mobile:h-auto mobile:relative mobile:w-full tablet:h-auto table:relative table:w-full tablet:py-[20px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-[70%] flex justify-between items-center mobile:flex-col-reverse mobile:w-[95%] mobile:items-start tablet:flex-col-reverse tablet:w-[95%] tablet:items-start medium:w-[85%] "
        >
          <div className="VideoWhyUs h-[354px] w-[567px] mobile:w-full tablet:w-[100%] tablet:flex tablet:justify-center tablet:items-center tablet:mt-[50px] medium:w-[400px] bg-[#F8F8F9] ">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="inset-0 w-full h-full object-cover z-10  rounded-2xl mobile:h-[80%] tablet:w-[70%] medium:w-[100%]"
              preload="metadata"
              poster="../../../public/Videos/InfoTech_thumbnail.jpg"
            >
              <source src="/Videos/Info_Tech.webm" type="video/webm" />
              <source src="/Videos/Info_Tech_HQ.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
            className="TextWhyUs flex flex-col justify-center items-start px-2 h-[354px] w-[667px] mr-8 mobile:h-auto  mobile:w-[75%] mobile:mr-0 mobile:px-0 mobile:mt-[30px] mobile:ml-0  tablet:w-[85%] tablet:mr-0 tablet:px-0 tablet:mt-[10px]  tablet:ml-0 medium:w-[60%]"
          >
            <h1
              className="text-[#252525]/[900] tracking-[2.83px] leading-[46.5px] font-[900] capitalize text-[44px] medium:text-[38px] large:text-[40px] font-[Outfit] mobile:text-[28px] mobile:leading-[36px] mobile:tracking-[0.2px] tablet:mb-[20px]"
              style={{
                fontStyle: "normal",
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              Empower Your Teams and Streamline Operations
            </h1>

            <h2
              className="text-[#252525] tracking-[0.8px] leading-[24px]  font-normal capitalize text-[16px] font-[Montserrat] mb-5 mobile:mt-3 mobile:text-justify mobile:min-h-[170px] tablet:mt-3 tablet:text-justify "
              style={{
                fontStyle: "normal",
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              <span className="font-bold">MATalogics</span>, your gateway to
              cutting-edge IT services for businesses and brands. We are your
              strategic partner in navigating the ever-evolving digital
              landscape. With a relentless commitment to innovation and
              excellence,
            </h2>
            <h2
              className="text-[#252525] tracking-[0.8px] leading-[24px]  font-normal capitalize text-[16px] font-[Montserrat] mb-5 mobile:text-justify"
              style={{
                fontStyle: "normal",
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              We provide tailored IT solutions that empower your organization to
              thrive in the modern world.
            </h2>

            <button
              className="flex w-[162px] h-[48px] justify-center
              items-center gap-[6px] bg-[#E9EDF3] text-[#1E1D28]
              border-[1px] text-[16px] font-semibold rounded-3xl px-4 pt-[0px]
              mobile:mb-5  SpecificLarge:py-4 medium:py-4 "
              onClick={() => navigate("/About")}
            >
              About More <img src={ArrowUp} alt="" className="pb-0  " />
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute VerticalTextWhyUs flex justify-center items-start px-2 h-[414px] w-[107px] right-4 mobile:right-[5px] mobile:top-6 mobile:px-0 mobile:w-[90px] tablet:mb-10 tablet:right-[7px] tablet:px-0  "
        >
          <h1
            className="
    text-[87px] font-black uppercase tracking-[7.83px]
    leading-[51.75px] font-poppins
    text-transparent mt-[190px] border-[#ACACAC] "
            style={{
              WebkitTextStrokeWidth: "1.3px",
              WebkitTextStrokeColor: "#ACACAC",
              paintOrder: "stroke fill",
              fontStyle: "normal",
              leadingTrim: "both",
              textEdge: "cap",
              transform: "rotate(90deg)",
              whiteSpace: "nowrap",
              overflow: "visible",
              wordSpacing: "10px",
            }}
          >
            WHY&nbsp;US
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default WhyUs;
