import React from "react";
import Order from "../Order/Order";

import "./MustToDo.css";

const MustToDo = ({ orderList }) => {
  return (
    <section className="mustToDo">
      <button className="mustToDo__button-overWork">Закончить работу</button>
      <div className="mustToDo__container">
        <p className="mustToDo__date">
          Сделать до: <span className="mustToDo__span-date">17.04</span>
        </p>
        <div className="mustToDo__element-container">
          <Order title={"1. "} isMustToDoPage={true} />
          <Order title={"2. "} isMustToDoPage={true} />
          <Order title={"3. "} isMustToDoPage={true} />
        </div>
      </div>
    </section>
  );
};

export default MustToDo;
