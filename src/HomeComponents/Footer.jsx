import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>ABOUT US</h4>
          <p>About Sephora</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Sitemap</p>
          <p>International</p>
        </div>

        <div className="footer-column">
          <h4>CUSTOMER CARE</h4>
          <p>FAQ</p>
          <p>Delivery</p>
          <p>Find a Store</p>
          <p>Beauty Services</p>
          <p>Contact Us</p>
        </div>

        <div className="footer-column">
          <h4>REWARDS</h4>
          <p>Sephora Beauty Pass</p>
          <button>Explore</button>
        </div>

        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>

<br></br>
          <div className="payment-icons">
            <h4>PAYMENTS</h4>

            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/mastercard-logo.png" alt="MasterCard" />
            <img src="https://img.icons8.com/color/48/upi-logo.png" alt="UPI" />
          </div>
        </div>
      </div>

      <p className="footer-copy">© 2025 Sephora India</p>
    </footer>
  );
};

export default Footer;
