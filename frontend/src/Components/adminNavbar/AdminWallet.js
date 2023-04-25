const AdminWallet = () => {
  return (
    <>
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
          {/* {transactions.map((transaction) => (
            <tr>
              <th scope="row">{transaction.id}</th>
              <td>{transaction.transaction_type}</td>
              <td>{transaction.amount}</td>
              <td>@mdo</td>
              <td>{transaction.transaction_fee} Ksh</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  );
};

export default AdminWallet;
