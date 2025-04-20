import React, { useState } from "react";
import "./Roadmap.scss";
import { useMajor } from "../../../../context/MajorContext";
import Courses from "./Courses/Courses";

function Roadmap() {
  const { selectedMajor } = useMajor();
  const [showMore, setShowMore] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null); // ⬅️ Skill المختارة

  const skillsMap = {
    Frontend: {
      base: ["HTML", "CSS", "JavaScript", "BootStrap", "React"],
      more: ["Git", "Sass", "Redux", "TypeScript", "Angular"],
    },
    Backend: {
      base: ["Node", "Express", "MongoDB"],
      more: ["GraphQL", "Docker", "PostgreSQL"],
    },
    "UI/UX": {
      base: ["Figma", "Wireframes"],
      more: ["Prototyping", "Adobe XD"],
    },
    "Cyber Security": {
      base: ["Networking", "Linux"],
      more: ["Penetration Testing", "Firewalls"],
    },
    "Data Science": {
      base: ["Python", "Pandas"],
      more: ["Machine Learning", "TensorFlow"],
    },
  };

  const selectedSkills = skillsMap[selectedMajor] || { base: [], more: [] };

  return (
    <>
      <div>
        {/* Title */}
        <div className="text-center my-4">
          <h2 className="fw-normal" style={{ fontSize: "48px" }}>
            Roadmap
          </h2>
          <p className="" style={{ fontSize: "12px" }}>
            Clear Path To Success And Growth
          </p>
        </div>

        {/* Alert if there is no major selected */}
        {!selectedMajor ? (
          <div className="text-center mt-4">
            <div className="alert alert-warning w-75 mx-auto">
              Please select a major first!
            </div>
          </div>
        ) : (
          <>
            {/* Skills Cards */}
            <div className="d-flex justify-content-center gap-3 w-75 mx-auto flex-wrap mb-2">
              {[...selectedSkills.base, ...(showMore ? selectedSkills.more : [])].map((category, index) => (
                <div
                  key={index}
                  className="imgs position-relative text-white text-center"
                  onClick={() => setSelectedSkill(category)}
                  style={{ cursor: "pointer" }}>
                  <img
                    src={`/imgs/${category.toLowerCase()}.png`}
                    alt={category}
                    className="w-100 h-100"/>
                  <div className="p position-absolute top-50 start-50 translate-middle fw-semibold fs-5 text-white">
                    {category}
                  </div>
                </div>
              ))}
            </div>

            {/* Toggle Button */}
            <div className="text-center mb-4">
              <button
                className="btn fw-bold text-decoration-underline"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Less Skills" : "For More Skills"}
              </button>
            </div>

            {/* Courses Section */}
            <Courses selectedSkill={selectedSkill} />
          </>
        )}
      </div>
    </>
  );
}

export default Roadmap;
