import React, { useState } from 'react';
import '../Login/Login.scss';
import Header from '../Header/Header';

function ForgetPassword() {
    // State 3shan net7km fe display el Form
    const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);

    // Function Reset Password
    const handleResetClick = (e) => {
        e.preventDefault(); 
        setShowNewPasswordForm(true); 
    };

    return <>
            <div className="login"
            style={{
                backgroundImage: "url('/imgs/sign.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh",
        }}>
            <Header/>
            <div>
                <div className="container form mx-auto m-3 px-5">
                {!showNewPasswordForm ? 
                    <>
                        <div className="pt-2 mx-auto w-75">
                            <h5 className="fw-bolder mt-4 text-black fs-4">Forgot your password?</h5>
                            <p className="text-secondary fs-6">Recover your account. We will send you a Code to change your password.</p>
                        </div>
                        <div className="text-center mb-4">
                            <img src="/imgs/secure-login.png" className="w-50" alt="secure-login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="emailORphone" className="form-label">Email / Phone Number</label>
                            <input type="text" className="form-control" id="emailORphone"/>
                        </div>
                        <div>
                            <button className="btn text-white w-100" style={{ backgroundColor: '#B8B2A8' }} onClick={handleResetClick}>Reset Password</button>
                        </div>
                    </>
                : 
                    <>
                        <div className="pt-2 mx-auto w-75">
                            <h5 className="fw-bolder mt-4 text-black fs-4">Type your new password</h5>
                        </div>
                        <div className="text-center mb-4">
                            <img src="/imgs/secure-login.png" className="w-50" alt="secure-login" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="newPassword" className="form-label">New Password</label>
                            <input type="password" className="form-control" id="newPassword"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmNewPassword" className="form-label">Confirm New Password</label>
                            <input type="password" className="form-control" id="confirmNewPassword"/>
                        </div>
                        <div>
                            <button className="btn text-white w-100" style={{ backgroundColor: '#B8B2A8' }} onClick={(e) => e.preventDefault()}>Reset Password</button>
                        </div>
                    </>
            }
                </div>
            </div>
        </div>
    </>
;
}

export default ForgetPassword;
