import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import profileImage from "../../assets/ProfileAhmad.png";
import timezones from "../../Data/timezones.json";
import Timer from "../../assets/Timmer.svg";
import GoogleMeet from "../../assets/GoogleMeet.svg";
import Globe from "../../assets/Globe.svg";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import axios from "axios";
import toast from "react-hot-toast";

const formatTime = (timeZone) => {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());
};

const BookCallForm = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTime, setSelectedTime] = useState("");
  const [timezone, setTimezone] = useState("Asia/Karachi (PKT)");
  const [projectBrief, setProjectBrief] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [timezoneModalOpen, setTimezoneModalOpen] = useState(false);
  const [timezoneSearch, setTimezoneSearch] = useState("");

  const timezoneKeys = Object.keys(timezones);
  const filteredTimezones = timezoneKeys.filter((tz) =>
    tz.toLowerCase().includes(timezoneSearch.toLowerCase())
  );
  const selectedTimezone = timezone.split(" ")[0];

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (selectedDate) setStep(2);
  };

  const handlePrev = () => step > 1 && setStep(step - 1);

  const isFormValid = fullName && email && projectBrief;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!isFormValid) return toast.error("Please fill all required fields.");

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/book-call`,
        {
          fullName,
          email,
          projectBrief,
          selectedDate: selectedDate.format("YYYY-MM-DD"),
          selectedTime,
          timezone: selectedTimezone,
        }
      );
      toast.success(res.data.message || "Meeting booked successfully!");
      setStep(3);
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  // prevent scroll when timezone modal is open
  useEffect(() => {
    document.body.style.overflow = timezoneModalOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [timezoneModalOpen]);

  return (
    <>
      <div className="w-full h-full flex items-start border border-gray-200 rounded-lg mobile:w-full mobile:h-[175vh] mobile:flex-col mobile:items-center tablet:w-full tablet:h-[175vh] tablet:flex-col tablet:items-center medium:w-full ">
        {/* Profile Section */}
        <div className=" text-[#1A2A4D] p-12  text-center h-full w-[35%] mobile:w-[95%] mobile:h-auto tablet:w-[80%] tablet:h-auto medium:px-4 ">
          <div className="flex justify-start items-center w-full h-auto ">
            <div className="w-[77px] h-[77px] rounded-full bg-[#D9D9D9] flex justify-center items-start overflow-hidden">
              <img
                src={profileImage}
                alt="Expert"
                className="w-[82%] h-[100%] object-center aspect-[55/94] mt-2"
              />
            </div>

            <div className="flex flex-col justify-center items-start gap-2 h-full  mx-3 ">
              <h1
                className="text-[#3C3737] tracking-[-0.161px] leading-[22.11px]  font-normal capitalize text-[18.851px] font-outfit "
                style={{
                  fontStyle: "normal",
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                Founder & CEO
              </h1>
              <h2
                className="text-[#3C3737] tracking-[-0.131px] leading-[18.11px]  font-normal capitalize text-[15.851px] font-outfit "
                style={{
                  fontStyle: "normal",
                  leadingTrim: "both",
                  textEdge: "cap",
                }}
              >
                Muhammad Ahmad Tahir
              </h2>
            </div>
          </div>

          <h1
            className="text-[#000] tracking-[0px] leading-normal  font-normal capitalize text-[21.851px] font-outfit mt-[30px] text-start "
            style={{
              fontStyle: "normal",
              leadingTrim: "both",
              textEdge: "cap",
            }}
          >
            15 Min Discovery Meeting
          </h1>
          <h2
            className="text-[#000] tracking-[0.2px] leading-normal  font-normal capitalize text-[16.851px] font-outfit mt-2  text-start w-[90%]"
            style={{
              fontStyle: "normal",
              leadingTrim: "both",
              textEdge: "cap",
            }}
          >
            Get free guidance on your project. Book a 30-minute Google Meeting.
          </h2>

          <div className="Timer mt-[80px] flex justify-start items-center w-full h-auto mb-8 mobile:mt-8 tablet:mt-8">
            <img src={Timer} alt="" />
            <div className="mx-5 w-[75px] h-[49px] bg-[#fff] border-[1px] border-[#D1D5DB] rounded-[10px] flex justify-center items-center">
              <div className="w-[68px] h-[42px] bg-[#D1D5DB] rounded-[7px] flex justify-center items-center">
                <h1
                  className="text-[#3C3737] tracking-[0.2px] leading-normal  font-bold capitalize text-[16.851px] font-montserrat "
                  style={{
                    fontStyle: "normal",
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  15m
                </h1>
              </div>
            </div>
          </div>
          <div className="GoogleMeet flex justify-start items-center w-full h-auto mb-8">
            <img src={GoogleMeet} alt="" />
            <h1 className="mx-6 text-[#3C3737] tracking-[0.2px] leading-normal  font-medium capitalize text-[16.851px] font-montserrat">
              Google Meet
            </h1>
          </div>
          <div
            className="TimeLocation h-auto w-full flex justify-start items-start flex-col"
            onClick={() => setTimezoneModalOpen(true)}
          >
            <div className=" text-[#3C3737] tracking-[0.2px] leading-normal  font-medium capitalize text-[16.851px] font-montserrat flex justify-start items-center bg-white cursor-pointer">
              <img src={Globe} alt="" className="w-[18px] h-[18px]" />
              <span className=" mx-6">{selectedTimezone}</span>
              <span className="">({formatTime(selectedTimezone)})</span>
            </div>
            <h1 className="text-[#0045E6] tracking-[0px] leading-normal  font-medium capitalize text-[14.251px] font-montserrat flex justify-start items-start mt-3 ml-[42px] cursor-pointer">
              Select Your Specific Time Zone
            </h1>
          </div>
        </div>

        <div className="w-[2px] h-full bg-[#E5E7EB] mobile:hidden tablet:hidden medium:hidden"></div>

        {/* Calendar Section */}
        <div className="w-[2px] bg-gray-200 mobile:hidden tablet:hidden medium:hidden"></div>
        <div className="h-[600px] w-[50%] flex items-center justify-center p-4 mobile:h-[auto] mobile:w-[70%] mobile:my-[30px] tablet:h-[auto] tablet:w-[70%] tablet:my-[40px]">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              disablePast
              className="scale-[1.5] mobile:scale-[1.2] tablet:scale-[1.3] medium:scale-[1.3] "
            />
          </LocalizationProvider>
        </div>

        <div className="w-[2px] h-full bg-[#E5E7EB] mobile:hidden tablet:hidden medium:hidden"></div>
        {/* Form Section */}

        <div className="p-8 w-[35%] mobile:h-auto mobile:w-full tablet:h-auto tablet:w-[60%]">
          <form className="space-y-6 mobile:relative mobile:h-auto  tablet:relative tablet:h-auto">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <label className="text-[#3C3737] tracking-[-0.161px] leading-[22.11px]  capitalize text-[17.851px] font-outfit font-semibold mb-2">
                  Select Time Slot
                </label>
                {/* <div className="grid grid-cols-1 gap-2 overflow-y-auto scroll-smooth overflow-x-hidden max-h-[500px] scrollbar-hide"> */}
                <div className="grid grid-cols-1 gap-2 overflow-y-auto overflow-x-hidden max-h-[500px] scrollbar-hide scroll-smooth mt-2 mobile:h-[350px] tablet:h-[350px]">
                  {(timezones[selectedTimezone] || []).map((time, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleTimeSelect(time)}
                      className={`px-4 py-2 rounded-md text-sm border font-medium transition ${
                        selectedTime === time
                          ? "bg-[#0045E6] font-normal capitalize text-[18.851px] font-outfit text-white border-[#0045E6]"
                          : "text-[#3C3737] tracking-[-0.161px] leading-[22.11px]  font-normal capitalize text-[18.851px] font-outfit  hover:border-[#0045E6] hover:text-[#0045E6]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <label
                  className="text-[#4B5563] font-outfit text-[15px] font-normal leading-[22.435px]"
                  style={{
                    fontStyle: "normal",
                    leadingTrim: "both",
                    textEdge: "cap",
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                />
                <div className="h-auto w-full mt-4">
                  <label
                    className="text-[#4B5563] font-outfit text-[15px] font-normal leading-[22.435px] "
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                  />
                </div>
                <div className="h-auto w-full mt-4">
                  <label
                    className="text-[#4B5563] font-outfit text-[15px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Project Brief
                  </label>
                  <textarea
                    rows="4"
                    value={projectBrief}
                    onChange={(e) => setProjectBrief(e.target.value)}
                    placeholder="I want to build a SaaS platform for..."
                    className="w-full flex justify-center items-start  text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                  ></textarea>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center justify-center w-full h-[600px] flex flex-col items-center medium:w-auto">
                  <FaCheckCircle className="text-green-500 text-4xl mb-4 mt-[0px]" />
                  <h3 className="text-xl font-bold mb-2 text-[#1A2A4D] mt-4">
                    You're all set!
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    Your consultation has been booked. You'll receive your
                    Google Meet link soon.
                  </p>

                  {/* Client Information */}

                  <div className=" text-[#4B5563] font-montserrat text-[15px] font-medium leading-[22.435px] rounded-lg w-[100%] text-left mb-[70px] flex flex-col gap-1 mobile:mb-[190px] tablet:mb-[190px] medium:text-[12px]">
                    <h1 className="text-[#0045E6] text-center text-[20px] font-semibold font-outfit leading-[20px] capitalize mb-5 ">
                      Meeting Information
                    </h1>
                    <p>
                      <span className="text-[#4B5563] font-outfit text-[16px] font-bold leading-[22.435px] mr-1">
                        Full Name:
                      </span>{" "}
                      {fullName}
                    </p>
                    <p>
                      <span className="text-[#4B5563] font-outfit text-[16px] font-bold leading-[22.435px] mr-1 ">
                        Email:
                      </span>{" "}
                      {email}
                    </p>

                    <p>
                      <span className="text-[#4B5563] font-outfit text-[16px] font-bold leading-[22.435px] mr-1">
                        Meeting Date:
                      </span>{" "}
                      {selectedDate.format("DD MMM YYYY")}
                    </p>
                    <p>
                      <span className="text-[#4B5563] font-outfit text-[16px] font-bold leading-[22.435px] mr-1">
                        Meeting Time:
                      </span>{" "}
                      {selectedTime}
                    </p>
                    <p>
                      <span className="text-[#4B5563] font-outfit text-[16px] font-bold leading-[22.435px] mr-1">
                        Timezone:
                      </span>{" "}
                      {selectedTimezone}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="absolute bottom-[40px] flex gap-[115px] mobile:bottom-[-100px] mobile:w-full mobile:h-auto  mobile:justify-between tablet:bottom-[-100px] tablet:w-full tablet:h-auto  tablet:justify-between   medium:w-auto medium:gap-[40px] medium:justify-end medium:bottom-[50px] SpecificLarge:h-auto  SpecificLarge:justify-between SpecificLarge:w-[300px] SpecificLarge:gap-0 ">
              {step > 1 && step < 3 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-[120px] h-[44px] flex justify-center items-center rounded-[10px] bg-[#0045E6] text-[#FFF] text-center text-[14px] font-medium font-outfit leading-[20px] capitalize medium:w-[110px] "
                >
                  Back
                </button>
              )}
              {step === 2 && (
                <button
                  type="submit"
                  // onClick={(handleSubmit) => setStep(3)}
                  onClick={handleSubmit}
                  disabled={!isFormValid || loading}
                  className={`px-6 py-2 rounded-md font-semibold transition ${
                    isFormValid
                      ? "w-[120px] h-[44px] flex justify-center items-center rounded-[10px] bg-[#0045E6] text-[#FFF] text-center text-[14px] font-medium font-outfit leading-[20px] capitalize medium:w-[110px]"
                      : "w-[120px] h-[44px] flex justify-center items-center rounded-[10px] bg-[#0045E6] text-[#FFF] text-center text-[14px] font-medium font-outfit leading-[20px] capitalize cursor-not-allowed medium:w-[110px]"
                  }`}
                >
                  {/* Submit → */}
                  {loading ? "Booking..." : "Submit →"}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Timezone Modal */}
      {timezoneModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 mobile:w-full">
          <div className="bg-white text-[#1A2A4D] p-6 rounded-xl w-full max-w-md shadow-lg mobile:w-[90%]">
            <h3 className="text-lg font-bold mb-4">Select Your Timezone</h3>
            <input
              type="text"
              placeholder="Search timezone..."
              value={timezoneSearch}
              onChange={(e) => setTimezoneSearch(e.target.value)}
              className="w-full mb-4 border border-gray-300 px-4 py-2 rounded-md"
            />
            <div className="max-h-60 overflow-y-auto space-y-1">
              {filteredTimezones.map((tz, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setTimezone(tz);
                    setTimezoneModalOpen(false);
                  }}
                  className="w-full text-left text-sm px-4 py-2 hover:bg-gray-100 rounded-md"
                >
                  {tz}
                </button>
              ))}
            </div>
            <button
              className="mt-4 text-sm text-red-500 hover:underline"
              onClick={() => setTimezoneModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default BookCallForm;
