import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://cashflow-dwee.onrender.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    });

    const { message, errors } = await response.json();

    if (message) {
      setMessage(message);
      setIsRegistering(true)
<<<<<<< Updated upstream
      history.push("/profile-setup"); 
=======
      history.push("/login"); 
>>>>>>> Stashed changes
      window.location.reload();
    } else {
      setError(errors);
      setIsRegistering(false);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
<<<<<<< Updated upstream
        <img src='/video/Mobile login.mp4' alt="login"/>
=======
        <video src='/video/Mobile login.mp4' autoPlay muted loop></video>
>>>>>>> Stashed changes
      </div>
      <div className="auth-form-container">
        <h2>Join Us</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="name"
            placeholder="Full Name"
            name="name"
          />

          <label htmlFor="email">Email</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="youremail@gmail.com"
          />

          <label htmlFor="password">Password</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            placeholder="**********"
            name="password"
          />

          <label htmlFor="confirm">Confirm Password</label>
          <input
            required
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            id="confirm"
            type="password"
            placeholder="**********"
            name="confirm"
          />
          <button type="submit"   className="link-btn">
            {isRegistering ? "Registering..." : "Register"}
          </button>
          <div style={{ backgroundColor: "red", color: "black" }}>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </div>
        </form>
        <button
          
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
}

export default SignUp;
