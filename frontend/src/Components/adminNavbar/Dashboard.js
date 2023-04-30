import React from "react";
import {  Line, Bar } from "react-chartjs-2";
import { 
    Chart as ChartJS,
    LineElement,
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend 
} from 'chart.js';

ChartJS.register(
    LineElement,
    BarElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    Legend 
)
const Dashboard = () => {

    const line = {
        labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        datasets: [{
            label: 'users gained',
            data: [10, 20 ,30, 40, 50, 60, 10],
            backgroundColor: [
                'rgba(137,118,199,0.5)'
            ],
            borderColor: 'black',
            pointBorderColor: [
                '#8976C7'
            ],
            fill: true,
            tension: 0.4
        }]
    }

    const bar = {
        labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: 'Transactions',
            data: [0, 0 ,0, 4000 ],
            backgroundColor: [
                '#8976C7'
            ],
            borderColor: 'black',
            borderwidth: 1
        }]
    }

    const options = {
        plugins: {
            legend: true
        },
        scales: {
            y : {
                // min: 3,
                // max: 6
            }
        }
    }

    const Baroptions ={

    }

  return (
    <section className="overview mt-5">
      <h1 className="text-center">WELCOME</h1>
      <h3 className="text-center">Applicction Overview</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center">Total Weekly Gained Users</h5>
              <div>
              <Line data={line} options={options}/>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center">Total Monthy Transactions</h5>
              <Bar data={bar} options={Baroptions}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
