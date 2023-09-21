import React from "react";
import FooterStylies from "./footer.module.css";
import logo2 from "../../assets/img/logo.svg";
import boxes2 from "../../assets/img/Frame.svg";

const Footer = () => {
  return (
    <footer className={FooterStylies.footer}>
      <div className="container">
        <div className={FooterStylies.footerBody}>
          <div className="grid">
            <h2>Quality cleaning for your home</h2>
            <p>
              Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do
              eiusmo.
            </p>
            <img src={boxes2} alt="Eror" />
          </div>
          <div className="grid">
            <h3>Contact us</h3>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
            <p>(414) 567 - 2109</p>
            <p>contact@cleaning.com</p>
          </div>
          <div className="grid">
            <h3>Hours</h3>
            <b>Monday to Friday</b>
            <span>6:00 AM - 9:00 PM</span>
            <b>Saturday & Sunday</b>
            <span>8:00 AM - 8:00 PM</span>
          </div>
          <div className="grid">
            <h3>Get a free estimate</h3>
            <h5>(414) 567 - 2109</h5>
            <p>
              Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do
              eiusmod.
            </p>
            <button>Request a free quote</button>
          </div>
        </div>
        <div className={FooterStylies.footerBottom}>
          <div className="footer-left">
            <img src={logo2} alt="Eror" />
          </div>
          <div className="footer-right">
            <p>
              Copyright © Cleaning X | Designed by
              <span>BRIX Templates</span>- Powered by
              <span>Webflow-Licenses</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
