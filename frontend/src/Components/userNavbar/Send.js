import React, { useState, useContext } from "react";
import axios from "axios";
import "./Send.css";
import BeneficiariesContext from "./BeneficiariesContext";
import "bootstrap/dist/css/bootstrap.min.css";

const Send = ({ AccountId }) => {
  const [isBeneficiarySelected, setIsBeneficiarySelected] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  // Get beneficiaries from context
  const beneficiaries = useContext(BeneficiariesContext);

  const handleBeneficiaryChange = (event) => {
    const accountNumber = event.target.value;
    if (accountNumber === "Beneficiary") {
      setIsBeneficiarySelected(true);
      setSelectedBeneficiary(null);
    } else {
      const filteredBeneficiary = beneficiaries.find(
        (beneficiary) => beneficiary.account_number === accountNumber
      );
      if (filteredBeneficiary) {
        setSelectedBeneficiary(filteredBeneficiary);
        setIsBeneficiarySelected(true);
        setAccountNumber(filteredBeneficiary.account_number);
      }
    }
    setAccountNumber(accountNumber);
  };

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
    setIsBeneficiarySelected(false);
    setSelectedBeneficiary(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setShowSpinner(true);
    setIsSending(true);
    setError("");
    setMessage("");

    try {
      const response = await axios.post(
        `https://cashflow-1rf2.onrender.com/send/${accountNumber}/${AccountId}`,
        {
          amount,
          beneficiary_id: selectedBeneficiary ? selectedBeneficiary.id : null,
          message,
        }
      );
      const data = response.data;
      console.log(response.data);
      if (data.transaction) {
        const date = new Date(data.transaction.created_at).toLocaleString(
          "en-US",
          {
            timeZone: "Africa/Nairobi",
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
          }
        );
        setMessage(
          <div style={{ color: "black" }}>
            <p>
              {" "}
              Dear customer, you have successfully sent{" "}
              <span style={{ color: "blue" }}>
                Ksh.{data.transaction.amount}
              </span>{" "}
              to{" "}
              <span style={{ color: "blue" }}>
                {data.transaction.receiver_account_name}
              </span>{" "}
              ,
              <span style={{ color: "blue" }}>
                {data.transaction.receiver_account_number}
              </span>{" "}
              on <span style={{ color: "blue" }}>{date}</span>.<br />
              Your new account balance is{" "}
              <span style={{ color: "blue" }}>
                Ksh.{data.transaction.balance}
              </span>
              {/* .<br /> */}
              Transaction fee was{" "}
              <span style={{ color: "blue" }}>
                Ksh.{data.transaction.transaction_fee}
              </span>
              .<br />
            </p>
            Thank you for choosing CashFlow. We move together.
          </div>
        );
      } else if (data.error) {
        setError(data.error);
      }
    } catch (error) {
      setError(error.response.data.error);
    } finally {
      setIsSending(false);
      setShowSpinner(false);
    }
  };

  return (
    <div className="mt-5" style={{ fontFamily: "Times New Roman" }}>
      <form onSubmit={handleSubmit} className="formup">
        <span className="signup">Transfar Money</span>
        <input
          required
          type="text"
          id="accountNumber"
          placeholder="enter account number"
          className="form--input"
          value={accountNumber}
          onChange={handleAccountNumberChange}
        />
        <div>
          <input
            required
            type="number"
            id="amount"
            placeholder="enter amount"
            className="form--input"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="beneficiary">Beneficiary:</label>
          <select
            id="beneficiary"
            value={
              isBeneficiarySelected
                ? selectedBeneficiary.account_number
                : "other"
            }
            onChange={handleBeneficiaryChange}
          >
            <option value="Beneficiary">Beneficiaries</option>
            {beneficiaries.map((beneficiary) => (
              <option key={beneficiary.id} value={beneficiary.account_number}>
                {beneficiary.name} ({beneficiary.account_number})
              </option>
            ))}
          </select>
        </div>
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}

        <button
          className="buttonbtn"
          type="submit"
          style={{ width: "10em", height: "3em" }}
        >
          {showSpinner && isSending ? (
            <div
              className="spinner-border spinner-border-sm btns"
              id="btns"
              role="status"
            >
              <span className="visually-hidden">Sending...</span>
              <span className="msg" id="msg"></span>
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};

export default Send;
