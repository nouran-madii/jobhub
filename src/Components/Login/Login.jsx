import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'
import Email from './Email/Email'
import Password from './Password/Password'
import SignInBtn from './SignInBtn/SignInBtn'
import Header from './Header/Header'
import SignInWith from './SignInWith/SignInWith'

function Login() {
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
                <div className='text-center pt-2'>
                    <h4>Login To Your Account</h4>
                    <p>Welcome Back Select Method To Login</p>
                </div>
                <Email/>
                <Password/>
                <SignInBtn/>
                <div className='text-end'>
                    <Link to='/forgetPassword' className='forget text-decoration-none mb-3'>Forget Password?</Link>
                </div>
                <SignInWith/>
                <div className='d-flex justify-content-center gap-1'>
                    <p className='text-black'>New To JOB HUB?</p>
                    <Link to='/signUp'>Sign Up</Link>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Login
