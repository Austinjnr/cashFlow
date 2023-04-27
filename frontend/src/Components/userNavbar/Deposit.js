import React, { useState } from 'react';
import axios from 'axios';

const Deposit = ({AccountId}) => {
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
   console.log(AccountId);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    axios.post(`https://cashflow-1rf2.onrender.com/deposit/${AccountId}`, {
      amount: amount,
    })
    .then((response) => {
      alert(response.data.message);
      setAmount('');
      setIsLoading(false);
    })
    .catch((error) => {
      console.error(error);

      setIsLoading(false);
    });
  };

  return (
    <div className='deposit'>
      <h1>Deposit to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <button type="submit" disabled={!amount || isLoading}>
          {isLoading ? 'Depositing...' : 'Deposit'}
        </button>
      </form>
    </div>
  );
};

export default Deposit;
