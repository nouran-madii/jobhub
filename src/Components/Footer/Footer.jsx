import React from 'react';
import { Link } from 'react-router-dom';
import './_Footer.scss';

function Footer() {
    return <>
    <footer className='fw-light bg-white py-4'>
        <div className="container d-flex justify-content-between">

            {/* logo */}
            <div className='d-none d-lg-block'>
                <h3 className='fw-light'>Job Hub</h3>
            </div>

            {/* links */}
            <div className='responsive-footer d-flex flex-column row-gap-1'>
                <h5>Links</h5>
                <Link to='about'>About Us</Link>
                <Link to='contact'>Contact Us</Link>
                <Link to=''>Terms & Conditions</Link>
                <Link to=''>Roadmap</Link>
                <Link to=''>Jobs</Link>
            </div>

            {/* browse */}
            <div className='responsive-footer d-flex flex-column row-gap-1'>
                <h5>Browse by Category</h5>
                <Link>Medical</Link>
                <Link>Technicians</Link>
                <Link>Accounting</Link>
                <Link>Hospitality</Link>
                <Link>Information Technology</Link>
            </div>

            {/* follow us */}
            <div className='responsive-footer'>
                <h4>Follow Us</h4>
                <div className='d-flex justify-content-between'>
                    <a href='http://facebook.com'><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="http://youtube.com"><i className="fa-brands fa-youtube"></i></a>
                    <a href="http://instgram.com"><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </footer>
    </>
}

export default Footer
