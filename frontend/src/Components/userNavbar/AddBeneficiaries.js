import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './beneficiary.css';

const AddBeneficiary = ({AccountId}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
  
    const beneficiary = {name, phone, email}
    fetch(`https://cashflow-1rf2.onrender.com/beneficiaries/${AccountId}`, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(beneficiary)
    }).then(() => {
      console.log('Successfully')
      setIsLoading(false)
    })

    history.push('/beneficaries')
  }

  return (
    <form className="form" style={{marginTop: "5rem", marginLeft: "10rem", marginRight: "10rem"}} onSubmit={handleSubmit}>
      <span className="signup">Add a Beneficiary</span>
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="beneficiary@gmail.com"
        className="form--input"
      />
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
      {!isLoading && <button className="form--submit">Create Beneficiary</button>}
      {isLoading &&<button className="form--submit" disabled>Creating...</button>}
    </form>
  );
};

export default AddBeneficiary;
