import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './beneficiary.css'

const AddBeneficiary = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const beneficiaries = { name, phone };
    fetch(`http://localhost:8000/users/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(beneficiaries),
    })
      .then(() => {
        console.log("added Beneficiaries");
        setIsLoading(false);
        history.push("/beneficiaries");
      })
      .catch((error) => {
        console.error("Error adding beneficiary:", error);
        setIsLoading(false);
      });
  };

  return (
    <form className="form" style={{marginTop: "5rem", marginLeft: "6rem", marginRight: "6rem"}}>
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
      <button className="form--submit">Create Beneficiary</button>
    </form>
  );
};

export default AddBeneficiary;
