import React, { useState, useEffect } from 'react';

const WalletStatistics = () => {
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      const response = await fetch('https://cashflow-1rf2.onrender.com/statistics');
      const data = await response.json();
      setStatistics(data);
    };

    fetchStatistics();
  }, []);

  if (!statistics) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Daily</th>
          <th>Weekly</th>
          <th>Monthly</th>
          <th>Yearly</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Total Transactions</td>
          <td>{statistics.rows[0][1]}</td>
          <td>{statistics.rows[0][2]}</td>
          <td>{statistics.rows[0][3]}</td>
          <td>{statistics.rows[0][4]}</td>
        </tr>
        <tr>
          <td>Total Amount</td>
          <td>{statistics.rows[1][1]}</td>
          <td>{statistics.rows[1][2]}</td>
          <td>{statistics.rows[1][3]}</td>
          <td>{statistics.rows[1][4]}</td>
        </tr>
        <tr>
          <td>Total Transaction Fee</td>
          <td>{statistics.rows[2][1]}</td>
          <td>{statistics.rows[2][2]}</td>
          <td>{statistics.rows[2][3]}</td>
          <td>{statistics.rows[2][4]}</td>
        </tr>
        <tr>
          <td>Company Income</td>
          <td>{statistics.rows[3][1]}</td>
          <td>{statistics.rows[3][2]}</td>
          <td>{statistics.rows[3][3]}</td>
          <td>{statistics.rows[3][4]}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WalletStatistics;
