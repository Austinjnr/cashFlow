import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import CashFlow from "./Components/userNavbar/CashFlow";
import Wallet from "./Components/userNavbar/Wallet";
import Send from "./Components/userNavbar/Send";
import Deposit from "./Components/userNavbar/Deposit";
import Transactions from "./Components/userNavbar/Transactions";
import Profile from "./Components/userNavbar/Profile";
import Navbar from "./Components/userNavbar/Navbar";

import LandingNavbar from "./Components/landing-page/LandingpgNavbar";
import Fees from "./Components/landing-page/Fees";
import Contact from "./Components/landing-page/ContactUs";
import CashFlowLandingpg from "./Components/landing-page/CashFlowHome";
import Authentication from "./Components/register/Authentication";
import Reset from "./Components/register/Reset";
import SignUp from "./Components/register/SignUp";
import ProfileSetup from "./Components/register/ProfileSetup";


import AdminNav from "./Components/adminNavbar/AdminNav"
import AdminWallet from './Components/adminNavbar/AdminWallet';
import AdminHome from './Components/adminNavbar/AdminHome';
import UserDetails from './Components/adminNavbar/UserDetails';
import UpdateUser from './Components/adminNavbar/UpdateUser';
import NotFound from './Components/NotFound';
import Blogs from './Components/landing-page/Blogs';
import CustomerCare from './Components/landing-page/CustomerCare';
import AddBeneficiary from './Components/userNavbar/AddBeneficiaries';
import Beneficiaries from './Components/userNavbar/Beneficiaries';

export default function App() {
  let session = sessionStorage.getItem("userId");

  console.log(session);
  const location = useLocation();
  const path = location.pathname;
  let navbar;
  if (
    path === "/" ||
    path === "/fees" ||
    path === "/blogs" ||
    path === "/contact-us" ||
    path === "/customer-care" ||
    path === "/login" ||
    path === "/reset-password" ||
    path === "/sign-up" ||
    path === "*"
  ) {
    navbar = <LandingNavbar />;
  } else if (
    path === "/user-home" ||
    path === "/user-wallet" ||
    path === "/send" ||
    path === "/profile-setup" ||
    path === "/top-up" ||
    path === "/user-transactions" ||
    path === "/user-profile" ||
    path === "/update-profile" ||
    path === "*"
  ) {
    navbar = <Navbar />;
  } else {
    navbar = <AdminNav />;
  }

  return (
    <div data-testid="Navigation-1">
      <Router>
        {navbar}
        <Switch>
          {/* landing page  <LandingNavbar />  */}
          <Route exact path="/" component={CashFlowLandingpg} />
          <Route exact path="/fees" component={Fees} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/customer-care" component={CustomerCare} />
          <Route exact path="/login" component={Authentication} />
          <Route exact path="/reset-password" component={Reset} />
          <Route exact path="/sign-up" component={SignUp} />

          {/* NAvbar */}

          <Router exact path="/user-home" component={CashFlow} />
          <Route exact path="/user-wallet" component={Wallet} />
          <Route exact path="/send" component={Send} />
          <Route exact path="/top-up" component={Deposit} />
          <Route exact path="/profile-setup" component={ProfileSetup} />
          <Route exact path="/beneficiaries" component={Beneficiaries} />
          <Route exact path="/new-beneficiaries" component={AddBeneficiary} />
          <Route
            exact
            path="/user-profile"
            render={() => <Profile userId={session} />}
          />
          <Router exact path="/user-transactions" 
           render={() => <Transactions userId={session} />}
           />

            {/* <AdminNav />    */}
          <Route exact path="/admin-home" component={AdminHome} />
          <Route exact path="/details/:id" component={UserDetails} />
          <Route exact path="/update-user" component={UpdateUser} />
          <Route exact path="/Admin-wallet" component={AdminWallet} />
          <Route exact path="/login" component={Authentication} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}
