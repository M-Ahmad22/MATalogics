import React from "react";
import ECommerceLayeredImg from "../../assets/ECommerceLayeredImg.png";
import AiChatBotLayeredImg from "../../assets/AiChatBotLayeredImg.png";
import PortfolioLayeredImg from "../../assets/PortfolioLayeredImg.png";
import SaasLayeredImg from "../../assets/SaasLayeredImg.png";
import EduLayeredImg from "../../assets/EduLayeredImg.png";
import CRMLayeredImg from "../../assets/CRMLayeredImg.png";
import ArrowUpWhite from "../../assets/arrow-up-right.svg";
import ECommerceFullImg from "../../assets/ECommerceFullImg.png";
import AIChatBotFullIImg from "../../assets/AIChatBotFullIImg.png";
import PortFolioFullImg from "../../assets/PortFolioFullImg.jpg";
import LaptopLayeredImg from "../../assets/CRMLaptopLayeredImg.png";
import CRMSpecialLayeredImg from "../../assets/CRMSpecialLayeredImg.png";
import ECommerceSpecialLayeredImg from "../../assets/ECommerceSpecialLayeredImg.png";
import ArrowUp from "../../Assets/Arrow-up-rightGray.svg";
import checkSign from "../../assets/checkSign.svg";

const portfolioProjects = [
  {
    type: "View CaseStudy",
    badge: "Regulatory & Compliance",
    img: SaasLayeredImg,
    title: "Custom SaaS Platform",
    description:
      "End-to-end SaaS application with role-based access, advanced analytics, and seamless integrations for scaling business operations.",
    highlights: [
      "Role-based access control",
      "Real-time analytics dashboard",
      "Third-party API integrations",
    ],
    HoverImg: ECommerceFullImg,
  },
  {
    type: "View CaseStudy",
    badge: "Regulatory & Compliance",
    img: ECommerceLayeredImg,
    title: "E-Commerce Web Application",
    description:
      "Fully functional online store with secure payment gateway, inventory management, and personalized shopping experiences.",
    highlights: [
      "Secure payment gateway integration",
      "Dynamic product filtering",
      "Automated order tracking",
    ],
    HoverImg: ECommerceFullImg,
    SpecialImg: LaptopLayeredImg,
    LayerSpecialImg: ECommerceSpecialLayeredImg,
  },
  {
    type: "View Product",
    badge: "Regulatory & Compliance",
    img: AiChatBotLayeredImg,
    title: "AI-Powered Automation Tool",
    description:
      "Machine learning-driven automation system that optimizes repetitive workflows and provides actionable insights.",
    highlights: [
      "Custom ML model integration",
      "Automated task scheduling",
      "Real-time data processing",
    ],
    HoverImg: AIChatBotFullIImg,
  },
  {
    type: "View CaseStudy",
    badge: "Regulatory & Compliance",
    img: PortfolioLayeredImg,
    title: "Portfolio Website & Branding",
    description:
      "Professional Portfolio website with a modern UI/UX, optimized for performance, branding consistency, and SEO.",
    highlights: [
      "Brand-consistent UI design",
      "SEO-optimized content structure",
      "High-speed performance tuning",
    ],
    HoverImg: PortFolioFullImg,
  },
  {
    type: "View CaseStudy",
    badge: "Regulatory & Compliance",
    img: CRMLayeredImg,
    title: "CRM & Client Management System",
    description:
      "Custom CRM solution designed to manage leads, track client interactions, and generate performance reports.",
    highlights: [
      "Lead tracking automation",
      "Integrated communication tools",
      "Custom reporting system",
    ],
    HoverImg: ECommerceFullImg,
    SpecialImg: LaptopLayeredImg,
    LayerSpecialImg: CRMSpecialLayeredImg,
  },
  {
    type: "View Product",
    badge: "Regulatory & Compliance",
    img: EduLayeredImg,
    title: "Educational Learning Platform",
    description:
      "Interactive platform with video courses, quizzes, and progress tracking to enhance remote learning experiences.",
    highlights: [
      "Interactive course modules",
      "Gamified learning progress",
      "Secure student data management",
    ],
    HoverImg: ECommerceFullImg,
  },
];

