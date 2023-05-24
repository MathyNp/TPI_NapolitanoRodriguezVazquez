import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { app } from "./fb";
import React, { useEffect } from "react";

import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Routess from "./components/Routess";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routess />
    </div>
  );
}

export default App;
