import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import './Register.css';

function Reset() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      history.push("/login");
  }

  return (
    <div className='container-auth'>
      <div className="image-container">
      <img src='/video/Privacy policy.mp4' alt="login" />
      </div>
     <div className="auth-form-container">
            <h2>Reset your password</h2>
            <p>Enter your CashFlow.com email address so we can reset your password.</p>
            <form className="reset-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input 
                required
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="youremail@gmail.com" 
                id="email" 
                name="email" />
                <label htmlFor="password">New Password</label>
                <input 
                value={pass} onChange={(e) => setPass(e.target.value)} 
                type="pass" 
                placeholder="********" 
                id="pass" 
                name="pass" />
                <label htmlFor="password">Confirm Password</label>
                <input 
                value={password} onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="********" 
                id="password" 
                name="password" />
                <button style={{"background-color": "#407BFF"}} type="submit">Reset Password</button>
            </form>
        </div>
        </div>
  );
}

export default Reset;
