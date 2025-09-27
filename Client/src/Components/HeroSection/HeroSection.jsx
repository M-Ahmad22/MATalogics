import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import RebotLottie from "../../assets/lottie/robo.json";
import VectorOverRobo from "../../assets/Vector_Robo.svg";
import ProjectHero from "../../assets/ProjectsHero.svg";
import PartnerHero from "../../assets/PartnerHero.svg";
import uptimeHero from "../../assets/UptimeHero.svg";
import clientHero from "../../assets/ClientHero.svg";
import LineVector from "../../assets/Vector 7.svg";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [heroHeight, setHeroHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      const vh = window.innerHeight;
      const heightWithExtra = vh * 1.1;
      setHeroHeight(heightWithExtra);
    };

    window.addEventListener("orientationchange", handleResize);
    return () => window.removeEventListener("orientationchange", handleResize);
  }, []);

  const texts = ["100+ Projects delivered", "50+ Happy Clients"];
  const [index, setIndex] = useState(0);

  // cycle texts
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const { ref: InfoRef, inView: InfoInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const easeOutCubic = (t, b, c, d) => {
    t /= d;
    t--;
    return c * (t * t * t + 1) + b;
  };

  return (
    <section className="w-full mobile:h-[870px] relative overflow-hidden bg-cover bg-center bg-white ">
      {/* <section
      className="w-full relative overflow-hidden bg-cover bg-center bg-white"
      style={{ height: heroHeight ? `${heroHeight}px` : "100vh" }}
    > */}
      {/* Background poster + video */}
      <img
        src="/Videos/poster.jpg"
        alt="poster"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-10"
        preload="metadata"
        poster="/Videos/poster.jpg"
      >
        <source src="/Videos/HeroSectionWebM.webm" type="video/webm" />
        <source src="/Videos/HeroSectionCompressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-30 max-w-full mx-auto px-[160px] py-[20px] flex flex-col lg:flex-row items-center justify-between min-h-dvh mobile:w-full mobile:px-5 tablet:w-full tablet:px-5 medium:w-full medium:px-5 large:w-full tablet:mt-[130px] large:px-5 pb-[160px] mobile:mt-[120px]">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-[738.633px] mb-[70px] text-[#FFF] space-y-9 mobile:space-y-4 flex flex-col mobile:w-full tablet:w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="text-4xl font-bold leading-[1.2] gap-4  text-[48px] mobile:text-[32px] mobile:text-center mobile:leading-[40px] tablet:text-[38px] tablet:text-center tablet:leading-[45px] medium:text-[48px] medium:leading-[58px]"
          >
            Strategic Innovation, Logically Engineered the MATalogics Way
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="leading-[1.9] text-[20px] mobile:leading-[1.4] mobile:w-[100%] mobile:text-justify mobile:text-[17px] tablet:text-center tablet:text-[18px] tablet:leading-[34px] medium:text-[24px] medium:leading-[34px]"
          >
            We specialize in custom Web Development, Mobile Apps, UI/UX, SEO,
            Machine Learning, and AI solutions tailored to scale your business.
          </motion.h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-2    mobile:w-[100%] mobile:flex-row h-auto tablet:w-[100%] tablet:justify-center">
            <Link
              to="/contact"
              className="bg-[#0045E6] hover:bg-[#0045E6] transition-all  mobile:mt-2 duration-300 ease-in-out  flex justify-center items-center rounded-3xl font-semibold text-white text-sm shadow-lg px-[45.651px] py-[20px] mobile:text-[14px] tracking-[0.5px] mobile:px-[0px] mobile:py-[16px] mobile:h-[48px] mobile:w-[50%] mobile:rounded-[5px] tablet:px-[15px] tablet:py-[15px] tablet:h-[50px] tablet:w-[40%] tablet:rounded-[7px] medium:px-[15px] medium:py-[15px] medium:h-[50px] medium:w-[30%] medium:rounded-[7px] "
            >
              <button>Talk to an Expert</button>
            </Link>
            <Link
              to="/contact"
              className=" mobile:mt-2  border border-white text-white hover:bg-white hover:text-[#1a2a4d] flex justify-center items-center  transition-colors rounded-3xl font-semibold text-sm px-[61.651px] py-[20px] mobile:text-[14px] tracking-[0.5px] mobile:px-[0px]  mobile:py-[16px] mobile:h-[48px]    mobile:w-[50%] backdrop-blur-[10px] mobile:rounded-[5px] tablet:px-[15px] tablet:py-[15px] tablet:h-[50px] tablet:w-[40%] tablet:rounded-[7px] medium:px-[15px] medium:py-[15px] medium:h-[50px] medium:w-[30%] medium:rounded-[7px]"
            >
              <button>Book A Call</button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Lottie & Text Bubble */}
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-[210px] right-[30px] w-[316px] h-[315px] z-20 pointer-events-none mobile:bottom-[135px] mobile:right-[20px]  mobile:w-[175px] mobile:h-[196px] tablet:bottom-[265px] tablet:w-[185px] tablet:h-[196px] medium:w-[205px] medium:h-[220px]"
      >
        <Lottie animationData={RebotLottie} loop={true} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-[260px] right-[210px] w-[316px] h-[315px] z-20 mobile:bottom-[185px] mobile:right-[120px] mobile:w-[190px] mobile:h-[190px] tablet:bottom-[315px] tablet:right-[150px]  tablet:w-[190px] tablet:h-[190px] medium:w-[170px] medium:h-[190px]"
      >
        <img
          src={VectorOverRobo}
          alt=""
          className="w-[221.02px] h-[69px] flex-shrink-0 mobile:w-[140px] tablet:w-[140px]"
        />
        <div className="absolute top-[6px] left-[28px] text-white font-medium px-3 py-0 rounded-lg w-[180px] h-[69px] text-[19px] leading-[28px] mobile:text-[14px] mobile:top-[10px] mobile:left-[15px]  medium:top-[10px] medium:left-[15px]  mobile:w-[120px] mobile:leading-[24px] tablet:left-[15px] tablet:top-[10px]  tablet:text-[14px] tablet:w-[120px] tablet:leading-[24px] medium:text-[18px] medium:w-[150px] medium:leading-[24px]">
          {texts[index]}
        </div>
      </motion.div>

      {/* Bottom Info Glass Bar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className=" absolute bottom-0 w-full z-40 border-t border-white/15 bg-[#FFFFFF12]/[0.035] backdrop-blur-md shadow-inner py-6 mobile:py-3 mobile:my-1"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-white text-center">
          {/* Projects Delivered */}
          <div
            className="flex items-center justify-center gap-4 py-6 relative mobile:py-0"
            ref={InfoRef}
          >
            <img
              src={ProjectHero}
              alt="Projects Icon"
              className="w-16 h-16 mobile:w-[35px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[20px]">
                {InfoInView && (
                  <CountUp
                    start={0}
                    end={120}
                    duration={3}
                    easingFn={easeOutCubic}
                  />
                )}
                +
              </h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[12px]">
                Projects Delivered
              </p>
            </div>
            <img
              src={LineVector}
              alt=""
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Active Clients */}
          <div
            className="flex items-center justify-center gap-4 py-6 relative mobile:py-0"
            ref={InfoRef}
          >
            <img
              src={clientHero}
              alt="Clients Icon"
              className="w-16 h-15 mobile:w-[35px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[20px]">
                {InfoInView && (
                  <CountUp
                    start={0}
                    end={90}
                    duration={3}
                    easingFn={easeOutCubic}
                  />
                )}
                +
              </h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[12px]">
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
          <div
            className="flex items-center justify-center gap-4 py-6 relative mobile:py-0"
            ref={InfoRef}
          >
            <img
              src={uptimeHero}
              alt="Uptime Icon"
              className="w-16 h-15 mobile:w-[35px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[20px]">
                {InfoInView && (
                  <CountUp
                    start={0}
                    end={99}
                    duration={3}
                    easingFn={easeOutCubic}
                  />
                )}
                %
              </h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[12px]">
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
          <div
            className="flex items-center justify-center gap-4 py-6 relative mobile:py-0 mobile:justify-start mobile:ml-3 tablet:justify-start tablet:ml-[35px]"
            ref={InfoRef}
          >
            <img
              src={PartnerHero}
              alt="Partners Icon"
              className="w-16 h-16 mobile:w-[35px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[20px]">
                {InfoInView && (
                  <CountUp
                    start={0}
                    end={10}
                    duration={3}
                    easingFn={easeOutCubic}
                  />
                )}
                +
              </h1>
              <p className="text-sm sm:text-base opacity-80 mobile:text-[12px]">
                Global Partners
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
