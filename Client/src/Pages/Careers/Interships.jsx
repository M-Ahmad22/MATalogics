import React, { useState } from "react";
import CareerBanner from "./CareerBanner";
import JobCard from "./JobCard";
import Form from "./Form";
import { jobs } from "../../Data/jobsData";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>MATalogics | Internships</title>
        <meta
          name="description"
          content="Apply for internships at MATalogics and gain real-world experience in tech solutions."
        />
        <meta property="og:title" content="MATalogics | Internships" />
        <meta
          property="og:description"
          content="Apply for internships at MATalogics and gain real-world experience in tech solutions."
        />
        <meta
          property="og:image"
          content="https://matalogics.com/path/to/internships-og-image.jpg"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://matalogics.com/careers/internships"
        />
      </Helmet>
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
