import React, { useState, useEffect, useContext } from "react";

import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "../../Services/ThemeContext";
import games from "../../../games.json";
import ReviewsScore from "../../Reviews/ReviewsScore";

const Home = () => {
  const { theme } = useContext(ThemeContext);
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
    <div className="boxT5">
      <div className="boxtext">
        <h1>SELECCIÓN DE JUEGOS RECOMENDADOS POR LA COMUNIDAD</h1>

        <p>
          Nuestra comunidad de jugadores ha compartido sus recomendaciones para
          ayudarte a encontrar nuevos títulos emocionantes. Estos juegos han
          sido elogiados por su calidad, diversión y capacidad para cautivar a
          los jugadores de todas las edades. Sumérgete en mundos virtuales
          llenos de aventuras, desafíos y sorpresas. Explora diferentes géneros
          y descubre experiencias únicas que te mantendrán entretenido durante
          horas. Desde emocionantes juegos de acción hasta cautivadores RPG, hay
          algo para cada tipo de jugador. Confía en las opiniones de nuestra
          comunidad y descubre nuevos juegos para disfrutar. ¡Prepárate para una
          experiencia de juego inolvidable!
        </p>
      </div>
      <div className="map">
        {top3Games.map((game) => (
          <div
            key={game.id}
            style={{
              margin: "auto",
            }}
          >
            <a href={`/${game.name}`} className="tittle">
              <div
                className="card"
                style={{
                  backgroundImage: `url(${game.img})`,

                  transition: "transform 500ms ease",
                }}
              >
                <div className="card-content">
                  <div className="tittle-developer">
                    <h2 className="card-tittle">{game.name}</h2>
                    <h4 className="developer">
                      {game.developer} - <ReviewsScore game={game.name} />
                    </h4>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
