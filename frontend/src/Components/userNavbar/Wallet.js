import { Link } from "react-router-dom";
import './wallet.css';

const Wallet = () => {
    return ( 
        <section className="container">

            <div className="content">
               <h2>Your CashFlow Balance is:</h2>
               <h3>ksh 32,900</h3>
               <img src="/images/3D card holder Illustration.png" alt="wallet" />
               <Link to="/send">
                  <button>Send</button>
               </Link>
               <Link to="/top-up">
                  <button>Top Up</button>
               </Link>
            </div>

         <div className="container-right">
            <div className="content-right">
               <h3>Overview</h3>
               {/* graph content here */}
               <h4>Your Latest Transaction</h4>
               <ul>
                  <li>{/* transaction details here */}</li>
               </ul>
               <Link to='/user-transactions'>
                  <button>Check your transaction</button>
               </Link>
            </div>
         </div>

        </section>
     );
}
 
export default Wallet;