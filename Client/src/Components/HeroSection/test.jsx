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
  const texts = ["100+ Projects delivered", "50+ Happy Clients"];
  const [index, setIndex] = useState(0);

  // cycle texts
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 4000);
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
    <section className="w-full min-h-dvh relative overflow-hidden bg-cover bg-center bg-white">
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

      {/* Hero Content */}
      <div className="relative z-30 max-w-full mx-auto px-[160px] py-[20px] flex flex-col md:flex-row items-center justify-between min-h-dvh mobile:w-full mobile:px-5 tablet:w-full tablet:px-5 medium:w-full medium:px-5 large:w-full large:px-5 pb-[160px]">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-[738.633px] mb-[70px] text-[#FFF] space-y-9 flex flex-col mobile:w-full tablet:w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="text-4xl font-bold leading-[1.2] gap-4 text-[48px] mobile:text-[32px] mobile:text-center mobile:leading-[45px] tablet:text-[42px] tablet:text-center tablet:leading-[45px] medium:text-[48px] medium:leading-[58px]"
          >
            Strategic Innovation, Logically Engineered the MATalogics Way
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="leading-[1.9] text-[20px] mobile:w-[95%] mobile:text-center mobile:text-[18px] tablet:text-center tablet:text-[22px] tablet:leading-[34px] medium:text-[24px] medium:leading-[34px]"
          >
            We specialize in custom Web Development, Mobile Apps, UI/UX, SEO,
            Machine Learning, and AI solutions tailored to scale your business.
          </motion.h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/contact"
              className="bg-[#0045E6] flex justify-center items-center rounded-3xl font-semibold text-white text-sm shadow-lg px-[45.651px] py-[20px] mobile:text-[14px] tracking-[0.5px]"
            >
              <button>Talk to an Expert</button>
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#1a2a4d] flex justify-center items-center rounded-3xl font-semibold text-sm px-[61.651px] py-[20px] mobile:text-[14px] tracking-[0.5px]"
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
        className="absolute bottom-[210px] right-[30px] w-[316px] h-[315px] z-20 pointer-events-none mobile:w-[185px] mobile:h-[196px] tablet:w-[185px] tablet:h-[196px] medium:w-[205px] medium:h-[220px]"
      >
        <Lottie animationData={RebotLottie} loop={true} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-[260px] right-[210px] w-[316px] h-[315px] z-20 mobile:w-[190px] mobile:h-[190px] tablet:w-[190px] tablet:h-[190px] medium:w-[170px] medium:h-[190px]"
      >
        <img
          src={VectorOverRobo}
          alt=""
          className="w-[221.02px] h-[69px] flex-shrink-0 mobile:w-[140px] tablet:w-[140px]"
        />
        <div className="absolute top-[6px] left-[28px] text-white font-medium px-3 py-0 rounded-lg w-[180px] h-[69px] text-[19px] leading-[28px] mobile:text-[14px] mobile:w-[120px] mobile:leading-[24px] tablet:text-[14px] tablet:w-[120px] tablet:leading-[24px] medium:text-[18px] medium:w-[150px] medium:leading-[24px]">
          {texts[index]}
        </div>
      </motion.div>

      {/* Bottom Info Glass Bar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="relative w-full z-40 border-t border-white/15 bg-[#FFFFFF12]/[0.035] backdrop-blur-md shadow-inner py-6"
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-white text-center">
          {/* Projects Delivered */}
          <div
            className="flex items-center justify-center gap-4 py-6 relative"
            ref={InfoRef}
          >
            <img
              src={ProjectHero}
              alt="Projects Icon"
              className="w-16 h-16 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
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
              <p className="text-sm sm:text-base opacity-80 mobile:text-[14px]">
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
            className="flex items-center justify-center gap-4 py-6 relative"
            ref={InfoRef}
          >
            <img
              src={clientHero}
              alt="Clients Icon"
              className="w-16 h-15 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
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
          <div
            className="flex items-center justify-center gap-4 py-6 relative"
            ref={InfoRef}
          >
            <img
              src={uptimeHero}
              alt="Uptime Icon"
              className="w-16 h-15 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
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
          <div
            className="flex items-center justify-center gap-4 py-6 relative"
            ref={InfoRef}
          >
            <img
              src={PartnerHero}
              alt="Partners Icon"
              className="w-16 h-16 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
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
              <p className="text-sm sm:text-base opacity-80 mobile:text-[14px]">
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
