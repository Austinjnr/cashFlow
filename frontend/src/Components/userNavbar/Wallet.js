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
        setTransactions(res.data.map((data) => data.transactions));
      });
  }, [userId]);

  return (
    <section className="text-center mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>Your CashFlow Balance is:</h2>
          {details.length > 0 && (
            <div key={details[0].id}>
              <h5>ksh.{details[0].balance}</h5>
              <h2>Your CashFlow Account Number is:</h2>
              <h5>{details[0].account_number}</h5>
            </div>
          )}
          <div className="d-flex justify-content-between">
            <button
              className="btn btn-primary"
              onClick={() => {
                history.push("/send");
              }}
            >
              Send
            </button>

            <Link to="/top-up">
              <button className="btn btn-primary">Deposit</button>
            </Link>
          </div>
          <img
            src="/images/3D card holder Illustration.png"
            alt="wallet"
            className="img-fluid"
          />
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
