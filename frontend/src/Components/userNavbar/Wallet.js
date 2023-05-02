import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Wallet = ({ userId }) => {
  const [details, setDetails] = useState("");
  const [transaction, setTransactions] = useState("");
  const history = useHistory();
  
  useEffect(() => {
    axios
      .get(`https://cashflow-1rf2.onrender.com/userprofile/${userId}`)
      .then((res) => {
        setDetails(
          res.data.map((data) => {
            return (data = data.wallet.balance);
          })
        );
        setTransactions(
          res.data.map((data) => {
            return data.transactions;
          })
        );
      });
  }, [userId]);

  return (
    <section className="text-center mt-5">
      <div className="row col-md-12">
        <div
          className="col-md-6"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>Your CashFlow Balance is:</h2>
          {details && <h3>ksh {details}</h3>}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "50%",
            }}
          >
            <button
              onClick={() => {
                history.push("/send");
              }}
            >
              Send
            </button>

            <Link to="/top-up">
              <button>Deposit</button>
            </Link>
          </div>
          <img
            src="/images/3D card holder Illustration.png"
            alt="wallet"
            style={{
              width: "50%",
              maxWidth: "100%",
            }}
          />
        </div>

        <div className="col-md-4">
          <h3>Overview</h3>
          {transaction.length > 0 && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Transaction type</th>
                  <th scope="col">Amount</th>
                  <th scope="col">transaction cost</th>
                </tr>
              </thead>
              <tbody>
                {transaction[0].map((transact) => (
                  <tr key={transact.id}>
                    <th scope="row">
                      {new Date(transact.created_at).toLocaleString("en-us", {
                        weekday: "long",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </th>
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
