import React, { useState } from "react";
import "./User.css";
import axios from "axios";

const Deposit = ({ AccountId }) => {
  // console.log(AccountId);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios
      .post(`https://cashflow-1rf2.onrender.com/deposit/${AccountId}`, {
        amount: amount,
      })
      .then((response) => {
        const { transaction } = response.data;
        // console.log(transaction);
        setMessage(`Dear customer, you have successfully deposited Ksh. ${transaction.amount}. Your new account balance is ${transaction.balance} on ${new Date(transaction.created_at).toLocaleString("en-US", { timeZone: "Africa/Nairobi", weekday: "long", year: "numeric", month: "long", day: "numeric" })}, at ${new Date(transaction.created_at).toLocaleString("en-US", { timeZone: "Africa/Nairobi", hour: "numeric", minute: "numeric", hour12: true })}. Thank you for choosing CashFlow. We move together.`);
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
          required
          type="number"
          placeholder="enter amount"
          className="formup--input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {message && <p dangerouslySetInnerHTML={{ __html: message }}></p>}
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
