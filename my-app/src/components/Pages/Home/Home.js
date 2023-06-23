import React, { useState, useEffect } from "react";
import games from "../../../games.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      {top3Games.map((game) => (
        <div
          key={game.id}
          style={{
            margin: "auto",
          }}
        >
          <a
            href={`/${game.name}`}
            style={{ textDecoration: "none", color: "whitesmoke" }}
          >
            <div
              className="card"
              style={{
                color: "whitesmoke",
                backgroundImage: `url(${game.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center center",
                minWidth: "60vh",
                maxWidth: "60vh",
                minHeight: "75vh",
                maxHeight: "75vh",
                padding: "30px",
                border: "none",
                borderRadius: "1rem",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                transition: "transform 500ms ease",
                boxShadow: "3px 1px 60px rgba(0, 0, 0, 30)",
                outline: "none",
                borderBottom: "5px solid coral",
              }}
            >
              <div className="card-content">
                <div className="tittle-developer">
                  <h2
                    className="card-tittle"
                    style={{
                      margin: 0,
                    }}
                  >
                    {game.name}
                  </h2>
                  <h4 className="developer" style={{ marginTop: 0 }}>
                    {game.developer} - {game.score}
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        fontSize: "16px",
                        marginLeft: "6px",
                        marginBottom: "2px",
                        color: "coral",
                      }}
                    />
                  </h4>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Home;
