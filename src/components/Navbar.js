import React from "react";
import PropTypes from "prop-types";
// import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">{props.title}</a>
          {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">{props.About}</a> */}
                {/* <Link className="nav-link" to="/about">{props.About}</Link> */}
              {/* </li> */}
            </ul>
          </div>
      

          <div className={`form-check form-switch text-${props.mode==="light"?"dark":'light'}`}  >
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" id="flexSwitchCheckDefault"/>
        </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Set title',
  About:'About Us'
};