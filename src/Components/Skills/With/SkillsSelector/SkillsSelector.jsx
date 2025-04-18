import React, { useState } from 'react';

const skillsData = {
  'Frontend': ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
  'Backend': ['Node.js', 'Express', 'MongoDB', 'SQL', 'Python'],
  'UI/UX': ['Figma', 'Adobe XD', 'Wireframing', 'Prototyping'],
  'Cyber Security': ['Network Security', 'Penetration Testing', 'Encryption', 'Firewalls'],
  'Data Science': ['Python', 'Pandas', 'Machine Learning', 'Data Visualization'],
};

const experienceOptions = ['Less than 1 year', '1 Year', '2 Years', '3+ Years'];

function SkillsSelector({ selectedMajor }) {
  const [showPopup, setShowPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState('1 Year');

  const filteredSkills = selectedMajor
    ? skillsData[selectedMajor]?.filter(skill =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleAddSkill = (skill) => {
    const exists = selectedSkills.some(s => s.skill === skill && s.major === selectedMajor);
    if (!exists) {
      setSelectedSkills([
        ...selectedSkills,
        { major: selectedMajor, skill, experience: selectedExperience },
      ]);
      setShowPopup(false);
    }
  };

  const handleRemoveSkill = (index) => {
    const updated = [...selectedSkills];
    updated.splice(index, 1);
    setSelectedSkills(updated);
  };

  return <>
    <div className='bg-white w-100 h-100 container p-3'>
      <h6 className='text-black fw-bold'>What skills, tools, technologies and fields of expertise do you have?</h6>

      <div className='d-flex flex-column gap-3 mt-4 w-75'>
        {selectedSkills.map((item, index) => (
          <div key={index} className='container pt-2 border rounded'>
            <div className='d-flex justify-content-between'>
              <p className='border-bottom text-black w-100 mb-1'>{item.major}</p>
              <button
                className="fa-solid fa-xmark btn"
                onClick={() => handleRemoveSkill(index)}
              ></button>
            </div>
            <p className='mb-0 text-secondary'>
              {item.skill} — Experience {item.experience}
            </p>
          </div>
        ))}
      </div>

      <div className='mt-3'>
        <button
          className='btn text-white fw-semibold'
          style={{ backgroundColor: '#746658' }}
          onClick={() => {
            if (selectedMajor) {
              setShowPopup(true);
              setSearchTerm('');
              setSelectedExperience('1 Year');
            } else {
              alert("Please select a Major first.");
            }
          }}
        >
          Add Skill
        </button>
      </div>

      {showPopup && (
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50' style={{ zIndex: 1050 }}>
          <div className='bg-white p-4 rounded shadow' style={{ width: '400px' }}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <h5 className='fw-bold'>{selectedMajor} Skills</h5>
              <button className='btn' onClick={() => setShowPopup(false)}>
                <i className='fa-solid fa-xmark'></i>
              </button>
            </div>

            <input
              type='text'
              className='form-control mb-3'
              placeholder='Search skill...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <label className='mb-1'>Experience</label>
            <select
              className='form-select mb-3'
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
            >
              {experienceOptions.map((exp, i) => (
                <option key={i} value={exp}>{exp}</option>
              ))}
            </select>

            <ul className='list-group'>
              {filteredSkills.map((skill, index) => (
                <li
                  key={index}
                  className='list-group-item d-flex justify-content-between align-items-center'
                >
                  <span>{skill}</span>
                  <button
                    className='btn btn-sm text-white' style={{backgroundColor:'#746658'}}
                    onClick={() => handleAddSkill(skill)}
                  >
                    Add
                  </button>
                </li>
              ))}
              {filteredSkills.length === 0 && (
                <li className='list-group-item text-muted'>No skills found.</li>
              )}
            </ul>
            <div className='mt-3'>
              <button
                className='btn text-white fw-semibold w-25'
                style={{ backgroundColor: '#746658' }}
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  </>
}

export default SkillsSelector;
