import React from "react";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
// import GreenComponent from "../../assets/GreenComponent.svg";
// import GroupSign from "../../assets/GroupSign.svg";
import TalkToExpert from "../../Components/TalkToExpert/TalkToExpert";
import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";
import BgQuality from "../../assets/BgQuality.png";
import SuccessfulProjects from "../../assets/SuccessfulProjects.svg";
import CCApproach from "../../assets/CCApproach.svg";
import OnTime from "../../assets/OnTime.svg";
import InovativeSol from "../../assets/InovativeSol.svg";
import AboutusImg from "../../assets/AboutusImg.png";
import AboutBannerImg from "../../assets/AboutBannerImg.png";
import AboutBannerVideo from "../../assets/AboutBannerVideo.mp4";
import { Helmet } from "react-helmet-async";
const features = [
  {
    title: "100+ Successful Projects",
    desc: "From MVPs to enterprise-grade apps.",
    icon: SuccessfulProjects,
  },
  {
    title: "Client-Centric Approach",
    desc: "We build with empathy and user-first design.",
    icon: CCApproach,
  },
  {
    title: "On-Time Delivery",
    desc: "Agile sprints ensure fast, quality delivery.",
    icon: OnTime,
  },
  {
    title: "Innovative Solutions",
    desc: "Always adapting to new tech & trends.",
    icon: InovativeSol,
  },
];

