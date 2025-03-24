import React from 'react';
import { Link } from 'react-router-dom';
import './_Navbar.scss';

function Navbar() {
    return <>
    <nav className='fw-bold position-sticky top-0'>
            <div className="container d-flex justify-content-between align-items-center">

                    {/* left links */}
                    <div className="links-left d-none d-lg-flex column-gap-4">
                        <Link to=''  className="activeLink">Home</Link>
                        <Link to='for_company'>For Company</Link>
                        <Link to='about'>About Us</Link>
                    </div>

                    {/* heading */}
                    <div className="heading pt-1 fw-light text-center">
                        <Link to=''>
                            <h1 className='fw-light border-bottom border-dark pb-2'>JOB HUB</h1>
                            <p>For Fresh Graduates</p>
                        </Link>
                    </div>

                    {/* right links */}
                    <div className="links-right d-none d-lg-flex column-gap-4">
                        <Link>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Link>
                        
                        <Link to='add_job' className="add-job align-content-center fw-semibold text-center rounded text-white">Add Job</Link>
                        <Link to='login'>Login</Link>
                        <Link className="menu-bar">
                            <i className="fa-solid fa-bars"></i>
                        </Link>
                    </div>

                    {/* responsive menu */}
                    <div className="menu-bar-responsive d-block d-lg-none">
                        <Link>
                            <i className="fa-solid fa-bars"></i>
                        </Link>
                    </div>
                
            </div>
        </nav>

    </>
}

export default Navbar
