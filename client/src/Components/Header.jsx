import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div className='bg-slate-200 text-lg'>
            <div className='flex justify-between items-center max-w-6xl mx-auto  p-3'>
                <Link to='/'><h1 className='font-bold'>Sai Porto</h1></Link>
                <ul className='flex gap-5'>
                <Link to='/'><li>Home</li></Link>
                    <Link to='/home'><li>About Me</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                    <Link to='/profile'><li>Profile</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Header