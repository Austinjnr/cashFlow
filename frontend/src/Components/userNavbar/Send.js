import React, { useState, useContext } from "react";
import axios from "axios";
import BeneficiariesContext from "./BeneficiariesContext";

const Send = ({ AccountId }) => {
  const [isBeneficiarySelected, setIsBeneficiarySelected] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Get beneficiaries from context
  const beneficiaries = useContext(BeneficiariesContext);

  const handleBeneficiaryChange = (event) => {
    const beneficiaryId = event.target.value;
    if (beneficiaryId === "other") {
      setIsBeneficiarySelected(false);
      setSelectedBeneficiary(null);
    } else {
      const filteredBeneficiary = beneficiaries.filter((beneficiary) => beneficiary.id === beneficiaryId);
      if (filteredBeneficiary) {
        setSelectedBeneficiary(filteredBeneficiary);
        setIsBeneficiarySelected(true);
        setAccountNumber(filteredBeneficiary.account_number);
      }
      console.log(filteredBeneficiary);
    }
  };
  

  const handleAccountNumberChange = (event) => {
    setAccountNumber(event.target.value);
    setIsBeneficiarySelected(false);
    setSelectedBeneficiary(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/send/${accountNumber}/${AccountId}`, {
        amount,
        beneficiary_id: selectedBeneficiary ? selectedBeneficiary.account_number : null,
        message,
      });
      console.log(response.data);
      setAmount("");
      setMessage("");
      setIsBeneficiarySelected(false);
      setSelectedBeneficiary(null);
      setErrorMessage("");
    } catch (error) {
      console.error(error.response.data);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="message">Message:</label>
          <input
            type="text"
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="beneficiary">Beneficiary:</label>
          <select
            id="beneficiary"
            value={isBeneficiarySelected ? selectedBeneficiary.id : "other"}
            onChange={handleBeneficiaryChange}
          >
            <option value="other">Other</option>
            {beneficiaries.map((beneficiary) => (
              <option key={beneficiary.id} value={beneficiary.id}>
                {beneficiary.name} ({beneficiary.id})
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Send</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Send;
