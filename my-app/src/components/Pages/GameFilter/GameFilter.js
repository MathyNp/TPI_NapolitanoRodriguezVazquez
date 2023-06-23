import "./GameFiler.css";

import { useState } from "react";
import Game from "../../GameItem/GameItems";

const GameFilter = ({
  onFilterGenreChange,
  filterGenre,
  onFilterPlatformChange,
  filterPlatform,
  filterDeveloper,
  onFilterDeveloperChange,
}) => {
  const [genrestate, setGenreState] = useState(true);
  const [developerstate, setDeveloperState] = useState(true);
  const [platformstate, setPlatformState] = useState(true);
  const [gamestate, setGameState] = useState(true);

  const changeGenreHandler = (event) => {
    onFilterGenreChange(event.target.value);
    setDeveloperState(false);
    setPlatformState(false);
    setGenreState(true);
    setGameState(false);
  };
  const changePlatformHandler = (event) => {
    onFilterPlatformChange(event.target.value);
    setPlatformState(true);
    setDeveloperState(false);
    setGenreState(false);
    setGameState(false);
  };
  const changeDeveloperHandler = (event) => {
    onFilterDeveloperChange(event.target.value);
    setGenreState(false);
    setPlatformState(false);
    setGameState(false);
    setDeveloperState(true);
  };
  function ResetFilter() {
    setGenreState(true);
    setPlatformState(true);
    setDeveloperState(true);
    setGameState(true);
    onFilterDeveloperChange(null);
    onFilterPlatformChange(null);
    onFilterGenreChange(null);
  }
  return (
    <>
      <div className="Game-filter">
        <button onClick={ResetFilter}> Mostrar todos los juegos</button>
        {genrestate ? (
          <div className="Game-filter__control">
            <select onChange={changeGenreHandler} value={filterGenre}>
              <option value="">Seleccione un Genero</option>
              <option value="Action RPG">Accion RPG</option>
              <option value="MOBA">MOBA</option>
              <option value="Action-adventure">Accion-aventura</option>
              <option value="Battle Royale">Battle Royale</option>
              <option value="Sandbox">Sandbox</option>
            </select>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="Game-filter">
        {platformstate ? (
          <div className="Game-filter__control">
            <select onChange={changePlatformHandler} value={filterPlatform}>
              <option value="">Seleccione una plataforma</option>
              <option value="PC">PC</option>
              <option value="PlayStation 4">PlayStation 4</option>
              <option value="PlayStation 5">PlayStation 5</option>
              <option value="Xbox One">Xbox One</option>
              <option value="Nintendo Switch">Nintendo Switch</option>
              <option value="Xbox 360">Xbox 360</option>
            </select>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="Game-filter">
        {developerstate ? (
          <div className="Game-filter__control">
            <select onChange={changeDeveloperHandler} value={filterDeveloper}>
              <option value="">Seleccione una desarroladora</option>
              <option value="CD Projekt RED">CD Projekt RED</option>
              <option value="Rockstar North">Rockstar North</option>
              <option value="Nintendo EPD">Nintendo EPD</option>
              <option value="Epic Games">Epic Games</option>
              <option value="Mojang Studios">Mojang Studios</option>
              <option value="Blizzard Entertainment">
                Blizzard Entertainment
              </option>
              <option value="Rockstar Games">Rockstar Games</option>
              <option value="Bandai Namco Studios">Bandai Namco Studios</option>
              <option value="Activision">Activision</option>
              <option value="Ubisoft Montreal">Ubisoft Montreal</option>
              <option value="EA Sports">EA Sports</option>
              <option value="Capcom">Capcom</option>
              <option value="ConcernedApe">ConcernedApe</option>
              <option value="Guerrilla Games">Guerrilla Games</option>
              <option value="Naughty Dog">Naughty Dog</option>
              <option value="Square Enix">Square Enix</option>
            </select>
          </div>
        ) : (
          <></>
        )}
      </div>
      {gamestate ? <Game /> : <></>}
    </>
  );
};

export default GameFilter;
{
  /* <option value=""></option> */
}
