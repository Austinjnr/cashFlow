import React, { useState } from 'react';
import axios from 'axios';

const Deposit = ({ account }) => {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleDeposit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      amount: amount,
    };

    axios.post(`https://cashflow-1rf2.onrender.com/deposit/${account.id}`, data)
      .then((response) => {
        setMessage(response.data.message);
        setAmount('');
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div className="card">
      <div className="card-header">
        Deposit
      </div>
      <div className="card-body">
        <form onSubmit={handleDeposit}>
          <div className="form-group">
            <label htmlFor="amount">Amount to Deposit</label>
            <input
              type="number"
              id="amount"
              name="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="currentBalance">Current Balance</label>
            <p id="currentBalance" className="form-control-static">{account.wallet.balance}</p>
          </div>
          <div className="form-group">
            <label htmlFor="transactionFee">Transaction Fee</label>
            <p id="transactionFee" className="form-control-static">{account.wallet.transaction_fee}</p>
          </div>
          <div className="form-group">
            <label htmlFor="totalAmount">Total Amount</label>
            <p id="totalAmount" className="form-control-static">{account.wallet.balance + Number(amount) + Number(account.wallet.transaction_fee)}</p>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isLoading}>Deposit</button>
        </form>
        <p className="mt-3">{message}</p>
      </div>
    </div>
  );
};

export default Deposit;
