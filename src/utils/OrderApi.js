class OrderApi {
  constructor() {
    this._baseUrl = "http://localhost:3001";
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  createOrder() {
    return fetch(`${this._baseUrl}/create-order`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  addItemsInNewOrder(articleNumber, format, quantity) {
    return fetch(`${this._baseUrl}/add-items-in-new-order`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        articleNumber: articleNumber,
        format: format,
        quantity: quantity,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const orderApi = new OrderApi();

export default orderApi;
