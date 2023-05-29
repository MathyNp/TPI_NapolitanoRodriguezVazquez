import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { app } from "./fb";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/LoginPage/Login";
import Routess from "./components/Routess";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <NavBar isLoggedIn={usuario}/> */}
      <Routess />
    </div>
  );
}

export default App;
