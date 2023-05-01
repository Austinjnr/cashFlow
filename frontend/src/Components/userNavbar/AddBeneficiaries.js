import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./beneficiary.css";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AddBeneficiary = ({ AccountId }) => {
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [account_number, setAccountNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const regex = /^[1-9]\d{7}$/;
    if (!regex.test(account_number)) {
      setErrorMessage("Account number should be an 8-digit positive number");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Invalid email address");
      setIsLoading(false);
      return;
    }
    fetch(`https://cashflow-1rf2.onrender.com/beneficiaries/${AccountId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name,
          email,
          phone_number,
          account_number
          
         }),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Successfully created beneficiary:", data);
        setIsLoading(false);
        history.push("/beneficiaries");
      })
      .catch((error) => {
        setErrorMessage(
          "Dear Customer, the Beneficiary Account number you entered was not found. Kindly confirm it again. Thank you for choosing CashFlow."
        );
        setIsLoading(false);
      });
  };
 console.log(account_number);
  return (
    <form
      className="form"
      style={{ marginTop: "5rem", marginLeft: "10rem", marginRight: "10rem" }}
      onSubmit={handleSubmit}
    >
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
        type="number"
        value={account_number}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="123456"
        className="form--input"
      />
      <input
        required
        type="tel"
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="+254"
        className="form--input"
      />
      < >
      {errorMessage && <div className="error" style={{fontFamily: "Times New Roman" , font: "Bold"}}>{errorMessage}</div>}
      </>
      {!isLoading && (
        <button className="form--submit">Create Beneficiary</button>
      )}
      {isLoading && (
        <button className="...">
          <Spinner animation="border" size="sm" />
        </button>
      )}
    </form>
  );
};

export default AddBeneficiary;
