// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//         <h4>© 2024 Mercedes Benz. All rights reserved.</h4>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-col">
          <h3 className="footer-logo">Mercedes-Benz</h3>
          <p>
            Luxury, innovation and performance.
            Crafted to deliver the best driving experience.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/model">Models</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* MODELS */}
        <div className="footer-col">
          <h4>Our Models</h4>
          <ul>
            <li>Sedan</li>
            <li>SUV</li>
            <li>AMG Performance</li>
            <li>EQ Electric</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Mercedes-Benz Care</h4>
          <p>📞 1800-102-9222</p>
          <p>📧 care@mercedes-benz.com</p>
          <p>📍 India</p>

          <div className="social-icons">
            <span>🌐</span>
            <span>📘</span>
            <span>📸</span>
            <span>▶️</span>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mercedes-Benz. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
