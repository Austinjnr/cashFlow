const AdminWallet = () => {
  return (
    <>
      <table className="table" style={{marginTop: "2rem"}}>
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo Ksh</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminWallet;