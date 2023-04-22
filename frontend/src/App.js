import React from 'react';
import CashFlow from './Components/userNavbar/CashFlow';
import Wallet from './Components/userNavbar/Wallet';
import Send from './Components/userNavbar/Send';
import Withdraw from './Components/userNavbar/Withdraw';
import Transactions from './Components/userNavbar/Transactions';
import Profile from './Components/userNavbar/Profile';
import Navbar from './Components/userNavbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingNavbar from './Components/landing-page/LandingpgNavbar';
import Fees from './Components/landing-page/Fees';
import Contact from './Components/landing-page/ContactUs';
import CashFlowLandingpg from './Components/landing-page/CashFlowHome';
import Authentication from './Components/register/Authentication';
import Reset from './Components/register/Reset';
import SignUp from './Components/register/SignUp';
import ProfileSetup from './Components/register/ProfileSetup';


import AdminNav from "./Components/adminNavbar/AdminNav"
import AdminWallet from './Components/adminNavbar/AdminWallet';
import AdminHome from './Components/adminNavbar/AdminHome';
import UserDetails from './Components/adminNavbar/UserDetails';
import UpdateUser from './Components/adminNavbar/UpdateUser';
import NotFound from './Components/NotFound';
import Blogs from './Components/landing-page/Blogs';

function App() {
  return (
    <div data-testid="Navigation-1">
    <Router> 
                <Navbar />      {/* A user navbar */}
                <AdminNav />    {/* Admin navbar */}
                 <LandingNavbar />   {/* landing page navbar */}

                 <Switch> 


                   {/* the Landingpage  paths*/}

                    <Route path='/' exact>
                        <CashFlowLandingpg />
                    </Route>

                    <Route path='/fees' exact>
                        <Fees />
                    </Route>

                    <Route path='/blogs' exact>
                        <Blogs />
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



                    {/* user navbar paths */}



                    <Route path='/user-home' component={CashFlow} exact>
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


                    {/* Landing page paths */}


                    <Route path='/admin-home' exact>
                        <AdminHome />
                    </Route>

                    <Route path='/details/:id' exact>
                        <UserDetails />
                    </Route>

                    <Route path='/update-user' exact>
                        <UpdateUser />
                    </Route>

                    <Route path='/Admin-wallet' exact>
                        <AdminWallet />
                    </Route>

                    <Route path='/login' exact>
                        <Authentication />
                    </Route>
                    <Route path='*'>
                    <NotFound/>
                    </Route>

                </Switch>
            </Router>
    </div>
  );
}

export default App;