import React from 'react';

function SelectMajor({ onMajorChange }) {
    const handleChange = (e) => {
        onMajorChange(e.target.value);
    };

    return <>
        <div className='form-group'>
            <label htmlFor="major"><h6 className='text-black form-label'>Please Select your Major</h6></label>
            <select id='major' className='form-select' defaultValue="" onChange={handleChange}>
                <option value="" disabled hidden>Open</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="UI/UX">UI/UX</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="Data Science">Data Science</option>
            </select>
        </div>
    </>
}

export default SelectMajor;
