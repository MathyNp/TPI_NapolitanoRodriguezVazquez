import React from "react";
import GamesGalery from "../GameGallery/Games";
import data from "../../games.json";
import "./GameItem.css";
const Games = () => {
  return (
    <div className="galery">
      {data.map((games, key) => {
        return (
          <GamesGalery
            key={key}
            name={games.name}
            img={games.img}
            genre={games.genre}
            platform={games.platform}
            developer={games.developer}
            id={games.id}
            description={games.description}
            score={games.score}
          />
        );
      })}
    </div>
  );
};

export default Games;
