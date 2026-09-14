import React from 'react';
import Logo from "../assets/logo-text.png"
const Footer = () => {
      return (
            <div>
            <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
  <aside>
    <img src= {Logo} alt="logo" />
    <p>
      Curated tools, technologies, and resources for developers building <br />
modern software.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">PRODUCT</h6>
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Technologies</a>
    <a className="link link-hover">Projects</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Careers</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Privacy policy </a>
    <a className="link link-hover">Terms of use</a>
  </nav>
  
</footer>
        </div>
      );
};

export default Footer;