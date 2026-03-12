import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const SignUpForm = () => {
    const [loginInfo ,setLoginInfo] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [message, setMessage] = useState({})
    const navigate = useNavigate()
    const hundleLogin = (e) => {
        e.preventDefault()
        /*if (loginInfo.email == "" || loginInfo.password == "") {
            return alert("both email and password are required !")
        }*/
        axios.post("http://34.175.22.39:5000/api/users/signup",loginInfo, {withCredentials:true})
            .then(res => {
                setMessage(res.data[0])
                console.log(message)
            })
        navigate("/")
    }
    return (
        <StyledWrapper>
            <div className="form-container">
                <p className="title">Sign up</p>
                <form className="form" onSubmit={hundleLogin}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username"  onChange={e => setLoginInfo({...loginInfo,username:e.target.value})} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="username"  onChange={e => setLoginInfo({...loginInfo,email:e.target.value})} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password"  onChange={e => setLoginInfo({...loginInfo,password:e.target.value})}/>
                    </div>
                    <button className="sign mt-5">Sign up</button>
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
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
  }
  .input-group input:focus {
    border-color: rgba(167, 139, 250);
  }
  .forgot {
    display: flex;
    justify-content: flex-end;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175,1);
    margin: 8px 0 14px 0;
  }
  .forgot a,.signup a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;
  }
  .forgot a:hover, .signup a:hover {
    text-decoration: underline rgba(167, 139, 250, 1);
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
  }
  .social-message {
    display: flex;
    align-items: center;
    padding-top: 1rem;
  }
  .line {
    height: 1px;
    flex: 1 1 0%;
    background-color: rgba(55, 65, 81, 1);
  }
  .social-message .message {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgba(156, 163, 175, 1);
  }
  .social-icons {
    display: flex;
    justify-content: center;
  }
  .social-icons .icon {
    border-radius: 0.125rem;
    padding: 0.75rem;
    border: none;
    background-color: transparent;
    margin-left: 8px;
  }
  .social-icons .icon svg {
    height: 1.25rem;
    width: 1.25rem;
    fill: #fff;
  }
  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }`;
export default SignUpForm;