import { useState } from "react";
import { useHistory } from "react-router-dom";
import './Register.css';

function ProfileSetup() {

    const [number, setNumber] = useState ('');
    const [identity, setIdentity] = useState ('');
    const [phone, setPhone] = useState ('');
    const [picture, setPicture] = useState ('');

    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://api.example.com/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add your login credentials here

                    'Authorization': 'Bearer <YOUR_ACCESS_TOKEN>'
                },
                body: JSON.stringify({
                    number,
                    identity,
                    phone,
                    picture
                })
            });

            if (response.ok) {
            
                history.push("/user-home");
            } else {
                // Handle error response from the API
                console.error('Failed to create profile:', response.status);
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
        }
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
                id="identity" 
                name="identity number" />
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