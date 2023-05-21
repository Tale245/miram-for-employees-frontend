import React, { useEffect } from "react";

import "./Signin.css";
import { useForm } from "react-hook-form";

const Signin = ({signin, setMoveLeft}) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    setMoveLeft(true)
  }, [])

  const onSubmit = (data) => {
    signin(data.login, data.password)
  }

  return (
    <section className="signin">
      <h1 className="signin__title">Вход</h1>
      <form className="signin__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="signin__input-container">
          <input
            {...register("login", {
              required: "Это поле обязательно!",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Некорректный Email адрес",
              },
            })}
            className={`signin__input ${
              errors?.login && "signin__input_error"
            }`}
            placeholder="Введите логин"
          />
          {errors?.login && (
            <span className="signin__span_error">{errors.login.message}</span>
          )}
        </div>
        <div className="signin__input-container">
          <input
            {...register("password", {
              required: "Вы пропустили это поле!",
              minLength: {
                value: 8,
                message: "Минимум 8 символов",
              },
            })}
            className={`signin__input ${
              errors?.password && "signin__input_error"
            }`}
            placeholder="Введите пароль"
          />
          {errors?.password && (
            <span className="signin__span_error">
              {errors.password.message}
            </span>
          )}
        </div>
        <button className={`signin__submit-btn ${!isValid && 'signin__submit-btn_disabled' }`}>Войти</button>
      </form>
    </section>
  );
};

export default Signin;
