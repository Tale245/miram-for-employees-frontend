import React from "react";

import "./Signin.css";

const Signin = () => {
  return (
    <section className="signin">
      <h1 className="signin__title">Вход</h1>
      <form className="signin__form">
        <input className="signin__input" placeholder="Введите логин" />
        <input className="signin__input" placeholder="Введите пароль" />
        <button className="signin__submit-btn">Войти</button>
      </form>
    </section>
  );
};

export default Signin;
