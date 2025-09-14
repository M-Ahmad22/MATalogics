import React from "react";
import { Link } from "react-router-dom";
import Frame from "../../assets/Frame.svg";

const TalkToExpert = () => {
  return (
    <>
      <section className="w-full h-[232px] bg-[#1E1D28] flex justify-center items-center mobile:h-auto mobile:w-full mobile:flex-col ">
        <div className="ExpertText w-[50%] h-full flex justify-center items-center mobile:w-full mobile:mt-8">
          <div className="Line w-[6px] h-[120px] flex-shrink-0 bg-[#0045E6] mx-8 mobile:mx-[14px] mobile:h-[196px] mobile:mt-1"></div>
          <div className="h-full w-[467px] flex flex-col justify-center items-start ">
            <h1
              className="text-[#fff] font-outfit text-[28px] font-semibold leading-[32px] tracking-[-0.56px] mb-6 mobile:text-[24px] mobile:mr-[40px]"
              style={{ textEdge: "cap", leadingTrim: "both" }}
            >
              Looking to Transform Your Ideas into Reality? Let’s Talk.
            </h1>
            <h2
              className="text-[#fff] font-montserrat text-[14px] font-normal leading-[22px] tracking-[-0.28px] mobile:mr-[40px] "
              style={{ textEdge: "cap", leadingTrim: "both" }}
            >
              Unlock your next level of growth reach out today and let our
              dedicated tech experts hear your vision.
            </h2>
          </div>
        </div>
        <div className="ConsultationButton w-[50%] h-full flex justify-center items-center gap-[24px] mobile:my-8 mobile:w-[90%] mobile:justify-end ">
          <h1
            className="text-[#fff] font-outfit text-[20px] font-semibold leading-[25px] tracking-[-0.4px] "
            style={{ textEdge: "cap", leadingTrim: "both" }}
          >
            Book Your Free Consultation
          </h1>
          <Link to="/contact">
            <div className="w-[34px] h-[34px] bg-[#FFF6F6] rounded-full flex justify-center items-center  cursor-pointer">
              <img src={Frame} alt="Contact" />
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default TalkToExpert;
