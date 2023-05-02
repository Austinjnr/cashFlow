import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./Admin.css";

const UpdateUser = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  
  
const handleSubmit = (e) => {
  e.preventDefault();
  setIsLoading(true);
  const user = { name, phone, profile };
  console.log("User:", user);
  console.log("ID:", id);
  
  fetch(`https://cashflow-1rf2.onrender.com/accounts/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("Response:", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setIsLoading(false);
      history.go(-1);
    })
    .catch((error) => {
      console.error("There was an error:", error);
      setIsLoading(false);
    });
};

  return (
    <div className="edit mt-5">
      <h2>Update Account</h2>
      <form onSubmit={handleSubmit}>
        <label>UserName:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+254"
        />
        <label>Select Picture:</label>
        <input type="file" onChange={(e) => setProfile(e.target.files[0])} />
        {!isLoading && <button className="btn btn-success">Update User</button>}
        {isLoading && (
          <button className="btn btn-success" disabled>
            Updating...
          </button>
        )}
      </form>
    </div>
  );
};

export default UpdateUser;
