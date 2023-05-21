import React, { useEffect, useState } from "react";
import Signin from "./Signin/Signin";
import WelcomePage from "./WelcomePage/WelcomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreateOrder from "./CreateOrder/CreateOrder";
import OrderList from "./OrderList/OrderList";
import MustToDo from "./MustToDo/MustToDo";
import Header from "./Header/Header";
import userApi from "../utils/UserApi";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import orderApi from "../utils/OrderApi";
import Profile from "./Profile/Profile";

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moveLeft, setMoveLeft] = useState(false);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem("userInfo"))
  );

  // Проверяем, есть ли токен в системе
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  // Проверяем тип пользователя, после чего решаем,какую страницу отобразить
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [isLoggedIn]);

  // Создать заказ
  const createOrder = () => {
    orderApi.createOrder().then((data) => console.log(data));
  };
  const addItemsInNewOrder = (articleNumber, format, quantity) => {
    orderApi
      .addItemsInNewOrder(articleNumber, format, quantity)
      .then((data) => console.log(data));
  };

  // Вход
  const signin = (email, password) => {
    userApi
      .signin(email, password)
      .then(() => {
        // Сразу получаем и записываем информацию о текущем пользователе
        userApi.getMyInfo().then((data) => {
          localStorage.setItem("userInfo", JSON.stringify(data));
          setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
          setIsLoggedIn(true);
          // Проверяем тип пользователя, после чего решаем,какую страницу отобразить
          navigate("/profile");
        });
      })
      .catch((e) => console.log(e));
  };
  const logout = () => {
    setIsLoggedIn(false);
    setUserInfo({});
    localStorage.clear();
  };

  return (
    <div className="page">
      <Header logout={logout} isLoggedIn={isLoggedIn} moveLeft={moveLeft}/>
      <Routes>
        {userInfo?.type !== "worker" && (
          <Route
            exact
            path="/create-order"
            element={
              <ProtectedRoute
                element={CreateOrder}
                isLoggedIn={isLoggedIn}
                addItemsInNewOrder={addItemsInNewOrder}
              />
            }
          />
        )}
        {userInfo?.type !== "worker" && (
          <Route
            exact
            path="/order-list"
            element={
              <ProtectedRoute element={OrderList} isLoggedIn={isLoggedIn} />
            }
          />
        )}
        <Route
          exact
          path="/must-to-do"
          element={
            <ProtectedRoute element={MustToDo} isLoggedIn={isLoggedIn} />
          }
        />
        <Route
          exact
          path="/profile"
          element={
            <ProtectedRoute element={Profile} isLoggedIn={isLoggedIn} userInfo={userInfo}/>
          }
        />

        <Route
          exact
          path="/welcome-page"
          element={
            <WelcomePage isLoggedIn={isLoggedIn} setMoveLeft={setMoveLeft} />
          }
        />

        <Route exact path="/signin" element={<Signin signin={signin} setMoveLeft={setMoveLeft}/>} />
      </Routes>
    </div>
  );
}

export default App;
