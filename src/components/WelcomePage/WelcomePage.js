import React, {useEffect} from "react";

import "./WelcomePage.css";
import { NavLink } from "react-router-dom";

import rightIco from "../../images/right-ico.svg";

const WelcomePage = ({ isLoggedIn, setMoveLeft }) => {

  useEffect(() => {
    setMoveLeft(false)
  }, [])


  return (
    <section className="welcomePage">
      <div className="welcomePage__container">
        <div className="welcomePage__title-container">
          <h1 className="welcomePage__title">
            Здравствуйте! Чтобы создать заказ или начать работу, вам необходимо
            войти в систему!
          </h1>
          <img
            src={rightIco}
            className="welcomePage__ico-right"
            alt="иконка направления - направо"
          />
        </div>
        <div className="welcomePage__btn-container">
          {!isLoggedIn && (
            <NavLink to="/signin">
              <button className="welcomePage__button">Вход</button>
            </NavLink>
          )}
        </div>
      </div>


    </section>
  );
};

export default WelcomePage;
