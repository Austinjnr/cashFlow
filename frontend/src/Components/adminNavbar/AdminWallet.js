import React, { useState } from "react";
import { useEffect } from "react";

const AdminWallet = () => {
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    fetch("https://cashflow-1rf2.onrender.com/transactions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransaction(data);
      });
  }, []);

  return (
    <>
    <div className="row mt-5">

      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="text-center">This Week Transactions</h5>
            <p>LineGraph</p>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card mb-3">
          <div className="card-body">
            <img src="" alt="avatar" />
            <h5>Admin</h5>
            <ul>
              <li>Total Users: </li>
              <li>Weekly Transactions: </li>
              <li>Current Balance: Ksh</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {transaction && (
      <table className="table" style={{ marginTop: "2rem" }}>
        <thead className="thead-light">
          <tr>
            <th scope="col"></th>
            <th scope="col">Transaction</th>
            <th scope="col">Amount</th>
            <th scope="col">Account Number</th>
            <th scope="col">Transaction Fee</th>
          </tr>
        </thead>
        <tbody>
          {transaction.map((transaction) => (
            <tr key={transaction.id}>
              <th scope="row">{transaction.id}</th>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.amount} Ksh</td>
              <td>{transaction.account_id}</td>
              <td>{transaction.transaction_fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </>
  );
};

export default AdminWallet;
