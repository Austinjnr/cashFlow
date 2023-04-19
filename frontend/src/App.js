import React from 'react';
import CashFlow from './Components/userNavbar/CashFlow';
import Wallet from './Components/userNavbar/Wallet';
import Send from './Components/userNavbar/Send';
import Withdraw from './Components/userNavbar/Withdraw';
import Transactions from './Components/userNavbar/Transactions';
import Profile from './Components/userNavbar/Profile';
// import Navbar from './Components/userNavbar/Navbar';
// import AdminNavbar from './Components/adminNavbar/AdminNavbar';
import Home from './Components/adminNavbar/Home';
import AdminWallet from './Components/adminNavbar/AdminWallet';
import Fees from './Components/landing-page/Fees';
import Contact from './Components/landing-page/ContactUs';
import CashFlowLandingpg from './Components/landing-page/CashFlowHome';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingNavbar from './Components/landing-page/LandingpgNavbar';

function App() {
  return (
    <div data-testid="Navigation-1">
    <Router>
                {/* <Navbar />
                <AdminNavbar /> */}
                <LandingNavbar />

                <Switch>
                    {/* Landingpage */}

                    <Route path='/landingpg' exact>
                        <CashFlowLandingpg />
                    </Route>

                    <Route path='/fees' exact>
                        <Fees />
                    </Route>

                    <Route path='/contact-us' exact>
                    <Contact />
                    </Route>                    
                    {/* userNavbar */}
                    <Route path='/' component={CashFlow} exact>
                        <CashFlow />
                    </Route>

                    <Route path='/wallet' component={Wallet} exact>
                        <Wallet />
                    </Route>

                    <Route path='/send' component={Send} exact>
                        <Send />
                    </Route>

                    <Route path='/withdraw' component={Withdraw} exact>
                        <Withdraw />
                    </Route>

                    <Route path='/transactions' component={Transactions} exact>
                        <Transactions />
                    </Route>

                    <Route path='/profile' component={Profile} exact>
                        <Profile />
                    </Route>

                    <Route>
                    {/* log out */}
                    </Route>

                    {/* AdminNavigationComponent */}
                    <Route path='/' exact>
                        <Home />
                    </Route>

                    <Route path='/wallet' exact>
                        <AdminWallet />
                    </Route>

                    {/* <Route path='/login' exact>
                        <Login />
                    </Route> */}

                </Switch>
            </Router>
    </div>
  );
}

export default App;
