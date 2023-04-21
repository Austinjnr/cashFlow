import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "./useFetch";
import "./admin.css";

const UserDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: user, error, isLoading } = useFetch(
    "http://localhost:8000/users/" + id
  );

  const handleClick = () => {
    fetch("http://localhost:8000/users/" + user.id, {
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
        <section className="summary">
          <h1>{user.name} Transaction Summary</h1>
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={user.URL} className="img-fluid rounded-start" alt="avatar" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">User Profile</h5>
                  <ul>
                    <li>Name: {user.name}</li>
                    <li>Phone Number: {user.phoneNumber}</li>
                    <li>Id Number: {user.idNumber}</li>
                    <li>Account Balance: {user.bcNumber}</li>
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
      )}
    </div>
  );
};

export default UserDetails;
