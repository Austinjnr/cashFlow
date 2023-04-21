import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

function SignUp(props) {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setpassword] = useState('');
  const[pass, setPass] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = {
        name: name,
        email: email,
        password: password,
        confirm_password: pass
      };

      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {

        history.push("/profile-setup");
      } else {
        const errorData = await response.json();
        console.log(errorData); 
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return ( 
    <div className="container">
      <div className="image-container">
      <img src='/video/Mobile login.mp4' alt="login"/>
      </div>
    <div className="auth-form-container">
      <h2>Join Us</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input 
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        id="name"
        placeholder="full name"
        name="name">
        </input>

        <label htmlFor="email">Email</label>
        <input
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="youremail@gmail.com">
        </input>

        <label htmlFor="password">Password</label>
        <input
        required
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        id="password"
        placeholder="**********"
        name="password">
        </input>

        <label htmlFor="confirm">Confirm Password</label>
        <input
        required
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        id="password"
        placeholder="**********"
        name="password">
        </input>
        <button type="submit">Create Account</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    </div>
   );
}

export default SignUp;