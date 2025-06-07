// src/pages/JobDetails.jsx
import React from "react";
import { Link, useParams } from "react-router";

const JobDetails = () => {
  const { id } = useParams(); // Get the job ID from the URL
  const dummyJobs = [
    {
      id: 1,
      title: "Mid-Level UI/UX Designer",
      type: ["Full Time", "On-Site"],
      location: {
        country: "Egypt",
        city: "Cairo",
        area: "New Cairo"
      },
      postedDate: "2 Days Ago",
      company: "Tenjaz",
      experience: { min: 1, max: 4 },
      careerLevel: "Entry Level (Junior Level / Fresh Grad)",
      educationLevel: "Not Specified",
      salary: { min: 35000, max: 45000, currency: "EGP", period: "Per Month" },
      category: "IT/Software Development",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research"],
      description:
        "We are looking for a UI/UX Designer to create user-friendly interfaces and enhance user experience.",
      requirements: [
        "Design using Figma, Adobe XD, Sketch.",
        "User research and usability testing.",
        "Create wireframes and user flows.",
        "Work with developers for implementation."
      ],
      benefits: {
        transportation: false,
        socialInsurance: true,
        healthInsurance: true,
        overtimeAllowance: false,
        accommodation: false
      }
    },
    {
      id: 2,
      title: "Senior Frontend Developer",
      type: ["Full Time", "Remote"],
      location: {
        country: "Egypt",
        city: "Alexandria",
        area: "Smouha"
      },
      postedDate: "5 Days Ago",
      company: "CodeLab",
      experience: { min: 5, max: 8 },
      careerLevel: "Senior Level",
      educationLevel: "Bachelor's Degree",
      salary: { min: 50000, max: 70000, currency: "EGP", period: "Per Month" },
      category: "IT/Software Development",
      skills: ["React", "TypeScript", "Redux", "Tailwind CSS"],
      description:
        "We are looking for a Senior Frontend Developer with strong React and TypeScript experience.",
      requirements: [
        "Develop scalable web apps using React.",
        "Write clean, maintainable code.",
        "Mentor junior developers.",
        "Work closely with backend team."
      ],
      benefits: {
        transportation: false,
        socialInsurance: true,
        healthInsurance: true,
        overtimeAllowance: true,
        accommodation: false
      }
    },
    {
      id: 3,
      title: "Marketing Specialist",
      type: ["Part Time", "On-Site"],
      location: {
        country: "Egypt",
        city: "Giza",
        area: "Dokki"
      },
      postedDate: "1 Week Ago",
      company: "MarketPro",
      experience: { min: 2, max: 5 },
      careerLevel: "Mid Level",
      educationLevel: "Bachelor's Degree",
      salary: { min: 15000, max: 20000, currency: "EGP", period: "Per Month" },
      category: "Marketing",
      skills: ["SEO", "Google Ads", "Content Writing", "Analytics"],
      description:
        "We need a marketing specialist to lead digital campaigns and optimize brand awareness.",
      requirements: [
        "Create SEO content.",
        "Manage ad campaigns.",
        "Analyze campaign performance.",
        "Coordinate with designers and developers."
      ],
      benefits: {
        transportation: true,
        socialInsurance: true,
        healthInsurance: false,
        overtimeAllowance: false,
        accommodation: false
      }
    },
    {
      id: 4,
      title: "HR Coordinator",
      type: ["Full Time", "On-Site"],
      location: {
        country: "Egypt",
        city: "Cairo",
        area: "Nasr City"
      },
      postedDate: "3 Days Ago",
      company: "PeopleFirst",
      experience: { min: 0, max: 2 },
      careerLevel: "Junior",
      educationLevel: "Bachelor's Degree",
      salary: { min: 12000, max: 15000, currency: "EGP", period: "Per Month" },
      category: "Human Resources",
      skills: ["Communication", "MS Office", "Recruitment", "Scheduling"],
      description:
        "Looking for a proactive HR coordinator to support recruitment and employee relations.",
      requirements: [
        "Assist in recruitment process.",
        "Coordinate employee activities.",
        "Support HR operations.",
        "Maintain HR records."
      ],
      benefits: {
        transportation: false,
        socialInsurance: true,
        healthInsurance: true,
        overtimeAllowance: false,
        accommodation: false
      }
    },
    {
      id: 5,
      title: "Sales Executive",
      type: ["Full Time", "On-Site"],
      location: {
        country: "Egypt",
        city: "Mansoura",
        area: "City Center"
      },
      postedDate: "Today",
      company: "SalesForce Egypt",
      experience: { min: 1, max: 3 },
      careerLevel: "Entry Level",
      educationLevel: "Diploma",
      salary: { min: 10000, max: 13000, currency: "EGP", period: "Per Month" },
      category: "Sales",
      skills: ["Negotiation", "CRM", "Cold Calling", "Communication"],
      description:
        "We are seeking a motivated sales executive to handle B2B client relationships and meet sales targets.",
      requirements: [
        "Build and maintain client relationships.",
        "Identify new business opportunities.",
        "Achieve sales targets.",
        "Prepare and present proposals."
      ],
      benefits: {
        transportation: true,
        socialInsurance: true,
        healthInsurance: false,
        overtimeAllowance: true,
        accommodation: false
      }
    }
  ];

  const job = dummyJobs.find(job => job.id === parseInt(id));

  if (!job) {
    return <div className="text-center mt-10 text-red-500">Job not found</div>;
  }

  return (
    <div className="bg-[#f4f3f0] min-h-screen px-6 py-10">
      {/* Header Card */}
      <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-md w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
            <div className="flex gap-2 mt-2">
              {job.type.map((t, i) => (
                <span key={i} className="bg-gray-200 text-sm px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-semibold">{job.company}</span> - {job.location.area}, {job.location.city}, {job.location.country}
            </p>
            <p className="text-gray-500 text-xs mt-1">{job.postedDate}</p>
          </div>
          <img
            src="/company-logo.png"
            alt="Company Logo"
            className="w-10 h-10 object-cover"
          />
        </div><Link to={'/ApplyJob'}>
        <button className="bg-[#6b5b4d] text-white px-5 py-2 rounded w-fit hover:opacity-90">
          Apply For Job
        </button></Link>
      </div>

      {/* Job Details Card */}
      <div className="bg-white rounded-2xl p-6 shadow-md mt-6 w-full max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Job Details</h3>
        <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-700">
          <p><span className="font-medium">Experience Needed:</span> {job.experience.min} to {job.experience.max} years</p>
          <p><span className="font-medium">Career Level:</span> {job.careerLevel}</p>
          <p><span className="font-medium">Education Level:</span> {job.educationLevel}</p>
          <p><span className="font-medium">Salary:</span> {job.salary.min} to {job.salary.max} {job.salary.currency} {job.salary.period}</p>
          <p className="col-span-2"><span className="font-medium">Job Categories:</span> {job.category}</p>
        </div>

        {/* Skills */}
        <div className="mt-4">
          <p className="font-medium text-sm mb-2">Skills</p>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, i) => (
              <span key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-6 shadow-md mt-6 w-full max-w-5xl mx-auto space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Job Description</h3>
          <p className="text-sm text-gray-700">{job.description}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Job Requirements</h3>
          <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Job Benefits</h3>
          <ul className="relative border-l-2 border-gray-300 pl-5 space-y-4">
            {Object.entries(job.benefits).map(([key, value], i) => (
              <li key={i} className="flex items-start gap-2 relative">
                <span className="w-3 h-3 bg-gray-300 rounded-full absolute -left-[14px] top-[6px]"></span>
                <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                <span className="text-gray-600">{value ? "Provided" : "Not provided"}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
