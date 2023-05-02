import { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";

const Transaction = ({ userId }) => {
  const [transaction, setTransactions] = useState('');

  useEffect(()=>{
    axios.get(`https://cashflow-1rf2.onrender.com/userprofile/${userId}`)
    .then((res)=>{
      setTransactions(res.data.map((data)=>{
        return (
          data.transactions
        )
      }))
    })
  },[userId])
  return (
    <section >
     {transaction.length > 0 && (
        <table className="table table-borderless mt-5" style={{ marginLeft: "6rem" }}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Transaction</th>
              <th scope="col"></th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transaction[0].map((transact) => (
              <tr key={transact.id}>
                <td></td>
                <td>{transact.transaction_type}</td>
                <td></td>
                <td>{transact.amount} Ksh</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Transaction;