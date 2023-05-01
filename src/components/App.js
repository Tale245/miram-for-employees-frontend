import React, { useState } from "react";
import Signin from "./Signin/Signin";
import WelcomePage from "./WelcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
import CreateOrder from "./CreateOrder/CreateOrder";
import OrderList from "./OrderList/OrderList";
import MustToDo from "./MustToDo/MustToDo";
import Header from "./Header/Header";

function App() {
  const [orderList, setOrderList] = useState([]);

  console.log("arr:", orderList);

  return (
    <div className="page">
      <Header />
      <Routes>
        <Route
          exact
          path="/create-order"
          element={<CreateOrder setOrderList={setOrderList} />}
        />
        <Route
          exact
          path="/order-list"
          element={<OrderList orderList={orderList} />}
        />
        <Route
          exact
          path="/must-to-do"
          element={<MustToDo orderList={orderList} />}
        />
        <Route exact path="/welcome-page" element={<WelcomePage />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
