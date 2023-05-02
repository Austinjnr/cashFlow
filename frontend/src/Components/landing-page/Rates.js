const Rates = () => {
  return (
    <section className="mt-5">
    <h2 className="text-center">Costs of transaction</h2>
    <table className="table table-white table-striped-columns">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Range</th>
      <th scope="col">Sending</th>
      <th scope="col">Depositing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>0 to 200</td>
      <td>0 Ksh</td>
      <td>0 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>201 to 500</td>
      <td>3 Ksh</td>
      <td>3 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>501 to 1000</td>
      <td>6 Ksh</td>
      <td>6 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>1001 to 5000</td>
      <td>11 Ksh</td>
      <td>11 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>5001 to 10000</td>
      <td>15 Ksh</td>
      <td>15 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>10001 to 20000</td>
      <td>20 Ksh</td>
      <td>20 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>20001 to 40000</td>
      <td>25 Ksh</td>
      <td>25 Ksh</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Above 40001</td>
      <td>30 Ksh</td>
      <td>30 Ksh</td>
    </tr>
  </tbody>
</table>

    </section>
  );
};

export default Rates;
