import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Map from "../../Components/Map/Map";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import arrowleftsmall from "../../assets/arrowleftsmall.svg";
import Submitted from "../../assets/Submitted.gif";
import { Helmet } from "react-helmet-async";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>MATalogics | Application Submitted</title>
        <meta
          name="description"
          content="Thank you for applying! Your application has been submitted successfully."
        />
        <meta
          property="og:title"
          content="MATalogics | Application Submitted"
        />
        <meta
          property="og:description"
          content="Thank you for applying! Your application has been submitted successfully."
        />
        <meta
          property="og:image"
          content="https://matalogics.com/path/to/success-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://matalogics.com/careers/success"
        />
      </Helmet>
      <section className="h-auto bg-[#F9F9F9] ">
        <div className="relative w-full h-[430px] ">
          <img
            src="/Videos/Abstract_Wave_Poster.jpg"
            alt="poster"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover mobile:object-fill"
            preload="metadata"
            poster="/Videos/Abstract_Wave_Poster.jpg"
          >
            <source src="/Videos/Abstract_Wave.webm" type="video/webm" />
            <source
              src="/Videos/Abstract_Wave_Compressed.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]   ">
            <div
              className="w-[46px] h-[46px] rounded-[10px] bg-[#0045E6] backdrop-blur-[5px]  absolute left-[155px] top-[140px] flex justify-center items-center cursor-pointer mobile:left-[25px] mobile:top-[120px] tablet:left-[10px] tablet:top-[120px] medium:left-[10px] medium:top-[120px]"
              onClick={() => navigate(-3)}
            >
              <img src={arrowleftsmall} className="w-[32px] h-[32px]" alt="" />
            </div>
            <h2
              className="text-[#fff] font-outfit text-[54px] font-bold leading-[63px]  mb-3 mt-[60px] mobile:text-[34px] mobile:mt-[80px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Shape the Future With Us
            </h2>
            <p
              className="text-[#fff] font-montserrat text-[16px] font-normal leading-[38px] w-[651px] mobile:w-[90%] mobile:leading-[30px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Our talent can drive innovation. Explore this role and make your
              mark at MATalogics.
            </p>
          </div>
        </div>

        <div className="px-4 py-10 w-full mx-auto justify-center items-center  flex flex-col mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto medium:w-full medium:h-auto ">
          <div className="w-[809px] h-[600px]  bg-[#fff] border-[1px] border-[#DCDCDC] rounded-[20px] px-[80px] py-[70px] flex flex-col items-center justify-center mobile:w-full mobile:h-auto mobile:px-[30px] mobile:py-[10px] tablet:w-[70%] tablet:h-auto medium:w-[70%] medium:h-auto tablet:px-[30px] tablet:py-[10px] medium:px-[30px] medium:py-[10px]">
            <img
              src={Submitted}
              alt=""
              className="w-[206px] h-[256px] mb-3 mobile:w-[150px] mobile:h-auto tablet:w-[150px] tablet:h-auto medium:w-[150px] medium:h-auto "
            />
            <h1 className="font-outfit text-[44px] font-semibold text-[#2E2E2E] mb-4 leading-normal mobile:text-[30px] tablet:text-[30px]  medium:text-[30px] text-center">
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
