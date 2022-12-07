import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg bg-dark sticky-top`}>
          <div className="container-fluid">
            <Link className={`navbar-brand text-light `} to="/">
              <strong>Home</strong>
            </Link>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
          <Link className={`nav-link active text-light`} aria-current="page" to="/Trending">Trending</Link>
        </li> */}
                <li className="nav-item">
                  <Link className={`nav-link active text-light`} to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active text-light`} to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link active text-light`}
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active text-light`} to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active text-light`} to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link active text-light`} to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link active text-light`}
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>

              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  onClick={this.props.DarkMode}
                  role="switch"
                  aria-checked
                  id="flexSwitchCheckDefault"
                />
                <label
                  className={`form-check-label text-light`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark mode
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
