import React from 'react';
//import { useHistory } from 'react-router-dom';
import './SignUp.css';
import loginImage from './login.jpeg';

function SignUp() {
  return (
    <div className="signup-form">
      <img className='signupimage' src={loginImage} alt="" />
      <div>
        <h2 data-testid="login-1" className='signup-text'> Join Us</h2>
            <label className='username'>
            USERNAME
            <input className='usernameInput' type="name" name="name" required />
            </label>
          <label className='email'>
            EMAIL
            <input className='emailInput' type="email" name="email" required />
          </label>
          <label className='password'>
            PASSWORD
            <input className='passwordInput' type="password" name="password" required />
          </label>
          <label className='confirmPassword'>
            CONFIRM PASSWORD
            <input className='confirm-passwordInput' type="password" name="password" required />
          </label>
            <button className="signup-btn"type="SignUp">Sign Up</button>
      </div>
    </div>
  );
}

export default SignUp;
