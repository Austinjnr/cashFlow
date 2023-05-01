import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserData } from "../Data";
import Chart from "../Chart";
import axios from "axios";


const Wallet = ({userId}) => {
  const [details, setDetails] = useState('');
 console.log(userId);
  const [userData] = useState({
    labels: UserData.map((transaction) => transaction.transaction_type),
    datasets: [
      {
        label: "Amount Spent",
        data: UserData.map((transaction) => transaction.amount),
        backgroundColor: [
          "rgba(75, 192, 195,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#8976C7",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(()=>{
    axios.get(`https://cashflow-1rf2.onrender.com//userprofile/${userId}`)
    .then((res)=>{
      setDetails(res.data.map((data)=>{
        return (
          data = data.wallet.balance
        )
      }))
    })
  },[userId])


  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "5rem" }}
      >
        <div
          className="content"
          style={{
            flex: "0 0 6 columns",
            textAlign: "center",
            marginTop: "2.7rem",
          }}
        >
          <div>
            <h2>Your CashFlow Balance is:</h2>
            {details && <h3>ksh {details}</h3>}
          </div>
          <div></div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Link to="/send" style={{ marginRight: "auto" }}>
              <button style={{ float: "left" }}>Send</button>
            </Link>
            <Link to="/top-up" style={{ marginLeft: "auto" }}>
              <button style={{ float: "right" }}>Top Up</button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src="/images/3D card holder Illustration.png"
        alt="wallet"
        style={{
          width: "30%",
          maxWidth: "100%",
          gridColumn: "1/6",
          marginLeft: "7rem",
        }}
      />
      <div className="container">
        <div className="col-md-4 offset-md-10">
          <div style={{ marginTop: "-30rem", marginLeft: "10rem" }}>
            <h3>Overview</h3>
            <div style={{ width: 350 }}>
              <Chart PieChart={userData} />
            </div>
            <Link to="/user-transactions">
              <button>Your Transaction</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallet;
