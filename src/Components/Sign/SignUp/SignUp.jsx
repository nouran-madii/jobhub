import React from 'react'
import '../Login/Login.scss'
import { Link } from 'react-router-dom'
import SignUpBtn from './SignUpBtn/SignUpBtn'
import Header from '../Header/Header'
import Email from '../Email/Email'
import Password from '../Password/Password'
import SignUpWith from './SignUpWith/SignUpWith'
import Name from './Name/Name'

function SignUp() {
    return <>
        <div className='login' style={{ 
                backgroundImage: "url('/imgs/sign.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100vh" }}>
            <Header/>

            <div>
            <div className='container form mx-auto m-3 px-5'>
                <div className='text-center pt-2 mb-4'>
                    <h4 className='fw-bold'>Create your account</h4>
                </div>
                <Name/>
                <Email/>
                <Password/>
                <SignUpBtn/>
                <SignUpWith/>
                <div className='d-flex justify-content-center gap-1'>
                    <p className='text-black'>Already Have An Account?</p>
                    <Link to='/login' className='sign text-decoration-none'>Sign In</Link>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default SignUp
