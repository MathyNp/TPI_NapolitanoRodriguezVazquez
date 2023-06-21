import React, { useState, useEffect } from "react";
import games from "../../../games.json";

const Home = () => {
  const [gameList, setGameList] = useState([]);
  const [top3Games, setTop3Games] = useState([]);

  useEffect(() => {
    setGameList(games);
  }, []);

  useEffect(() => {
    const topGames = getTop3Games();
    setTop3Games(topGames);
  }, [gameList]);

  function getTop3Games() {
    const sortedGames = gameList.sort((a, b) => b.score - a.score);
    return sortedGames.slice(0, 3);
  }

  return (
    <div>
      <div className="text-bg-dark p-3">
        ¡Bienvenidos a nuestra página web, el destino ideal para todos los
        amantes de los videojuegos! Somos un equipo apasionado de jugadores que
        ha creado un tracker de videojuegos único en su tipo, basado
        exclusivamente en las valoraciones de nuestra increíble comunidad de
        usuarios. Y lo mejor de todo es que ¡es completamente gratuito!
      </div>

      <h1>Top 3 juegos:</h1>
      {top3Games.map((game) => (
        <div key={game.id}>
          <h2>Detalles del juego: {game.name}</h2>
          <p>Género: {game.genre}</p>
          <p>Plataforma: {game.platform}</p>
          <p>Desarrollador: {game.developer}</p>
          <p>Descripción: {game.description}</p>
          <p>Puntuación: {game.score}</p>
          <img src={game.img} alt={game.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