const AboutFeature = [
  {
    title: "End-to-End Development",
    desc: "From ideation to deployment we handle it all.",
    no: 1,
  },
  {
    title: "Cutting-edge Stack",
    desc: "We use the latest tools like React, Next.js, Docker, Firebase, and AI APIs.",
    no: 2,
  },
  {
    title: "Transparent Collaboration",
    desc: "Clear communication, weekly sprints, and complete project visibility.",
    no: 3,
  },
  {
    title: "Design-Driven Approach",
    desc: "Clean, modern UI/UX crafted in Figma and implemented with TailwindCSS.",
    no: 4,
  },
  {
    title: "Performance Obsessed",
    desc: "Every line of code optimized for speed, SEO, and mobile responsiveness.",
    no: 5,
  },
  {
    title: "Client Success = Our Succes",
    desc: "We invest in long-term partnerships, not just deliverables.",
    no: 6,
  },
];
const About = () => {
  return (
    <>
      <Helmet>
        <title>MATalogics | About Us</title>
        <meta
          name="description"
          content="Learn about MATalogics, our mission, vision, and the team behind our innovative solutions."
        />
        <meta property="og:title" content="MATalogics | About Us" />
        <meta
          property="og:description"
          content="Learn about MATalogics, our mission, vision, and the team behind our innovative solutions."
        />
        <meta
          property="og:image"
          content="https://matalogics.com/path/to/about-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://matalogics.com/about" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MATalogics | About Us" />
        <meta
          name="twitter:description"
          content="Learn about MATalogics, our mission, vision, and the team behind our innovative solutions."
        />
        <meta
          name="twitter:image"
          content="https://matalogics.com/path/to/about-og-image.jpg"
        />
      </Helmet>
      <section className="h-auto bg-[#FFF] w-full large:w-[100%]">
        <div className="relative w-full h-[580px] mobile:h-[90vh] tablet:h-[80vh] medium:h-[90vh] ">
          <img
            src="/Videos/Abstract_Wave_Poster.jpg"
            alt="poster"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover mobile:object-fill"
            preload="metadata"
            poster="/Videos/Abstract_Wave_Poster.jpg"
          >
            <source src="/Videos/Abstract_Wave.webm" type="video/webm" />
            <source
              src="/Videos/Abstract_Wave_Compressed.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]  pt-[50px] mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto medium:h-auto medium:w-full large:h-auto large:w-full">
            <div className="h-[254px] w-[1445px] flex flex-col items-start justify-center mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto medium:w-full medium:h-auto tablet:items-center medium:items-center large:h-auto large:w-[90%] ">
              <h1
                className="text-[#fff] font-outfit text-[41.966px] font-semibold leading-[53px] tracking-[-0.839px] capitalize  mb-[40px] tablet:mt-[20px]"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontStyle: "normal",
                }}
              >
                Your Bespoke MATalogics Partner
              </h1>

              <div className=" flex items-start justify-center gap-[20.963px] mobile:w-full mobile:flex-col mobile:h-auto mobile:items-center mobile:justify-center tablet:h-auto tablet:w-full tablet:flex-col tablet:items-center tablet:justify-center medium:w-full medium:flex-col medium:items-center medium:justify-center large:w-full large:h-auto">
                <div className="relative w-[713px] h-[174px] flex p-[34.972px] flex-col items-start gap-[7.869px] rounded-[8.743px] border-[1px] border-solid border-[#FFFFFF]/[0.44] bg-[#ffffff]/[0.08] backdrop-blur-sm mobile:w-[95%] mobile:h-auto tablet:w-[75%] tablet:h-auto large:w-[50%] large:h-[200px] ">
                  <h1 className="text-[#fff] font-outfit text-[31.475px] font-semibold leading-[39.343px] tracking-[-0.629px] mobile:text-[28px] ">
                    Our Mission
                  </h1>
                  <h2 className="text-[#fff] font-montserrat text-[15.075px] font-normal leading-[22.346px] tracking-[0.2px] text-start mobile:text-[13px]  ">
                    We provide outstanding, tailored MATalogics services,
                    nurturing enduring partnerships built upon collaboration and
                    innovation, to unlock our clients' true potential and propel
                    them towards sustained accomplishment.
                  </h2>
                </div>
                <div className="relative w-[713px] h-[174px] flex p-[34.972px] flex-col items-start gap-[7.869px] rounded-[8.743px] border-[1px] border-solid border-[#FFFFFF]/[0.44] bg-[#ffffff]/[0.08] backdrop-blur-sm mobile:w-[95%] mobile:h-auto tablet:w-[75%] tablet:h-auto large:w-[50%] large:h-[200px]">
                  <h1 className="text-[#fff] font-outfit text-[31.475px] font-semibold leading-[39.343px] tracking-[-0.629px] mobile:text-[28px]">
                    Our Vision
                  </h1>
                  <h2 className="text-[#fff] font-montserrat text-[15.075px] font-normal leading-[22.346px] tracking-[0.2px] text-start mobile:text-[13px]  ">
                    To be a leading force in digital innovation, helping
                    businesses grow, adapt, and succeed in a rapidly evolving
                    world.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="AboutSection h-auto w-full  flex flex-col items-center justify-center mobile:w-full mobile:h-auto tablet:w-full tablet:h-auto medium:w-full medium:h-auto   large:h-auto ">
          <div className="w-auto h-auto mobile:w-full mobile:flex mobile:flex-col-reverse tablet:w-full tablet:flex tablet:flex-col-reverse medium:flex medium:flex-col-reverse medium:w-full medium:h-auto large:h-auto large:w-[100%] ">
            <div className=" w-[1445px] h-[530px] mt-[100px]  flex  mobile:w-full mobile:h-auto mobile:flex-col mobile:mt-[0px] tablet:w-full tablet:h-auto tablet:flex-col tablet:mt-[0px]  medium:w-full medium:h-auto medium:flex-col medium:mt-[0px] large:w-[100%] large:justify-center  ">
              <div className=" w-[526px]  h-[530px] flex flex-col items-center justify-center mobile:w-[100%] tablet:w-[100%]  medium:flex-row medium:w-[100%]  medium:h-auto medium:mb-[50px] ">
                <div className="relative w-[526px] h-[265px]  flex flex-col items-center justify-center mobile:px-[20px] tablet:px-[10px] ">
                  <div>
                    <img
                      src={BgQuality}
                      alt=""
                      className="absolute inset-0 top-0 left-0 w-[526px] h-[265px]"
                    />
                  </div>
                  <div className=" w-[80%] h-[80%] flex flex-col items-start justify-center gap-[15px] z-30">
                    <h1 className="text-[#fff] font-outfit text-[31.122px] font-bold leading-[38.343px] tracking-[-0.622px]  ">
                      Our Work Speaks Quality
                    </h1>
                    <h2 className="font-outfit font-normal leading-[21.6px] text-[17.29px] text-[#fff] w-[420.142px] mobile:w-full">
                      Our diverse backgrounds and collective expertise span
                      various industries, allowing us to approach each
                      engagement with fresh thinking.
                    </h2>
                  </div>
                </div>

                <div className="w-[526px] h-[265px] bg-[#F5F7F8] flex flex-col items-center justify-center">
                  <div className=" w-[80%] h-[80%] flex flex-col items-start justify-center gap-[15px] mobile:px-[20px]">
                    <h1 className="text-[#101828] font-outfit text-[31.122px] font-bold leading-[38.343px] tracking-[-0.622px]  ">
                      Understanding Your World
                    </h1>
                    <h2 className="font-outfit font-normal leading-[21.6px] text-[17.29px] text-[#101828] w-[420.142px] mobile:w-full">
                      Consultants thrive on understanding the intricacies of
                      their clients' worlds, unlocking insights that drive
                      informed decision-making.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="relative w-[918.5px] h-[265px]  flex  items-start justify-center flex-wrap mobile:w-full mobile:h-auto mobile:flex-col tablet:w-[100%] tablet:h-auto medium:w-full medium:h-auto medium:mb-[40px] large:w-[50%]">
                {features.map((item, index) => (
                  <div
                    className="w-[459.25px] h-[265px] border-[#EAECF0] border-[0.4px] mobile:w-full mobile:h-auto mobile:py-[20px] large:w-[324.2px]"
                    key={index}
                  >
                    <div className="w-auto h-auto flex items-center">
                      {" "}
                      <div className="w-[68px] h-[68px] flex justify-center items-center bg-[#F5F7F8] rounded-[10px] mx-14 mt-11 mobile:mt-0 mobile:mx-6 mobile:h-[58px] mobile:w-[58px]">
                        <img
                          src={item.icon}
                          alt=""
                          className="w-[48px] h-[48px] mobile:w-[38px]"
                        />
                      </div>
                      <h1 className="text-[#101828] font-outfit text-[20.748px] font-bold leading-[26.343px] tracking-[0px] mx-1 my-5 mobile:mx-1 hidden mobile:block">
                        {item.title}
                      </h1>
                    </div>

                    <h1 className="text-[#101828] font-outfit text-[20.748px] font-bold leading-[26.343px] tracking-[0px] mx-14 my-5 mobile:mx-6 mobile:hidden">
                      {item.title}
                    </h1>
                    <h2 className="text-[#101828] font-outfit text-[16.748px] font-normal leading-[20.343px] tracking-[0px] w-[248.973px] mx-14 mobile:w-[90%] mobile:mx-6 mobile:my-3 mobile:text-center ">
                      {item.desc}
                    </h2>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-[1405px] my-[0px] flex h-[433px] gap-[30px] ml-8 mobile:w-full mobile:flex-col mobile:h-auto mobile:ml-1 mobile:items-center mobile:justify-center  tablet:w-full tablet:flex-col tablet:h-auto tablet:ml-1 tablet:items-center tablet:justify-center medium:w-full medium:h-auto medium:items-center medium:justify-center large:w-[100%] large:ml-[100px]">
              <div className="w-[50%] h-[433px] flex justify-start items-start flex-col gap-[25px] mt-[76px] mobile:h-auto mobile:w-[90%] mobile:items-start mobile:justify-center mobile:mt-[40px]  tablet:h-auto tablet:w-[90%] tablet:items-start tablet:justify-center tablet:mt-[40px] tablet:text-justify medium:w-[50%] large:w-[45%] ">
                <h1 className="text-[#101828] font-outfit text-[42.748px] font-semibold leading-[51.843px] tracking-[-0.8px] ">
                  About Us
                </h1>
                <h2 className="text-[#101828] font-montserrat text-[15.748px] font-medium leading-[23.85px] tracking-[0.5px] pr-10 mobile:pr-0 mobile:text-justify ">
                  At <span className="font-bold">MATalogics,</span> we blend
                  technology with innovation to craft intelligent, scalable, and
                  beautifully designed digital products. With a team of
                  passionate developers, designers, and strategists we turn
                  ideas into digital reality.
                </h2>
                <h2 className="text-[#101828] font-montserrat text-[15.748px] font-medium leading-[23.85px] tracking-[0.5px] pr-10 mobile:pr-0 mobile:text-justify">
                  Whether it's a startup MVP or an enterprise solution, we
                  deliver with quality, speed, and integrity. Our mission?
                  Empower businesses with future-ready solutions that solve
                  real-world problems.
                </h2>
              </div>
              <div className="w-[50%] large:w-[40%] h-[433px] flex justify-center items-center mobile:w-[90%] mobile:h-auto mobile:mb-[30px] tablet:w-[70%] tablet:h-auto tablet:mb-[30px] medium:w-[50%] medium:h-auto">
                <img
                  src={AboutusImg}
                  alt=""
                  className="rounded-xl mobile:h-full medium:w-[80%] medium:h-[100%] large:w-[80%]"
                />
              </div>
            </div>
          </div>

          <div className="h-[763px] w-full flex justify-center items-center bg-[#06142A] flex-col relative mobile:w-full mobile:h-auto medium:w-full tablet:w-full tablet:h-[130vh]   ">
            <div className="h-auto  w-[1365px] flex justify-start items-start flex-col absolute top-[70px] mobile:w-full mobile:top-[40px] mobile:items-center mobile:h-[150px]  tablet:w-full tablet:top-[40px] tablet:items-center tablet:h-[150px] medium:w-full medium:top-[40px] medium:items-center medium:h-[150px] large:w-full large:ml-[100px]">
              <h1 className="text-[#FFF] font-outfit text-[32px] font-bold leading-[48px] tracking-[-0.64px]">
                What Sets Us Apart
              </h1>
              <h2 className="w-[1107px] text-[#FFF] font-outfit text-[14.777px] font-normal leading-[18.472px] tracking-[0px] mt-5 mobile:w-[90%] mobile:text-center medium:w-[90%] medium:text-center tablet:w-[90%] tablet:text-center">
                We're not just developers we're partners in your success. Our
                values and work culture fuel our commitment to excellence.
              </h2>
            </div>
            <div className="h-auto w-[1305px] flex justify-center items-center flex-col  relative mobile:w-full mobile:flex-col mobile:h-[145vh] medium:w-full medium:flex  tablet:w-full tablet:flex ">
              <div className="h-[255px] w-[435px] flex justify-center items-center absolute left-0 mobile:w-full  mobile:top-[200px] mobile:hidden medium:hidden tablet:hidden">
                <img src={AboutBannerImg} alt="" className="" />
                <div className="h-[255px] w-[435px] absolute left-[64px] top-[38px]  ">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="inset-0  object-cover z-10   w-[280.5px] h-[178px] absolute left-[13px] top-[-4.5px]"
                  >
                    <source
                      src={AboutBannerVideo}
                      type="video/mp4"
                      className=" "
                    />
                  </video>
                  <div className=" w-[280.5px] h-[178px] absolute left-[13px] top-[-4.5px] bg-[#000000]/[0.48] z-50"></div>
                  <div className="w-[73px] h-[320px] bg-[#0045E6]/[0.40] absolute top-[-70px] right-[56%] "></div>
                </div>
              </div>
              {/* mobile */}
              <div className="hidden  mobile:flex mobile:justify-center mobile:items-center mobile:h-[800px]  mobile:w-[90%]  mobile:absolute mobile:top-[150px] tablet:flex ">
                <div className=" flex-col items-start gap-[24.376px] grid mobile:grid-cols-1 grid-cols-1 mt-10">
                  {AboutFeature.map((item, index) => (
                    <div
                      key={index}
                      className="w-[398.143px] h-[106.788px] flex flex-col justify-center items-start bg-[#152135] rounded-[6.861px] relative mobile:w-[100%]  "
                    >
                      <div className="w-[32.579px] h-[32.579px] flex justify-center items-center bg-[#E6E6E6] aspect-[1/1] rounded-full text-[#1E1D28] absolute left-[24px] top-[24px]">
                        <h1 className=" font-outfit text-[16.25px] font-normal leading-[20.313px] ">
                          {item.no}
                        </h1>
                      </div>
                      <h1 className=" text-[#fff] font-outfit text-[16.25px] font-semibold leading-[20.313px] ml-[74px] mt-1">
                        {item.title}
                      </h1>
                      <h2 className="text-[#fff] font-montserrat text-[15.09px] font-normal leading-[18.862px] ml-[74px] mr-4 mt-2">
                        {item.desc}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
              {/* FullScreen */}
              <div className=" w-[816px] h-[370px]  flex-col items-start gap-[24.376px] absolute right-0 grid mobile:grid-cols-1 grid-cols-2 mt-10 mobile:hidden medium:w-[90%] tablet:w-[90%] tablet:hidden large:w-[64%] large:mr-10 ">
                {AboutFeature.map((item, index) => (
                  <div
                    key={index}
                    className="w-[398.143px] h-[106.788px] flex flex-col justify-center items-start bg-[#152135] rounded-[6.861px] relative"
                  >
                    <div className="w-[32.579px] h-[32.579px] flex justify-center items-center bg-[#E6E6E6] aspect-[1/1] rounded-full text-[#1E1D28] absolute left-[24px] top-[24px]">
                      <h1 className=" font-outfit text-[16.25px] font-normal leading-[20.313px] ">
                        {item.no}
                      </h1>
                    </div>
                    <h1 className=" text-[#fff] font-outfit text-[16.25px] font-semibold leading-[20.313px] ml-[74px] mt-1">
                      {item.title}
                    </h1>
                    <h2 className="text-[#fff] font-montserrat text-[15.09px] font-normal leading-[18.862px] ml-[74px] mr-4 mt-2">
                      {item.desc}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[93px] bg-[#0045E6] flex justify-center items-center absolute bottom-0 mobile:w-full mobile:h-auto large:w-full ">
              <h1 className="text-[#FFF] font-outfit text-[22.166px] font-semibold leading-[27.7075px] tracking-[0.5px] mobile:text-justify mobile:w-[90%] mobile:my-[15px] medium:w-[80%]  tablet:my-[25px] tablet:w-[80%] large:my-[25px] large:w-[80%]">
                Join us on our journey as we continue to make a difference in
                the world of IT. Together, we can achieve extraordinary things.
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* <TalkToExpert /> */}
      <RequestPricing />
      <Map />
    </>
  );
};

export default About;
