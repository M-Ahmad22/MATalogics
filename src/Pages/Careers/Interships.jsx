import React, { useState } from "react";
import CareerBanner from "./CareerBanner";
import JobCard from "./JobCard";
import Form from "./Form";
import { jobs } from "../../Data/jobsData";

const Internships = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const internshipJobs = jobs.filter((job) => parseInt(job.id) >= 100);

  return (
    <>
      <CareerBanner />
      <section className="w-full bg-[#F9F9F9] py-[80px] flex justify-center items-center mobile:w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[75%] mx-8 my-9 pl-[70px]  mobile:pl-0 mobile:mx-0 mobile:w-[90%]">
          {internshipJobs.map((job) => (
            <JobCard key={job.id} job={job} onApplyClick={setSelectedJob} />
          ))}
        </div>
      </section>
      {selectedJob && <Form job={selectedJob} />}
    </>
  );
};

export default Internships;
