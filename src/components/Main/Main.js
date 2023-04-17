import React from "react";

import "./Main.css";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
    <Header />
    <section className="main">
      <h1 className="main__title">Добавление позиции в заказ</h1>
      <form className="main__form">
        <div className="main__container-form">
          <input className="main__input" placeholder="Артикул" />
          <input className="main__input" placeholder="Формат" />
          <input className="main__input" placeholder="Кол-во" />
        </div>
        <button className="main__submit-btn">Добавить</button>
      </form>
      <button className="main__order-btn">Посмотреть весь заказ</button>
    </section>
    </>
  );
};

export default Main;
