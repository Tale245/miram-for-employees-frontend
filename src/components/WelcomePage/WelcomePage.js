import React from "react";

import "./WelcomePage.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

const WelcomePage = () => {
  return (
    <section className="welcomePage">
      <img src={logo} className="project-logo" />
      <NavLink to="/signin">
        <button className="welcomePage__button">Вход</button>
      </NavLink>
    </section>
  );
};

export default WelcomePage;
