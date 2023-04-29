import React, { useState, useEffect } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function AdminNav() {
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

  return (
    <section>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h2 style={{cursor: "arrow"}} className='navbar-logo' onClick={closeMobileMenu}>
            CashFlow
            <i className="fa-solid fa-money-bill-transfer" style={{"color": "#ffffff"}}></i>
          </h2>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>
                Dashboard
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/admin-home' className='nav-links' onClick={closeMobileMenu}>
                Users
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/admin-wallet'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                  wallet
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
          {button && <Button buttonStyle='btn--outline'
           onClick={()=>{
            // window.location.reload();
           }}
          >LOG OUT</Button>}
        </div>
      </nav>
    </section>
  );
}

export default AdminNav;