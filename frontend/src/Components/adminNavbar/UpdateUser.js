import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './admin.css';

const UpdateUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [profile, setProfile] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); // Set isLoading to true before making fetch request

        const user = { name, email, phone, profile };
        fetch(`http://localhost:8000/users/${user}`, { // Replace `userId` with the ID of the user you want to update
            method: 'PATCH', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            console.log('updated user');
            setIsLoading(false); 
            history.go(-1);
        });
    }

    return (
        <div className="update">
            <h2>Update Account</h2>
            <form onSubmit={handleSubmit}>
                <label>UserName:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name" />
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="useremail@gmail.com" />
                <label>Phone Number:</label>
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254" />
                <label>Profile Picture:</label>
                <input
                    type="file"
                    onChange={(e) => setProfile(e.target.files[0])} /> 
                {!isLoading && <button>Update User</button>}
                {isLoading && <button disabled>Updating... <i className="fa-duotone fa-spinner fa-spin-pulse" style={{ '--fa-primary-color': '#000000', '--fa-secondary-color': '#000000' }}></i></button>}
            </form>
        </div>
    );
};

export default UpdateUser;
