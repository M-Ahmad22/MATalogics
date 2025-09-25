import React from "react";
import GreenComponent from "../../assets/GreenComponent.svg";
import ServiceOne from "../../assets/Service1.svg";
import ServiceTwo from "../../assets/ServiceTwo.svg";
import ServiceThree from "../../assets/ServiceThree.svg";
import ServiceFour from "../../assets/ServiceFour.svg";
import ServiceFive from "../../assets/ServiceFive.svg";
import MainLogo from "../../assets/logoWhite.png";
import ServiceOneMainImg from "../../assets/ServiceOnelayered.png";
import ServiceTwoMainImg from "../../assets/ServiceTwoLayered.png";
import ServiceThreeMainImg from "../../assets/ServiceThreeLayered.png";
import ServiceFourMainImg from "../../assets/ServiceFourLayered.png";
import ServiceFiveMainImg from "../../assets/ServiceFivelayered.png";
import ServiceHoverImgOne from "../../assets/ServiceOneOrg.png";
import ServiceHoverImgTwo from "../../assets/ServiceTwoOrg.jpg";
import ServiceHoverImgThree from "../../assets/ServiceThreeOrg.jpg";
import ServiceHoverImgFour from "../../assets/ServiceFourOrg.jpg";
import ServiceHoverImgFive from "../../assets/ServiceFiveOrg.jpg";
import ArrowUp from "../../assets/arrow-up-rightS.svg";
import ArrowUpWhite from "../../assets/arrow-up-right.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: ServiceOne,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built with React, Node.js, and TypeScript scalable, secure, and modular.",
    img: ServiceOneMainImg,
    HoverImg: ServiceHoverImgOne,
  },
  {
    id: 2,
    icon: ServiceTwo,
    title: "Cross-Platform App Development",
    description:
      "Build high-performance apps for iOS and Android using Flutter, Firebase, and RESTful APIs.",
    img: ServiceTwoMainImg,
    HoverImg: ServiceHoverImgTwo,
  },
  {
    id: 3,
    icon: ServiceThree,
    title: "Product UI/UX & Prototyping",
    description:
      "User-first design systems using Figma, wireframes, and interactive prototypes for web & mobile.",
    img: ServiceThreeMainImg,
    HoverImg: ServiceHoverImgThree,
  },
  {
    id: 4,
    icon: ServiceFour,
    title: "AI Automation & Predictive Models",
    description:
      "ML model integration, AI chatbots, and process automation for smarter business flows.",
    img: ServiceFourMainImg,
    HoverImg: ServiceHoverImgFour,
  },

  {
    id: 5,
    icon: ServiceFive,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Deploy and manage scalable apps on AWS, GCP, or Vercel with CI/CD pipelines and monitoring.",
    img: ServiceFiveMainImg,
    HoverImg: ServiceHoverImgFive,
  },
  {
    id: 6,
    icon: MainLogo,
    title: "MATalogics",
    description:
      "MATalogics, provides expert software engineering and consultancy services to global enterprises,",
  },
];

