import './admin.css'
const AdminWallet = () => {
    return ( 
        <section className="row col-lg-12">
            <div className="col-lg-6">
                <div>
                <div className="user-preview">
                    <ul className="hyphen-list">
                    <li>A/C number:</li>
                    <li>Phone Number:</li>
                    <li>Transaction type:</li>
                    <li>Profit made:</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="col-lg-5">
    <h2 className="w-100" style={{display: "inline-block"}}>Your Account Balance is: 
        <ul>
            <i>
                <b>6643ksh</b>
            </i> 
        </ul>
    </h2>
    <img src="/images/logo8.png" alt="wallet-admin" />
</div>

</section>

     );
}
 
export default AdminWallet;