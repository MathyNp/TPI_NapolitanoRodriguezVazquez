import React from "react";
import Game from "../GameItem/GameItems";

const Home = () => {
  return (
    <div>
      <h1>
        Hola bienvenidos a GG, tracker de videojuegos gratuito para todas las
        personas{" "}
      </h1>
      <div style={{ background: "black", color: "white" }}>
        <h2> Estos son los juegos mejor valorados del ultimo mes</h2>
      </div>
      <Game />
    </div>
  );
};

export default Home;
