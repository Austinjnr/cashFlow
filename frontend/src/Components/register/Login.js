import React from 'react';
//import { useHistory } from 'react-router-dom';
import './Register.css';
import loginImage from './login.jpeg';

function LoginPage() {
  return (
    <div className="form">
      <img className='image' src={loginImage} alt="Login Image" />
      <div>
        <h2 className='text'> Welcome Back</h2>
       
          <label className='email'>
            EMAIL
            <input className='emailInput' type="email" name="email" required />
          </label>
          {/* added password input */}
          <label className='password'>
            PASSWORD
            <input className='passwordInput' type="password" name="password" required />
          </label>
          
            <button className="login-btn"type="submit">Login</button>
            <button className="reset-btn">Forgot Password</button>
            <p className="no-account-btn">Don't have an Account? <button className="create-account">Create One!</button></p>
      </div>
    </div>
  );
}

export default LoginPage;
