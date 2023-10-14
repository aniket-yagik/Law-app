import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            <img src="/static/images/logo.png" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/service">
                  SERVICES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studies">
                  STUDIES
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="login_bt">
                <ul>
                  <li>
                    <a href="#">
                      <span className="user_icon">
                        <i className="fa fa-user" aria-hidden="true" />
                      </span>
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-search" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </nav>
    </>
  )
}

export default Navbar