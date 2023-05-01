import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import './Admin.css';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const history = useHistory()

  useEffect(() => {
    fetch("https://cashflow-1rf2.onrender.com/accounts/" + id)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource.");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [id]);

  const handleClick = () => {
    fetch(`https://cashflow-1rf2.onrender.com/accounts/${id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/all-users')
    })
  }

  return (
    <div className="user-details mt-5">
      <div className="text-center">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
      <h2 className="text-center">{user.account?.name}'s Account</h2>

      <div style={{ display: "flex" }}>
        <div style={{ flexBasis: "50%", marginRight: "16px" }}>
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user.account?.avatar_url}
                  className="img-fluid rounded-start"
                  alt="avatar"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <ul>
                    <li>
                      <i>
                        <b>Name:</b>
                      </i>{" "}
                      {user.account?.name}
                    </li>
                    <li>
                      <i>
                        <b>Account Number:</b>
                      </i>{" "}
                      {user.account?.account_number}
                    </li>
                    <li>
                      <i>
                        <b>Phone Number:</b>
                      </i>{" "}
                      {user.account?.phone_number}
                    </li>
                    <li>
                      <i>
                        <b>Identity Number:</b>
                      </i>{" "}
                      {user.account?.id_number}
                    </li>
                    <li>
                      <i>
                        <b>Wallet Balance:</b>
                      </i>{" "}
                      {user.account?.wallet.balance} Ksh
                    </li>
                  </ul>
                  <Link className="update" to='/update-user'>
                    <button className="btn btn-secondary">
                      Update
                    </button>  <span></span>
                  </Link>
                  <button className="btn btn-danger" onClick={handleClick}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flexBasis: "50%" }}>
          <h4 className="text-center">Transactions</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Transaction Type</th>
                <th scope="col">Amount</th>
                <th scope="col">Transaction Cost</th>
              </tr>
            </thead>
            <tbody>
              {user.account?.transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.transaction_type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.transaction_fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;