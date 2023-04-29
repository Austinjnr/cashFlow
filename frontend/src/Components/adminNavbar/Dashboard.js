const Dashboard = () => {
  return (
    <section className="overview mt-5">
      <h1 className="text-center">WELCOME</h1>
      <h3 className="text-center">Applicction Overview</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center">Total Gained Users</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h5 className="text-center">Total Monthy Transactions</h5>
              <p>BarGraph</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
