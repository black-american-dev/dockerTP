import StudentsCard from '../components/StudentsCard'
import RegisterButton from '../components/RegisterButton'
import StudentForm from '../components/StudentForm'
import { Link } from 'react-router-dom'

function Home() {
    const isLoggedIn = document.cookie.includes("token")
    const handleLogOut = () => {
        document.cookie= "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        window.location.reload()
    }
    return (
        <>
            <header className='flex justify-end'>
                {
                    isLoggedIn ? <button onClick={handleLogOut} className='bg-red-500 text-white px-4 py-2 rounded'>Lougout</button>
                    : <RegisterButton />
                }
                
            </header>
            <h1 className='font-bold italic'>All students :</h1>
            <div className='grid grid-cols-3 gap-4'>
                <StudentsCard />
            </div>
            <h1 className='font-bold italic'>add student :</h1><br />
            <Link to={"/form"} className='bg-[#a78bfa] font-bold text-[#111827] px-4 py-2 rounded-md'>Show form</Link>
        </>
    )
}
export default Home