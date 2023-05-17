import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Wallet = ({ userId }) => {
  const [details, setDetails] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`https://cashflow-1rf2.onrender.com/userprofile/${userId}`)
      .then((res) => {
        setDetails(res.data.map((data) => data.wallet));
        setTransactions(res.data.map((data) => data.transactions.slice(0, 10)));
      });
  }, [userId]);

  const handleSendButtonClick = () => {
    history.push("/send");
  };

  return (
    <section className="text-center mt-5">
      <div className="row col-md-12">
        <div
          className="col-md-5"
          style={{
            marginLeft: "1rem",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {details.length > 0 && (
            <div key={details[0].id}>
              <p>
                Your Account Number:{" "}
                <i>
                  <b>{details[0].account_number}</b>
                </i>
              </p>
              <h2>Account Balance:</h2>
              <h5>ksh.{details[0].balance}</h5>
            </div>
          )}
          <div>
            <button
              className="btn btn-secondary btn-sm"
              style={{ marginRight: "10px" }}
              onClick={handleSendButtonClick}
            >
              Send
            </button>
            <Link to="/top-up">
              <button className="btn btn-secondary btn-sm">Deposit</button>
            </Link>
          </div>
          <div
            style={{
              marginTop: "1rem",
              width: "200px",
              height: "auto",
            }}
          >
            <img
              src="/images/3D card holder Illustration.png"
              alt="wallet"
              className="img-fluid"
              style={{ margin: "0 auto" }}
            />
          </div>
        </div>

        <div className="col-md-6">
          <h3>Overview</h3>
          {transactions.length > 0 && (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Transaction type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Transaction cost</th>
                </tr>
              </thead>
              <tbody>
                {transactions[0].map((transact) => (
                  <tr key={transact.id}>
                    <td>
                      {new Date(transact.created_at).toLocaleString("en-us", {
                        weekday: "long",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </td>
                    <td>{transact.transaction_type}</td>
                    <td>{transact.amount} Ksh</td>
                    <td>{transact.transaction_fee} Ksh</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default Wallet;
