import React, { useState } from "react"
import "./Admin.css";
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const AdminNavbar = () => {

    const [Navbar, setNavbar] = useState(false)

    return ( 
        <section data-testid="Navbar-1">
            <nav className='navbar'>
                <h3>CashFlow</h3>
            <ul className={Navbar ? "nav-links" : "nav"} onClick={() => setNavbar(false)}>

                    <Link to='/' className="home">
                        <li>Home</li>
                    </Link>

                    <Link to='/wallet' className="wallet">
                        <li>Wallet</li>
                    </Link>

                    <Link to='/login' className="log-out">
                        <li>LogOut</li>
                    </Link>
        </ul>
        <button className='menu-icon' onClick={() => setNavbar(!Navbar)}>
          {Navbar ? <ImCross /> : <FaBars />}
        </button>
      </nav>
        </section>
     );
}
 
export default AdminNavbar;