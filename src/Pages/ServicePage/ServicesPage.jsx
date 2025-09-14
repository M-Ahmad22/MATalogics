import React from "react";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import GreenComponent from "../../assets/GreenComponent.svg";
import GroupSign from "../../assets/GroupSign.svg";
import TalkToExpert from "../../Components/TalkToExpert/TalkToExpert";
import RequestPricing from "../../Components/RequestPricing/RequestPricing";
import Map from "../../Components/Map/Map";
import Mobile from "../../assets/Mobile.svg";
import Backend from "../../assets/Backend.svg";
import Cloud from "../../assets/Cloud.svg";
import AIML from "../../assets/AIML.svg";
import SAAS from "../../assets/SAAS.svg";
import CyberSecurity from "../../assets/CyberSecurity.svg";
import Testing from "../../assets/Testing.svg";
import UIUX from "../../assets/UIUX.svg";
import SEO from "../../assets/SEO.svg";
import MVP from "../../assets/MVP.svg";
import Maintenance from "../../assets/Maintenance.svg";
import Web from "../../assets/Web.svg";
import TechAdvisory from "../../assets/TechAdvisory.svg";

const services = [
  {
    title: "Web & Frontend Services",
    icon: Web,
    desc: "Responsive, SEO-optimized websites using React, Next.js, Tailwind, and CMS platforms.",
    details: [
      "Modern UI/UX with Figma & Adobe XD",
      "Next.js with SSR & ISR",
      "Headless CMS (Sanity, Strapi, Contentful)",
      "SEO & Accessibility Best Practices",
    ],
  },
  {
    title: "Mobile App Development",
    icon: Mobile,
    desc: "Cross-platform and native mobile apps with intuitive UX and Firebase integration.",
    details: [
      "Flutter / React Native Development",
      "Firebase Auth & Firestore",
      "Native Android (Kotlin) & iOS (Swift)",
      "Push Notifications & Deep Linking",
    ],
  },
  {
    title: "Backend & Database Solutions",
    icon: Backend,
    desc: "Scalable backend systems, secure APIs, and high-performance databases tailored for business logic.",
    details: [
      "Node.js / Django / Express",
      "RESTful & GraphQL APIs",
      "JWT / OAuth2 Authentication",
      "MongoDB, MySQL, PostgreSQL",
    ],
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: Cloud,
    desc: "CI/CD pipelines, orchestration, and full DevOps automation using AWS, Docker, and Kubernetes.",
    details: [
      "AWS / Azure / Google Cloud",
      "Docker, Kubernetes, Helm Charts",
      "GitHub Actions / Jenkins CI",
      "Infrastructure as Code (Terraform)",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: AIML,
    desc: "Custom ML models, automation pipelines, and AI integrations like GPT, NLP, and intelligent assistants.",
    details: [
      "TensorFlow, PyTorch, Scikit-learn",
      "OpenAI / GPT / LLM Integration",
      "Recommendation Engines",
      "Data Analytics & Visualization",
    ],
  },
  {
    title: "SaaS Application Development",
    icon: SAAS,
    desc: "Scalable SaaS platforms from MVP to production with secure multi-tenant architecture and analytics dashboards.",
    details: [
      "Multi-Tenant Auth Architecture",
      "Admin Panels & Usage Reports",
      "Stripe / Razorpay Subscriptions",
      "User Management & Email Notifications",
    ],
  },
  {
    title: "Cybersecurity Services",
    icon: CyberSecurity,
    desc: "Harden your application with penetration testing, secure APIs, and real-time monitoring systems.",
    details: [
      "Vulnerability & Penetration Testing",
      "OWASP Best Practice Compliance",
      "Secure API & OAuth2 Flows",
      "SSL / HTTPS / JWT Implementation",
    ],
  },
  {
    title: "QA & Testing",
    icon: Testing,
    desc: "End-to-end QA including automation, performance monitoring, and real device lab testing.",
    details: [
      "Selenium / Cypress / Playwright",
      "Jest, Vitest, & RTL",
      "Mobile QA (BrowserStack / Firebase Test Lab)",
      "Load & Performance Testing",
    ],
  },
  {
    title: "UI/UX Design & Prototyping",
    icon: UIUX,
    desc: "Crafting user-first designs with design systems, accessibility audits, and rapid prototyping.",
    details: [
      "Wireframing in Figma / XD",
      "Design Systems (Tokens + Libraries)",
      "Micro-interaction Design",
      "UX Audits & Heuristic Evaluation",
    ],
  },
  {
    title: "SEO & Performance Optimization",
    icon: SEO,
    desc: "Boost search rankings and site speed using Core Web Vitals, structured data, and SEO best practices.",
    details: [
      "On-page & Technical SEO",
      "Lighthouse / PageSpeed Enhancements",
      "Structured Data & Schema Markup",
      "Image / Asset Optimization",
    ],
  },
  {
    title: "Startup MVP & Launch",
    icon: MVP,
    desc: "MVPs built fast with agile sprints, scalable backend, and rapid feedback cycles — ready for launch.",
    details: [
      "Agile MVP Roadmapping",
      "Iterative Design + Dev Sprints",
      "Full Stack Dev with Deployment",
      "Launch Strategy & Hosting",
    ],
  },
  {
    title: "Maintenance & Technical Support",
    icon: Maintenance,
    desc: "24/7 app monitoring, bug resolution, backups, and SLA-based emergency support.",
    details: [
      "Uptime Monitoring (Pingdom, UptimeRobot)",
      "Bug Fixes & Patch Releases",
      "Version Upgrades & Backups",
      "SLA-driven Emergency Support",
    ],
  },
  {
    title: "Tech Advisory & Consulting",
    icon: TechAdvisory,
    desc: "Get expert help for architecture audits, scaling strategies, and future-proof tech plans.",
    details: [
      "System Architecture Audits",
      "Tech Stack Analysis",
      "Migration Strategy (Monolith → Microservices)",
      "CTO-as-a-Service (for Startups)",
    ],
  },
];

const ServicesHover = () => {
  return (
    <>
      <section className="h-auto bg-[#FFF] mobile:w-full">
        <div className="relative w-full h-[450px] ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="inset-0 w-full h-full object-cover"
          >
            <source src={Abstract_Wave_1920x1080} type="video/mp4" />{" "}
          </video>

          <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]">
            <h2
              className="text-[#fff] font-outfit text-[54px] font-bold leading-[63px]  mb-3 mobile:text-[40px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Our Expert Services
            </h2>
            <p
              className="text-[#fff] font-montserrat text-[16px] font-normal leading-[38px] w-[651px] mobile:w-[90%]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              High-end digital solutions from web and mobile to cloud, AI, and
              beyond.
            </p>
          </div>
        </div>

        <div
          id="services"
          className="w-full h-[auto] bg-[#FFFFFF] flex justify-center items-center mt-[120px] mobile:h-auto mobile:mt-[40px]"
        >
          <div className="h-[auto] w-[72%] flex flex-col relative mobile:w-full mobile:items-center">
            <div className="ServicesTitle align-content-start gap-[8px] h-auto w-[92%] mobile:flex mobile:flex-col mobile:items-center mobile:justify-center ">
              <h1 className="font-[Outfit] text-[48px] not-italic font-semibold leading-[60px] tracking-[-0.96px] capitalize text-[#1E1D28] mb-3 ml-3 mobile:text-[38px]">
                Services We <span className="text-[#0045E6]">Provide</span>
              </h1>
              <h3 className="font-Montserrat text-[17px] font-normal leading-[24px] tracking-[0.96px] ml-3 mobile:w-full mobile:text-center mobile:text-[16px]  ">
                From ideation to deployment MATalogics delivers smart, scalable,
                and secure solutions tailored to your digital goals.
              </h3>
              <button className="absolute right-2 top-4 w-[202px] h-[62px] flex justify-center items-center gap-[6px] bg-[#0045E6] text-[white] border-[1px] text-[16px] font-medium rounded-full  leading-[150px] mobile:top-[185px] ">
                <img
                  src={GreenComponent}
                  alt=""
                  className="pb-0 px-1 animate-blink"
                />
                <span className="px-1 mr-1"> Request Pricing</span>
              </button>
            </div>
            <div className="flex w-full h-auto justify-center items-center ">
              {" "}
              <div className="ServicesCards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full px-1 py-[60px] mx-1 mobile:w-[90%] mobile:mt-[80px]  ">
                {services.map((service, index) => {
                  return (
                    <div
                      className="group relative card h-[403px] w-[399px] bg-[#FFFFFF] mx-1 my-0 rounded-3xl border-[2px] border-[#EAECF0] mobile:w-[100%] mobile:mx-0"
                      key={index}
                    >
                      <div className="ServiceLogo w-[full]  flex items-center justify-center border-[0px] rounded-xl mx-2 my-[32.07px] gap-[15.14px] ">
                        <div className="rounded-full h-[53.938px] w-[53.938px] bg-[#0045E6] flex items-center justify-center">
                          <img
                            src={service.icon}
                            alt=""
                            className="h-[29px] w-[29px]"
                          />
                        </div>

                        <h1
                          className="font-[Outfit]  tex8t-[17.5px] font-[700] leading-[21.6px] tracking-[1.2px] mx-5"
                          style={{ leadingTrim: "both", textEdge: "cap" }}
                        >
                          {service.title}
                        </h1>
                      </div>

                      <h2 className="font-montserrat z-30 text-[14px] font-[500] leading-[21.313px] tracking-[px] ml-7 mr-4 w-[340px] text-[#1E1D28] ">
                        {service.desc}
                      </h2>
                      <div className="absolute MainImgService w-full h-[205px] flex items-center justify-start bottom-0 rounded-[22.02px] bg-[#F8F8F9]  ">
                        <ul className="absolute z-50 space-y-0 mx-5 flex flex-col items-start justify-start gap-[21.13px]">
                          {service.details?.map((details, hIndex) => (
                            <li
                              key={hIndex}
                              className="font-montserrat text-[14px] leading-[21.313px] flex items-start font-medium"
                              style={{
                                leadingTrim: "both",
                                textEdge: "cap",
                              }}
                            >
                              <span className="mr-2">
                                <img
                                  src={GroupSign}
                                  alt=""
                                  className="mt-[2.5px]"
                                />
                              </span>{" "}
                              {details}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <TalkToExpert />
      <RequestPricing />
      <Map />
    </>
  );
};

export default ServicesHover;

// <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto py-12 ">
//   {services.map((svc, i) => (
//     <div
//       key={i}
//       className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 h-[600px]"
//     >
//       {/* Hover Gradient Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#2C5DA9] to-[#4C85E2] z-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl" />

//       <div className="relative z-10 p-6 flex flex-col h-[460px] justify-between">
//         {/* Icon and Title */}
//         <div>
//           <div className="w-14 h-14 flex items-center justify-center bg-[#2C5DA9] rounded-full mb-4">
//             {svc.icon}
//           </div>
//           <h3 className="text-xl font-bold text-[#1A2A4D] group-hover:text-white transition">
//             {svc.title}
//           </h3>
//           <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-100 transition">
//             {svc.desc}
//           </p>
//         </div>

//         {/* Lottie Animation */}
//         <div className="w-full h-32 mt-4 group-hover:mt-[200px]  transition duration-500">
//           <Lottie animationData={svc.animation} loop={true} />
//         </div>

//         {/* Hover Reveal Details */}
//         <div className="absolute bottom-[100px]  left-0 right-0 bg-white bg-opacity-90 p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
//           <ul className="text-sm text-[#1A2A4D] list-disc pl-4">
//             {svc.details.map((point, idx) => (
//               <li key={idx}>{point}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>

// HoverEffect
//               <div
//                 className="absolute card bottom-0 left-0 w-full flex justify-center
//             transform translate-y-0 opacity-0
//             group-hover:translate-y-0 group-hover:opacity-100
//             transition-all duration-300 ease-in-out inset-0"
//               >
//                 <img
//                   src={service.HoverImg}
//                   alt=""
//                   className="h-[500px] w-[400px] px-1 py-2 rounded-[22px] object-cover z-[-20] pt-1"
//                 />

//                 {/* Overlay background */}
//                 <div className="absolute h-[500px] w-[400px] ">
//                   <div className="absolute left-[2px] h-[490px] w-[389px] mx-1 my-1 bg-[#0045E6]/[0.62] rounded-[17px] mt-[3px] "></div>

//                   <div className="absolute top-0 left-0 p-0 z-20">
//                     <div className="ServiceLogo w-[78px] h-[78px] bg-[#F5F7F8]/[0.12] flex items-center justify-center border-[0px] rounded-xl mx-[26px] my-9">
//                       <img
//                         src={service.icon}
//                         alt=""
//                         className="group-hover:invert group-hover:brightness-0 group-hover:contrast-100"
//                       />
//                     </div>
//                     <h1 className="font-[Outfit] z-30 text-[16.5px] font-[500] leading-[21.6px] tracking-[1.2px] mx-7 mb-4 text-white ">
//                       {service.title}
//                     </h1>
//                     <h2 className="font-montserrat z-30 text-[14px] font-[400] leading-[21px] tracking-[1.3px] ml-7 mr-4 text-white">
//                       {service.description}
//                     </h2>
//                   </div>

//                   <button className="absolute bottom-9 left-8 flex items-center text-white font-outfit text-[17px] font-semibold">
//                     Read More
//                     <img src={ArrowUpWhite} alt="" className="ml-2" />
//                   </button>
//                 </div>
//               </div>
