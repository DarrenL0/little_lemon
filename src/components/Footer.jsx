import React from "react";

function Footer() {
  return (
    <footer aria-label="Footer with contact information, address, and social media links">
      <p aria-live="polite">© 2025 Little Lemon. All rights reserved.</p>
      
      <address role="contentinfo">
        <p>123 Lemon Street, Melbourne, Australia</p>
        <p>Phone: <a href="tel:+61312345678">+61 3 1234 5678</a></p>
        <p>Email: <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></p>
      </address>

      <div>
        <p>Follow us:</p>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Little Lemon on Facebook">Facebook</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Little Lemon on Instagram">Instagram</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit Little Lemon on Twitter">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
