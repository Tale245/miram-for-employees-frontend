import React from "react";

import "./OrderList.css";
import Order from "../Order/Order";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const OrderList = ({ orderList }) => {
  return (
    <>
      <section className="order-list">
        <div className="order-list__title-container">
          <h2 className="order-list__order-title order-list__order-title_name">
            Артикул
          </h2>
          <h2 className="order-list__order-title order-list__order-size">
            Размер
          </h2>
          <h2 className="order-list__order-title order-list__order-quantity">
            Кол-во
          </h2>
        </div>
        <div className="order-list__container">
          {orderList.map((item) => (
            <Order
              key={item.quantity}
              title={item.articul}
              size={item.format}
              quantity={item.quantity}
              isMustToDoPage={false}
            />
          ))}
        </div>
        <Link to="/must-to-do">
          {" "}
          <button className="order-list__btn order-list__submit-btn">
            Отправить заказ
          </button>
        </Link>
        <Link to="/create-order">
          <button className="order-list__btn order-list__create-order">
            Добавить позицию
          </button>
        </Link>
      </section>
    </>
  );
};

export default OrderList;
