import React from 'react'
import RegisterForm from '../components/RegisterForm'
import { Link } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'

function SignUp() {
    return (
        <>
            <header>
                <Link to={"/"} className='bg-[#a78bfa] font-bold text-[#111827] px-4 py-2 rounded-md'>Go Back</Link>
            </header>
            <div className='flex justify-center items-center h-screen'>
                <SignUpForm />
            </div>
        </>
    )
}

export default SignUp