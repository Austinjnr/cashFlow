import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const BeneficiariesContext = createContext();

export default BeneficiariesContext;


const BeneficiariesProvider = ({ userId, children }) => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  useEffect(() => {
    axios
      .get(`https://cashflow-1rf2.onrender.com/userprofile/3`)
      .then((res) => {
        setBeneficiaries(res.data.flatMap((data) => data.beneficiaries));
      });
  }, [userId]);
 console.log(beneficiaries);
  return (
    <BeneficiariesContext.Provider value={beneficiaries}>
      {children}
    </BeneficiariesContext.Provider>
  );
};


export { BeneficiariesProvider };
