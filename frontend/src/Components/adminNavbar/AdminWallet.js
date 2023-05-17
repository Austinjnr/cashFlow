import WalletStatistics from "./statistics";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const AdminWallet = () => {
  const [transaction, setTransaction] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const dailyData = new Array(7).fill(0);

  fetchedData.forEach((item) => {
    const date = new Date(item.created_at);
    if (date.getDate() === today.getDate()) {
      const dayOfWeek = date.getDay();
      dailyData[dayOfWeek] += item.amount;
    }
  });

  const line = {
    labels: daysOfWeek,
    datasets: [
      {
        label: "Todays Transactions",
        data: dailyData,
        backgroundColor: ["rgba(137,118,199,0.5)"],
        borderColor: "black",
        pointBorderColor: ["#8976C7"],
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        // min: 3,
        // max: 6
      },
    },
  };

  useEffect(() => {
    fetch("https://cashflow-1rf2.onrender.com/transactions")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTransaction(data);
        setFetchedData(data);
      });
  }, []);

  if (transaction) {
    transaction.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
  }

  return (
    <section className="row col-md-12 overview mt-5 d-flex justify-content-center align-items-center">
      <div className="col-md-6">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="text-center">This Week Transactions</h5>
            <Line data={line} options={options} />
          </div>
        </div>
      </div>
      <div className="col-md-5">
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="text-center">Admin Board</h5>
            <WalletStatistics />
          </div>
        </div>
      </div>
      {transaction && (
        <table className="table" style={{ marginLeft: "1rem" }}>
          <thead className="thead-light">
            <tr>
              <th scope="col"></th>
              <th scope="col">Date</th>
              <th scope="col">Transaction</th>
              <th scope="col">Amount</th>
              <th scope="col">Transaction Fee</th>
            </tr>
          </thead>
          <tbody>
            {transaction.map((transaction) => (
              <tr key={transaction.id}>
                <th scope="row">{transaction.id}</th>
                <td>
                  {daysOfWeek[new Date(transaction.created_at).getDay()]},{" "}
                  {new Date(transaction.created_at).toLocaleDateString()}
                </td>
                <td>{transaction.transaction_type}</td>
                <td>{transaction.amount} Ksh</td>
                <td>{transaction.transaction_fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default AdminWallet;
