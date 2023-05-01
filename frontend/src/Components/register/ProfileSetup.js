import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

function ProfileSetup({userId}) {
  const [phone_number, setPhoneNumber] = useState('');
  const [id_number, setIdNumber] = useState('');
  const [avatar_url, setAvatar] = useState(null);
  const [name, setName]=useState('')

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

      const formData = new FormData();
      formData.append("phone_number", phone_number);
      formData.append("id_number", id_number);
      formData.append("name", name);
      formData.append("avatar", avatar_url);

      const res = await fetch(`https://cashflow-1rf2.onrender.com/accounts/${userId}`, {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      sessionStorage.setItem("AccountId", data.session );
      setMessage("Profile created successfully!");
      history.push("/user-profile");
      // window.location.reload();
    } catch (error) {
      setError(error.message);
      setMessage("");
      setIsRegistering(false);
    }
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="container">
      <div className="image-container">
        <img src='/video/video-2.mp4' alt="profile" />
      </div>
      <div className="auth-form-container">
        <h2>Create an Account</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="phone_number">Phone Number</label>
          <input
            required
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            id="phone_number"
            name="phone_number"
          />
          <label htmlFor="id_number">ID Number</label>
          <input
            required
            value={id_number}
            onChange={(e) => setIdNumber(e.target.value)}
            type="text"
            id="id_number"
            name="id_number"
          />
          <label htmlFor="avatar">Profile Avatar</label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/jpeg,image/png,image/webp"
            onChange={handleAvatarChange}
          />
          <button type="submit">Create Account</button>
        </form>
        {isRegistering && <div className="spinner"></div>}
        {message && <div className="message">{message}</div>}
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
}
export default ProfileSetup