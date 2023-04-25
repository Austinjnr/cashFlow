import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios'

const Deposit= () => {

    
    const [walletIds, setWalletIds] = useState(null);
    
    const [amount, setAmount] = useState("");
    
                useEffect(() => {
                    axios.get("https://cashflow-dwee.onrender.com/wallets")
                    .then((res) => {
                    const walletIds = res.data.map((wallet) => wallet.id);
            setWalletIds(walletIds);
            })
            .catch((error) => {
            console.error(error);
            });
        }, []);

        //console.log(walletIds);

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://cashflow-dwee.onrender.com/wallets/${walletIds}/top_up`, {
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
            {<button disable="true">
              Depositing....
            </button>}
            </Link>
                </form>
        </div>
        </div>

  
     );
}
 
export default Deposit;