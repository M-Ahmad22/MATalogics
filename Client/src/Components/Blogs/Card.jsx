import React from "react";
import RoundArrow from "../../assets/Round Alt Arrow Right.svg";
import { Link } from "react-router-dom";

const Card = ({ title, description, img, name, post, id }) => {
  return (
    <section>
      <div className="group relative card w-[271.512px] h-[278.131px] flex flex-col justify-center items-center border-[1px] border-[#D0D5DD] rounded-[8.825px] bg-[#fff] mx-1 my-1 bg-b ">
        <div className="absolute top-2 left-2 w-[80px] h-[24px] bg-[#F2F4F7] flex items-center justify-center border-[px] rounded-full mx-2 my-3">
          <h1 className="font-semibold font-OpenSans text-[10.296px] leading-[15.778px] tracking-[0.3px] text-center">
            Article
          </h1>
        </div>
        <h1 className="absolute top-[60px] left-[9px] font-[Outfit] z-30 text-[12px] font-[600] leading-[15px] tracking-[.8px] ml-2 w-[235.212px] text-[#1D2939] ">
          {title}
        </h1>
        <h2 className="absolute top-[90px] left-[9px]  font-outfit  text-[10.882px] font-[400] leading-[13.778px] tracking-[0.3px] w-[235.212px] mx-2 my-3 text-[#667085] ">
          {description}
        </h2>
        <div className="absolute bottom-3 w-full h-[35.3px] flex justify-center items-center bg-">
          <img
            src={img}
            alt="Muhammad Ahmad Tahir - CEO & Founder MATalogics"
            className="h-[48.3px] w-[45.3px] rounded-[73.542px] mr-3  "
          />
          <div className="w-[60%] flex flex-col justify-center items-start h-full mx-0 mr-7">
            <h1 className="font-outfit text-[11.882px] font-[600] leading-[14.778px] tracking-[0.2px] text-[#1D2939]">
              {name}
            </h1>
            <h2 className="font-outfit text-[8.882px] font-[400] leading-[11.778px] tracking-[0.2px] text-[#667085]">
              {post}
            </h2>
          </div>{" "}
          <Link to={`/blogs/${id}`}>
            <button className="absolute w-[20.65px] h-[20.65px]  mx-4 right-0 flex justify-center items-center">
              <img
                src={RoundArrow}
                alt=""
                className="w-[20.65px] h-[20.65px] "
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Card;
