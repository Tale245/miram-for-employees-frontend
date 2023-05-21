import React from "react";

import "./Order.css";

const Order = ({ title, size, quantity, isMustToDoPage }) => {
  return (
    <div className="order">
      <p className="order__title"> 123</p>
      <p className="order__size">111x444</p>
      <p className="order__quantity">1231231</p>
      {isMustToDoPage && <button className="order__button-done">Готово</button>}
    </div>
  );
};

export default Order;
