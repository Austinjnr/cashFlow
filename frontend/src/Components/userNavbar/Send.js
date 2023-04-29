import React, { useState, useEffect } from "react";

export default function Send() {
  const [isBeneficiarySelected, setIsBeneficiarySelected] = useState(false);
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    // Fetch beneficiaries from backend and set to the state
    fetch("/beneficiaries")
      .then((response) => response.json())
      .then((data) => setBeneficiaries(data))
      .catch((error) => console.error(error));
  }, []);

  const handleBeneficiaryChange = (event) => {
    const beneficiaryId = event.target.value;
    if (beneficiaryId === "other") {
      setIsBeneficiarySelected(false);
      setSelectedBeneficiary(null);
    } else {
      const selectedBeneficiary = beneficiaries.find(
        (beneficiary) => beneficiary.id === beneficiaryId
      );
      setSelectedBeneficiary(selectedBeneficiary);
      setIsBeneficiarySelected(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to backend
    const formData = {
      accountNumber: isBeneficiarySelected
        ? selectedBeneficiary.accountNumber
        : accountNumber,
      amount: amount,
    };
    fetch("/send-money", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Display success message
        alert(
          `Money sent successfully to ${
            selectedBeneficiary ? selectedBeneficiary.name : accountNumber
          }`
        );
      })
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="beneficiary">Beneficiary:</label>
        <select id="beneficiary" onChange={handleBeneficiaryChange}>
          <option value="other">Other</option>
          {beneficiaries.map((beneficiary) => (
            <option key={beneficiary.id} value={beneficiary.id}>
              {beneficiary.name} ({beneficiary.accountNumber})
            </option>
          ))}
        </select>
      </div>
      {isBeneficiarySelected ? (
        <div>
          <p>
            Send money to {selectedBeneficiary.name} (
            {selectedBeneficiary.accountNumber})
          </p>
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
      ) : (
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <input
            id="accountNumber"
            type="text"
            value={accountNumber}
            onChange={(event) => setAccountNumber(event.target.value)}
          />
          <label htmlFor="amount">Amount:</label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          />
        </div>
      )}
      <button type="submit">Send</button>
    </form>
  );
}
