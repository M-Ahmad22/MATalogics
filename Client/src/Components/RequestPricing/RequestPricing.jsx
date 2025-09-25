import React, { useState } from "react";
import ScalingPlan from "../../assets/ScalingPlan.svg";
import GreenComponent from "../../assets/GreenComponent.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const RequestPricing = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/request-pricing`,
        formData
      );
      toast.success(res.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="RequestPricing"
      className="w-full h-[904px] flex justify-center items-center bg-[#F8F8F9] mobile:h-auto tablet:h-auto medium:h-auto"
    >
      <div className="w-[1065px] h-[744px] rounded-[20px] border-1 border-[#CCCCCC] bg-[#FCFCFC] p-[72px] flex flex-col justify-center items-center mobile:w-[90%] mobile:h-auto mobile:px-0 mobile:my-[50px] tablet:w-[90%] tablet:h-auto tablet:px-0 tablet:my-[50px] ">
        <motion.div
          initial={{ opacity: 0, y: -150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="RequestPricingTitle gap-[13.5px] h-auto w-[100%] flex flex-col justify-center items-center "
        >
          <h1 className="font-[Outfit] text-[38px] not-italic font-bold leading-[45.5px] tracking-[-0.71px] uppercase text-[#1D2939] mb-1 ml-3 mobile:text-[30px] mobile:ml-0 mobile:leading-[40px] mobile:text-center  ">
            Request Pricing
          </h1>
          <h3 className="font-montserrat text-[16px] font-normal leading-[24px] tracking-[0px] ml-3 w-[919px] h-[24px] text-center text-[#1D2939] mobile:w-[90%] mobile:text-center tablet:w-[90%] tablet:text-center">
            We look forward to doing business with you. If you require any
            further information, feel free to contact us
          </h3>
        </motion.div>
        <div className="flex items-center justify-center h-[463.883px] gap-[63px] align-self-stretch mx-1 my-6 mobile:flex-col mobile:h-auto mobile:w-full  tablet:h-auto tablet:w-full tablet:flex-row   ">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="LeftText w-[436.838px]  h-full flex flex-col items-center justify-center gap-[19px] relative mobile:w-full mobile:h-auto mobile:my-[100px]  tablet:w-[50%] tablet:h-auto tablet:my-[0px]"
          >
            <img
              src={ScalingPlan}
              alt=""
              className="w-[242.131px] h-[242.131px] left-0 top-0 absolute mt-1 mobile:mt-0 mobile:top-[-70px] mobile:left-8 tablet:mt-0 tablet:top-[-199px] tablet:left-8"
            />
            <h1
              className="text-[#1E1D28] font-outfit text-[34px] font-semibold leading-[32.98px] tracking-[-0.68px] [h-57px] w-[70%] absolute mt-[99px] align-self-stretch left-0 mobile:mt-[410px] mobile:text-[24px] mobile:left-3 tablet:mt-[140px] tablet:text-[24px] tablet:left-3 tablet:w-full"
              style={{
                leadingTrim: "both",
              }}
            >
              Discuss your idea with our live Agent
            </h1>
            <h2 className="font-outfit text-[14px] font-normal leading-[22px] tracking-[0px] w-full  text-start text-[#1D2939] absolute left-0  mt-[270px] mobile:mt-[580px]  mobile:left-3 tablet:mt-[322px]  tablet:left-3">
              Whether you are a business owner or simply exploring, MATalogics
              Agent will help you understand how IT solutions can be designed to
              meet your needs.
            </h2>
            <Link to="/contact">
              <button className="absolute left-0 bottom-0 px-[24.409px] py-[8.136px] flex justify-center items-center gap-[5.429px] border-[0.643px] border-[#0045E6] text-[14px] font-semibold rounded-[5.085px] leading-[21px] text-[#0045E6]  mobile:bottom-[-389px] mobile:left-3 tablet:bottom-[-285px] tablet:left-3">
                <img
                  src={GreenComponent}
                  alt=""
                  className=" absolute left-4 pb-0 px-0 h-[10.003px] w-[10.003px] animate-blink"
                />

                <span className="ml-[9.003px] px-0 mr-0 ">Book Call</span>
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="RightForm w-[436.838px]  h-full flex flex-col items-start gap-[17px] relative mobile:w-[90%] mobile:h-auto mobile:my-[100px] mobile:mt-[280px] tablet:h-auto tablet:my-[0px] tablet:mt-[30px]"
          >
            <form
              onSubmit={handleSubmit}
              className="h-auto w-full space-y-5 tablet:space-y-4"
            >
              {/* Name  */}
              <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                <label
                  className="text-[#1D2939] font-outfit text-[16px] font-normal leading-[15.435px]"
                  style={{
                    fontStyle: "normal",
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="flex justify-center items-start h-[44px]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-2 py-2 mt-3 outline-none"
                  id=""
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Email  */}
              <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                <label
                  className="text-[#1D2939] font-outfit text-[16px] font-normal leading-[15.435px]"
                  style={{
                    fontStyle: "normal",
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="flex justify-center items-start h-[44px]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-2 py-2 mt-3 outline-none"
                  id=""
                  placeholder="Info@MATalogics.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Number  */}
              <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                <label
                  className="text-[#1D2939] font-outfit text-[16px] font-normal leading-[15.435px]"
                  style={{
                    fontStyle: "normal",
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  Phone{" "}
                  <span className="text-[13px] font-light">(optional)</span>
                </label>
                <input
                  type="phone"
                  className="flex justify-center items-start h-[44px]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-2 py-2 mt-3 outline-none"
                  id=""
                  placeholder="Enter Your Whatsapp Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* Message  */}
              <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                <label
                  className="text-[#1D2939] font-outfit text-[16px] font-normal leading-[15.435px]"
                  style={{
                    fontStyle: "normal",
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="flex justify-center items-start h-[107px]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-2 py-2 mt-3 outline-none overflow-y-auto-scroll"
                  id=""
                  placeholder="Enter Your Project Details Here"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="absolute left-0 bottom-0 px-[24.409px] py-[8.136px] flex justify-center items-center gap-[5.429px] border-[0.643px] bg-[#0045E6] text-[14px] font-semibold rounded-[5.085px] leading-[21px] text-[#fff] mt-3 mobile:bottom-[-100px] mobile:w-full  tablet:bottom-[-70px] tablet:w-full"
              >
                Request Pricing
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RequestPricing;
