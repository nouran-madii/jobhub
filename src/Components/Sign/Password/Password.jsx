import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import './Password.scss';

function Password() {
    const [showPassword, setShowPassword] = useState(false);

    return <>
            <div className='mb-4' style={{ position: 'relative' }}>
                <label htmlFor="password" className='form-label'>Password</label>
                <input type={showPassword ? "text" : "password"} className='form-control' id='password' placeholder='Enter Your Password'/>
                <i className={`bi ${showPassword ? 'bi-eye-slash' : 'bi-eye'}`} 
                onClick={() => setShowPassword(!showPassword)}></i>
    </div>
    </>;
}

export default Password;
