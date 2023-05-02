import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Register.css";
import { Spinner } from "react-bootstrap";

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

    setIsRegistering(true);

    const response = await fetch(
      "https://cashflow-1rf2.onrender.com/register",
      {
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
      }
    );

    const { message, errors } = await response.json();

    if (message) {
      setMessage(message);

      history.push("/login");

      window.location.reload();
    } else {
      setError(errors);
    }

    setIsRegistering(false);
  };

  return (
    <div className="container-auth">
      <div className="image-container">
        <img src="/video/Mobile login.mp4" alt="login" />
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
          <button type="submit" disabled={isRegistering}>
            {isRegistering ? (
              <Spinner animation="border" variant="light" size="sm" />
            ) : (
              "Register"
            )}
          </button>
          <div style={{ backgroundColor: "red", color: "black" }}>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </div>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("login")}
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
}

export default SignUp;
