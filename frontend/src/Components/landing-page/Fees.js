import { Link } from 'react-router-dom';

const Fees = () => {
  return (
    <section className="mt-5">
      <h2 className="text-center">Charges</h2>
      <div style={{marginLeft: '2rem'}}>
      <div className="row row-cols-1 row-cols-md-2 g-4 text-center col-md-12">
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Receive money</h3>
              <p className="card-text">
                Receiving money is always free of charge
              </p>
              <h5>Free</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Customer Care</h3>
              <p className="card-text">
                Keep using your cashflow Account and you will never be charged a
                consolation fee!
              </p>
              <h5>Free</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Send money</h3>
              <p className="card-text">
                You can easily make payments at excellent rates in local
                currency.
              </p>
              <Link to='/rates'>
              <h5>Check Rates <i className="fa-solid fa-arrow-right"></i></h5>
              </Link>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Deposit funds</h3>
              <p className="card-text">
                With a variety of options for depositing your account, there is
                always an option that is right for you.
              </p>
              <Link to='/rates'>
              <h5>Check Rates <i className="fa-solid fa-arrow-right"></i></h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Fees;
