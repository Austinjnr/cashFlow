import React, { useState } from "react";
import {Login} from "./Login";
import SignUp from "./SignUp";

function Authentication() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App"data-testid="login-1">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SignUp onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default Authentication;