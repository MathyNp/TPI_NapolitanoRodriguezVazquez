import React, { useState } from "react";

import "../GamesPages/GamesPage.css";

import data from "../../../games.json";
import GamesGalery from "../../GameGallery/Games";
import GameFilter from "../GameFilter/GameFilter";

const GamesPage = () => {
  const [filterGenre, setFilterGenre] = useState("");
  const [filterPlatform, setFilterPlatform] = useState("");
  const [filterDeveloper, setFilterDeveloper] = useState("");
  const [game1, setGame1] = useState(true);

  const filterGenreChanged = (genre) => {
    setFilterGenre(genre);
    setGame1(false);
  };
  const filterPlatformChanged = (platform) => {
    setFilterPlatform(platform);
    setGame1(false);
  };
  const filterDeveloperChanged = (developer) => {
    setFilterDeveloper(developer);
    setGame1(false);
  };
  const onReset = () => {
    setFilterGenre("");
    setFilterPlatform("");
    setFilterDeveloper("");
  };
  const GamesGenreMapped = data
    .filter((game) => game.genre === filterGenre)
    .map((games, index) => (
      <GamesGalery
        key={index}
        id={games.id}
        img={games.img}
        name={games.name}
        developer={games.developer}
        genre={games.genre}
        score={games.score}
      />
    ));
  const GamesPlatformMapped = data
    .filter((game) => game.platform.includes(filterPlatform))
    .slice(0, 10)
    .map((game, index) => (
      <GamesGalery
        key={index}
        id={game.id}
        img={game.img}
        name={game.name}
        developer={game.developer}
        genre={game.genre}
        score={game.score}
        platform={game.platform}
      />
    ));
  const GamesDeveloperMapped = data
    .filter((game) => game.developer === filterDeveloper)

    .map((games, key) => (
      <GamesGalery
        key={key}
        id={games.id}
        img={games.img}
        name={games.name}
        developer={games.developer}
        genre={games.genre}
        score={games.score}
      />
    ));
  // function ResetFilter(game) {
  //   setGame1(true);
  // }
  return (
    <>
      {/* {game1 ? <Game /> : <></>} */}

      {/* <button onClick={ResetFilter}> Reiniciar filtro</button> */}
      <GameFilter
        filterGenre={filterGenre}
        onReset={onReset}
        onFilterGenreChange={filterGenreChanged}
        filterPlatform={filterPlatform}
        onFilterPlatformChange={filterPlatformChanged}
        filterDeveloper={filterDeveloper}
        onFilterDeveloperChange={filterDeveloperChanged}
      />

      <div className="games-filter-buttons">
        {GamesGenreMapped.length > 0 && (
          <div className="gamesFilterMain">
            <div className="gamesFilterContainer">{GamesGenreMapped}</div>
          </div>
        )}

        {GamesPlatformMapped.length > 0 && (
          <div className="gamesFilterMain">
            <div className="gamesFilterContainer">{GamesPlatformMapped}</div>
          </div>
        )}

        {GamesDeveloperMapped.length > 0 && (
          <div className="gamesFilterMain">
            <div className="gamesFilterContainer">{GamesDeveloperMapped}</div>
          </div>
        )}
      </div>
    </>
  );
};
export default GamesPage;
