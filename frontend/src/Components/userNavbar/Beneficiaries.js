import React, { useState, useEffect } from "react";

const Beneficiaries = ({AccountId}) => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/beneficiaries/`)
      .then(response => 
        response.json())
      .then(data => 
        setBeneficiaries(data))
      .catch(error => 
        console.error(error));
  });

  return (
    <>
      <h1 style={{ marginTop: "2rem" }}>My Beneficiaries</h1>
      <div className="row" style={{ marginLeft: "2rem" }}>
        {beneficiaries.map(beneficiary => (
          <div key={beneficiary.id} className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <ul>
                  <li>Name: {beneficiary.name}</li>
                  <li>Phone Number: {beneficiary.phone_number}</li>
                </ul>
                <button>Select</button>
                {/* <button>Delete</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Beneficiaries;
