import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const JobCard = ({ category, title, location, jobType, date, company }) => {
  return (
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
  );
};

const JobList = () => {
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

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
            slidesToShow: 1,
        },
    }
    ],
  };

  return (
    <div className="container py-5">
      <Slider {...settings}>
        {jobs.map((job, index) => (
          <div key={index} className="px-2">
            <JobCard {...job} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JobList;
