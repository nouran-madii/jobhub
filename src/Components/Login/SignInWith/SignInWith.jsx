import React from 'react'

function SignInWith() {
    return <>
                <div className='mb-3'>
                    <div className="d-flex align-items-center my-3 justify-content-center" style={{color: '#6B4F3B', fontSize: '14px'}}>
                        <div className="line"></div>
                        <span className='mx-2'>or sign in with</span>
                        <div className="line"></div>
                    </div>
                    <div className='imgs d-flex justify-content-center gap-4'>
                        <img className='' src="/imgs/facebookIcon.png" alt="facebook" />
                        <img className='' src="/imgs/googleIcon.png" alt="google" />
                    </div>
                </div>
    </>
}

export default SignInWith
