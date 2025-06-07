import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const JobPostForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const job = location.state?.job;
  

  // Form state for all fields (expand as needed)
  const [title, setTitle] = useState(job?.title || "");
  const [skills, setSkills] = useState(job?.skills || "");
  const [requirements, setRequirements] = useState(job?.requirements || "");
  const [salary, setSalary] = useState(job?.salary || "");
  const [employmentType, setEmploymentType] = useState(job?.employmentType || "");
  const [jobLocation, setJobLocation] = useState(job?.jobLocation || "");
  const [city, setCity] = useState(job?.city || "");
  const [area, setArea] = useState(job?.area || "");
  const [companyAddress, setCompanyAddress] = useState(job?.companyAddress || "");
  const [locationField, setLocationField] = useState(job?.location || "");
  const [experienceLevel, setExperienceLevel] = useState(job?.experienceLevel || "");
  const [contactInfo, setContactInfo] = useState(job?.contactInfo || "");
  const [category, setCategory] = useState(job?.category || "");
  const [companyWebsite, setCompanyWebsite] = useState(job?.companyWebsite || "");
  const [deadlineDay, setDeadlineDay] = useState(job?.applicationDeadline?.day || "");
  const [deadlineMonth, setDeadlineMonth] = useState(job?.applicationDeadline?.month || "");
  const [deadlineYear, setDeadlineYear] = useState(job?.applicationDeadline?.year || "");

  const handleSave = (e) => {
    e.preventDefault();
    const role = localStorage.getItem('role');
    if (role !== 'company') {
      window.location.href = '/login';
      return;
    }
    // Save job to localStorage
    const postedJobs = JSON.parse(localStorage.getItem('postedJobs') || '[]');
    const newJob = {
      ...job,
      title,
      skills,
      requirements,
      salary,
      employmentType,
      jobLocation,
      city,
      area,
      companyAddress,
      location: locationField,
      experienceLevel,
      contactInfo,
      category,
      companyWebsite,
      applicationDeadline: { day: deadlineDay, month: deadlineMonth, year: deadlineYear },
    };
    // If editing, replace; else, add
    let updatedJobs;
    if (job) {
      updatedJobs = postedJobs.map(j => (j.title === job.title ? newJob : j));
    } else {
      updatedJobs = [...postedJobs, newJob];
    }
    localStorage.setItem('postedJobs', JSON.stringify(updatedJobs));
    navigate('/addedjob');
  };

  const handleDraft = (e) => {
    e.preventDefault();
    const role = localStorage.getItem('role');
    if (role !== 'company') {
      navigate('/login', { replace: true });
      return;
    }
    // Optionally save as draft
  };

  return (
    <div className="min-h-screen bg-[#f1efec] flex items-start justify-center py-10 px-4">
      <div className=" shadow-md border-2  p-10 rounded-md w-full max-w-5xl">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-1">Job Title</label>
            <input
              type="text"
              placeholder="Enter Your Company Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Job Description</label>
            <input
              type="text"
              placeholder="Company Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={skills}
              onChange={e => setSkills(e.target.value)}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-1">Requirements</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={requirements}
              onChange={e => setRequirements(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Salary Range</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={salary}
              onChange={e => setSalary(e.target.value)}
            />
          </div>
        </div>

        {/* Row 3: Employment Type & Job Location */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-2">Employment Type</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentType" value="full-time" checked={employmentType === 'full-time'} onChange={() => setEmploymentType('full-time')} />
                Full Time
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentType" value="part-time" checked={employmentType === 'part-time'} onChange={() => setEmploymentType('part-time')} />
                Part Time
              </label>
            </div>
          </div>
          <div>
            <label className="block font-medium mb-2">Job Location</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="jobLocation" value="on-site" checked={jobLocation === 'on-site'} onChange={() => setJobLocation('on-site')} />
                On Site
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="jobLocation" value="online" checked={jobLocation === 'online'} onChange={() => setJobLocation('online')} />
                Online
              </label>
            </div>
          </div>
        </div>
        <div className="h-px bg-black my-6" />

        {/* Row 4: City, Area */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-1">City</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2" value={city} onChange={e => setCity(e.target.value)}>
              <option value="">Select City</option>
              <option value="Cairo">Cairo</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Giza">Giza</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Area</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2" value={area} onChange={e => setArea(e.target.value)}>
              <option value="">Select Area</option>
              <option value="Nasr City">Nasr City</option>
              <option value="Heliopolis">Heliopolis</option>
              <option value="Maadi">Maadi</option>
            </select>
          </div>
        </div>

        {/* Row 5: Company Address, Location */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-1">Company Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={companyAddress}
              onChange={e => setCompanyAddress(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Location</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={locationField}
              onChange={e => setLocationField(e.target.value)}
            />
          </div>
        </div>
        <div className="h-px bg-black my-6" />

        {/* Row 6: Experience Level, Contact Info */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-1">Experience Level</label>
            <select className="w-full border border-gray-300 rounded-md px-4 py-2" value={experienceLevel} onChange={e => setExperienceLevel(e.target.value)}>
              <option value="">Select Experience</option>
              <option value="Entry">Entry</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </div>
          <div>
            <label className="block font-medium mb-1">Contact Information</label>
            <input
              type="text"
              placeholder="Phone Number / Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={contactInfo}
              onChange={e => setContactInfo(e.target.value)}
            />
          </div>
        </div>

        {/* Row 7: Job Category, Company Website */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block font-medium mb-1">Job Category</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Company Website</label>
            <input
              type="text"
              placeholder="URL"
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              value={companyWebsite}
              onChange={e => setCompanyWebsite(e.target.value)}
            />
          </div>
        </div>

        {/* Row 8: Application Deadline */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Application Deadline</label>
          <div className="grid grid-cols-3 gap-4">
            <select className="border border-gray-300 rounded-md px-4 py-2" value={deadlineDay} onChange={e => setDeadlineDay(e.target.value)}>
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2" value={deadlineMonth} onChange={e => setDeadlineMonth(e.target.value)}>
              <option value="">Month</option>
              {[...Array(12)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
            </select>
            <select className="border border-gray-300 rounded-md px-4 py-2" value={deadlineYear} onChange={e => setDeadlineYear(e.target.value)}>
              <option value="">Year</option>
              {[2024,2025,2026].map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-8">
          <button className="px-6 py-2 border border-gray-400 rounded-md text-gray-700" onClick={handleDraft}>
            Draft
          </button>
          <button className="px-6 py-2 bg-[#6e5c4f] text-white rounded-md" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;
