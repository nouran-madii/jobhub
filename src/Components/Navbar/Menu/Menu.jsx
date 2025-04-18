import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            {/* opening btn*/}
            <button className="menu-btn border-0 fa-solid fa-bars" onClick={() => setIsOpen(!isOpen)}>
                {/* <i className=""></i> */}
            </button>

            {/* list  */}
            <ul className={`dropdown-menu custom-dropdown ${isOpen ? 'show text-center' : ''} w-25`}>
                {/* closing btn*/}
                <li className="dropdown-item close-btn text-start">
                    <button className="fa-solid fa-xmark border-0 btn" onClick={() => setIsOpen(false)}></button>
                </li>

                {/* header */}
                <li className="dropdown-header fs-4 fw-normal text-black border-bottom">Menu</li>

                {/* items */}
                <li className="dropdown-item border-bottom"><Link to="/help-center">Help Center</Link></li>
                <li className="dropdown-item"><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default Menu;
