import React from "react";
import GamesGalery from "../GameGallery/Games";
import data from "../../games.json";
const Games = () => {
  return (
    <div
      className="galery"
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginRight: 0,
        boxSizing: "border-box",
      }}
    >
      {data.map((games, index) => {
        return (
          <GamesGalery
            key={index}
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
