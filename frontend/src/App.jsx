import './App.css'
import Form from './pages/Form'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import StudentDetails from './pages/StudentDetails'
import Modify from './pages/Modify'
import SignUp from './pages/SignUp'

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/student/:id' element={<StudentDetails />} />
        <Route path='/student/:id' element={<Modify />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
