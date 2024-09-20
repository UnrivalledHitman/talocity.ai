import React from "react";
import logo from "../../assets/navigation-bar/logo_full_horizontal_white.png";
import "./navigation-bar.styles.scss";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-color fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            width="auto"
            height="30"
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto flex-row">
            <li className="nav-item">
              <a className="nav-link" href="#products">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clients">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#company">
                Company
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resources">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
