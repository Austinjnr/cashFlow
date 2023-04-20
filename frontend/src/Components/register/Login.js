import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleChange = (e) => {
      e.preventDefault();
      console.log("reset password");
      history.push("/reset-password");
    }

    return (
      <div className="container">
        <div className="image-container">
        <img src='/video/Mobile login.mp4' alt="login"/>
        </div>
        <div className="auth-form-container">
            <h2>Welcome Back</h2>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input 
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email" />
                <label htmlFor="password">Password</label>
                <input 
                required
                value={pass} onChange={(e) => setPass(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" />
                <button type="submit" onClick={handleSubmit}>Log In</button>
                <button className="btn-1" type="submit" onClick={handleChange}>Forgot Password</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('sign-up')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}