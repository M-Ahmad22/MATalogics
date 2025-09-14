import React from "react";
import SeperationVector from "../../assets/HowWeWorkConnectorVector.png";
import ImplementaionImg from "../../assets/ImplementationPlaning.svg";
import SolutionImg from "../../assets/SolutionArchitecture.svg";
import GoalImg from "../../assets/GoalAlignment.svg";
import AnalysisImg from "../../assets/Analysis.svg";
import VectorSeperatorImg from "../../assets/VectorSeperator.svg";

const ProcessSteps = [
  {
    VectorLine: VectorSeperatorImg,
    SeperatorLine: SeperationVector,
  },
  {
    VectorLine: VectorSeperatorImg,
    SeperatorLine: SeperationVector,
  },
  {
    VectorLine: VectorSeperatorImg,
    SeperatorLine: SeperationVector,
  },
];

const steps = [
  {
    icon: AnalysisImg,
    title: "Comprehensive Analysis",
  },
  {
    icon: GoalImg,
    title: "Goal Alignment",
  },
  {
    icon: ImplementaionImg,
    title: "Implementation Planning",
  },
  {
    icon: SolutionImg,
    title: "Solution Architecture",
  },
];

const HowWeWork = () => {
  return (
    <section
      id="HowWeWork"
      className="w-full h-[554px] flex flex-col justify-center items-center bg-[#06142A] mobile:h-[1000px] mobile:relative"
    >
      <div className="HowWeWorkText flex flex-col justify-center items-center w-full mt-14 mobile:mt-[130px] ">
        <h1 className="font-outfit text-[36.5px] normal-case font-semibold leading-[45.563px] tracking-[-0.729px] mb-4 text-[#fff] ">
          How We Work
        </h1>
        <h2 className="font-outfit text-[18px] normal-case font-normal leading-[29.88px] tracking-[0] text-center w-[750px] text-[#fff] mobile:w-[90%] mobile:text-[16px] mobile:text-justify">
          At MATalogics, our agile-driven process is designed to keep your
          project adaptive, efficient, and user-focused at every stage.
        </h2>
      </div>
      <div className="w-full h-[300px] flex flex-col items-start justify-center mb-[80px] mobile:h-auto mobile:mt-[160px] mobile:relative">
        <div className="relative ConnectorsVector w-full flex justify-center items-center mobile:flex-col mobile:h-auto  mobile:items-start">
          {ProcessSteps.map((ProcessStep, index) => (
            <div
              className=" w-[287.044px] mx-2 flex items-center justify-center flex-col mb-[35px] mobile:items-start mobile:relative mobile:left-[-30px]"
              key={index}
            >
              <img
                src={ProcessStep.SeperatorLine}
                alt=""
                className=" w-full mobile:-rotate-90 mobile:-scale-x-100 mobile:h-[20px] mobile:w-[190px] mobile:mb-[150px]"
              />
              <img
                src={ProcessStep.VectorLine}
                alt=""
                className=" w-[102.516px] mt-[60px] mobile:rotate-90 mobile:h-[20px] mobile:w-[60px] mobile:ml-[180px] mobile:absolute mobile:mt-[-50px]  mobile:mb-[100px]"
              />
            </div>
          ))}
        </div>
        <div className="absolute  ProcessSteps w-full flex justify-center items-center z-50 mt-[100px] mobile:flex-col mobile:absolute mobile:top-[-285px] mobile:ml-[-20px] ">
          {steps.map((Step, index) => (
            <div
              className=" w-[287.044px] mx-2 flex items-center justify-center flex-col"
              key={index}
            >
              <img
                src={Step.icon}
                alt=""
                className=" w-[84.291px] h-[68.344px] mobile:w-[50px] mobile:h-[60px] mobile:mt-[65px] mobile:mb-[75px] "
              />
              <h1 className="font-outfit text-[17.7445px] normal-case font-medium leading-[24.88px] tracking-[1.5px] text-center text-[#fff] mt-6 mobile:text-[12px] mobile:mt-[1px] mobile:hidden">
                {Step.title}
              </h1>
            </div>
          ))}
        </div>
        <h1 className="hidden font-outfit  normal-case font-medium leading-[24.88px] tracking-[1.5px] text-start text-[#fff] mobile:block mobile:absolute mobile:right-[110px] mobile:top-[-115px] mobile:text-[12px] w-[60px]">
          {" "}
          Comprehensive Analysis{" "}
        </h1>
        <h1 className="hidden font-outfit  normal-case font-medium leading-[24.88px] tracking-[1.5px] text-start text-[#fff] mobile:block mobile:absolute mobile:right-[110px] mobile:top-[85px] mobile:text-[12px] w-[60px]">
          {" "}
          Goal Alignment{" "}
        </h1>
        <h1 className="hidden font-outfit  normal-case font-medium leading-[24.88px] tracking-[1.5px] text-start text-[#fff] mobile:block mobile:absolute mobile:right-[110px] mobile:top-[285px] mobile:text-[12px] w-[60px]">
          {" "}
          Implementation Planning{" "}
        </h1>
        <h1 className="hidden font-outfit  normal-case font-medium leading-[24.88px] tracking-[1.5px] text-start text-[#fff] mobile:block mobile:absolute mobile:right-[110px] mobile:top-[485px] mobile:text-[12px] w-[60px]">
          {" "}
          Solution Architecture{" "}
        </h1>
      </div>
    </section>
  );
};

export default HowWeWork;
