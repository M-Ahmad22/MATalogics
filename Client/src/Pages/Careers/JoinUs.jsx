import React, { useState } from "react";
import CareerBanner from "./CareerBanner";
import JobCard from "./JobCard";
import Form from "./Form";
import { jobs } from "../../Data/jobsData";

const JoinUs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const fullTimeJobs = jobs.filter((job) => parseInt(job.id) < 100);
  const [filters, setFilters] = useState({
    search: "",
    type: "",
    category: "",
  });

  const filteredJobs = fullTimeJobs.filter((job) => {
    const matchesSearch = filters.search
      ? job.title.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    const matchesType = filters.type
      ? job.location.toLowerCase().trim() === filters.type.toLowerCase().trim()
      : true;

    const matchesCategory = filters.category
      ? job.department.toLowerCase().trim() ===
        filters.category.toLowerCase().trim()
      : true;

    return matchesSearch && matchesType && matchesCategory;
  });

  return (
    <>
      <CareerBanner onFilterChange={setFilters} />
      <section className="w-full bg-[#F9F9F9] py-[80px] flex justify-center items-center mobile:w-full tablet:w-[100%]  medium:w-[100%] SpecificLarge:w-[100%]  ">
        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 lg:grid-cols-3 w-[75%] mx-8 my-9 pl-[70px] mobile:pl-0 mobile:mx-0 mobile:w-[90%] tablet:pl-0 tablet:mx-0 tablet:w-[100%] medium:pl-0 medium:mx-0 medium:w-[100%] SpecificLarge:pl-0 SpecificLarge:mx-0 SpecificLarge:w-[90%] ">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onApplyClick={setSelectedJob} />
          ))}
        </div>
      </section>
      {selectedJob && <Form job={selectedJob} />}
    </>
  );
};

export default JoinUs;
