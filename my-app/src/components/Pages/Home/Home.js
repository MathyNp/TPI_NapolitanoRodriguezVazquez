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
        <h1>TOP 3 JUEGOS DE LA COMUNIDAD</h1>
        <p>
          Bienvenido, esta es una lista de los 3 videojuegos mejor valorados por
          nuestra comunidad.
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
                      <FontAwesomeIcon icon={faStar} className="iconstar" />
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
