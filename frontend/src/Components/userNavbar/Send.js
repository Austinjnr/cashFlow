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
    if (accountNumber === "other") {
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
    try {
      const response = await axios.post(
        `http://localhost:4000/send/${accountNumber}/${AccountId}`,
        {
          amount,
          beneficiary_id: selectedBeneficiary ? selectedBeneficiary.id : null,
          message,
        }
      );
      const data = await response.json();
      if (data.transaction) {
        setMessage(
          `Dear customer, you have successfully sent Ksh.${data.transaction.amount} on ${data.transaction.date}.`
        );
        window.location.reload();
      } else {
        setError(data.error);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsSending(false);
    } finally {
      setShowSpinner(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="cards">
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            type="text"
            id="accountNumber"
            value={accountNumber}
            onChange={handleAccountNumberChange}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
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
            <option value="other">Other</option>
            {beneficiaries.map((beneficiary) => (
              <option key={beneficiary.id} value={beneficiary.account_number}>
                {beneficiary.name} ({beneficiary.account_number})
              </option>
            ))}
          </select>
        </div>
        {error && <p>{error}</p>}

        <button
          className="buttonbtn"
          type="submit"
          style={{ width: "10em", height: "3em" }}
        >
          {showSpinner && isSending ? (
            <div
              className="spinner-border spinner-border-sm btn"
              id="btn"
              role="status"
            >
              <span className="visually-hidden">Sending...</span>
              <span class="msg" id="msg"></span>
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
