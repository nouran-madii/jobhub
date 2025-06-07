import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import JobCard from '../jobcard/jobcard';
import { Link } from 'react-router-dom';

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

const JobListings = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    country: '',
    city: '',
    area: '',
    experience: '',
    career: '',
    type: '',
    category: '',
    date: '',
  });
  const [openFilters, setOpenFilters] = useState(false); // للتحكم في عرض الفلتر على الموبايل
  const [openJob, setOpenJob] = useState({});
  const toggleProduct = (JobId) => {
    setOpenJob((prev) => ({
      ...prev,
      [JobId]: !prev[JobId],
    }));
  };
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 2;

  const filterJobs = () => {
    return dummyJobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilters =
        (!filters.country || job.location.country.toLowerCase() === filters.country.toLowerCase()) &&
        (!filters.city || job.location.city.toLowerCase() === filters.city.toLowerCase()) &&
        (!filters.area || job.location.area.toLowerCase() === filters.area.toLowerCase()) &&
        (!filters.experience || (
          (filters.experience === "1-2 yrs" && job.experience.min <= 2 && job.experience.max >= 1) ||
          (filters.experience === "2-3 yrs" && job.experience.min <= 3 && job.experience.max >= 2) ||
          (filters.experience === "3-5 yrs" && job.experience.min <= 5 && job.experience.max >= 3)
        )) &&
        (!filters.career || job.careerLevel.toLowerCase().includes(filters.career.toLowerCase())) &&
        (!filters.type || job.type.includes(filters.type)) &&
        (!filters.category || job.category.toLowerCase() === filters.category.toLowerCase()) &&
        (!filters.date || job.postedDate.toLowerCase().includes(filters.date.toLowerCase()));
      return matchesSearch && matchesFilters;
    });
  };

  const filteredJobs = filterJobs();
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center px-2 md:px-6">
      {/* Search */}
      <div className="w-full max-w-[1440px] flex justify-center mt-4">
        <div className="relative w-full max-w-sm">
          <input
            type="text"
            placeholder="Search"
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d3b31]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FiSearch className="absolute top-2.5 right-3 text-gray-500" />
        </div>
      </div>

      {/* Filters & Job Listings */}
      <main className="max-w-[1440px] w-full flex flex-col md:flex-row gap-6 py-8">
        {/* Filters */}
        <div className="md:w-[280px]">
          {/* زر إظهار/إخفاء الفلتر على الموبايل */}
          <button
            className="md:hidden mb-3 w-full bg-[#4d3b31] text-white py-2 rounded-md"
            onClick={() => setOpenFilters(!openFilters)}
          >
            {openFilters ? 'Hide Filters' : 'Show Filters'}
          </button>

          {/* محتوى الفلاتر */}
          <div
            className={`${
              openFilters ? 'block' : 'hidden'
            } md:block bg-white p-4 rounded-md shadow-md max-h-[400px] overflow-auto`}
          >
            {[
              { key: 'country', label: 'Country', options: ['Egypt'] },
              { key: 'city', label: 'City', options: ['Cairo', 'Giza', 'Alexandria', 'Mansoura'] },
              { key: 'area', label: 'Area', options: ['New Cairo', 'Nasr City', 'Dokki', 'Smouha', 'City Center'] },
              { key: 'experience', label: 'Years Of Experience', options: ['1-2 yrs', '2-3 yrs', '3-5 yrs'] },
              { key: 'career', label: 'Career Level', options: ['Entry', 'Junior', 'Mid', 'Senior'] },
              { key: 'type', label: 'Job Type', options: ['Full Time', 'Part Time', 'Remote', 'On-Site'] },
              { key: 'category', label: 'Job Categories', options: ['IT/Software Development', 'Marketing', 'Human Resources', 'Sales'] },
              { key: 'date', label: 'Date Posted', options: ['Today', '2 Days Ago', '3 Days Ago', '5 Days Ago', '1 Week Ago'] },
            ].map(({ key, label, options }) => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-semibold text-[#3F3F3F] mb-1">{label}</label>
                <select
                  className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#4d3b31]"
                  value={filters[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                >
                  <option value="">Select {label}</option>
                  {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="flex-1 space-y-4">
          {currentJobs.length === 0 ? (
            <p className="text-center text-gray-600">No jobs found.</p>
          ) : (
            currentJobs.map((job) => (
              <Link key={job.id} to={`/JobDetails/${job.id}`}>
                <JobCard job={job} />
              </Link>
            ))
          )}

          {/* Pagination */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 pt-4 text-sm">
            <span>
              Showing {indexOfFirstJob + 1}-{Math.min(indexOfLastJob, filteredJobs.length)} of {filteredJobs.length}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 rounded border ${currentPage === i + 1 ? 'bg-gray-300' : ''}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobListings;
