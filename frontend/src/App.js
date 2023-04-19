import './App.css';
import React from 'react';
import LoginPage from './Components/register/Login';
import Reset from './Components/register/Reset';
import SignUp from './Components/register/SignUp';
import CashFlow from './Components/userNavbar/CashFlow';

function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      {/* <Reset />
      <LoginPage /> */}
      <CashFlow/>
    </div>
  );
}

export default App;
