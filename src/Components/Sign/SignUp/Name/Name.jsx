import React from 'react'
import '../../Login/Login.scss'

function Name() {
    return <>
            <div className="name row mb-3">
                <div className="col">
                    <label htmlFor="fname" className='form-label'>First Name</label>
                    <input type="text" className="form-control fname" id="fname" />
                </div>
                <div className="col">
                    <label htmlFor="lname" className='form-label'>Last Name</label>
                    <input type="text" className="form-control lname" id="lname" />
                </div>
            </div>
    </>
}

export default Name
