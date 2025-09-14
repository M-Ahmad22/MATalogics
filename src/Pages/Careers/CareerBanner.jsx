import React from "react";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import SearchFrame from "../../assets/SearchFrame.svg";
import LocationFrame from "../../assets/LocationFrame.svg";
import ArrowDropDown from "../../assets/ArrowDropDown.svg";

const CareerBanner = () => (
  <div className="relative w-full h-[580px] ">
    <video
      autoPlay
      muted
      loop
      playsInline
      className="inset-0 w-full h-full object-cover"
    >
      <source src={Abstract_Wave_1920x1080} type="video/mp4" />{" "}
    </video>

    <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]  pt-[50px] mobile:w-full mobile:h-auto">
      <div className="h-[254px] w-[1445px] flex flex-col items-start justify-center mobile:w-full mobile:h-auto mobile:items-center ">
        <h1
          className="text-[#fff] font-outfit text-[48px] font-semibold leading-[60px] tracking-[0px] uppercase  mb-0 mobile:text-[32px] mobile:w-[90%] mobile:text-start mobile:leading-[45px] mobile:mt-5"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
            fontStyle: "normal",
          }}
        >
          TIRED OF JOBS?
        </h1>
        <h1
          className="text-[#fff] font-outfit text-[48px] font-semibold leading-[60px] tracking-[0px] uppercase  mb-[40px] mobile:text-[32px] mobile:text-start mobile:w-[90%] mobile:leading-[45px]"
          style={{
            leadingTrim: "both",
            textEdge: "cap",
            fontStyle: "normal",
          }}
        >
          START BUILDING YOUR CAREER
        </h1>

        <div className="flex items-start justify-start gap-[10.963px] w-full h-[70.412px]  rounded-[10.205px] bg-[#F2F5FA] mobile:flex-col mobile:h-[30vh] mobile:w-[90%]  ">
          <div className="w-[25%] h-full flex items-center justify-center rounded-s-[9.20px] bg-[#FFF] mobile:w-full mobile:h-auto mobile:rounded-tr-[9.20px]">
            <img src={SearchFrame} alt="" className="w-[17.348] h-[17.348]" />
            <input
              type="search"
              name=""
              id=""
              placeholder="Search For Vacancies"
              className="bg-[#fff] h-[51px] ml-2 text-[#667085] font-outfit text-[16.328px] font-normal leading-[38.788px] tracking-[0px] w-[251px] border-none outline-none mobile:w-[70%]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            />
          </div>
          <div className="w-[25%] h-full flex items-center justify-center rounded-s-[9.20px] mobile:w-full">
            <img
              src={LocationFrame}
              alt=""
              className="w-[17.348px] h-[17.348px]"
            />
            <select
              className="bg-[#F2F5FA] h-[51px] ml-2 text-[#667085] font-outfit text-[16.328px] font-normal leading-[38.788px] tracking-[0px] w-[201px] border-none outline-none cursor-pointer mobile:w-[70%]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              <option value="Type">
                <h1>Type</h1>
                <img src={ArrowDropDown} alt="" className="w-[15px] h-[15px]" />
              </option>
              <option value="Remote ">Remote</option>
              <option value="Onsite">OnSite</option>
            </select>
          </div>
          <div className="w-[25%] h-full flex items-center justify-center rounded-s-[9.20px] mobile:w-full">
            <img
              src={LocationFrame}
              alt=""
              className="w-[17.348px] h-[17.348px]"
            />
            <select
              className="bg-[#F2F5FA] h-[51px] ml-2 text-[#667085] font-outfit text-[16.328px] font-normal leading-[38.788px] tracking-[0px] w-[201px] border-none outline-none cursor-pointer mobile:w-[70%]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              <option value="Categories">
                <h1>Categories</h1>
                <img src={ArrowDropDown} alt="" className="w-[15px] h-[15px]" />
              </option>
              <option value="FrontEnd Developer">FrontEnd Developer</option>
              <option value="BackedEnd Developer">BackedEnd</option>
              <option value="Full Stack developer">Full Stack developer</option>
              <option value="UI/UX">UI/UX Designer </option>
              <option value="Flutter Developer">Flutter Developer</option>
            </select>
          </div>

          <div className="w-[25%] h-full flex items-center justify-center relative mobile:w-full  ">
            <button
              className="bg-[#0045E6] rounded-e-[9.20px] mobile:rounded-b-[9.20px] mobile:rounded-tr-none h-full w-[100%] absolute right-0 text-[#fff] font-outfit text-[20.41px] font-medium leading-[38.788px] tracking-[0px] mobile:text-[18px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CareerBanner;
