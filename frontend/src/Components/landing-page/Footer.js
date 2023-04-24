
import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="Footer">
      <ul>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.whatsapp.com/">
            <FaWhatsapp className="icon" />
          </a>
        </li>
        <li>Copyright </li>
        <li>
          <a href="/terms-of-use">Terms of Use/Service</a>
        </li>
        <li>
          <a href="/faq">Frequently Asked Questions</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;