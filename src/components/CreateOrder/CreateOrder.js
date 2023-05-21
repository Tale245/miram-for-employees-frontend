import React from "react";

import "./CreateOrder.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const CreateOrder = ({ addItemsInNewOrder }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    addItemsInNewOrder(data.articleNumber, data.format, data.quantity);
    reset();
  };
  return (
    <>
      <section className="create-order">
        <h1 className="create-order__title">Добавление позиции в заказ</h1>
        <form className="create-order__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="create-order__container-form">
            <div className="create-order__container-input">
              <input
                {...register("articleNumber", {
                  required: "Это поле обязательно!",
                  minLength: {
                    value: 2,
                    message: "Введите минимум 2 символа!",
                  },
                })}
                className={`create-order__input ${
                  errors.articleNumber && "create-order__input-error"
                }`}
                placeholder="Артикул"
              />
              {errors?.articleNumber && (
                <span className="create-order__error-text">
                  {errors.articleNumber.message}
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
      </section>
      <div className="create-order__orderBtn-container">
        <Link to="/order-list">
          <button className={`create-order__order-btn`}>
            Посмотреть весь заказ
          </button>
        </Link>
      </div>
    </>
  );
};

export default CreateOrder;
