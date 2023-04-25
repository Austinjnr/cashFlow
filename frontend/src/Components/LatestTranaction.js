import React, { useState } from "react";
import { useEffect } from "react";

const Latest = () => {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/transactions')
    .then(res => {
        return res.json()
    })
    .then((data => {
        setLatest(data)
    }))
  },[])

  return (
    <>
      {latest && <table className="table table-borderless" style={{ marginLeft: "6rem" }}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Transaction</th>
            <th scope="col"></th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {latest.map((transaction) => ( 
            <tr key={transaction.id}>
              <th scope="row">{transaction.id}.</th>
              <td>{transaction.transaction_type}</td>
              <td></td>
              <td>{transaction.amount} Ksh</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default Latest;
