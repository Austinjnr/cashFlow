import React, { useState } from "react"
import "./Navigation.css";
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
  const [Navbar, setNavbar] = useState(false)
  return (
    <section data-testid="Navbar-1">
      <nav className='navbar'>
        <ul>
            <Link to='/' className='home'>
                <li>CashFlow</li>
            </Link>
        </ul>
        <ul className={Navbar ? "nav-links" : "nav"} onClick={() => setNavbar(false)}>
            <Link to='/wallet' className="wallet">
                <li>Wallet</li>
            </Link>

            <Link to='/send' className="send">
                <li>Send</li>
            </Link>

            <Link to='/withdraw' className="withdraw">
                <li>Withdraw</li>
            </Link>

            <Link to='transactions' className="transactions">
                <li>Transactions</li>
            </Link>

            <Link to='profile' className="profile">
                <li>Profile</li>
            </Link>

            <Link to='/authentication' className="log-out">
                <li>LogOut</li>
            </Link>
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='menu-icon' onClick={() => setNavbar(!Navbar)}>
          {Navbar ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </section>
  )
}
export default Navbar
