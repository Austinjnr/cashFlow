import React, { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./admin.css";
import Graph from "../Graph";
import { useState } from "react";
import { UserData } from "../Data";

const UserDetails = () => {
  const [details, setDetails] = useState(null);
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
  const { error, isLoading } = useFetch("");

  useEffect(() => {
    fetch(`https://cashflow-dwee.onrender.com/accounts/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setDetails(data);
      });
  }, [id]);

  const handleClick = () => {
    fetch(`http://localhost:4000accounts/${details.id}`, {
      method: "DELETE",
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
      {details.map((detail) => (
        <section className="summary">
          <h1>{detail.name} Transaction Summary</h1>
          <div
            className="card mb-3"
            style={{ maxWidth: 540, marginTop: "5rem", marginLeft: "2rem" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={detail.avatar_url}
                  className="img-fluid rounded-start"
                  alt="avatar"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">User Profile</h5>
                  <ul>
                    <li>Name: {detail.name}</li>
                    <li>Phone Number: {detail.phone_number}</li>
                    <li>Id Number: {detail.id_number}</li>
                    <li>Account Number: {detail.account_number}</li>
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
      ))}
      <div className="container">
        <div className="col-md-5 offset-md-10">
          <div style={{ width: 640, marginTop: "-20rem" }}>
            <Graph BarGraph={userData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
