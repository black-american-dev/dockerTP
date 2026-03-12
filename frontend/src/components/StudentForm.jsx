import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StudentForm = () => {
    const [studentInfo, setStudentInfo] = useState({
        name: "",
        age: 0,
        filiere: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const isLoggedIn = document.cookie.includes("token")
    const [message, setMessage] = useState({}) 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isLoggedIn) {
            const answer = confirm("you need to be logged in . Go to log in page ?")
            if (answer) {
                navigate("/register")
            }
            return
        }
        console.log(studentInfo);
        axios.post("http://34.175.22.39:5000/api/students",studentInfo, {withCredentials:true})
            .then(res => {
                setMessage(res.data.message)
                console.log(message)
            })
        navigate("/")
    }
    return (
        <StyledWrapper>
            
            <div className="form-container">
            <p className="title">Add Student</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" name="nom" id="nom" placeholder="" onChange={e => setStudentInfo({...studentInfo,name:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="age">Âge</label>
                    <input type="number" name="age" id="age" placeholder="" onChange={e => setStudentInfo({...studentInfo,age:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="filiere">Filière</label>
                    <input type="text" name="filiere" id="filiere" placeholder="" onChange={e => setStudentInfo({...studentInfo,filiere:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="" onChange={e => setStudentInfo({...studentInfo,email:e.target.value})} />
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name="Password" id="Password" placeholder="" onChange={e => setStudentInfo({...studentInfo,password:e.target.value})} />
                </div>
                <button className="sign">Add Student</button>
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

export default StudentForm;