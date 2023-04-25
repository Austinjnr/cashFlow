import { useEffect } from "react";
import { useState } from "react";

const Transactions = () => {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/transactions')
    .then(res => {
        return res.json()
    })
    .then((data => {
        setTransactions(data)
    }))
  },[])

  return (
    <section>
      {transactions && <table className="table table-borderless" style={{marginLeft: "6rem"}}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Transaction</th>
            <th scope="col"></th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <th scope="row">{transaction.id}.</th>
              <td>{transaction.transaction_type}</td>
              <td></td>
              <td>{transaction.amount} Ksh</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </section>
  );
};

export default Transactions;
