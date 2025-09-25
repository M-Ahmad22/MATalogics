import React from "react";
import BlogOne from "../../assets/BlogOne.png";
import BlogTwoVideo from "../../assets/BlogTwoVideo.mp4";
import BlogThree from "../../assets/BlogThree.png";
import AvatarBlog from "../../assets/AvatarBlog.png";
import "./Card.jsx";
import Card from "./Card.jsx";
import { motion } from "framer-motion";

const BlogData = [
  {
    id: 1,
    title: "The Power of No-Code and Low-Code Development",
    Description:
      "Explore the growing trend of no-code and low-code development platforms that empower users to build software applications without extensive coding knowledge. Discuss the benefits of these platforms, such as faster development cycles, increased agility, and broader participation in software creation.",
    img: AvatarBlog,
    name: "Tetyana Fedoriv",
    post: "Competency Manager",
  },
  {
    id: 2,
    title: "Next-Generation User Interfaces: Beyond Screens and Keyboards",
    Description:
      "Examine the evolution of user interfaces beyond traditional screens and keyboards. Discuss emerging interface technologies such as voice recognition, gesture control, augmented reality (AR), and virtual reality (VR), and speculate on their impact on user experience and interaction design.",
    img: AvatarBlog,
    name: "Tetyana Fedoriv",
    post: "Competency Manager",
  },
  {
    id: 3,
    title: "The Era of Decentralised Applications (DApps)",
    Description:
      "Dive into the world of decentralised applications (DApps) built on blockchain technology. Explain how DApps differ from traditional applications, explore their potential advantages in terms of transparency, security, and censorship resistance, and highlight notable examples across various industries.",
    img: AvatarBlog,
    name: "Tetyana Fedoriv",
    post: "Competency Manager",
  },
];
const Blog = () => {
  return (
    <section
      id="PortfolioSection"
      className="w-full h-[952px] bg-[#F8F8F9] flex justify-center items-center pt-[40px] pb-[30px] mobile:h-auto tablet:h-auto medium:h-auto    "
    >
      <div className="h-[auto] w-[72%] flex flex-col relative justify-center items-center mobile:w-full tablet:w-full medium:w-full large:w-[90%]">
        <motion.div
          initial={{ opacity: 0, x: -250 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="BlogTitle gap-[8px] h-auto w-[100%] flex flex-col justify-center items-center "
        >
          <h1 className="font-[Outfit] text-[48px] not-italic font-bold leading-[52.5px] tracking-[-0.84px] capitalize text-[#1E1D28] mb-3 ml-3 mobile:text-[30px] mobile:leading-[40px] mobile:ml-0 ">
            <span className="text-[#0045E6]">Latest </span> from Our Blog
          </h1>
          <h3 className="font-outfit text-[18px] font-normal leading-[24px] tracking-[0.5px] ml-3 w-[543px] text-center mobile:w-[90%] mobile:ml-0 ">
            Insights, trends, and updates from the world of software, AI, and
            digital strategy brought to you by MATalogics.
          </h3>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="BlogCards w-[100%] h-[600px] flex justify-center items-center mt-[40px] mobile:flex-col mobile:h-auto tablet:flex-col tablet:h-auto medium:flex-col medium:h-auto "
        >
          <div className="LeftCards h-[100%] w-[575px] flex flex-col justify-center items-center  mx-1 my-1 mobile:w-full mobile:h-auto mobile:flex-col-reverse">
            <div className="TopCard w-[100%]  flex  justify-center items-center mx-1 my-1 mobile:h-auto mobile:w-[90%] mobile:flex-col">
              <div className="w-[271.512px] h-[278.131px] flex flex-col justify-center items-center  mx-1 my-1 rounded-[8.825px] ">
                <img
                  src={BlogOne}
                  alt=""
                  className="inset-0 w-full h-full object-cover z-10  rounded-[8.825px]"
                />
              </div>
              <div className="w-[271.512px] h-[278.131px] flex flex-col justify-center items-center border-[1px] border-[#D0D5DD] rounded-[8.825px] bg-[#fff] mx-1 my-1">
                {BlogData.map((item, index) => {
                  const indexCheck = index === BlogData.length - 3;
                  if (indexCheck) {
                    return (
                      <Card
                        key={index}
                        title={item.title}
                        description={item.Description}
                        img={item.img}
                        name={item.name}
                        post={item.post}
                        id={item.id}
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="BottomCard w-[100%]  flex  justify-center items-center mx-1 my-1 mobile:h-auto mobile:w-[100%] mobile:flex-col ">
              <div className="w-[271.512px] h-[278.131px] flex flex-col justify-center items-center border-[1px] border-[#D0D5DD] rounded-[8.825px] bg-[#fff] mx-1 my-1">
                {BlogData.map((item, index) => {
                  const indexCheck = index === BlogData.length - 2;
                  if (indexCheck) {
                    return (
                      <Card
                        key={index}
                        title={item.title}
                        description={item.Description}
                        img={item.img}
                        name={item.name}
                        post={item.post}
                        id={item.id}
                      />
                    );
                  }
                })}
              </div>
              <div className="w-[271.512px] h-[278.131px] flex flex-col justify-center items-center  mx-1 my-1 rounded-[8.825px] ">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="inset-0 w-full h-full object-cover z-10  rounded-[8.825px] "
                >
                  <source src={BlogTwoVideo} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
          <div className="relative RightCard h-[95.5%] w-[575px] flex flex-col justify-center items-center  mx-1 my-1 rounded-[8.825px] mobile:w-[66%] mobile:h-auto mobile:flex-col tablet:px-3 medium:px-3 ">
            <img
              src={BlogThree}
              alt=""
              className="inset-0 w-full h-full object-cover z-10  rounded-[8.825px]"
            />
            <div className="absolute bottom-0 right-0  w-[271.512px] h-[278.131px] flex flex-col justify-center items-center border-[1px] border-[#D0D5DD] rounded-[8.825px] bg-[#fff] z-30 mobile:w-[50%] mobile:h-[50%] mobile:bottom-[9.6%] mobile:right-[10%] mobile:z-10 transform mobile:scale-[0.70] tablet:mx-3 medium:mx-3">
              {BlogData.map((item, index) => {
                const indexCheck = index === BlogData.length - 1;
                if (indexCheck) {
                  return (
                    <Card
                      key={index}
                      title={item.title}
                      description={item.Description}
                      img={item.img}
                      name={item.name}
                      post={item.post}
                      id={item.id}
                    />
                  );
                }
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
