import React, { useState } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import Abstract_Wave_1920x1080 from "../../assets/Abstract_Wave_1920x1080.mp4";
import arrowleftsmall from "../../assets/arrowleftsmall.svg";
import Map from "../../Components/Map/Map";
import { jobs } from "../../Data/jobsData";
import uploadIcon from "../../assets/uploadIcon.svg";

const Form = ({ job: jobFromProps }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  // Get job either from props, location state, or jobs list
  const job =
    jobFromProps || location.state?.job || jobs.find((j) => j.id === id);

  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    GithubPortfolio: "",
    Location: "",
    Salary: "",
    Availability: "",
    Experience: "",
    jobType: "",
    resume: null,
    CoverLetter: null,
  });

  const [resumeFileName, setResumeFileName] = useState("");
  const [coverLetterFileName, setCoverLetterFileName] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input change
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

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();

    if (!formData.resume) {
      alert("Please upload your resume before submitting.");
      return;
    }
    // Append all text fields from formData
    for (let key in formData) {
      form.append(key, formData[key]);
    }

    // Append job info
    form.append("jobTitle", job?.title || "");
    form.append("jobId", job?.id || "");

    // Append file (assuming formData.resume contains the File object)
    if (formData.resume) {
      form.append("resume", formData.resume);
    }

    try {
      const res = await fetch("https://your-api-endpoint.com/apply", {
        method: "POST",
        body: form, // important: do NOT set headers manually
      });

      if (res.ok) {
        setSuccess(true);
        navigate("/SuccessPage");
      } else {
        alert("Failed to apply. Try again.");
        navigate("/SuccessPage");
      }
    } catch (err) {
      alert("Something went wrong. Try again.");
      navigate("/SuccessPage");
    }
  };

  const UploadBox = ({
    title,
    fileName,
    setFile,
    setFileName,
    inputId,
    name,
  }) => (
    <div className="w-full h-[222px] rounded-[4px] border border-dashed border-[#384EB7]/30 relative">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-[#000] text-center text-[18px] font-semibold mb-5">
          {title}
        </h1>
        <img src={uploadIcon} alt="" className="w-[68px] h-[60px] mb-3" />
        <h1 className="text-[#0F0F0F] text-[13px] font-medium">
          Drag & drop files or{" "}
          <label
            htmlFor={inputId}
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
        id={inputId}
        name={name}
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFormData((prev) => ({ ...prev, [name]: file })); // ✅ store file object
            setFileName(file.name); // ✅ store file name for UI
          }
        }}
        className="absolute top-0 w-full h-full opacity-0 cursor-pointer"
      />

      <div className="absolute bottom-3 left-3">
        <p className="text-[#0F0F0F] text-[16px] font-medium">
          <span className="text-[#0045E6]">Uploaded Document: </span>
          {fileName || "No document uploaded"}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <section className="h-auto bg-[#F9F9F9] mobile:w-full mobile:h-auto ">
        <div className="relative w-full h-[430px] ">
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
            <div
              className="w-[46px] h-[46px] rounded-[10px] bg-[#0045E6] backdrop-blur-[5px]  absolute left-[155px] top-[140px] flex justify-center items-center cursor-pointer mobile:top-[110px] mobile:left-[20px] "
              onClick={() => navigate(-1)}
            >
              <img src={arrowleftsmall} className="w-[32px] h-[32px]" alt="" />
            </div>
            <h2
              className="text-[#fff] font-outfit text-[54px] font-bold leading-[63px]  mb-3 mt-[60px] mobile:text-[32px] mobile:mt-[90px] "
              style={{
                leadingTrim: "both",
                textEdge: "cap",
                fontStyle: "normal",
              }}
            >
              Shape the Future With Us
            </h2>
            <p
              className="text-[#fff] font-montserrat text-[16px] font-normal leading-[38px] w-[651px] mobile:w-[80%]"
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

        <div className="px-6 py-16 w-full mx-auto justify-center items-center flex flex-col  mobile:w-full mobile:h-auto mobile:px-2 mobile:py-8 ">
          <div className="w-[1239px] h-auto  bg-[#fff] border-[1px] border-[#DCDCDC] rounded-[20px] px-[150px] py-[90px] flex justify-center mobile:w-full mobile:h-auto mobile:px-3 mobile:py-8 ">
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-6 "
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
                Join Our Team
              </h1>
              {job?.title && (
                <p className="text-[#101828] text-start font-outfit text-[23px] font-semibold leading-[38px] mb-10">
                  Applying for:{" "}
                  <span className="font-bold text-[#0045E6]">{job.title}</span>
                </p>
              )}

              {success && (
                <p className="text-green-600 text-sm font-medium">
                  ✅ Application submitted successfully!
                </p>
              )}

              <div className="h-auto grid grid-cols-1 md:grid-cols-2 gap-5 w-full  ">
                {/* Name */}
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
                {/* Eamil */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
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
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    placeholder="info@matalogics.com"
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
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="phone"
                    onChange={handleChange}
                    value={formData.phone}
                    placeholder="+92"
                    required
                  />
                </div>

                {/* LinkedIn */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    LinkedIn Profile (optional)
                  </label>
                  <input
                    type="url"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="linkedin"
                    onChange={handleChange}
                    value={formData.linkedin}
                    placeholder="LinedIn.com"
                  />
                </div>

                {/* Github/Portfolio */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Github / Portfolio
                  </label>
                  <input
                    type="url"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="GithubPortfolio"
                    onChange={handleChange}
                    value={formData.github}
                    placeholder="Write..."
                    required
                  />
                </div>

                {/* Location*/}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Current Location
                  </label>
                  <input
                    type="text"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="Location"
                    onChange={handleChange}
                    value={formData.location}
                    placeholder="Write"
                    required
                  />
                </div>

                {/* Salary */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Expected Salary
                  </label>
                  <input
                    type="Text"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="Salary"
                    onChange={handleChange}
                    value={formData.expectedSalary}
                    placeholder="Write..."
                    required
                  />
                </div>

                {/* Availability */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Availability (e.g. Immediately)
                  </label>
                  <input
                    type="text"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="Availability"
                    onChange={handleChange}
                    value={formData.availability}
                    placeholder="Write..."
                    required
                  />
                </div>
                {/* Experience */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="Experience"
                    onChange={handleChange}
                    value={formData.experience}
                    placeholder="Write..."
                    required
                  />
                </div>

                {/* JobType */}
                <div className="flex flex-col align-items-start gap-[0.3px] text-[#1D2939] relative w-full h-auto">
                  <label
                    className="text-[#4B5563] font-outfit text-[14px] font-normal leading-[22.435px]"
                    style={{
                      fontStyle: "normal",
                      leadingTrim: "both",
                      textEdge: "cap",
                    }}
                  >
                    Job Type (Remote / Onsite / Hybrid)
                  </label>
                  <input
                    type="text"
                    className="flex justify-center items-start h-[44px] text-[#4B5563]  align-self-stretch rounded-[8px] border-[1px] border-[#BDBDBD] px-3 py-2 mt-1 outline-none "
                    id=""
                    name="jobType"
                    onChange={handleChange}
                    value={formData.jobType}
                    placeholder="Write..."
                    required
                  />
                </div>
              </div>
              <UploadBox
                title="Upload Your Resume"
                fileName={resumeFileName}
                setFileName={setResumeFileName}
                setFile={(file) =>
                  setFormData((prev) => ({ ...prev, resume: file }))
                }
                inputId="resume-upload"
                name="resume"
              />

              <UploadBox
                title="Upload Your Cover Letter"
                fileName={coverLetterFileName}
                setFileName={setCoverLetterFileName}
                setFile={(file) =>
                  setFormData((prev) => ({ ...prev, coverLetter: file }))
                }
                inputId="coverletter-upload"
                name="coverLetter"
              />
              <button
                type="submit"
                className="w-full h-[44px] flex justify-center items-center rounded-[10px] bg-[#0045E6] text-[#FFF] text-center text-[14px] font-medium font-outfit leading-[20px] capitalize"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      <Map />
    </>
  );
};

export default Form;
