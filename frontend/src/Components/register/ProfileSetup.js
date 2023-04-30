import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

function ProfileSetup({userId}) {
  const [phone_number, setPhoneNumber] = useState('');
  const [id_number, setIdNumber] = useState('');
  const [account_number, setAccountNumber] = useState('');
  const [avatar_url, setAvatarUrl] = useState('');

  const [error, setError] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [message, setMessage] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsRegistering(true);
      setError("");
      setMessage("");

      const res = await fetch(`https://cashflow-1rf2.onrender.com/accounts/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          phone_number,
          avatar_url,
          id_number,
          account_number
        })
      });

      const data = await res.json();
      sessionStorage.setItem("AccountId", data.session );
      setMessage("Profile created successfully!");
      history.push("/user-profile");
      window.location.reload();
    } catch (error) {
      setError(error.message);
      setMessage("");
      setIsRegistering(false);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src='/video/video-2.mp4' alt="profile" />
      </div>
      <div className="auth-form-container">
        <h2>Create an Account</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="account_number">Account Number</label>
          <input
            required
            value={account_number}
            onChange={(e) => setAccountNumber(e.target.value)}
            type="password"
            id="account_number"
            name="account_number"
          />
          <label htmlFor="id_number">ID Number</label>
          <input
            required
            value={id_number}
            onChange={(e) => setIdNumber(e.target.value)}
            type="text"
            placeholder="1234567"
            id="id_number"
            name="id_number"
          />
          <label htmlFor="phone_number">Phone Number</label>
          <input
            required
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            placeholder="+254"
            id="phone_number"
            name="phone_number"
          />
          <label htmlFor="avatar_url">Profile Picture</label>
          <input
            value={avatar_url}
            onChange={(e) => setAvatarUrl(e.target.value)}
            type="file"
            id="avatar_url"
            name="avatar_url"
          />
          <div style={{ backgroundColor: "red", color: "black" }}>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
          </div>
          <button type="submit" className="link-btn">
            {isRegistering ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfileSetup;