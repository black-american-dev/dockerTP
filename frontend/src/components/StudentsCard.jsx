import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const StudentsCard = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/api/students/")
            .then(res => setStudents(res.data))
    })

    return(
        <>
            {students.map((s, index)=> (
                <Link to={`/student/${s.id}`}>
                    <div key={index} className="flex flex-col justify-start items- dark:bg-gray-800 dark:text-white rounded-md p-7">
                        <h2 className="font-bold">nom : <span className="font-light text-red-500">{s.name}</span></h2><br />
                        <h2 className="font-bold">age : <span className="font-light text-red-500">{s.age}</span></h2><br />
                        <h2 className="font-bold">filiere : <span className="font-light text-red-500">{s.filiere}</span></h2><br />
                    </div>
                </Link>
            ))
            }
        </>
    )
}
export default StudentsCard