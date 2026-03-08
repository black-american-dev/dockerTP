import React from 'react'
import StudentForm from '../components/StudentForm'
import { Link } from 'react-router-dom'

function Form() {
    return (
        <>
            <header>
                <Link to={"/"} className='bg-[#a78bfa] font-bold text-[#111827] px-4 py-2 rounded-md'>Go Back</Link>
            </header>
            <div className='flex justify-center items-center h-screen'>
                <StudentForm />
            </div>
        </>
    )
}

export default Form