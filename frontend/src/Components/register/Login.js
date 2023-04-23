import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
  
    const history = useHistory();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setIsLoggingIn(true);
      const res = await fetch("https://cashflow-dwee.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (data.message === "admin") {
        history.push('/admin-home')
        window.location.reload();
        setMessage(data.message);
      } else if (data.message === "user"){
        history.push("/user-home")
        setMessage(data.message);
        window.location.reload();
        
      }
      else {
        setMessage("");
        setError(data.errors);
        console.log(data.errors);
        setIsLoggingIn(false);
      }
    };

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
            <form className="login-form" onSubmit={handleLogin}>
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
                value={password} onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" />
                  <button type="submit" disabled={isLoggingIn}>
                  {isLoggingIn ? "LoggingIn..." : "LOGIN"}
                </button>
                <div style={{backgroundColor: "red" , color: "black"}}>
                  {message && <p>{message}</p>}
                  {error && <p>{error}</p>}
                </div>
                <button className="btn-1" type="submit" onClick={handleChange}>Forgot Password</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('sign-up')}>Don't have an account? Register here.</button>
        </div>
        </div>
    )
}