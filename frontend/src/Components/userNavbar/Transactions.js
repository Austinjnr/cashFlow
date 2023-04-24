import { useState } from "react";

const Transactions = () => {
    const [transactions,setTransactions] = useState([
        { id: 1, transaction_type: "shopping", amount: 36851 },
        { id: 2, transaction_type: "top_up", amount: 78072  },
        { id: 3, transaction_type: "top_up", amount: 13019 },
        { id: 4,transaction_type: "bills", amount: 72186 }
    ])
    return ( 
        <section>
            <ol>
                <li>transaction:  <span></span> ksh 200</li>
            </ol>
        </section>
     );
}
 
export default Transactions;