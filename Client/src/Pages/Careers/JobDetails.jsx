import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobs } from "../../Data/jobsData";
import { Link } from "react-router-dom";
import Map from "../../Components/Map/Map";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import arrowleftsmall from "../../assets/arrowleftsmall.svg";
import arrowUpRightWhite from "../../assets/arrowUpRightWhite.svg";
import GroupSign from "../../assets/GroupSign.svg";

const JobDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = jobs.find((j) => j.id === id);

  if (!job) return <div className="p-10 text-center">Job not found.</div>;

  return (
    <>
      <section className="h-auto bg-[#F9F9F9] mobile:w-full tablet:w-full medium:w-full">
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

          <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]  ">
            <div
              className="w-[46px] h-[46px] rounded-[10px] bg-[#0045E6] backdrop-blur-[5px]  absolute left-[155px] top-[140px] flex justify-center items-center cursor-pointer mobile:top-[110px] mobile:left-[20px] tablet:top-[110px] tablet:left-[20px] medium:top-[110px] medium:left-[20px] "
              onClick={() => navigate(-1)}
            >
              <img src={arrowleftsmall} className="w-[32px] h-[32px]" alt="" />
            </div>
            <h2
              className="text-[#fff] font-outfit text-[54px] font-bold leading-[63px]  mb-3 mt-[60px] mobile:text-[32px] mobile:mt-[90px] tablet:text-[44px] "
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Shape the Future With Us
            </h2>
            <p
              className="text-[#fff] font-montserrat text-[16px] font-normal leading-[38px] w-[651px] mobile:w-[80%] tablet:w-[80%] medium:w-[80%]"
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

        <div className="px-6 py-16 max-w-[1800px] mx-auto justify-center items-center w-full flex flex-col mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto medium:h-auto medium:w-full ">
          <div className="w-[1239px] h-[1153px]  bg-[#fff] border-[1px] border-[#DCDCDC] rounded-[20px] px-[80px] py-[70px] mobile:w-full mobile:h-auto mobile:px-3 mobile:py-8 tablet:w-[80%] tablet:h-auto tablet:px-3 tablet:py-8 medium:h-auto medium:w-[70%] medium:px-3 medium:py-8">
            <h1 className="font-outfit text-[32px] font-bold text-[#000] mb-4 leading-normal mobile:text-[28px] mobile:mb-2 tablet:text-[28px] tablet:text-[28px] ">
              {job.title}
            </h1>
            <h2 className=" font-montserrat text-[24px] font-normal text-[#000] mb-4 leading-[23px] mobile:text-[20px] mobile:mb-2 tablet:text-[20px] ">
              Department: {job.department}
            </h2>
            <h2 className=" font-montserrat text-[24px] font-normal text-[#000] mb-4 leading-[23px] mobile:text-[20px] mobile:mb-2 tablet:text-[20px] ">
              Location: {job.location}
            </h2>

            <h1 className=" font-outfit text-[25px] font-bold text-[#000] mb-4 leading-normal mt-12 mobile:text-[22px] mobile:mb-2 mobile:mt-6 tablet:text-[28px]">
              Description
            </h1>
            <h2 className="font-montserrat text-[20px] font-normal text-[#000] leading-[37px] mobile:text-[17px] mobile:mb-2 mobile:mt-0 mobile:leading-[30px] tablet:text-[18px]">
              {job.description}
            </h2>

            {job.responsibilities && (
              <>
                <h1 className="font-outfit text-[25px] font-bold text-[#000] mb-4 leading-normal mt-12 mobile:text-[22px] mobile:mb-2 mobile:mt-6 tablet:text-[28px]">
                  Responsibilities
                </h1>
                <div className="font-montserrat text-[20px] font-normal text-[#000] leading-[44px] mobile:text-[16px] mobile:leading-[30px] tablet:text-[16px]">
                  {job.responsibilities.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 mobile:items-start"
                    >
                      <img
                        src={GroupSign}
                        alt=""
                        className="w-5 h-5 mobile:mt-1"
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h1 className="font-outfit text-[25px] font-bold text-[#000] mb-4 leading-normal mt-12 mobile:text-[22px] mobile:mb-2 mobile:mt-6 tablet:text-[28px]">
              Requirements
            </h1>

            <div className="font-montserrat text-[20px] font-normal text-[#000] leading-[44px] mobile:text-[16px] mobile:leading-[30px] tablet:text-[16px]">
              {job.requirements.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 mobile:items-start"
                >
                  <img src={GroupSign} alt="" className="w-5 h-5 mobile:mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to={`/careers/apply/${job.id}`} className="" state={{ job }}>
              <button className="flex w-[181px] gap-[6px] items-center justify-center px-[14px] py-[15px] bg-[#0045E6] rounded-[66px] font-outfit text-[18px] font-normal leading-[27px] text-[#fff] relative mt-[75px] mobile:mt-[30px] mobile:px-[10px] mobile:py-[12px] mobile:w-full mobile:rounded-[10px]">
                Apply Now
                <img src={arrowUpRightWhite} alt="" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Map />
    </>
  );
};

export default JobDetails;
