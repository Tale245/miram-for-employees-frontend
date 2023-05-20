import React from "react";

import "./WelcomePage.css";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.svg";

const WelcomePage = ({ isLoggedIn, createOrder }) => {
  return (
    <section className="welcomePage">
      {!isLoggedIn && <img src={logo} alt="Логотип" className="project-logo" />}
      {!isLoggedIn && (
        <NavLink to="/signin">
          <button className="welcomePage__button">Вход</button>
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink to="/create-order">
          <button className="welcomePage__button" onClick={createOrder}>Создать заказ</button>
        </NavLink>
      )}
    </section>
  );
};

export default WelcomePage;
