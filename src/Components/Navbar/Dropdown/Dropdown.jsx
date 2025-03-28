import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            {/* opening dropdown button*/}
            <button 
                className="add-job border-0 align-content-center fw-semibold text-center rounded text-white" 
                onClick={() => setIsOpen(!isOpen)}
            >
                Add Job
            </button>

            {/* dropdown list */}
            <ul className={`dropdown-menu ${isOpen ? 'd-flex' : ''}`}>
                {/* closed btn*/}
                <li className="dropdown-item">
                    <i 
                        className="fa-solid fa-xmark" 
                        style={{ cursor: "pointer" }} 
                        onClick={() => setIsOpen(false)}
                    ></i>
                </li>
                
                <div>
                    <li className="dropdown-item"><Link to="internship">Internship</Link></li>
                    <li className="dropdown-item"><Link to="job">Job</Link></li>
                </div>
            </ul>
        </div>
    );
}

export default Dropdown;
