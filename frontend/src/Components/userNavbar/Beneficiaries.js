const Beneficiaries = () => {
  return (
    <>
      <h1 style={{marginTop: "2rem"}}>My Beneficiaries</h1>
      <div className="row" style={{marginLeft: "2rem"}}>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <ul>
                <li>Name: </li>
                <li>Phone Number: </li>
              </ul>
              <button>Select</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Beneficiaries;
