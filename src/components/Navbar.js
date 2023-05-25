import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between mr-2" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">{props.homeText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">{props.contectText}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}

// Navbar.propTypes = {
//   title: PropTypes.string,
//   aboutText: PropTypes.string
// }
// Navbar.defaultProp = {
//   title: 'Sanjeev Maurya',
//   homeText: 'About Text Hear',
//   aboutText: 'About Text Hear',
//   contectText: 'About Text Hear'
// }


