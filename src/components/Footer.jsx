import React from "react";

function Footer() {
  return (
    <footer>
      <p>© 2025 Little Lemon. All rights reserved.</p>
      
      <address>
        <p>123 Lemon Street, Melbourne, Australia</p>
        <p>Phone: <a href="tel:+61312345678">+61 3 1234 5678</a></p>
        <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
      </address>

      <div>
        <p>Follow us:</p>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
