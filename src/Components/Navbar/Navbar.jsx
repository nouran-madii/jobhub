import React from 'react';
import { Link } from 'react-router-dom';
import './_Navbar.scss';
import Dropdown from './Dropdown/Dropdown';
import Menu from './Menu/Menu';
import ResponsiveMenu from './ResponsiveMenu/ResponsiveMenu';

function Navbar() {
    return <>
    <nav className='fw-bold position-sticky top-0 z-1'>
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
                            <button className="btn fa-solid fa-magnifying-glass"></button>
                        </Link>
                        <Dropdown/>
                        <Link to='login'>Login</Link>
                        <Menu/>
                    </div>

                    {/* responsive menu */}
                    <div className=" d-block d-lg-none">
                        <ResponsiveMenu/>
                    </div>
                
            </div>
        </nav>

    </>
}

export default Navbar
