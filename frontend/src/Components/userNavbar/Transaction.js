import { useEffect, useState } from "react";

const Transaction = () => {
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch('https://cashflow-1rf2.onrender.com/transactions')
      .then(res => res.json())
      .then(data => {
        // Assuming the transactions are sorted by date in descending order
        // and you only want the last 10 transactions
        const lastTenTransactions = data.slice(0, 10);
        setTransactions(lastTenTransactions);
      })
      .catch(error => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  return (
    <section>
      {transactions && (
        <table className="table table-borderless" style={{ marginLeft: "6rem" }}>
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Transaction</th>
              <th scope="col"></th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id}>
                <th scope="row"></th>
                <td>{transaction.transaction_type}</td>
                <td></td>
                <td>{transaction.amount} Ksh</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default Transaction;
