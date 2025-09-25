import React from "react";
import { Link } from "react-router-dom";
import MainLogo from "../../assets/logoWhite.png";
import Twitter from "../../assets/Twitter.svg";
import FB from "../../assets/FB.svg";
import Youtube from "../../assets/Youtube.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Github from "../../assets/Github.svg";
import VectorCheck from "../../assets/Vector 85.png";
import phone from "../../assets/phone.svg";
import send from "../../assets/send.svg";
import signsdirection from "../../assets/signsdirection.svg";

const links = [
  { icon: FB, link: "https://www.facebook.com/profile.php?id=61580399964182" },
  { icon: Youtube, link: "https://www.instagram.com/matalogics" },
  { icon: Linkedin, link: "https://www.linkedin.com/company/matalogics" },
  // { icon: Twitter, link: "" },
  // { icon: Github, link: "" },
];

const ContactDetails = [
  { icon: phone, text: "+92 309 6311196" },
  { icon: send, text: "info@domain.com" },
  { icon: signsdirection, text: "Lahore, Pakistan" },
];

const Footer = () => {
  return (
    <footer className="bg-[#1E1D28] w-full flex-shrink-0 flex justify-center items-center  mobile:px-[20px]">
      <div className="w-[100%] sm:w-[80%] flex flex-col items-center">
        <div className="sm:w-[80%] flex flex-col sm:flex-row justify-between items-start my-[62px] gap-[30px] sm:gap-0 tablet:w-[100%] tablet:flex-col medium:w-[85%] medium:flex-col  SpecificLarge:w-[90%]">
          <div className="h-[188px] w-full sm:w-[248px] flex flex-col justify-between relative mobile:h-auto tablet:w-[90%] tablet:h-auto medium:w-[90%] medium:h-auto medium:mb-[40px]  ">
            <div className="flex items-center mb-4 mobile:mb-[30px] tablet:mb-[10px]  ">
              <img
                src={MainLogo}
                alt="logo"
                className="w-[56.183px] h-[54px] aspect-[51.18/51]"
              />
              <h1
                className="text-[#fff] font-manrope text-[25.147px] font-extrabold leading-[37.76px] tracking-[-0.755px] mx-2"
                style={{
                  fontStyle: "normal",
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                MATalogics
              </h1>
            </div>
            <h2 className="text-[#fff] font-montserrat text-[14px] font-normal leading-[22.88px] mobile:text-justify tablet:text-justify SpecificLarge:text-justify">
              Empowering businesses with cutting-edge web, mobile, and AI
              solutions crafted with logic and precision.
            </h2>
          </div>

          <div className="flex mobile:flex-col tablet:my-[40px] mobile:h-auto mobile:gap-[45px] SpecificLarge:w-auto SpecificLarge:mx-[20px] ">
            <div className="h-[188px] w-full sm:w-[248px] flex flex-col justify-between items-start SpecificLarge:pl-[40px]">
              <h1 className="text-[#fff] font-montserrat text-[18px] font-bold leading-[21.68px] py-[14px] tracking-[0.5px]">
                About US
              </h1>
              <ul className="text-[#fff] font-montserrat text-[14px] font-normal leading-[16.88px] tracking-[1px] flex flex-col items-start gap-[18px] pb-[8px]">
                <Link to="/Services">Services</Link>
                <Link to="/About">About</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Courses">Courses</Link>
                <Link to="/Contact">Contact</Link>
              </ul>
            </div>

            <div className="h-[188px] w-full sm:w-[248px] flex flex-col items-start mobile:h-auto">
              <h1 className="text-[#fff] font-montserrat text-[18px] font-bold leading-[21.68px] pt-[14px] tracking-[0.5px]">
                Contact
              </h1>
              <div className="text-[#fff] w-full font-montserrat text-[14px] font-normal leading-[16.88px] tracking-[1px] flex flex-col items-start gap-[22px] mt-[24px]">
                {ContactDetails.map((item, index) => (
                  <div key={index} className="flex gap-[12px]">
                    <img src={item.icon} alt="" className="w-[18px] h-[18px]" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
            <div className=" hidden medium:flex h-[188px] w-full sm:w-[358px] flex-col items-start tablet:w-full">
              <h1 className="text-[#fff] font-montserrat text-[18px] font-bold leading-[21.68px] pt-[14px] tracking-[0.5px] ml-1">
                Subscribe
              </h1>
              <h2 className="text-[#fff] w-full font-montserrat text-[14px] font-normal leading-[17.88px] tracking-[1px] mt-[24px] ml-1">
                Get the latest insights and updates from MATalogics.
              </h2>
              <div className="flex w-full sm:w-[348px] h-[44px] items-center justify-between rounded-[775.266px] border-[0.776px] border-[#C9CDD2] bg-[#FFF] mt-4 px-3 mobile:pr-1 tablet:w-full">
                <input
                  type="email"
                  className="flex-grow font-inter text-[12.417px] font-normal leading-[18.625px] outline-none bg-transparent"
                  placeholder="Info@MATalogics.com"
                />
                <button className="px-[18.625px] py-[9.313px] rounded-[802.431px] bg-[#0045E6] font-inter text-[12.417px] font-medium leading-[18.625px] text-[#fff] ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="medium:hidden h-[188px] w-full sm:w-[358px] flex flex-col items-start tablet:w-full">
            <h1 className="text-[#fff] font-montserrat text-[18px] font-bold leading-[21.68px] pt-[14px] tracking-[0.5px] ml-1">
              Subscribe
            </h1>
            <h2 className="text-[#fff] w-full font-montserrat text-[14px] font-normal leading-[17.88px] tracking-[1px] mt-[24px] ml-1">
              Get the latest insights and updates from MATalogics.
            </h2>
            <div className="flex w-full sm:w-[348px] h-[44px] items-center justify-between rounded-[775.266px] border-[0.776px] border-[#C9CDD2] bg-[#FFF] mt-4 px-3 mobile:pr-1 tablet:w-full">
              <input
                type="email"
                className="flex-grow font-inter text-[12.417px] font-normal leading-[18.625px] outline-none bg-transparent"
                placeholder="Info@MATalogics.com"
              />
              <button className="px-[18.625px] py-[9.313px] rounded-[802.431px] bg-[#0045E6] font-inter text-[12.417px] font-medium leading-[18.625px] text-[#fff] ">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[80%] flex justify-center mb-6">
          <img src={VectorCheck} alt="" className="w-full" />
        </div>

        <div className="w-full sm:w-[80%] flex flex-col sm:flex-row justify-between items-center gap-4 mb-9 tablet:flex-col">
          <h1 className="font-montserrat text-[14px] font-normal leading-[19.88px] opacity-65 text-[#fff]">
            © 2025 MATalogics. All rights reserved.
          </h1>
          <Link
            to="/privacy"
            className="text-[#fff] text-[14px] opacity-65 underline hover:text-[15px] transition-all"
          >
            Privacy & Terms
          </Link>
          <div className="flex items-center gap-[10.588px]">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[27.53px] h-[27.53px] rounded-[52.412px] bg-[#F1F2F4] flex justify-center items-center hover:scale-[1.4] cursor-pointer"
              >
                <img
                  src={item.icon}
                  alt="social-icon"
                  className="h-[10.588px] w-[10.588px] "
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
