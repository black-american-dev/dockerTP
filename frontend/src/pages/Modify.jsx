import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Modify = () => {
    const {id} = useParams()
    const [studentInfo, setStudentInfo] = useState({
    
    })
    const navigate = useNavigate()
    const isLoggedIn = document.cookie.includes("token")
    const [message, setMessage] = useState({})
    useEffect(()=> {
        axios.get(`http://34.175.22.39:5000/api/students/${id}`)
        .then(res => {
            setStudentInfo(res.data[0])
        })
    }, [id])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isLoggedIn) {
            const answer = confirm("you need to be logged in . Go to log in page ?")
            if (answer) {
                navigate("/register")
            }
        }
        console.log(studentInfo);
        axios.put(`http://34.175.22.39:5000/api/students/${id}`,studentInfo, {withCredentials:true})
            .then(res => {
                setMessage(res.data.message)
                console.log(message)
            })
        alert(`student ${studentInfo.name} has been updated successfully`)
    }
    return (
        <StyledWrapper>
            
            <div className="form-container  mx-auto mt-10">
            <p className="title">Modify Student</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value={studentInfo.name} name="nom" id="nom" placeholder="" onChange={e => setStudentInfo({...studentInfo,name:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="age">Âge</label>
                    <input type="number" value={studentInfo.age} name="age" id="age" placeholder="" onChange={e => setStudentInfo({...studentInfo,age:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="filiere">Filière</label>
                    <input type="text" value={studentInfo.filiere} name="filiere" id="filiere" placeholder="" onChange={e => setStudentInfo({...studentInfo,filiere:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={studentInfo.email } name="email" id="email" placeholder="" onChange={e => setStudentInfo({...studentInfo,email:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" value={studentInfo.password } name="Password" id="Password" placeholder="" onChange={e => setStudentInfo({...studentInfo,password:e.target.value})} />
                </div>
                <button className="sign">Modify Student</button>
            </form>
        </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .form-container {
    width: 320px;
    border-radius: 0.75rem;
    background-color: rgba(17, 24, 39, 1);
    padding: 2rem;
    color: rgba(243, 244, 246, 1);
  }
  .title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
  .form {
    margin-top: 1.5rem;
  }
  .input-group {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  .input-group label {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
  }
  .input-group input {
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: #111827;
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }
  .input-group input:focus {
    border-color: rgba(167, 139, 250);
  }
  .sign {
    display: block;
    width: 100%;
    background-color: #a78bfa;
    padding: 0.75rem;
    text-align: center;
    color: rgba(17, 24, 39, 1);
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    margin-top: 1.5rem;
  }`;

export default Modify;