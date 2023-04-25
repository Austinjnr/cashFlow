import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./admin.css";
import Graph from "../Graph";
import { useState } from "react";
import { UserData } from "../Data";
// import Latest from "../LatestTranaction";

const UserDetails = () => {

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
  
  const history = useHistory();
  const { id } = useParams();
  const { data: user, error, isLoading } = useFetch(
    "https://cashflow-dwee.onrender.com/accounts/" + id
  );

  const handleClick = () => {
    fetch("https://cashflow-dwee.onrender.com/accounts/" + user.id, {
      method: "DELETE"
    })
      .then(() => {
        history.push("/admin-home");
      })
      .catch((error) => {
        console.error("Error deleting user: ", error);
      });
  };

  return (
    <div className="user-details">
      {isLoading && <div>LOADING....</div>}
      {error && <div>{error}</div>}
      {user && (
        <>
        <section className="summary">
          <h1>{user.name} Transaction Summary</h1>
          <div className="card mb-3" style={{ maxWidth: 540, marginTop: "5rem", marginLeft: "2rem" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={user.avatar_url} className="img-fluid rounded-start" alt="avatar" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">User Profile</h5>
                  <ul>
                    <li>Name: {user.name}</li>
                    <li>Phone Number: {user.phone_number}</li>
                    <li>Id Number: {user.id_number}</li>
                    <li>Account Number: {user.account_number}</li>
                  </ul>
                  <Link to="/update-user">
                    <button>Update</button>
                  </Link>
                  <div>
                    {!isLoading && (
                      <button onClick={handleClick}>Delete Account</button>
                    )}
                    {isLoading && <button disabled>Deleting...</button>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
        <div className="col-md-5 offset-md-10">
            <div style={{ width: 640, marginTop: "-20rem"}}>
            <Graph BarGraph={userData}/>
            <h4>Latest Transaction</h4>
            {/* <Latest /> */}
            </div>
        </div>
      </div>
        </>
      )}
    </div>
  );
};

export default UserDetails;
