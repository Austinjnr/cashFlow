import './landing.css';

const Fees = () => {
    return (  
        <section className='fee-section'>
        <h2 className="charges">Charges</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Receive money</h5>
                <p className="card-text">Receiving money is always free of charge</p>
                <h3>FREE</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Send money</h5>
                <p className="card-text">
                  You can easily make payments at excellent rates in local
                  currency.
                </p>
                <h3>Below 200 Ksh is Free</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Deposit funds</h5>
                <p className="card-text">
                  With a variety of options for depositing your account, there is
                  always an option that is right for you.
                </p>
                <h3>Above 500 Ksh up to 0.5%</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Send money</h5>
                <p className="card-text">
                  You can easily make payments at excellent rates.
                </p>
                <h3>Above 200 Ksh up to 1.0%</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Administrative fee</h5>
                <p className="card-text">
                  Keep using your cashflow Account and you will never be charged an
                  administrative fee!
                </p>
                <h3>Free</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center mb-3" style={{ width: "100%" }}>
              <div className="card-body">
                <h5 className="card-title">Customer Care</h5>
                <p className="card-text">
                  Keep using your cashflow Account and you will never be charged a
                  consolation fee!
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