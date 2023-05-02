import React, { useState, useEffect } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
);
const Dashboard = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchedBarData, setFetchedBarData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cashflow-1rf2.onrender.com/accounts/"
      );
      const data = await response.json();
      setFetchedData(data);
    };
    fetchData();
  }, []);

  const weekdayData = fetchedData.reduce((acc, item) => {
    const date = new Date(item.created_at);
    const weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    acc[weekday] = (acc[weekday] || []).concat(item.id);
    return acc;
  }, {});

  const line = {
    labels: Object.keys(weekdayData),
    datasets: [
      {
        label: "users gained",
        data: Object.values(weekdayData).map((ids) => ids.length),
        backgroundColor: ["rgba(137,118,199,0.5)"],
        borderColor: "black",
        pointBorderColor: ["#8976C7"],
        fill: true,
        tension: 0.4,
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://cashflow-1rf2.onrender.com/transactions/"
      );
      const data = await response.json();
      setFetchedBarData(data);
    };
    fetchData();
  }, []);

  const groupedData = fetchedBarData.reduce((acc, item) => {
    const date = new Date(item.created_at);
    const monthIndex = acc.findIndex(
      (group) => group.month === date.getMonth()
    );

    if (monthIndex === -1) {
      acc.push({
        month: date.getMonth(),
        data: [item.amount],
      });
    } else {
      acc[monthIndex].data.push(item.amount);
    }

    return acc;
  }, []);

  const bar = {
    labels: groupedData.map((group) => {
      const date = new Date();
      date.setMonth(group.month);
      const options = { month: "long" };
      return date.toLocaleDateString("en-US", options);
    }),
    datasets: [
      {
        label: "Transactions",
        data: groupedData.map((group) => group.data.reduce((a, b) => a + b, 0)),
        backgroundColor: ["#8976C7"],
        borderColor: "black",
        borderWidth: 1,
        barThickness: 50,
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

  const Baroptions = {};

  return (
    <section className="row col-md-12 overview mt-5 d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1>WELCOME</h1>
        <h3>Application Overview</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center">Weekly Gained Users</h5>
              <div>
                <Line data={line} options={options} />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center">Monthly Transactions</h5>
              <Bar data={bar} options={Baroptions} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
