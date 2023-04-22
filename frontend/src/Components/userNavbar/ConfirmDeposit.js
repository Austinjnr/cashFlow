import { Link } from "react-router-dom"

const ConfirmDeposit = () => {
    return ( 
    <section>
        <img src='/images/logo6.png' alt="confrim" />
        <h4> You have made a deposit of 99Ksh </h4>
            <Link to='/user-transactions'>
                <button>Confirm</button>
            </Link>
            <Link to='/send'>
                <button>Decline</button>
            </Link>
    </section>
     );
}
 
export default ConfirmDeposit;