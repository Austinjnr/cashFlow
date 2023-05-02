import React, { useState } from "react";
import "./User.css";
import axios from "axios";

const Deposit = ({ AccountId }) => {
  console.log(AccountId);
  const [amount, setAmount] = useState("");
  const [message, seMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`https://cashflow-1rf2.onrender.com/deposit/${AccountId}`, {
        amount: amount,
      })
      .then((response) => {
        seMessage(response.data.message);
        setAmount("");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="deposit mt-5">
      <form className="formup" onSubmit={handleSubmit}>
        <span className="signup">Deposit to Your Account</span>
        <input
          type="number"
          placeholder="enter amount"
          className="formup--input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {message && <p>{message}</p>}
        <button
          className="formup--submit"
          type="submit"
          disabled={!amount || isLoading}
        >
          {isLoading ? "Depositing..." : "Deposit"}
        </button>
      </form>
    </div>
  );
};

export default Deposit;
