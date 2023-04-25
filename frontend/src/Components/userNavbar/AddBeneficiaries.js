import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import './beneficiary.css';

const AddBeneficiary = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const beneficiary = {name, phone}
    fetch('', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(beneficiary)
    }).then(() => {
      console.log('Successfully')
    })
  }

  return (
    <form className="form" style={{marginTop: "5rem", marginLeft: "10rem", marginRight: "10rem"}} onSubmit={handleSubmit}>
      <span className="signup">Add a Beneficiary</span>
      <input
        type="text"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name"
        className="form--input"
      />
      <input
        required
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="+254"
        className="form--input"
      />
      {<button className="form--submit">Create Beneficiary</button>}
      {<button disabled>Creating...</button>}
    </form>
  );
};

export default AddBeneficiary;
