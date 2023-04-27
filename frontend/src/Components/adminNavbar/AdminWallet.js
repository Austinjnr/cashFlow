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
    {transaction &&
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
      </table>}
    </>
  );
};

export default AdminWallet;
