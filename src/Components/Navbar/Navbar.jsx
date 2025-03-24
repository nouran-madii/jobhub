import React from 'react'
import { Link } from 'react-router-dom'
import './_Navbar.scss';

function Navbar() {
    return <>
    
    <nav className='fw-bold'>
            <div className="container d-flex justify-content-between align-items-center">
                
                    <div className="links-left d-none d-lg-flex column-gap-4">
                        <Link to=''  className="activeLink">Home</Link>
                        <Link to=''>For Company</Link>
                        <Link to=''>About Us</Link>
                    </div>

                    <div className="heading pt-1 fw-light text-center">
                        <Link to=''>
                            <h1 className='fw-light border-bottom border-dark pb-2'>JOB HUB</h1>
                            <p>For Fresh Graduates</p>
                        </Link>
                    </div>

                    <div className="links-right d-none d-lg-flex column-gap-4">
                        <a href='#l'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        
                        <a href='l' className="add-job align-content-center fw-semibold text-center rounded text-white">Add Job</a>
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
        </nav>

    </>
}

export default Navbar
