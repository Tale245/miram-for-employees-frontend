import React from "react";

import './Header.css'
import logo from '../../images/logo.svg'

const Header = () => {
    return(
        <header className="header">
            <img className="header__logo" src={logo}  alt="Логотип"/>
            <button className="header__btn-logout">Выход</button>
        </header>
    )
}

export default Header