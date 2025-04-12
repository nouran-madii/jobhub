import React from 'react'

function Email() {
    return <>
            <div className='mb-3'>
                <label htmlFor="email" className='form-label'>Email</label>
                <input type="email" className='form-control' id='email' placeholder='Enter Your Email' />
            </div>
    </>
}

export default Email