const handleScrollToPricing = () => {
  const section = document.getElementById("RequestPricing");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full h-[130vh] bg-[#FFFFFF] flex justify-center items-center mt-[120px] mobile:h-auto mobile:mt-[40px] tablet:h-auto medium:h-auto SpecificLarge:h-auto"
    >
      <div className="h-[auto] w-[72%] flex flex-col relative mobile:w-[90%] tablet:w-[90%] medium:w-[90%] SpecificTablet:w-[90%] SpecificTablet:justify-center SpecificTablet:items-center ">
        <div className="ServicesTitle align-content-start gap-[8px] h-auto w-[92%] mobile:h-[300px] tablet:h-[300px] medium:h-[200px] SpecificLarge:h-[200px] ">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-[Outfit] text-[48px] not-italic font-semibold leading-[60px] tracking-[-0.96px] capitalize text-[#1E1D28] mb-3 ml-3 mobile:w-[80%] tablet:w-[80%] medium:w-[80%]"
          >
            Services We <span className="text-[#0045E6]">Provide</span>
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="font-Montserrat text-[17px] font-normal leading-[24px] tracking-[0.96px] ml-3 "
          >
            From ideation to deployment MATalogics delivers smart, scalable, and
            secure solutions tailored to your digital goals.
          </motion.h3>
          <motion.button
            onClick={handleScrollToPricing}
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute right-2 top-4 w-[202px] h-[62px] flex justify-center items-center gap-[6px] bg-[#0045E6] text-[white] border-[1px] text-[16px] font-medium rounded-full  leading-[150px] mobile:top-[250px] mobile:right-[0px] tablet:top-[250px] medium:top-[150px] SpecificLarge:top-[150px]"
          >
            <img
              src={GreenComponent}
              alt=""
              className="pb-0 px-1 animate-blink"
            />
            <span className="px-1 mr-1"> Request Pricing</span>
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="ServicesCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-1 py-[60px] mx-1 mobile:mx-0 mobile:px-0 tablet:mx-0 tablet:px-0  mobile:mt-12 medium:mx-0 medium:px-0 SpecificLarge:mx-0 SpecificLarge:px-0 SpecificTablet:w-[73%]   "
        >
          {services.map((service, index) => {
            const isLastCard = index === services.length - 1;
            if (isLastCard) {
              return (
                <div
                  key={index}
                  className="group relative h-[500px] w-[400px] bg-[#1E1D28] text-white mx-1 my-0 rounded-3xl flex flex-col border-[#EAECF0] justify-center p-8 hover mobile:w-[100%] mobile:mx-0 tablet:w-[100%] tablet:mx-0 medium:w-[100%] medium:mx-0 SpecificLarge:w-[100%] SpecificLarge:mx-0 SpecificTablet:w-[100%] "
                >
                  <div className="absolute ServiceLogo w-[auto] h-[78px] flex items-center justify-center border-[0px] rounded-xl mx-2 my-9 left-[20px] top-[0px]">
                    <img
                      src={service.icon}
                      alt=""
                      className="w-[72px] h-[68px]"
                    />
                    <h1 className=" font-Manrope text-[28px] font-bold mb-0 mx-2 text-[#FFFFFF] ">
                      {service.title}
                    </h1>
                  </div>

                  <h2 className="font-outfit text-[18px] leading-[23.6px] mb-6 font-normal tracking-[1.3px] ml-0 mr-4 mt-12 group-hover:translate-y-[-50px]  transition-all duration-500 ease-in-out">
                    {service.description}
                  </h2>
                  <p className="font-outfit text-3xl font-semibold align-self-stretch text-[28px] group-hover:translate-y-[-50px]  transition-all duration-500 ease-in-out">
                    Need something custom?
                  </p>
                  {/* HoverEffect */}
                  <div
                    className="absolute bottom-10 left-0 w-full flex justify-center 
               transform translate-y-full opacity-0 
               group-hover:translate-y-0 group-hover:opacity-100 
               transition-all duration-500 ease-in-out"
                  >
                    <Link to="/contact">
                      <button
                        onClick={handleScrollToPricing}
                        className="w-[286px] h-[48px] SpecificLarge:w-[100%] medium:w-[100%] tablet:w-[100%] tablet:px-3 medium:px-3 SpecificLarge:px-3 flex justify-center items-center bg-white border-1 border-[#fff] rounded-full text-[#000] font-outfit text-[18px] font-semibold mt-6 "
                      >
                        Let's discuss Your Project
                        <img src={ArrowUp} alt="" className="mx-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
            return (
              <div className="group relative card h-[500px] w-[400px] bg-[#FFFFFF] mx-1 my-0 rounded-3xl border-[2px] border-[#EAECF0] mobile:w-[100%] mobile:mx-0 tablet:w-[100%] tablet:mx-0 medium:w-[100%] medium:mx-0 SpecificLarge:w-[100%] SpecificLarge:mx-0 SpecificTablet:w-[100%]">
                <div className="ServiceLogo w-[78px] h-[78px] bg-[#F5F7F8] flex items-center justify-center border-[0px] rounded-xl mx-6 my-9">
                  <img src={service.icon} alt="" className="" />
                </div>
                <h1 className="font-[Outfit] z-30 text-[16.5px] font-[500] leading-[21.6px] tracking-[1.2px] mx-7 mb-4 transition-all group-hover:text-white">
                  {service.title}
                </h1>
                <h2 className="font-montserrat z-30 text-[14px] font-[400] leading-[21px] tracking-[1.3px] ml-7 mr-4 transition-all group-hover:text-white ">
                  {service.description}
                </h2>
                <div className="absolute MainImgService w-full h-[205px] flex items-center justify-center bottom-0 ">
                  <img
                    src={service.img}
                    alt=""
                    className="absolute bottom-1 w-[97%] rounded-xl group-hover:brightness-0 group-hover:invert transition-all duration-300 ease-in-out"
                  />
                </div>
                {/* HoverEffect */}
                <div
                  className="absolute card bottom-0 left-0 w-full flex justify-center
    transform translate-y-0 opacity-0 
    group-hover:translate-y-0 group-hover:opacity-100 
    transition-all duration-300 ease-in-out inset-0 mobile:w-[100%] mobile:mx-0 "
                >
                  <img
                    src={service.HoverImg}
                    alt=""
                    className="h-[500px] w-[400px] px-1 py-2 rounded-[22px] object-cover z-[-20] pt-1"
                  />

                  {/* Overlay background */}
                  <div className="absolute h-[500px] w-[400px] mobile:w-[100%] mobile:mx-0 medium:w-[100%] medium:mx-0  SpecificLarge:w-[100%] SpecificLarge:mx-0  tablet:w-[100%] tablet:mx-0  ">
                    <div className="absolute left-[2px] h-[490px] w-[389px] mx-1 my-1 bg-[#0045E6]/[0.62] rounded-[17px] mt-[3px] mobile:left-0 mobile:mx-1 mobile:w-[98%] medium:w-[98%] SpecificLarge:w-[98%] tablet:w-[98%] "></div>

                    <div className="absolute top-0 left-0 p-0 z-20">
                      <div className="ServiceLogo w-[78px] h-[78px] bg-[#F5F7F8]/[0.12] flex items-center justify-center border-[0px] rounded-xl mx-[26px] my-9">
                        <img
                          src={service.icon}
                          alt=""
                          className="group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
                        />
                      </div>
                      <h1 className="font-[Outfit] z-30 text-[16.5px] font-[500] leading-[21.6px] tracking-[1.2px] mx-7 mb-4 text-white ">
                        {service.title}
                      </h1>
                      <h2 className="font-montserrat z-30 text-[14px] font-[400] leading-[21px] tracking-[1.3px] ml-7 mr-4 text-white">
                        {service.description}
                      </h2>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <button className="absolute bottom-9 left-8 flex items-center text-white font-outfit text-[17px] font-semibold">
                        Read More
                        <img src={ArrowUpWhite} alt="" className="ml-2" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
