import React, { useState } from "react";
import CareerBanner from "./CareerBanner";
import JobCard from "./JobCard";
import Form from "./Form";
import { jobs } from "../../Data/jobsData";

const Internships = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const internshipJobs = jobs.filter((job) => parseInt(job.id) >= 100);

  const [filters, setFilters] = useState({
    search: "",
    type: "",
    category: "",
  });

  const filteredInternships = internshipJobs.filter((job) => {
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
      <section className="w-full bg-[#F9F9F9] py-[80px] flex justify-center items-center mobile:w-full">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[75%] mx-8 my-9 pl-[70px]  mobile:pl-0 mobile:mx-0 mobile:w-[90%]">
          {filteredInternships.map((job) => (
            <JobCard key={job.id} job={job} onApplyClick={setSelectedJob} />
          ))}
        </div>
      </section>
      {selectedJob && <Form job={selectedJob} />}
    </>
  );
};

export default Internships;
