import './Landingpg.css';

const Fees = () => {
    return (  
        <section>
            <h2 className='charges'>Charges</h2>
            <div className="row">
    <div className="col-md-4">
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Receive money</h5>
                <p className="card-text">
                    Receiving money is always free of charge
                </p>
                <h3>FREE</h3>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">funds Withdrawal</h5>
                <p className="card-text">
                    You can easily withdraw funds to your local bank account in local currency at excellent rates.
                </p>
                <h3>above 1000ksh up to 1.5%</h3>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Deposit funds</h5>
                <p className="card-text">
                    With a variety of options for deposit your account. There is always an option that is right for you.
                </p>
                <h3>above 500ksh up to 0.5%</h3>
            </div>
        </div>
    </div>
</div>
<div className="row">
    <div className="col-md-4">
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Send money</h5>
                <p className="card-text">
                    You can easily make payments at excellent rates.
                </p>
                <h3>above 200ksh up to 1.0%</h3>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Administrative fee</h5>
                <p className="card-text">
                    Keep using your cashflow 
                    Account and you will never be charged 
                    an administrative fee!
                </p>
                <h3>Free</h3>
            </div>
        </div>
    </div>

    <div className="col-md-4">
        <div className="card text-center mb-3" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">Customer Care</h5>
                <p className="card-text">
                    Keep using your cashflow 
                    Account and you will never be charged a consolation  fee!
                </p>
                <h3>Free</h3>
            </div>
        </div>
    </div>
</div>

        </section>
    );
}
 
export default Fees;