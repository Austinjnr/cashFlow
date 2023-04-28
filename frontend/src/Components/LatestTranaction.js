import React, { useState, useEffect } from "react";

const Latest = () => {
  const [latest, setLatest] = useState(null);

  useEffect(() => {
    fetch('https://cashflow-dwee.onrender.com/wallets') // Replace <URL_TO_JSON_FILE> with the actual URL of your JSON file
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
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {latest.map((transaction) => ( 
            <tr key={transaction.id}> 
              <th scope="row">{transaction.id}</th> 
              <td>{transaction.last_transaction}</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>}
    </>
  );
};

export default Latest;
