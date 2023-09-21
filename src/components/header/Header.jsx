import React from "react";
import HeaderStylies from "./header.module.css";

import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <header className={HeaderStylies.header}>
      <div className="container">
        <nav className="flex-class">
          <div className="nav-links">
            <ul className="flex-class">
              <li>
                <a href="#home">
                  <img src={logo} alt="Eror" />
                </a>
              </li>
              <li>
                <a href="#home" className="selected">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#articles">Articles</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="nav-btns">
            <span>Cart (0)</span>
            <button>Get a free quote</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