const PortfolioSection = () => {
  return (
    <section
      id="PortfolioSection"
      className="w-full h-[130vh] bg-[#FFFFFF] flex justify-center items-center mt-[120px] mb-[100px] mobile:h-auto mobile:mt-[30px] "
    >
      <div className="h-[auto] w-[72%] flex flex-col relative justify-center items-center mobile:w-[90%] ">
        <div className="PortfolioTitle gap-[8px] h-auto w-[100%] flex flex-col justify-center items-center  ">
          <h1 className="font-[Outfit] text-[48px] not-italic font-bold leading-[60px] tracking-[-0.56px] capitalize text-[#1E1D28] mb-3 ml-3 mobile:ml-0">
            <span className="text-[#0045E6]">Our</span> Portfolio
          </h1>
          <h3 className="font-outfit text-[18px] font-normal leading-[29px] tracking-[0px] ml-3 w-[714px] text-center  mobile:w-full mobile:text-justify mobile:ml-0">
            Explore how MATalogics has helped brands grow with digital
            transformation, intelligent systems, and powerful user experiences.
          </h3>
        </div>
        <div className="ServicesCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-1 py-[60px] mx-1 ">
          {portfolioProjects.map((portfolioProjects, index) => (
            <div
              className="group relative card h-[540px] w-[400px] bg-[#FFFFFF] mx-1 my-0 rounded-3xl border-[2px] border-[#EAECF0] mobile:w-[100%] mobile:mx-0"
              key={[index]}
            >
              <div className="absolute MainImgService w-[96.5%] h-[270px] flex items-center justify-center top-[6px] ml-2 ">
                <img
                  src={portfolioProjects.img}
                  alt=""
                  className="absolute bottom-0 w-[500px] h-[270px] rounded-2xl object-cover"
                />
                <img
                  src={portfolioProjects.SpecialImg}
                  alt=""
                  className="z-40 w-[80%]"
                />
                <img
                  src={portfolioProjects.LayerSpecialImg}
                  alt=""
                  className="z-50 w-[230px] absolute mb-3"
                />
              </div>
              <div className="PortfolioBadge absolute w-[160px] h-[24px] bg-[#F2F4F7] flex items-center justify-center border-[0px] rounded-md mx-6 my-5 z-50">
                <h1 className="font-semibold font-OpenSans text-[10.844px] leading-[15.778px] tracking-[0.3px] text-center">
                  {portfolioProjects.badge}
                </h1>
              </div>
              <h1 className="absolute font-[Outfit] z-30 text-[20px] font-[600] leading-[25px] tracking-[1.1px] top-[300px] mx-6 ">
                {portfolioProjects.title}
              </h1>
              <h2 className="absolute font-OpenSans z-30 text-[12.882px] font-[400] leading-[18.778px] tracking-[0.3px] top-[340px] mx-6 mt-1 ">
                {portfolioProjects.description}
              </h2>
              <ul className="absolute top-[420px] mx-8 z-30 space-y-1">
                {portfolioProjects.highlights?.map((highlight, hIndex) => (
                  <li
                    key={hIndex}
                    className="font-outfit text-[13px] leading-[13.75px] flex items-start"
                    style={{
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    <span className="mr-2">
                      <img src={checkSign} alt="" />
                    </span>{" "}
                    {highlight}
                  </li>
                ))}
              </ul>
              <button className="absolute top-[480px] mx-4 right-0 z-30 font-outfit text-[12.882px] leading-[17.783px] font-medium tracking-[1px] px-4 py-2 rounded-[4px] flex text-[#B7C2C8] justify-center items-center">
                {portfolioProjects.type}
                <img src={ArrowUp} alt="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
