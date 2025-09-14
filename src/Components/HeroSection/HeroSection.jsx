import { React, useEffect, useState } from "react";
import Lottie from "lottie-react";
import WhyUsVideo from "../../../public/Videos/GettyImages-1293322157.mp4";
import WhyUsVideoCompressed from "../../../public/Videos/HeroSectionCompressed.mp4";
import WhyUsVideoWebM from "../../../public/Videos/HeroSectionWebM.webm";
import RebotLottie from "../../assets/lottie/robo.json";
import VectorOverRobo from "../../assets/Vector_Robo.svg";
import ProjectHero from "../../assets/ProjectsHero.svg";
import PartnerHero from "../../assets/PartnerHero.svg";
import uptimeHero from "../../assets/UptimeHero.svg";
import clientHero from "../../assets/ClientHero.svg";
import LineVector from "../../assets/Vector 7.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroSection = () => {
  const texts = ["100+ Projects delivered", "50+ Happy Clients"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full h-screen relative overflow-hidden bg-cover bg-center mobile:h-[115vh] mobile:w-full bg-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10 mobile:object-fill"
        preload="none"
        poster="/assets/Videos/WhyUsPoster.jpg"
      >
        {/* <source src={WhyUsVideo} type="video/mp4" /> */}
        <source src="/Videos/HeroSectionWebM.webm" type="video/webm" />
        <source src="/Videos/HeroSectionCompressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-30  max-w-[full] mx-auto px-[160px] py-[20px] flex flex-col md:flex-row items-center justify-between h-full mobile:w-full mobile:px-5 mobile:mt-[110px] mobile:h-auto">
        <div className="w-[738.633px] text-[#FFF] space-y-7 mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:relative mobile:space-y-5 ">
          <h1 className="text-4xl font-bold leading-[1.2] sm:leading-[1.4] gap-4 text-[48px] mobile:text-[32px] mobile:text-center mobile:leading-[45px] mobile:w-full">
            Strategic Innovation, Logically Engineered the MATalogics Way
          </h1>
          <h3 className="width=[651px] leading-[1.9] text-[20px] mobile:w-[95%] mobile:text-center mobile:text-[18px] mobile:leading-[30px] ">
            We specialize in custom Web Development, Mobile Apps, UI/UX, SEO,
            Machine Learning, and AI solutions tailored to scale your business.
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 mobile:absolute mobile:left-0 mobile:top-[280px] mobile:w-[100%] mobile:flex-row h-auto">
            <button
              href="#contact"
              className="bg-[#0045E6] hover:bg-[#0045E6] transition-colors flex justify-center items-center rounded-3xl font-semibold text-white text-sm shadow-lg px-[45.651px] py-[20px] mobile:text-[14px] tracking-[0.5px] mobile:px-[0px] mobile:py-[20px] mobile:h-[50px] mobile:w-[50%] mobile:rounded-[5px]"
            >
              Talk to an Expert
            </button>
            <button
              href="#services"
              className="border border-white text-white hover:bg-white hover:text-[#1a2a4d] flex justify-center items-center  transition-colors rounded-3xl font-semibold text-sm px-[45.651px] py-[20px] mobile:text-[14px] tracking-[0.5px] mobile:px-0 mobile:py-[20px]  mobile:h-[50px]  mobile:w-[50%] backdrop-blur-[10px] mobile:rounded-[5px] "
            >
              Book A Call
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[250px] right-[180px] w-[316px] h-[315px] z-20 pointer-events-none mobile:top-[530px] mobile:w-[185px] mobile:h-[196px] mobile:right-0">
        <Lottie animationData={RebotLottie} loop={true} />
      </div>
      <div className="absolute bottom-[310px] right-[280px] w-[316px] h-[315px] z-20 mobile:top-[500px] mobile:w-[190px] mobile:h-[190px] mobile:right-[105px] ">
        <img
          src={VectorOverRobo}
          alt=""
          className="w-[201.02px] h-[69px] flex-shrink-0 mobile:w-[140px] "
        />
        <div className="absolute top-[10px] left-[20px] text-white font-medium  px-3 py-0 rounded-lg w-[180px] h-[69px] text-1xl text-[19px] leading-[28px] mobile:left-[10px] mobile:text-[14px] mobile:w-[120px] mobile:leading-[24px]">
          {texts[index]}
        </div>
      </div>

      {/* Bottom Info Glass Bar */}
      <div className="absolute bottom-0 w-full z-40 border-t border-white/15 bg-[#FFFFFF12]/[0.035] backdrop-blur-md shadow-inner h-[139px] mobile:w-full mobile:flex-col  mobile:h-auto mobile:top-[720px] ">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-white text-center mt-[13px] mobile:mt-0">
          {/* Projects Delivered */}
          <div className="flex items-center justify-center gap-4 py-6 relative">
            <img
              src={ProjectHero}
              alt="Projects Icon"
              className="w-16 h-16 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">100+</h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[14px]">
                Projects Delivered
              </p>
            </div>
            {/* Line vector on right */}
            <img
              src={LineVector}
              alt=""
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Active Clients */}
          <div className="flex items-center justify-center gap-4 py-6 relative mobile:ml-5">
            <img
              src={clientHero}
              alt="Clients Icon"
              className="w-16 h-15 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">120+</h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[14px]">
                Active Clients & Startups
              </p>
            </div>
            <img
              src={LineVector}
              alt=""
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Uptime Guarantee */}
          <div className="flex items-center justify-center gap-4 py-6 relative ">
            <img
              src={uptimeHero}
              alt="Uptime Icon"
              className="w-16 h-15 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">99%</h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[14px]">
                Uptime Guarantee
              </p>
            </div>
            <img
              src={LineVector}
              alt=""
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Global Partners */}
          <div className="flex items-center justify-center gap-4 py-6 relative mobile:ml-5">
            <img
              src={PartnerHero}
              alt="Partners Icon"
              className="w-16 h-16 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">10+</h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[14px]">
                Global Partners
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
