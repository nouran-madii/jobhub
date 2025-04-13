import React from 'react'
import '../../Login/Login.scss'

function SignUpWith() {
    return <>
                <div className='mb-3 text-center'>
                    <div className=" d-flex align-items-center my-3 justify-content-center" style={{color: '#6B4F3B', fontSize: '14px'}}>
                        <div className="line"></div>
                        <span className='mx-2'>or sign up with</span>
                        <div className="line"></div>
                    </div>
                    <div className='imgs d-flex justify-content-center gap-4 mx-auto'>
                        <a href="https://facebook.com"><img className='' src="/imgs/facebookIcon.png" alt="facebook" /></a>
                        <a href="https://google.com"><img className='' src="/imgs/googleIcon.png" alt="google" /></a>
                    </div>
                </div>
            </>
}

export default SignUpWith
