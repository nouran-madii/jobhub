// import React from 'react'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Buttons.scss'

function Buttons() {

    const [selected, setSelected] = useState(false);
    useEffect(() => {
        setSelected('withSkills'); 
    }, []);

    const handleChange = (id) => {
        if (selected === id) {
            setSelected(''); 
            setSelected(id); 
        }
    };


    return <>
    <div className="mt-4 w-50 d-flex flex-column gap-2">
        {/* with skills */}
        <div className='d-flex justify-content-between align-items-center'>
            <label htmlFor="withSkills">With Skills</label>
            <input type="checkbox" value="" id="withSkills" 
            checked={selected === 'withSkills'} 
            onChange={() => handleChange('withSkills')}/>
        </div>

        {/* without skills */}
        <div className='d-flex justify-content-between align-items-center'>
            <label htmlFor="withoutSkills">Without Skills</label>
            <Link to='/withoutSkills'><input   type="checkbox" value="" id="withoutSkills" 
            checked={selected === 'withoutSkills'} 
            onChange={() => handleChange('withoutSkills')}/></Link>
        </div>

        {/* more skills */}
        <div className='d-flex justify-content-between align-items-center'>
            <label htmlFor="moreSkills">More Skills</label>
            <Link to='/withoutSkills'><input  type="checkbox" value="" id="moreSkills" 
            checked={selected === 'moreSkills'} 
            onChange={() => handleChange('moreSkills')}/></Link>
        </div>
    </div>
    </>
}

export default Buttons
