import React from 'react';
// import CashFlow from './Components/userNavbar/CashFlow';
// import Wallet from './Components/userNavbar/Wallet';
// import Send from './Components/userNavbar/Send';
// import Withdraw from './Components/userNavbar/Withdraw';
// import Transactions from './Components/userNavbar/Transactions';
// import Profile from './Components/userNavbar/Profile';
// import Navbar from './Components/userNavbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingNavbar from './Components/landing-page/LandingpgNavbar';
import Fees from './Components/landing-page/Fees';
import Contact from './Components/landing-page/ContactUs';
import CashFlowLandingpg from './Components/landing-page/CashFlowHome';
import Authentication from './Components/register/Authentication';
import Reset from './Components/register/Reset';
import SignUp from './Components/register/SignUp';
import ProfileSetup from './Components/register/ProfileSetup';

// import AdminNavbar from './Components/adminNavbar/AdminNavbar';
// import Home from './Components/adminNavbar/Home';
// import AdminWallet from './Components/adminNavbar/AdminWallet';

function App() {
  return (
    <div data-testid="Navigation-1">
    <Router> 
                {/* <Navbar /> */}
                {/* <AdminNavbar />  */}
                 <LandingNavbar />  

                 <Switch> 
                   {/* Landingpage  */}

                    <Route path='/' exact>
                        <CashFlowLandingpg />
                    </Route>

                    <Route path='/fees' exact>
                        <Fees />
                    </Route>

                    <Route path='/contact-us' exact>
                        <Contact />
                    </Route> 

                    <Route path='/login' exact>
                        <Authentication />
                    </Route>     

                    <Route path='/reset-password' exact>
                        <Reset />
                    </Route>

                    <Route path='/sign-up' exact>
                        <SignUp />
                    </Route>

                    <Route path='/profile-setup' exact>
                        <ProfileSetup/>
                    </Route>

                    {/* userNavbar */}
                    {/* <Route path='/user-home' component={CashFlow} exact>
                        <CashFlow />
                    </Route>

                    <Route path='/user-wallet' component={Wallet} exact>
                        <Wallet />
                    </Route>

                    <Route path='/send' component={Send} exact>
                        <Send />
                    </Route>

                    <Route path='/withdraw' component={Withdraw} exact>
                        <Withdraw />
                    </Route>

                    <Route path='/user-transactions' component={Transactions} exact>
                        <Transactions />
                    </Route>

                    <Route path='/user-profile' component={Profile} exact>
                        <Profile />
                    </Route>

                    <Route> 
                    </Route> */}

                    {/* AdminNavigationComponent */}
                    {/* <Route path='/' exact>
                        <Home />
                    </Route>

                    <Route path='/wallet' exact>
                        <AdminWallet />
                    </Route> */}

                    {/* <Route path='/login' exact>
                        <Login />
                    </Route> */}

                </Switch>
            </Router>
    </div>
  );
}

export default App;
