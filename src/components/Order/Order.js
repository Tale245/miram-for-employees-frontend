import React from "react";

import "./Order.css";

const Order = ({ title, size, quantity, isMustToDoPage }) => {
  return (
    <div className="order">
      <p className="order__title">{title}</p>
      <p className="order__size">{size}</p>
      <p className="order__quantity">{quantity}</p>
      {isMustToDoPage && <button className="order__button-done">Готово</button>}
    </div>
  );
};

export default Order;
