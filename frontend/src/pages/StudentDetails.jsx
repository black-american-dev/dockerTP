import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Modify from './Modify'

function StudentDetails() {
    const {id} = useParams()
    const [student, setStudent] = useState({})
    const [showForm, setShowForm] = useState(false)
    const isLoggedIn = document.cookie.includes("token")

    const navigate = useNavigate()

    useEffect(()=> {
        axios.get(`http://localhost:5000/api/students/${id}`)
        .then(
            res =>{ setStudent(res.data[0])
            console.log(res.data)
        })
    },[id])
    const handleDelete = () => {
        if (!isLoggedIn) {
            const answer = confirm("you need to be logged in . Go to log in page ?")
            if (answer) {
                navigate("/register")
            }
        }
        axios.delete(`http://localhost:5000/api/students/${id}`,{withCredentials: true})
        .then(res => {
            console.log(res.data)
            navigate("/")
        })
    }
    return (
        <>
            <header>
                <Link to={"/"} className='bg-[#a78bfa] font-bold text-[#111827] px-4 py-2 rounded-md'>Go Back</Link>
            </header>
            <div className="flex flex-col justify-start items- dark:bg-gray-800 dark:text-white rounded-md p-7 mt-10">
                <h2 className="font-bold">nom : <span className="font-light text-red-500">{student.name}</span></h2><br />
                <h2 className="font-bold">age : <span className="font-light text-red-500">{student.age}</span></h2><br />
                <h2 className="font-bold">filiere : <span className="font-light text-red-500">{student.filiere}</span></h2><br />
                <h2 className="font-bold">email : <span className="font-light text-red-500">{student.email}</span></h2><br />
                <h2 className="font-bold">password : <span className="font-light text-red-500">{student.password}</span></h2><br />
                <button onClick={handleDelete} className='px-4 py-2 bg-red-700 hover:bg-red-800 hover:cursor-pointer text-black font-bold rounded-md mb-5'>Delete this student</button>
                <button onClick={() => setShowForm(!showForm)} className='px-4 py-2 bg-[#a78bfa] hover:bg-[#916ff6] hover:cursor-pointer rounded-md text-[#111827] font-bold '>Modify this student</button>    
            </div>
            {showForm ? 
                <Modify />
                : null
            }
        </>
    )
}

export default StudentDetails