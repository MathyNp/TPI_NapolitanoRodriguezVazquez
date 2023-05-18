import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/GameItem/GameItems";
import { app } from "./fb";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Pages/LoginPage/Login";
import Routess from "./components/Routess";

function App() {
  const [usuario, setUsuario] = React.useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((userFirebase) => {
      console.log("Ya tienes iniciada sesion: ", userFirebase);
      setUsuario(userFirebase);
    });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routess />
    </div>
  );
}

export default App;
