import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Deposit= () => {
    const [amount, setAmount] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://cashflow-dwee.onrender.com/wallets/:id/top_up`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          balance: amount,
          last_transaction: "Top Up",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert("Transaction successful!");
          setAmount("");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">

        <div className="text-center">
            <h1>Top Up Your Account</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Amount: 
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    </label>
                <br/>
                <Link to='/user-transactions'>
            {<button>
              Top Up
            </button>}
            {<button disable>
              Depositing....
            </button>}
            </Link>
                </form>
        </div>
        </div>

  
     );
}
 
export default Deposit;