import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
    return <>
        <Link to='/' className='text-decoration-none text-center text-white'><h1>JOB HUB</h1></Link>
    </>

}

export default Header
