import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss';

function Navbar() {
    return <>
    
    <nav>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center ">
                    <div className="links-left d-none d-lg-flex column-gap-4">
                        <Link to=''  className="activeLink">Home</Link>
                        <Link to=''>For Company</Link>
                        <Link to=''>About Us</Link>
                    </div>

                    <div className="head pt-1">
                        <Link to=''>
                            <h1>JOB HUB</h1>
                            <p>For Fresh Graduates</p>
                        </Link>
                    </div>

                    <div className="links-right d-none d-lg-flex column-gap-4">
                        <a href='#l'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        
                        <a href='l' className="add-job align-content-center">Add Job</a>
                        <a href="login.html">Login</a>
                        <a href='l' className="menu-bar">
                            <i className="fa-solid fa-bars"></i>
                        </a>
                    </div>
                        <div className="menu-bar-responsive d-block d-lg-none">
                        <a href='l' >
                            <i className="fa-solid fa-bars"></i>
                        </a>
                        </div>
                </div>
            </div>
        </nav>

    </>
}

export default Navbar
