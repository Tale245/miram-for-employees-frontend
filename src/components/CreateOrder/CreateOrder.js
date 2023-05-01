import React from "react";

import "./CreateOrder.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form";

const CreateOrder = ({ setOrderList }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  let tempArray = []

  const onSubmit = (data) => {
    let order = {
      articul: data.articul,
      format: data.format,
      quantity: data.quantity 
    }

    tempArray.push(order)
    setOrderList(tempArray)
  };
  return (
    <>
      <section className="create-order">
        <h1 className="create-order__title">Добавление позиции в заказ</h1>
        <form className="create-order__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="create-order__container-form">
            <div className="create-order__container-input">
              <input
                {...register("articul", {
                  required: "Это поле обязательно!",
                  minLength: {
                    value: 2,
                    message: "Введите минимум 2 символа!",
                  },
                })}
                className={`create-order__input ${
                  errors.articul && "create-order__input-error"
                }`}
                placeholder="Артикул"
              />
              {errors?.articul && (
                <span className="create-order__error-text">
                  {errors.articul.message}
                </span>
              )}
            </div>
            <div className="create-order__container-input">
              <input
                {...register("format", {
                  required: "Это поле обязательно!",
                  minLength: {
                    value: 2,
                    message: "Введите минимум 2 символа!",
                  },
                })}
                className={`create-order__input ${
                  errors.format && "create-order__input-error"
                }`}
                placeholder="Формат"
              />
              {errors?.format && (
                <span className="create-order__error-text">
                  {errors.format.message}
                </span>
              )}
            </div>
            <div className="create-order__container-input">
              <input
                {...register("quantity", {
                  required: "Это поле обязательно!",
                  minLength: {
                    value: 1,
                    message: "Введите минимум 1 символ!",
                  },
                })}
                className={`create-order__input ${
                  errors.quantity && "create-order__input-error"
                }`}
                placeholder="Кол-во"
              />
              {errors?.quantity && (
                <span className="create-order__error-text">
                  {errors.quantity.message}
                </span>
              )}
            </div>
          </div>
          <button
            className={`create-order__submit-btn  ${
              !isValid && "create-order__order-btn__disabled"
            }`}
          >
            Добавить
          </button>
        </form>
        <Link to="/order-list">
          <button className={`create-order__order-btn`}>
            Посмотреть весь заказ
          </button>
        </Link>
      </section>
    </>
  );
};

export default CreateOrder;
