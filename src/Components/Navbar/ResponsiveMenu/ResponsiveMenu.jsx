import React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveMenu() {

    return <>
    <div>
      <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <i className="fa-solid fa-bars"></i>
      </button>

      <div className="offcanvas offcanvas-start" style={{width:'250px'}} tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title text-black" id="offcanvasExampleLabel">Menu</h5>
          <button type="button" className="btn-close btn-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column fw-normal gap-3">
          <Link to='login'>Login</Link>
          <Link to='/'>Home</Link>
          <Link to='forCompany'>For Company</Link>
          <Link>About Us</Link>
          <Link>Help Center</Link>
          <Link>Contact Us</Link>
          <div className="dropdown">
            <button className="btn btn-outline-dark" type="button" data-bs-toggle="dropdown">
              Add Job
            </button>
            <ul className="dropdown-menu">
              <li><Link to="internship" className="dropdown-item">Internship</Link></li>
              <li><Link to="job" className="dropdown-item">Job</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
}

export default ResponsiveMenu;
