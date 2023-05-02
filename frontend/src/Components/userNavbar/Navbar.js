import React, { useState, useEffect } from 'react';
import { Button } from '../landing-page/Button';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  // const handleLogout = () => {
  //   localStorage.clear();
  //   window.location.href = '/login';
  // };

  return (
    <section>
      <nav className='navbar'>
        <div className='navbar-container'>
           <div className='navbar-logo'>
           CashFlow
           </div>
            <i className="fa-solid fa-money-bill-transfer" style={{"color": "#ffffff"}}></i>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/welcome' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/user-wallet' className='nav-links' onClick={closeMobileMenu}>
                Wallet
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/user-transaction'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Transactions
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/user-profile'
                className='nav-links's
                onClick={closeMobileMenu} >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to='/login'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Login
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle='btn--outline'
              // onClick={handleLogout}
            >
              LOG OUT
            </Button>
          )}
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
