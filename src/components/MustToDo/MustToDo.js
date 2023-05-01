import React from "react";
import Order from "../Order/Order";

import "./MustToDo.css";

const MustToDo = ({ orderList }) => {
  return (
    <section className="mustToDo">
      <button className="mustToDo__button-overWork">Закончить работу</button>
      <div className="mustToDo__container">
        <p className="mustToDo__date">До 25.02</p>
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
        <div className="mustToDo__element-container">
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
      </div>
    </section>
  );
};

export default MustToDo;
