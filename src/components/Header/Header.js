import React from "react";

import { NavLink } from "react-router-dom";

import "./Header.css";
import logo from "../../images/logo.svg";

const Header = ({ logout, isLoggedIn, moveLeft }) => {
  return (
    <header className={`header ${(isLoggedIn || moveLeft) && "header_isLoggedIn"}`}>
      <NavLink to={`${isLoggedIn ? '/profile' : '/welcome-page' }`}><img className="header__logo" src={logo} alt="Логотип" /></NavLink> 
      {isLoggedIn && (
        <button className="header__btn-logout" onClick={logout}>
          Выход
        </button>
      )}
    </header>
  );
};

export default Header;
