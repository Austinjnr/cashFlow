import React, { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import "../Navbar.css";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  const [click, setClick] = useState(false);
const history = useHistory()
  const handleClick = () => {
    setClick(!click);
  };

  const handleLogout = () => {
    history.push("/")
    if (window.location.pathname === "/") {
      setTimeout(() => {
        window.location.reload();
      }, -100);
    }

    // Perform the logout logic here
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <section>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">CashFlow</div>
          <i
            className="fa-solid fa-money-bill-transfer"
            style={{ color: "#ffffff" }}
          ></i>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/welcome"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user-wallet"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Wallet
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user-transaction"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Transactions
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/user-profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="nav-links-mobile"
                onClick={handleLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
          <Link
            to="/"
            className="nav-links-mobile"
            onClick={handleLogout}
          >
            Logout
          </Link>
          <button className="btn--outline" onClick={handleLogout}>
            LOG OUT
          </button> 
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
