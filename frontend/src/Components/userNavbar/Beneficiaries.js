import React, { useState, useEffect } from "react";
import axios from "axios";

const Beneficiaries = ({userId}) => {
  const [beneficiaries, setBeneficiaries] = useState('');
  
  useEffect(()=>{
    axios.get(`https://cashflow-1rf2.onrender.com/userprofile/${userId}`)
    .then((res)=>{
      setBeneficiaries(res.data.map((datas)=>{
        return (
          datas.beneficiaries
        )
      }))
    })
  },[userId])
 
  console.log(beneficiaries);
  return (
    <section className="mt-5">
      <h1 className="text-center">My Beneficiaries</h1>
      <div className="row col-md-12">
      {beneficiaries.length > 0 ? (
        <div className="row">
          {beneficiaries[0].map(beneficiary => (
            <div key={beneficiary.id} className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <ul>
                    <li>Name: {beneficiary.name}</li>
                    <li>Phone Number: {beneficiary.phone_number}</li>
                    <li>Account Number: {beneficiary.account_number}</li>
                  </ul>
                  {/* <button>Delete</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>No beneficiaries found.</div>
      )}
      </div>
    </section>
  );
};

export default Beneficiaries;
