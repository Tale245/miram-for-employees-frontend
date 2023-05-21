import React from "react";
import { NavLink } from "react-router-dom";

import "./Profile.css";

const Profile = ({ createOrder, userInfo }) => {
  return (
    <section className="profile">
      <div className="profile__main-info">
        <img
          className="profile__avatar"
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
          alt="Аватар пользователя"
        />
        <div className="profile__container-about">
          <div className="profile__container-btn">
            <NavLink
              to={`${
                userInfo.type === "worker" ? "/must-to-do" : "/create-order"
              }`}
            >
              <button className="profile__button" onClick={createOrder}>
                {`${
                  userInfo.type === "worker" ? "Начать работу" : "Создать заказ"
                }`}
              </button>
            </NavLink>
          </div>
          <div className="profile__container-name">
            <h1 className="profile__name">Ахматова Мария Александровна</h1>
            <p className="profile__text profile__time-work">
              Среднее время работы:{" "}
              <span className="profile__time-work_span">17м 44с</span>
            </p>
          </div>
          <div className="profile__container-position">
            <p className="profile__text profile__time-work">Администратор</p>
            <p className="profile__text profile__time-work">.</p>
            <p className="profile__text profile__time-work">24</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
