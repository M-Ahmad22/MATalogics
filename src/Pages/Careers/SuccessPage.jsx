import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../../Components/Map/Map";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import arrowleftsmall from "../../assets/arrowleftsmall.svg";
import Submitted from "../../assets/Submitted.gif";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="h-auto bg-[#F9F9F9] ">
        <div className="relative w-full h-[430px] ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="inset-0 w-full h-full object-cover"
          >
            <source src={Abstract_Wave_1920x1080} type="video/mp4" />{" "}
          </video>

          <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]   ">
            <div
              className="w-[46px] h-[46px] rounded-[10px] bg-[#0045E6] backdrop-blur-[5px]  absolute left-[155px] top-[140px] flex justify-center items-center cursor-pointer "
              onClick={() => navigate(-3)}
            >
              <img src={arrowleftsmall} className="w-[32px] h-[32px]" alt="" />
            </div>
            <h2
              className="text-[#fff] font-outfit text-[54px] font-bold leading-[63px]  mb-3 mt-[60px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Shape the Future With Us
            </h2>
            <p
              className="text-[#fff] font-montserrat text-[16px] font-normal leading-[38px] w-[651px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              our talent can drive innovation. Explore this role and make your
              mark at MATalogics.
            </p>
          </div>
        </div>

        <div className="px-6 py-16 w-full mx-auto justify-center items-center  flex flex-col ">
          <div className="w-[1039px] h-[680px]  bg-[#fff] border-[1px] border-[#DCDCDC] rounded-[20px] px-[80px] py-[70px] flex flex-col items-center justify-center ">
            <img src={Submitted} alt="" className="w-[276px] h-[256px] mb-3" />
            <h1 className="font-outfit text-[48px] font-semibold text-[#2E2E2E] mb-4 leading-normal">
              Applications Submitted Successfully
            </h1>
            <h2 className="font-montserrat text-[18px] font-normal text-[#000] leading-[37px] text-center mb-[100px]">
              We will carefully consider your application and contact you if you
              are Selected to continue in the recruitment process
            </h2>
          </div>
        </div>
      </section>
      <Map />
    </>
  );
};

export default SuccessPage;
