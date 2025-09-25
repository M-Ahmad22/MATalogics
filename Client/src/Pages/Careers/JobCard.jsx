import { Link } from "react-router-dom";

const JobCard = ({ job, onApplyClick }) => (
  <div
    className="bg-[#fff] flex w-[429px] h-[205px] justify-start
   items-start border-[1.209px] border-[#DCDCDC] flex-col mb-[25px] relative mobile:w-[100%] tablet:w-[90%] tablet:mx-[20px] medium:w-[90%] medium:mx-[20px]  SpecificLarge:w-[98%] SpecificLarge:mx-[5px] "
  >
    <h1 className="text-[22px] font-bold text-[#000] font-outfit leading-normal mb-2 mt-7 ml-7">
      {job.title}
    </h1>
    <h2
      className="font-montserrat text-[14px] font-medium leading-[21.313px] tracking-[0.5px] mb-2 mt-1 ml-7"
      style={{
        leadingTrim: "both",
        textEdge: "cap",
        fontStyle: "normal",
      }}
    >
      {job.department} | {job.location}
    </h2>
    <div
      className="w-[367px] h-[1.2px] bg-[#4C4C4C]/[0.17] mx-7 mt-5 mobile:hidden tablet:hidden medium:hidden SpecificLarge:hidden"
      style={{
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: "#4C4C4C",
        paintOrder: "stroke fill",
      }}
    ></div>
    <div className="hidden mobile:flex justify-center w-full h-auto tablet:flex medium:flex SpecificLarge:flex">
      <div
        className="w-[367px] h-[1.2px] bg-[#4C4C4C]/[0.17] mx-7 mt-5 mobile:w-[85%] mobile:mx-0 mobile:items-center tablet:w-[85%] tablet:mx-0 tablet:items-center "
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#4C4C4C",
          paintOrder: "stroke fill",
        }}
      ></div>
    </div>

    <div className="w-[57px] h-[24px] flex justify-center items-center gap-[6.137px] rounded-[22.609px] bg-[#F5F7F8] absolute top-[35px] right-[30px] tablet:right-[10px] tablet:top-[10px] medium:right-[10px] medium:top-[10px]">
      <h1 className="text-[#0045E6]  font-outfit text-[11.343px] leading-[17px] font-normal">
        HOT
      </h1>
    </div>

    <button className="mt-6 ml-7 px-[24.409px] py-[6.14px] flex justify-center items-center bg-[#0045E6] gap-[5.329px] rounded-[5.085px] font-outfit text-[14px] leading-[21px] font-normal text-[#fff]">
      <Link to={`/careers/job/${job.id}`}>View Details</Link>
    </button>
  </div>
);

export default JobCard;
