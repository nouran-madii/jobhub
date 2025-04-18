import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectMajor from './SelectMajor/SelectMajor';
import Buttons from './Buttons/Buttons';
import SkillsSelector from './SkillsSelector/SkillsSelector';
import LanguageSelector from './LanguageSelector/LanguageSelector';


function WithSkills() {

    const [selectedMajor, setSelectedMajor] = useState('');

    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/jobs');
    };

    return <>
    <div className="container mt-1 mb-1">
        <div className='row gap-5'>
            <div className="col-sm-12 col-md-3">
                <SelectMajor onMajorChange={setSelectedMajor} />
                <Buttons/>
            </div>

            <div className="col-sm-12 col-md-8 d-flex flex-column gap-4">
                <SkillsSelector selectedMajor={selectedMajor} />
                <LanguageSelector/>
                <div className="d-flex justify-content-end my-2">
                    <button
                        className="btn text-white w-25 fw-semibold"
                        style={{ backgroundColor: '#746658' }}
                        onClick={handleNext}>Next</button>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default WithSkills
