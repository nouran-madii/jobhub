import React from 'react'

function Name() {
    return <>
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="fname" className='form-label'>First Name</label>
                    <input type="text" className="form-control" id="fname" />
                </div>
                <div className="col">
                    <label htmlFor="lname" className='form-label'>Last Name</label>
                    <input type="text" className="form-control" id="lname" />
                </div>
            </div>
    </>
}

export default Name
