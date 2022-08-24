import { NavLink } from "react-router-dom";
import navBarLogo from "../img/navbar-logo.svg";
import { useState } from "react";

const PageWrapper = (props) => {
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setShow((current) => !current);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${props.isActive}`}
        id="mainNav"
      >
        <div className="container">
          <NavLink to="/" className="navbar-brand ">
            <img
              src={navBarLogo}
              alt="Studio logo"
              style={{ height: "40px" }}
              className="navbar-logoimg"
              onClick={() => {
                props.removeStyle();
              }}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            // data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div
            className={
              show
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarResponsive"
          >
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/services"
                  className="nav-link"
                  onClick={() => {
                    props.addStyle();
                  }}
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className="nav-link"
                  onClick={() => {
                    props.addStyle();
                  }}
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={() => {
                    props.addStyle();
                  }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/team"
                  className="nav-link"
                  onClick={() => {
                    props.addStyle();
                  }}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  onClick={() => {
                    props.addStyle();
                  }}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PageWrapper;
