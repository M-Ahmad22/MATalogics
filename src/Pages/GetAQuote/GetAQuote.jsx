import React, { useState } from "react";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import Map from "../../Components/Map/Map";
import uploadIcon from "../../assets/uploadIcon.svg";

const GetAQuote = () => {
  const [fileName, setFileName] = useState("");
  const [formData, setFormData] = useState({});

  const handleChange = (e, setFileName) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files && files.length > 0) {
      const file = files[0];
      setFormData({
        ...formData,
        [name]: file,
      });
      setFileName(file.name);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };
  return (
    <>
      <section className="h-auto bg-[#F9F9F9] ">
        <div className="relative w-full h-[430px] mobile:h-[450px] ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="inset-0 w-full h-full object-cover"
          >
            <source src={Abstract_Wave_1920x1080} type="video/mp4" />{" "}
          </video>

          <div className="absolute inset-0  flex flex-col items-center justify-center text-center bg-[#000000]/[0.69]  ">
            <h1
              className="text-[#fff] font-outfit text-[54px] font-bold leading-[63px]  mb-3 mt-[60px] mobile:text-[44px]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Shape the Future With Us
            </h1>
            <p
              className="text-[#fff] font-montserrat text-[16px] font-normal leading-[38px] w-[651px] mobile:w-[90%]"
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Our talent can drive innovation. Explore this role and make your
              mark at MATalogics.
            </p>
          </div>
        </div>

        <div className="px-6 py-16 w-full mx-auto justify-center items-center flex flex-col h-auto mobile:w-full mobile:h-auto mobile:px-3">
          <div className="w-[1239px] h-auto  bg-[#fff] border-[1px] border-[#DCDCDC] rounded-[20px] px-[150px] py-[90px] flex justify-center mobile:w-full mobile:h-auto mobile:px-3 mobile:py-7">
            <form
              // onSubmit={handleSubmit}
              className="w-full h-full space-y-6"
              encType="multipart/form-data"
            >
              <h1
                className="text-[#101828] text-center font-outfit text-[33px] font-semibold leading-[38px] mb-10"
                style={{
                  leadingTrim: "both",
                  textEdge: "cap",
                  fontStyle: "normal",
                }}
              >
                Get a Free Quote
              </h1>

              <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-5 w-full  ">
                {/* Name */}

                {/* Full Name */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
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
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    placeholder="Enter Your Name"
                    name="fullName"
                    onChange={handleChange}
                    value={formData.fullName}
                    required
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Company / StartUp
                  </label>
                  <input
                    type="text"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    placeholder="StartUp Name (optional)"
                    name="startUpName"
                    onChange={handleChange}
                    value={formData.CompanyName}
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
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
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    placeholder="info@matalogics.com"
                    name="Email"
                    onChange={handleChange}
                    value={formData.Email}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    type="phone"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    placeholder="+92 303-xxxxxxx"
                    name="PhoneNo"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                  />
                </div>

                {/* Service Selection */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto md:col-span-2">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Select a Service
                  </label>

                  <select className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none ">
                    <option>Choose a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>AI Solutions</option>
                    <option>UI/UX Design</option>
                    <option>SEO & Digital Marketing</option>
                    <option>WordPress</option>
                    <option>Custom Software</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto ">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Estimated Budget
                  </label>

                  <select className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none ">
                    <option>Select your range</option>
                    <option>$100 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>

                {/* Project Timeline */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto ">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Project Timeline
                  </label>

                  <select className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none ">
                    <option>Choose timeline</option>
                    <option>Less than 1 week</option>
                    <option>1 - 2 weeks</option>
                    <option>1 month</option>
                    <option>2 - 3 months</option>
                    <option>Ongoing / Long Term</option>
                  </select>
                </div>

                {/* Project Description */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto md:col-span-2 ">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Project Description
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Describe your project or idea here..."
                    className="flex justify-center items-start  text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                  ></textarea>
                </div>
              </div>
              {/*  */}
              <div className="w-full h-[222px] rounded-[4px] border border-dashed border-[#384EB7]/30 relative">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <h1 className="text-[#000] text-center text-[18px] font-semibold mb-5">
                    Upload The Documents (option)
                  </h1>
                  <img
                    src={uploadIcon}
                    alt=""
                    className="w-[68px] h-[60px] mb-3"
                  />
                  <h1 className="text-[#0F0F0F] text-[13px] font-medium">
                    Drag & drop files or{" "}
                    <label
                      htmlFor="QuoteDocument"
                      className="text-[#0045E6] font-semibold cursor-pointer hover:underline"
                    >
                      Browse
                    </label>
                  </h1>
                  <h2 className="text-[#676767] text-[12px] font-light">
                    Supported formats: PDF, Word
                  </h2>
                </div>

                <input
                  id="QuoteDocument"
                  name="Document"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const file = e.target.files[0];
                      setFileName(file.name); // ✅ store file name for UI
                    }
                  }}
                />

                <div className="absolute bottom-3 left-3">
                  <p className="text-[#0F0F0F] text-[16px] font-medium">
                    <span className="text-[#0045E6]">Uploaded Document: </span>
                    {fileName || "No document uploaded"}
                  </p>
                </div>
              </div>
              <div className="w-full h-[44px]">
                <button
                  type="submit"
                  className="mt-12 w-full h-[44px] flex justify-center items-center rounded-[10px] bg-[#0045E6] text-[#FFF] text-center text-[14px] font-medium font-outfit leading-[20px] capitalize "
                >
                  Request Quote
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Map />
    </>
  );
};

export default GetAQuote;
