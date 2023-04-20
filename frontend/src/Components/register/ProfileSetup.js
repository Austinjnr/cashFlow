import { useState } from "react";
import './Register.css';

function ProfileSetup() {

    const [number, setNumber] = useState ('');
    const [identity, setIdentity] = useState ('');
    const [phone, setPhone] = useState ('');
    const [picture, setPicture] = useState ('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone);
    }

    return (  
        <div className="container">
             <div className="image-container">
             <img src='/video/video-2.mp4' alt="profile" />
             </div>
            <div className="auth-form-container">
            <h2>Create an Account</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Account Number</label>
                <input 
                required
                value={number} 
                onChange={(e) => setNumber(e.target.value)}
                type="password" 
                id="password" 
                name="password" />
                <label htmlFor="number">ID Number</label>
                <input 
                required
                value={identity} 
                onChange={(e) => setIdentity(e.target.value)}
                type="id number" 
                placeholder="1234567" 
                id="number" 
                name="number" />
                <label htmlFor="number">Phone Number</label>
                <input 
                required
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                type="phone number" 
                id="number" 
                name="number" />
                <label htmlFor="image">Profile Picture</label>
                <input 
                value={picture} 
                onChange={(e) => setPicture(e.target.value)}
                type="image/jpeg/png" 
                placeholder="img.png" 
                id="image" 
                name="image" />
                <button type="submit">Create Profile</button>
            </form>
            </div>
        </div>
    );
}

export default ProfileSetup;