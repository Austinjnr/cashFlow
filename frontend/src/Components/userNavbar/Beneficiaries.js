import React, { useState, useEffect } from "react";
import axios from "axios";

const Beneficiaries = ({userId}) => {
  const [beneficiaries, setBeneficiaries] = useState([]);
  
  useEffect(() => {
    axios.get(`https://cashflow-1rf2.onrender.com/userprofile/${userId}`)
    .then((res) => {
      setBeneficiaries(res.data.map((data) => {
        return data.beneficiaries
      }))
    })
  }, [userId])

  return (
    <>
      <h1 style={{ marginTop: "2rem" }}>My Beneficiaries</h1>
      {beneficiaries.length > 0 ? (
        <div className="row" style={{ marginLeft: "2rem" }}>
          {beneficiaries[0].map(beneficiary => (
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
      ) : (
        <div>No beneficiaries found.</div>
      )}
    </>
  );
};

export default Beneficiaries;
