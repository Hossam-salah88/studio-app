import React from "react";
import { NavLink } from "react-router-dom";
import { words } from "../../words";

const Home = (props) => {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <h1 className="masthead-subheading">{words.HomeTitle}</h1>
          <p className="masthead-heading text-uppercase">
            {words.HomeSubtitle}
          </p>
          <NavLink
            to="/services"
            className="btn btn-primary btn-xl text-uppercase"
            onClick={() => {
              props.addStyle();
            }}
          >
            {words.HomeBtnText}
          </NavLink>
        </div>
      </header>
    </div>
  );
};

export default Home;
