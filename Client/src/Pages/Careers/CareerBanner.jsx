import React, { useState } from "react";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import SearchFrame from "../../assets/SearchFrame.svg";
import LocationFrame from "../../assets/LocationFrame.svg";
import ArrowDropDown from "../../assets/ArrowDropDown.svg";

const CareerBanner = ({ onFilterChange }) => {
  // states
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  // handle all updates
  const handleChange = (updates) => {
    const newFilters = { search, type, category, ...updates };
    if (updates.search !== undefined) setSearch(updates.search);
    if (updates.type !== undefined) setType(updates.type);
    if (updates.category !== undefined) setCategory(updates.category);
    onFilterChange(newFilters);
  };

  return (
    <div className="relative w-full h-[580px] ">
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
        <source src="/Videos/Abstract_Wave_Compressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]  pt-[50px] mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto medium:w-full medium:h-auto large:w-full large:h-auto">
        <div className="h-[254px] w-[1445px] flex flex-col items-start justify-center mobile:w-full mobile:h-auto mobile:items-center tablet:w-full tablet:h-auto tablet:items-center medium:w-full medium:h-auto medium:items-center large:w-[90%] large:h-auto ">
          <h1
            className="text-[#fff] font-outfit text-[48px] font-semibold leading-[60px] tracking-[0px] uppercase  mb-0 mobile:text-[32px] mobile:w-[90%] mobile:text-start mobile:leading-[45px] mobile:mt-5 tablet:text-[32px] tablet:w-[90%] tablet:text-start tablet:leading-[45px] tablet:mt-5 medium:text-[32px] medium:w-[90%] medium:text-start medium:leading-[45px] medium:mt-5"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontStyle: "normal",
            }}
          >
            TIRED OF JOBS?
          </h1>
          <h1
            className="text-[#fff] font-outfit text-[48px] font-semibold leading-[60px] tracking-[0px] uppercase  mb-[40px] mobile:text-[32px] mobile:text-start mobile:w-[90%] mobile:leading-[45px]  tablet:text-[32px] tablet:text-start tablet:w-[90%] tablet:leading-[45px]  medium:text-[32px] medium:text-start medium:w-[90%] medium:leading-[45px]"
            style={{
              leadingTrim: "both",
              textEdge: "cap",
              fontStyle: "normal",
            }}
          >
            START BUILDING YOUR CAREER
          </h1>

          <div className="flex items-start justify-start gap-[10.963px] w-full h-[70.412px]  rounded-[10.205px] bg-[#F2F5FA] mobile:flex-col mobile:h-[30vh] mobile:w-[90%] tablet:flex-col tablet:h-[30vh] tablet:w-[70%] medium:flex-col medium:h-[30vh] medium:w-[50%]  ">
            <div className="w-[25%] h-full flex items-center justify-center rounded-s-[9.20px] bg-[#FFF] mobile:w-full mobile:h-auto mobile:rounded-tr-[9.20px] tablet:w-full tablet:h-auto tablet:rounded-tr-[9.20px] medium:w-full medium:h-auto medium:rounded-tr-[9.20px] large:pl-[15px]">
              <img src={SearchFrame} alt="" className="w-[17.348] h-[17.348]" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search For Vacancies"
                value={search}
                onChange={(e) => handleChange({ search: e.target.value })}
                className="bg-[#fff] h-[51px] ml-2 text-[#667085] font-outfit text-[16.328px] font-normal leading-[38.788px] tracking-[0px] w-[251px] border-none outline-none mobile:w-[70%] tablet:w-[70%] medium:w-[70%]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontStyle: "normal",
                }}
              />
            </div>
            <div className="w-[25%] h-full flex items-center justify-center rounded-s-[9.20px] mobile:w-full tablet:w-full medium:w-full">
              <img
                src={LocationFrame}
                alt=""
                className="w-[17.348px] h-[17.348px]"
              />
              <select
                value={type}
                onChange={(e) => handleChange({ type: e.target.value })}
                className="bg-[#F2F5FA] h-[51px] ml-2 text-[#667085] font-outfit text-[16.328px] font-normal leading-[38.788px] tracking-[0px] w-[201px] border-none outline-none cursor-pointer mobile:w-[70%] tablet:w-[70%] medium:w-[70%]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontStyle: "normal",
                }}
              >
                <option value="">
                  <h1>Type</h1>
                  <img
                    src={ArrowDropDown}
                    alt=""
                    className="w-[15px] h-[15px]"
                  />
                </option>
                <option value="Remote">Remote</option>
                <option value="Onsite">OnSite</option>
              </select>
            </div>
            <div className="w-[25%] h-full flex items-center justify-center rounded-s-[9.20px] mobile:w-full  tablet:w-full medium:w-full">
              <img
                src={LocationFrame}
                alt=""
                className="w-[17.348px] h-[17.348px]"
              />
              <select
                value={category}
                onChange={(e) => handleChange({ category: e.target.value })}
                className="bg-[#F2F5FA] h-[51px] ml-2 text-[#667085] font-outfit text-[16.328px] font-normal leading-[38.788px] tracking-[0px] w-[201px] border-none outline-none cursor-pointer mobile:w-[70%] tablet:w-[70%] medium:w-[70%]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontStyle: "normal",
                }}
              >
                <option value="">
                  <h1>Categories</h1>
                  <img
                    src={ArrowDropDown}
                    alt=""
                    className="w-[15px] h-[15px]"
                  />
                </option>
                <option value="Frontend">Frontend Developer</option>
                <option value="Backedend Developer">BackedEnd</option>
                <option value="Full Stack developer">
                  Full Stack developer
                </option>
                <option value="UI/UX">UI/UX Designer </option>
                <option value="Flutter Developer">Flutter Developer</option>
              </select>
            </div>

            <div className="w-[25%] h-full flex items-center justify-center relative mobile:w-full  tablet:w-full medium:w-full ">
              <button
                onClick={() => onFilterChange({ search, type, category })}
                className="bg-[#0045E6] rounded-e-[9.20px] mobile:rounded-b-[9.20px] mobile:rounded-tr-none h-full w-[100%] absolute right-0 text-[#fff] font-outfit text-[20.41px] font-medium leading-[38.788px] tracking-[0px] mobile:text-[18px] tablet:rounded-b-[9.20px] tablet:rounded-tr-none medium:rounded-b-[9.20px] medium:rounded-tr-none"
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
};

export default CareerBanner;
