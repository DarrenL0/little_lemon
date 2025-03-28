import React from "react";
import icon from "../assets/iconFooter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer aria-label="Footer with contact information, address, and social media links">

      <div className="pageWidth ">
        <div className="footer-container">
          <div>
            <img src= {icon} alt='Little Lemon Footer Icon' className='footerIcon' />
          </div>
          <div aria-label="Footer Navigation" className="footerNavigation">
            <h2>Little Lemon</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/reservations">Reservations</Link></li>
            </ul>
          </div>

          <address role="contentinfo">
            <h2>Contact</h2>
            <p>123 Lemon Street, Melbourne, Australia</p>
            <p>Phone: <a href="tel:+61312345678">+61 3 1234 5678</a></p>
            <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
          </address>

          <div aria-label="Footer Social" className="socialMedia">
            <h2>Social Media</h2>
            <ul>
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Little Lemon on Facebook">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Little Lemon on Instagram">Instagram</a></li>
              <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Little Lemon on Twitter">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright-container">
          <p aria-live="polite" className="copyright">© 2025 Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
