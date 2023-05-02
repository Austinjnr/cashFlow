import React, { useState, useEffect } from "react";

const WalletStatistics = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await fetch(
        "https://cashflow-1rf2.onrender.com/statistics"
      );
      const data = await response.json();
      setStatistics(data);
    };

    fetchStatistics();
  }, []);

  if (!statistics) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <table class="table table-white table-striped-columns">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col">Today</th>
            <th scope="col">This Monthly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Transactions</td>
            <td>{statistics.rows[0][1]}</td>
            <td>{statistics.rows[0][3]}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Amount made</td>
            <td>{statistics.rows[1][1]} Ksh</td>
            <td>{statistics.rows[1][3]} Ksh</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <th scope="row">Charges</th>
            <td>{statistics.rows[2][1]} Ksh</td>
            <td>{statistics.rows[2][3]} Ksh</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <th scope="row">Company Gain</th>
            <td>{statistics.rows[3][1]} Ksh</td>
            <td>{statistics.rows[3][3]} Ksh</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default WalletStatistics;
