import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="container" style={{color: "blue"}}>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <Link to='/contract' className="nav-link px-2 text-body-secondary">
          <h5>Terms&Conditions</h5>
        </Link>
      </li>
      <li className="nav-item">
      </li>
    </ul>
    <p className="text-center text-body-secondary">© 2023 CashFlow, Inc</p>
    
  </footer>
</div>

  );
};

export default Footer;
