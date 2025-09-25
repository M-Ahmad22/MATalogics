import React from "react";
import SeperationVector from "../../assets/HowWeWorkConnectorVector.png";
import ImplementaionImg from "../../assets/ImplementationPlaning.svg";
import SolutionImg from "../../assets/SolutionArchitecture.svg";
import GoalImg from "../../assets/GoalAlignment.svg";
import AnalysisImg from "../../assets/Analysis.svg";
import VectorSeperatorImg from "../../assets/VectorSeperator.svg";
import { motion } from "framer-motion";

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
      className="w-full h-[554px] flex flex-col justify-center items-center bg-[#06142A] mobile:h-auto mobile:relative tablet:h-auto tablet:relative tablet:flex-row"
    >
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="HowWeWorkText flex flex-col justify-center items-center w-full mt-14 mobile:mt-[0px] mobile:h-[250px]  tablet:mt-[0px] tablet:h-[250px] tablet:items-start tablet:ml-[20px] "
      >
        <h1 className="font-outfit text-[36.5px] normal-case font-semibold leading-[45.563px] tracking-[-0.729px] mb-4 text-[#fff]  ">
          How We Work
        </h1>
        <h2 className="font-outfit text-[18px] normal-case font-normal leading-[29.88px] tracking-[0] text-center w-[750px] text-[#fff] mobile:w-[90%] mobile:text-[16px] mobile:text-justify tablet:w-[90%] tablet:text-[16px] tablet:text-justify">
          At MATalogics, our agile-driven process is designed to keep your
          project adaptive, efficient, and user-focused at every stage.
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 250 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full h-[300px] flex flex-col items-start justify-center mb-[80px]  mobile:hidden tablet:hidden medium:w-[100%] "
      >
        <div className="relative ConnectorsVector w-full flex justify-center items-center  ">
          {ProcessSteps.map((ProcessStep, index) => (
            <div
              className=" w-[287.044px] mx-2 flex items-center justify-center flex-col mb-[35px] medium:w-[270px] "
              key={index}
            >
              <img
                src={ProcessStep.SeperatorLine}
                alt=""
                className="mobile:hidden w-full mobile:-rotate-90 mobile:-scale-x-100 "
              />
              <img
                src={ProcessStep.VectorLine}
                alt=""
                className="mobile:hidden w-[102.516px] mt-[60px] medium:w-[84.291px]  "
              />
            </div>
          ))}
        </div>
        <div className="absolute  ProcessSteps w-full flex justify-center items-center z-50 mt-[100px] ">
          {steps.map((Step, index) => (
            <div
              className=" w-[287.044px] mx-2 flex items-center justify-center flex-col "
              key={index}
            >
              <img
                src={Step.icon}
                alt=""
                className=" w-[84.291px] h-[68.344px] medium:w-[70px] medium:h-[54px]"
              />
              <h1 className="font-outfit text-[17.7445px] normal-case font-medium leading-[24.88px] tracking-[1.5px] text-center text-[#fff] mt-6 medium:text-[14px]  ">
                {Step.title}
              </h1>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="hidden mobile:flex tablet:flex flex-col h-auto  mobile:z-50 w-full relative items-center tablet:w-[90%]"
      >
        <div className="ProcessSteps w-full flex justify-start items-center z-50  flex-col ">
          {steps.map((Step, index) => (
            <div
              className=" w-full h-[140.044px] flex items-center justify-center"
              key={index}
            >
              <img
                src={Step.icon}
                alt=""
                className=" w-[54.291px] h-[48.344px] "
              />
              <h1 className="text-[12.7445px]  font-outfit  normal-case font-medium leading-[24.88px] tracking-[1.5px] text-[#fff] mt-3 w-[5%] text-end mx-3 mb-3">
                {Step.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="absolute top-1 ConnectorsVector w-[80%] flex justify-start items-start h-[600px]  flex-col  ">
          {ProcessSteps.map((ProcessStep, index) => (
            <div
              className=" w-[135px] flex items-center justify-center flex-col mb-[5px]  z-50"
              key={index}
            >
              <img
                src={ProcessStep.SeperatorLine}
                alt=""
                className="w-full -rotate-90 mobile:-scale-x-100  mt-[127px] "
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
