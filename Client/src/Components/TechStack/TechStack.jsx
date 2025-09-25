import React, { useState, useEffect } from "react";
import LineTech from "../../assets/LineTech.png";
import JavaTech from "../../assets/JAVATech.webp";
import pythonTech from "../../assets/pythonTech.svg";
import MernStack from "../../assets/MERNTech.png";
import MeanStack from "../../assets/MeanStackTech.png";
import LampStack from "../../assets/LAMPStackTech.png";
import flutterio from "../../assets/flutterio.svg";
import reactjs from "../../assets/reactjs.svg";
import apple from "../../assets/apple.svg";
import Android from "../../assets/Android_.svg";
import angular from "../../assets/angular.svg";
import nodejs from "../../assets/nodejs.svg";
import dotnetcore from "../../assets/dot-net-core.svg";
import firebase from "../../assets/firebase.svg";
import djangoproject from "../../assets/djangoproject.svg";
import Reactnative from "../../assets/nodejs.svg";
import CSS3 from "../../assets/Tailwind.png";
import JS from "../../assets/JavaScript-Symbol.png";
import MySql from "../../assets/sql-database-icon-logo-design-ui-or-ux-app-png.webp";
import NextJs from "../../assets/NextJs.png";
import mongodb from "../../assets/mongodb.svg";
import apache_kafka from "../../assets/apache_kafka.svg";
import TensorFlow_logo from "../../assets/TensorFlow_logo.png";
import Kubernetes_logo_without_workmark from "../../assets/Kubernetes_logo_without_workmark.svg";
import pytorch_logo_icon_169823 from "../../assets/pytorch_logo_icon_169823.png";
import Scikit_learn_logo_small from "../../assets/Scikit_learn_logo_small.png";
import terraform from "../../assets/terraform.png";
import Octiconsmarkgithub from "../../assets/Octicons-mark-github.svg";
import n8n from "../../assets/n8n.png";
import zapierlogo from "../../assets/zapier-logo.png";
import HubSpot_Logo from "../../assets/HubSpot_Logo.png";
import CircularProgress from "@mui/material/CircularProgress";

const categories = {
  "Full Stack": [
    {
      icon: MernStack,
    },
    {
      icon: MeanStack,
    },
    {
      icon: LampStack,
    },

    { icon: pythonTech },
    { icon: JavaTech },
  ],
  Frontend: [
    { icon: JS },
    { icon: CSS3 },
    { icon: reactjs },
    { icon: NextJs },
    { icon: angular },
  ],
  Backend: [
    { icon: nodejs },
    { icon: djangoproject },
    { icon: dotnetcore },
    { icon: apache_kafka },
  ],
  Mobile: [
    { icon: flutterio },
    { icon: Android },
    { icon: apple },
    { icon: Reactnative },
  ],

  "ML & DevOps": [
    { icon: TensorFlow_logo },
    { icon: pytorch_logo_icon_169823 },
    { icon: terraform },
    { icon: Kubernetes_logo_without_workmark },
    { icon: Scikit_learn_logo_small },
    { icon: Octiconsmarkgithub },
  ],

  Database: [
    {
      icon: firebase,
    },
    { icon: MySql },
    { icon: mongodb },
  ],
  "AI Automation": [
    { icon: n8n },
    { icon: zapierlogo },
    { icon: HubSpot_Logo },
  ],
};

const TechStack = () => {
  const [selected, setSelected] = useState("Full Stack");
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const techs = categories[selected];
  useEffect(() => {
    setLoadedCount(0);
    setLoading(true);
  }, [selected]);

  useEffect(() => {
    if (loadedCount === techs.length && techs.length > 0) {
      const timeout = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [loadedCount, techs.length]);

  return (
    <section
      id="tech"
      className="flex flex-col justify-center items-center gap-[61px] my-[100px] w-full h-[558px] mobile:h-auto tablet:h-auto "
    >
      <div className="TechStackTitle gap-[12px] h-auto w-[576px] flex flex-col justify-center items-center mobile:w-full tablet:w-full ">
        <h1 className="font-[Outfit] text-[48px] not-italic font-bold leading-[52.5px] tracking-[-0.84px] capitalize text-[#1E1D28] mb-3 mobile:text-[38px] ">
          <span className="text-[#0045E6]">Our Core </span>Technologies
        </h1>
        <h3 className="font-outfit text-[16px] font-normal leading-[24px] tracking-[0.5px]  w-[576px] text-center text-[#1D2939] mobile:w-full ">
          MATalogics works under various modern technologies for effective,
          scalable, and future-proof custom software development.
        </h3>
      </div>
      <div className="TechSelection mt-[0px] mb-[0px] flex flex-col w-full justify-center items-center gap-[69px]">
        <div
          className="w-[1020px] max-w-full h-auto flex-shrink-0 rounded-[90px] shadow-[0_0_33px_0_rgba(0,0,0,0.06)] 
     flex items-center justify-center gap-[28px] 
     flex-wrap 
      md:h-[77px] md:gap-[28px] mobile:rounded-[20px] mobile:w-[90%] mobile:h-[200px] mobile:py-6 tablet:rounded-[20px] tablet:w-[90%] tablet:h-[200px] tablet:py-6 "
        >
          {Object.keys(categories).map((cat, index, arr) => (
            <React.Fragment key={cat}>
              <button
                onClick={() => setSelected(cat)}
                className={`flex items-center font-outfit text-[18px] font-normal leading-[22.5px] 
          ${
            selected === cat ? "text-[#0045E6]" : "text-[#1D2939]"
          } mobile:my-0 mobile:leading-[12.5px]`}
              >
                <span>{cat}</span>
              </button>

              {index !== arr.length - 1 && (
                <div className="flex justify-center items-center">
                  <img
                    src={LineTech}
                    alt=""
                    className="h-[30px] w-[1px] hidden md:block"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Loader overlay */}
        {loading && (
          <div className="absolute flex justify-center items-center w-full h-[300px]">
            <CircularProgress />
          </div>
        )}

        <div className="h-[200px] w-[870px] flex flex-wrap justify-center items-center gap-[43px] mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto ">
          {categories[selected].map((tech, index) => (
            <div
              key={index}
              className={`w-[139.796px] h-[108.549px] flex flex-col items-center justify-center text-center rounded-[12.477px] bg-[#fff] border-[0.791px] border-[#E0E0E0] hover:shadow-md transition-transform duration-300 hover:-translate-y-0 ${
                loading ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex justify-center items-center">
                <img
                  src={tech.icon}
                  alt=""
                  className="w-[85.195px] h-[56.743px]"
                  onLoad={() => setLoadedCount((prev) => prev + 1)}
                  onError={() => setLoadedCount((prev) => prev + 1)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
