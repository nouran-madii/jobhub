import React from 'react'
import Roadmap from './Roadmap/Roadmap'

function WithoutSkills() {
    return <>
        {/* bg */}
        <div>
      {/* Header with background image */}
      <div
        style={{
          backgroundImage: "url('/imgs/coursesBg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60dvh'
        }}
      ></div>

      {/* Title */}
      <div className='text-center my-4'>
        <h2 className='fw-normal' style={{fontSize:'48px'}}>Roadmap</h2>
        <p className='' style={{fontSize:'12px'}}>Clear Path To Success And Growth</p>
      </div>

      {/* Categories (HTML, CSS, etc.) */}
      <Roadmap/>

      {/* For More Skills */}
      <div className='text-center mb-4'>
        <p className='fw-semibold text-decoration-underline' style={{ color: '#4f4036', cursor: 'pointer' }}>
          For More Skills
        </p>
      </div>

      {/* Courses Section Title */}
      <div className='text-center mb-3'>
        <h4 className='fw-bold'>HTML Courses</h4>
      </div>

      {/* Search Bar */}
      <div className='d-flex justify-content-center mb-5'>
        <div className='input-group w-50'>
          <input type='text' className='form-control' placeholder='Search' />
          <span className='input-group-text'><i className='fa-solid fa-filter'></i></span>
        </div>
      </div>

      {/* Placeholder for Courses Cards */}
      <div className='container d-flex flex-wrap gap-4 justify-content-center'>
        {/* Course Card Example */}
        <div className='border rounded p-3' style={{ width: '250px' }}>
          <p className='fw-bold mb-1'>HTML For Beginners</p>
          <p className='text-muted small mb-1'>Abdelrahman Gamal &nbsp; • &nbsp; 4 Weeks</p>
          <p className='small mb-1'>Arabic</p>
          <p className='text-muted small mb-1'>June 12, 2024 by <i className='fa-brands fa-youtube'></i></p>
          <a href='#' className='text-decoration-underline'>Click Here</a>
        </div>
        {/* Repeat this block for more course cards */}
      </div>
    </div>
    </>
}

export default WithoutSkills
