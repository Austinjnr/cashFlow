import React from 'react';
//import { useHistory } from 'react-router-dom';
import './Reset.css';
import resetImage from './reset password.png';

function Reset() {
  return (
    <div className="form">
      <img className='resetimage' src={resetImage} alt="Reset Image" />
      <div>
        <h2 data-testid="login-1" className='reset-text'> Reset Password</h2>
       
          <label className='email'>
            EMAIL
            <input className='emailInput' type="email" name="email" required />
          </label>
          <label className='password'>
            NEW PASSWORD
            <input className='passwordInput' type="password" name="password" required />
          </label>
          <label className='confirmPassword'>
            CONFIRM PASSWORD
            <input className='reset-passwordInput' type="password" name="password" required />
          </label>
            <button className="altered-btn"type="Reset">Reset</button>
      </div>
    </div>
  );
}

export default Reset;
