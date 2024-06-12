import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#fb8500" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="home">
          Librazen
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                View Books
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                LeaderBoard
              </a>
            </li>
          </ul>
          <span className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/Login">
                  Login
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
