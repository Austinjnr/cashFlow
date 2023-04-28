import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Send = ({ current_account_id  }) => {
  const [amount, setAmount] = useState('');
  const [beneficiaryId, setBeneficiaryId] = useState('');
  const [beneficiaries, setBeneficiaries] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:4000/beneficiaries/`)
      .then((response) => {
        setBeneficiaries(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4000/send/${current_account_id}`, {
      amount: amount,
      receiver_account_id: beneficiaryId
    })
    .then((response) => {
      setMessage(response.data.message);
    })
    .catch((error) => {
      setMessage(error.response.data.message);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />

        <label htmlFor="beneficiary">Beneficiary:</label>
        <select id="beneficiary" name="beneficiary" value={beneficiaryId} onChange={(e) => setBeneficiaryId(e.target.value)} required>
          <option value="">Select a beneficiary</option>
          {beneficiaries.map((beneficiary) => (
            <option key={beneficiary.id} value={beneficiary.id}>{beneficiary.name}</option>
          ))}
        </select>

        <button type="submit">Send</button>
      </form>

      {message && <div>{message}</div>}
    </div>
  );
};

export default Send;
