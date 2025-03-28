import React from 'react';
import { Link } from 'react-router-dom';
// import './Menu.scss';

function ResponsiveMenu() {

    return <>
    <div className='menuBg'>
    <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<i className="fa-solid fa-bars"></i>
</button>

<div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title text-black" id="offcanvasExampleLabel">Menu</h5>
    <button type="button" className="btn-close btn-dark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body d-flex flex-column fw-normal gap-3">
    <Link>Home</Link>
    <Link>For Company</Link>
    <Link>About Us</Link>
    <Link>Login</Link>
    <Link>Help Center</Link>
    <Link>Contact Us</Link>
    <div className="dropdown">
      <button className="btn btn-outline-dark" type="button" data-bs-toggle="dropdown">
        Add Job
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Internship</a></li>
        <li><a className="dropdown-item" href="#">Job</a></li>
      </ul>
    </div>
  </div>
</div>
    </div>
    </>
}

export default ResponsiveMenu;
