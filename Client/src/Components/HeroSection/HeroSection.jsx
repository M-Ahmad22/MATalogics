import { React, useEffect, useState } from "react";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    <section className="w-full h-screen relative overflow-hidden bg-cover bg-center mobile:h-[115vh] tablet:h-[115vh]  mobile:w-full bg-white">
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
        className="absolute inset-0 w-full h-full object-cover z-10 mobile:object-fill"
        preload="metadata"
        poster="/Videos/poster.jpg"
      >
        {/* <source src={WhyUsVideo} type="video/mp4" /> */}
        <source src="/Videos/HeroSectionWebM.webm" type="video/webm" />
        <source src="/Videos/HeroSectionCompressed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className=" relative z-30  max-w-[full] mx-auto px-[160px] py-[20px] flex flex-col md:flex-row items-center justify-between h-full mobile:w-full mobile:px-5 mobile:mt-[110px] mobile:h-auto tablet:w-full tablet:px-5 tablet:mt-[130px] tablet:h-auto medium:w-full medium:px-5 medium:mt-[130px] medium:h-auto large-w-full large:px-5 large:mt-[130px] large:h-auto ">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-[738.633px] mb-[70px] text-[#FFF] space-y-9 flex flex-col mobile:w-full mobile:flex mobile:flex-col mobile:items-center mobile:justify-center mobile:relative mobile:space-y-5  tablet:w-full tablet:flex tablet:flex-col tablet:items-center tablet:justify-center tablet:relative tablet:space-y-5 "
        >
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="text-4xl font-bold leading-[1.2] sm:leading-[1.4] gap-4 text-[48px] mobile:text-[32px] mobile:text-center mobile:leading-[45px] mobile:w-full tablet:text-[42px] tablet:text-center tablet:leading-[45px] tablet:w-[95%] medium:text-[48px]  medium:leading-[58px] medium:w-[90%]"
          >
            Strategic Innovation, Logically Engineered the MATalogics Way
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
            className="width=[651px] leading-[1.9] text-[20px] mobile:w-[95%] mobile:text-center mobile:text-[18px] mobile:leading-[30px] tablet:text-center tablet:text-[22px] tablet:leading-[34px] tablet:w-[90%] medium:text-[24px] medium:leading-[34px] medium:w-[80%]"
          >
            We specialize in custom Web Development, Mobile Apps, UI/UX, SEO,
            Machine Learning, and AI solutions tailored to scale your business.
          </motion.h3>

          <div className="flex flex-col sm:flex-row gap-4 mt-2 mobile:absolute mobile:left-0 mobile:top-[280px] mobile:w-[100%] mobile:flex-row h-auto  tablet:w-[70%] ">
            <Link
              to="/contact"
              className="bg-[#0045E6] hover:bg-[#0045E6] transition-all  duration-300 ease-in-out  flex justify-center items-center rounded-3xl font-semibold text-white text-sm shadow-lg px-[45.651px] py-[20px] mobile:text-[14px] tracking-[0.5px] mobile:px-[0px] mobile:py-[20px] mobile:h-[50px] mobile:w-[50%] mobile:rounded-[5px] tablet:px-[15px] tablet:py-[15px] tablet:h-[50px] tablet:w-[50%] tablet:rounded-[7px] medium:px-[15px] medium:py-[15px] medium:h-[50px] medium:w-[30%] medium:rounded-[7px] "
            >
              <button>Talk to an Expert</button>
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-[#1a2a4d] flex justify-center items-center  transition-colors rounded-3xl font-semibold text-sm px-[61.651px] py-[20px] mobile:text-[14px] tracking-[0.5px] mobile:px-0 mobile:py-[20px]  mobile:h-[50px]  mobile:w-[50%] backdrop-blur-[10px] mobile:rounded-[5px] tablet:px-[15px] tablet:py-[15px] tablet:h-[50px] tablet:w-[50%] tablet:rounded-[7px] medium:px-[15px] medium:py-[15px] medium:h-[50px] medium:w-[30%] medium:rounded-[7px]"
            >
              <button>Book A Call</button>
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-[150px] right-[30px] w-[316px] h-[315px] z-20 pointer-events-none mobile:top-[530px] mobile:w-[185px] mobile:h-[196px] mobile:right-0 tablet:top-[530px] tablet:w-[185px] tablet:h-[196px] tablet:right-0 medium:top-[510px] medium:w-[205px] medium:h-[220px] medium:right-0"
      >
        <Lottie animationData={RebotLottie} loop={true} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-[210px] right-[210px] w-[316px] h-[315px] z-20 mobile:top-[500px] mobile:w-[190px] mobile:h-[190px] mobile:right-[105px] tablet:top-[500px] tablet:w-[190px] tablet:h-[190px] tablet:right-[105px] medium:top-[460px] medium:w-[170px] medium:h-[190px] medium:right-[175px]"
      >
        <img
          src={VectorOverRobo}
          alt=""
          className="w-[221.02px] h-[69px] flex-shrink-0 mobile:w-[140px] tablet:w-[140px] "
        />
        <div className="absolute top-[6px] left-[28px] text-white font-medium  px-3 py-0 rounded-lg w-[180px] h-[69px] text-1xl text-[19px] leading-[28px] mobile:left-[10px] mobile:text-[14px] mobile:w-[120px] mobile:leading-[24px] tablet:left-[10px] tablet:text-[14px] tablet:w-[120px] tablet:top-[9px] tablet:leading-[24px] medium:left-[10px] medium:text-[18px] medium:w-[150px] medium:leading-[24px]">
          {texts[index]}
        </div>
      </motion.div>

      {/* Bottom Info Glass Bar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className="absolute bottom-0 w-full z-40 border-t border-white/15 bg-[#FFFFFF12]/[0.035] backdrop-blur-md shadow-inner h-[139px] mobile:w-full mobile:flex-col  mobile:h-auto mobile:top-[720px] tablet:w-full tablet:flex-col  tablet:h-auto tablet:top-[720px] "
      >
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 text-white text-center mt-[13px] mobile:mt-0">
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
            {/* Line vector on right */}
            <img
              src={LineVector}
              alt=""
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
            />
          </div>

          {/* Active Clients */}
          <div
            className="flex items-center justify-center gap-4 py-6 relative mobile:ml-5 mobile:justify-start tablet:justify-start tablet:ml-6"
            ref={InfoRef}
          >
            <img
              src={clientHero}
              alt="Clients Icon"
              className="w-16 h-15 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
                {" "}
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
            className="flex items-center justify-center gap-4 py-6 relative "
            ref={InfoRef}
          >
            <img
              src={uptimeHero}
              alt="Uptime Icon"
              className="w-16 h-15 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
                {" "}
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
            className="flex items-center justify-center gap-4 py-6 relative mobile:ml-5 mobile:justify-start tablet:justify-start tablet:ml-6"
            ref={InfoRef}
          >
            <img
              src={PartnerHero}
              alt="Partners Icon"
              className="w-16 h-16 mobile:w-[40px]"
            />
            <div className="text-left">
              <h1 className="text-3xl font-bold mobile:text-[24px]">
                {" "}
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
