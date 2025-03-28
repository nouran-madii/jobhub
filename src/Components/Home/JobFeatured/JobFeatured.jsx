import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const JobCard = ({ category, title, location, jobType, date, company }) => {
    return <>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="job-card bg-white rounded-5 p-4 shadow-sm w-100">
                <div className="d-flex align-items-center text-secondary gap-2">
                    <i className="fa-solid fa-display"></i>
                    <h6 className="mb-0">{category}</h6>
                </div>
                <h5 className="text-black py-2">{title}</h5>
                <div className="d-flex justify-content-between align-items-center py-2">
                    <div className="d-flex align-items-center text-black gap-2">
                        <i className="fa-solid fa-location-dot"></i>
                        <h6 className="mb-0">{location}</h6>
                    </div>
                    <p className="text-secondary mb-0">{jobType}</p>
                </div>
                <p className="text-secondary mb-0">
                    {date} by <span className="text-black">{company}</span>
                </p>
            </div>
        </div>
    </> ;
};

const JobList =() => {
    const jobs = [
    {
      category: "Software Engineer",
      title: "Software Engineer",
      location: "Alexandria",
      jobType: "Part Time",
      date: "December 12, 2024",
      company: "Gamware",
    },
    {
      category: "Graphic Designer",
      title: "Graphic Designer",
      location: "Alexandria",
      jobType: "Full Time",
      date: "June 12, 2024",
      company: "Tawalier",
    },
    {
      category: "Software Engineer",
      title: "Software Engineer",
      location: "Alexandria",
      jobType: "Full Time",
      date: "June 12, 2024",
      company: "Gamware",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-5 justify-content-center">
        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobList;