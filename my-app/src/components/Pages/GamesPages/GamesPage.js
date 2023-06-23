import React, { useState } from "react";
import data from "../../../games.json";
// import "../GamesPages/GamesPage.css";
import GamesGalery from "../../GameGallery/Games";
import GameFilter from "../GameFilter/GameFilter";
import Game from "../../GameItem/GameItems";
const GamesPage = ({ filterGenre, filterPlatform, filterDeveloper }) => {
  const [filtergenre, setFilterGenre] = useState("");
  const [filterplatform, setFilterPlatform] = useState("");
  const [filterdeveloper, setFilterDeveloper] = useState("");
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
  const GamesGenreMapped = data
    .filter((game) => game.genre === filtergenre)
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
    .filter((game) => game.platform.includes(filterplatform))
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
    .filter((game) => game.developer === filterdeveloper)

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
  // function ResetFilter(game) {
  //   setGame1(true);
  // }
  return (
    <>
      {/* {game1 ? <Game /> : <></>} */}
      <h1>FILTROS</h1>
      {/* <button onClick={ResetFilter}> Reiniciar filtro</button> */}
      <GameFilter
        filterGenre={filterGenre}
        onFilterGenreChange={filterGenreChanged}
        filterPlatform={filterPlatform}
        onFilterPlatformChange={filterPlatformChanged}
        filterDeveloper={filterDeveloper}
        onFilterDeveloperChange={filterDeveloperChanged}
      />
      <div className="books">
        {GamesGenreMapped.length === 0 ? <></> : GamesGenreMapped}
        {GamesPlatformMapped.length === 0 ? <></> : GamesPlatformMapped}
        {GamesDeveloperMapped.length === 0 ? <></> : GamesDeveloperMapped}
      </div>
    </>
  );
};
export default GamesPage;
