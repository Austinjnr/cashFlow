import React, { useState } from "react";
import { useHistory } from "react-router-dom";


const AddBeneficiary = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); 

        const beneficiaries = { name, phone, };
        fetch(`http://localhost:8000/users/`,{ 
            method: 'PATCH', 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(beneficiaries)
        }).then(() => {
            console.log('added Beneficiaries');
            setIsLoading(false); 
            history.go("/");
        });
    }

    return ( 
        <>
        <h2>Add a Beneficiary</h2>
         <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name" />
            <label>Phone Number:</label>
             <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+254" />
            {!isLoading && <button>Create Beneficiary</button>}
            {isLoading && <button disabled>Creating... <i className="fa-duotone fa-spinner fa-spin-pulse" style={{ '--fa-primary-color': '#000000', '--fa-secondary-color': '#000000' }}></i></button>}
         </form>
        </>
     );
}
 
export default AddBeneficiary;

