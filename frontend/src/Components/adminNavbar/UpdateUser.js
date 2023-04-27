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
        setIsLoading(true); 

        const user = { name, email, phone, profile };
        fetch(`https://cashflow-dwee.onrender.com/accounts/${user}`, {
            method: 'PUT', 
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
                {isLoading && <button disabled>Updating...</button>}
            </form>
        </div>
    );
};

export default UpdateUser;
