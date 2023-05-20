class UserApi {
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
  // Получить информацию о всех пользователях
  getUsers() {
    return fetch(`${this._baseUrl}/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }
  // Получить информацию о текущем пользователе
  getMyInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  //   Регистрация
  signup(password, email) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    }).then((res) => {
      return this._checkResponse(res);
    });
  }

  //   Авторизация

  signin(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        return this._checkResponse(res);
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
      });
  }
}

const userApi = new UserApi();

export default userApi;
