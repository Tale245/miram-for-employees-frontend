import React from "react";
import Signin from "./Signin/Signin";
import WelcomePage from "./WelcomePage/WelcomePage";
import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";

function App() {
  return (
    <div className="page">
      <Routes>
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/welcome-page" element={<WelcomePage />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
