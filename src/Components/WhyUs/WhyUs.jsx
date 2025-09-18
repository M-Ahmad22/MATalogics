import React from "react";
import ArrowUp from "../../assets/arrow-up-rightS.svg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const WhyUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="WhyUsMainCon w-full h-[550px] flex justify-center items-center flex-shrink-0 bg-[#F8F8F9] mobile:h-auto mobile:relative mobile:w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-[70%] flex justify-between items-center mobile:flex-col-reverse mobile:w-[95%] mobile:items-start "
        >
          <div className="VideoWhyUs h-[354px] w-[567px] mobile:w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="inset-0 w-full h-full object-cover z-10  rounded-2xl mobile:h-[80%]"
              preload="metadata"
              poster="../../../public/Videos/InfoTech_thumbnail.jpg"
            >
              <source src="/Videos/Info_Tech.webm" type="video/webm" />
              <source src="/Videos/Info_Tech_HQ.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <motion.divs
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
            className="TextWhyUs flex flex-col justify-center items-start px-2 h-[354px] w-[667px] mr-8 mobile:h-auto  mobile:w-[75%] mobile:mr-0 mobile:px-0 mobile:mt-[30px] mobile:ml-0"
          >
            <h1
              className="text-[#252525]/[900] tracking-[2.83px] leading-[46.5px] font-[900] capitalize text-[44px] font-[Outfit] mobile:text-[28px] mobile:leading-[36px] mobile:tracking-[0.2px]"
              style={{
                fontStyle: "normal",
                leadingTrim: "both",
                textEdge: "cap",
              }}
            >
              Empower Your Teams and Streamline Operations
            </h1>

            <h2
              className="text-[#252525] tracking-[0.8px] leading-[24px]  font-normal capitalize text-[16px] font-[Montserrat] mb-5 mobile:mt-3 mobile:text-justify"
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
              align-items-center gap-[6px] bg-[#E9EDF3] text-[#1E1D28]
              border-[1px] text-[16px] font-semibold rounded-3xl px-4 pt-[10px]
              mobile:mb-5"
              onClick={() => navigate("/About")}
            >
              About More <img src={ArrowUp} alt="" className="pb-3" />
            </button>
          </motion.divs>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute VerticalTextWhyUs flex justify-center items-start px-2 h-[414px] w-[107px] right-4 mobile:left-[315px] mobile:top-6 mobile:px-0 mobile:w-[90px] "
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
