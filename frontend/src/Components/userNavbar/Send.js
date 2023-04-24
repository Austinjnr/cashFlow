import React, { useState, useEffect } from "react";
import axios from "axios";


const Send = () => {

    const [amount, setAmount] = useState("");
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [selectedBeneficiary, setSelectedBeneficiary] = useState("");
    
    //const [newBeneficiary, setNewBeneficiary] = useState({ name: "", email: "", phone_number: "" });
  
    useEffect(() => {
      fetchBeneficiaries();
    }, []);
  
    const fetchBeneficiaries = async () => {
      try {
        const response = await axios.get("/beneficiaries");
        setBeneficiaries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleAmountChange = (event) => {
      setAmount(event.target.value);
    };
  
    const handleBeneficiaryChange = (event) => {
      setSelectedBeneficiary(event.target.value);
    };
  
    // const handleNewBeneficiaryChange = (event) => {
    //   setNewBeneficiary({ ...newBeneficiary, [event.target.name]: event.target.value });
    // };
  
    // const handleAddBeneficiary = async () => {
    //   try {
    //     const response = await axios.post("/beneficiaries", { beneficiary: newBeneficiary });
    //     setBeneficiaries([...beneficiaries, response.data]);
    //     setNewBeneficiary({ name: "", email: "", phone_number: "" });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
  
    const handleSendMoney = async () => {
      try {
        const response = await axios.post("/wallets/send_money", {
          amount: amount,
          beneficiary_id: selectedBeneficiary
        });
        alert(response.data.message);
        setAmount("");
        setSelectedBeneficiary("");
      } catch (error) {
        console.log(error);
      }
    };


    return ( 
        <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="w-50">
          <h2 className="text-center mb-4">Send Money</h2>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input type="number" className="form-control" id="amount" value={amount} onChange={handleAmountChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="beneficiary" className="form-label">
              Beneficiary
            </label>
            <select className="form-select" id="beneficiary" value={selectedBeneficiary} onChange={handleBeneficiaryChange}>
              <option value="">Select beneficiary</option>
              {beneficiaries.map((beneficiary) => (
                <option key={beneficiary.id} value={beneficiary.id}>
                  {beneficiary.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addBeneficiaryModal">
              Add Beneficiary
            </button>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={handleSendMoney}>
              Send Money
            </button>
          </div>
        </div>
      </div>
          
    
     );
}
 
export default Send;