import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import Wallet from "./Components/userNavbar/Wallet";
import Send from "./Components/userNavbar/Send";
import Deposit from "./Components/userNavbar/Deposit";
import Transaction from "./Components/userNavbar/Transaction";
import Profile from "./Components/userNavbar/Profile";
import AddBeneficiary from "./Components/userNavbar/AddBeneficiaries";
import Beneficiaries from "./Components/userNavbar/Beneficiaries";
import Navbar from "./Components/userNavbar/Navbar";

import LandingNavbar from "./Components/landing-page/LandingpgNavbar";
import Fees from "./Components/landing-page/Fees";
import Rates from "./Components/landing-page/Rates";
import Contact from "./Components/landing-page/ContactUs";
import CashFlowLandingpg from "./Components/landing-page/CashFlowHome";
import Authentication from "./Components/register/Authentication";
import Reset from "./Components/register/Reset";
import SignUp from "./Components/register/SignUp";
import ProfileSetup from "./Components/register/ProfileSetup";

import AdminNav from "./Components/adminNavbar/AdminNav";
import AdminWallet from "./Components/adminNavbar/AdminWallet";
import AdminHome from "./Components/adminNavbar/AdminHome";
import UserDetails from "./Components/adminNavbar/UserDetails";
import UpdateUser from "./Components/adminNavbar/UpdateUser";
// import NotFound from "./Components/NotFound";
import Blogs from "./Components/landing-page/Blogs";
import CustomerCare from "./Components/landing-page/CustomerCare";
import Dashboard from "./Components/adminNavbar/Dashboard";
import Contract from "./Components/landing-page/Contract";
import Questions from "./Components/landing-page/Questions";
import Home from "./Components/userNavbar/Home.js";

export default function App() {
  let session = sessionStorage.getItem("userId");
  let account = sessionStorage.getItem("AccountId");
  console.log(account);
  const location = useLocation();
  const path = location.pathname;
  let navbar;
  if (
    path === "/" ||
    path === "/fees" ||
    path === "/rates" ||
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
    path === "/welcome" ||
    path === "/user-wallet" ||
    path === "/send" ||
    path === "/profile-setup" ||
    path === "/top-up" ||
    path === "/user-transaction" ||
    path === "/user-profile" ||
    path === "/new-beneficary" ||
    path === "/beneficiaries" ||
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
        <div className="Navbars"> {navbar}</div>

        <Switch>
          <div className="body">
            {/* landing page  <LandingNavbar />  */}
            <Route exact path="/" component={CashFlowLandingpg} />
            <Route exact path="/fees" component={Fees} />
            <Route exact path="/rates" component={Rates} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/customer-care" component={CustomerCare} />
            {/* <Route exact path="/login" component={Authentication} /> */}
            <Route exact path="/reset-password" component={Reset} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/contract" component={Contract} />
            <Route exact path="/questions" component={Questions} />
            <Route exact path="/welcome" component={Home} />

            {/* NAvbar */}
            <Route
              exact
              path="/user-wallet"
              render={() => <Wallet AccountId={account} userId={session} />}
            />
            <Route
              exact
              path="/send"
              render={() => <Send AccountId={account} />}
            />
            <Route
              exact
              path="/top-up"
              render={() => <Deposit AccountId={account} />}
            />
            <Route
              exact
              path="/profile-setup"
              render={() => <ProfileSetup userId={session} />}
            />
            <Route
              exact
              path="/user-profile"
              render={() => <Profile userId={session} />}
            />
            <Router exact path="/user-transactions" />
            <Route
              exact
              path="/new-beneficary"
              render={() => <AddBeneficiary AccountId={account} />}
            />
            <Route
              exact
              path="/beneficiaries"
              render={() => <Beneficiaries userId={session} />}
            />
            <Route
              exact
              path="/user-transaction"
              render={() => <Transaction userId={session} />}
            />

            {/* <AdminNav />    */}
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/all-users" component={AdminHome} />
            <Route exact path="/user/:id" component={UserDetails} />
            <Route exact path="/update-user" component={UpdateUser} />
            <Route exact path="/company-wallet" component={AdminWallet} />
            <Route exact path="/login" component={Authentication} />
            {/* <Route exact path="*" component={NotFound} /> */}
          </div>
        </Switch>
      </Router>
    </div>
  );
}
