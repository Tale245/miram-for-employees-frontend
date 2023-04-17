import React from "react";

import './Main.css'

const Main = () => {
    return(
        <section className="main">
            <h1 className="main__title">Добавление позиции в заказ</h1>
           <form className="main__form">
            <input className="main__input" placeholder="Артикул"/>
            <input className="main__input" placeholder="Формат"/>
            <input className="main__input" placeholder="Кол-во"/>
            </form> 
        </section>
    )
}

export default Main