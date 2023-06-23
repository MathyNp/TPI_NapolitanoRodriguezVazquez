import "./GameFiler.css";

import { useState } from "react";
import Game from "../../GameItem/GameItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

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
      <div
        className="GameFilterMain"
        style={{
          display: "flex",
          minWidth: "10ovh",
          maxWidth: "10ovh",
          marginTop: "2vh",
          marginLeft: "2vh",
        }}
      >
        <button onClick={ResetFilter} className="btn btn-dark">
          <FontAwesomeIcon
            icon={faArrowRotateRight}
            style={{ color: "#ff7f50", marginRight: "5px" }}
          />
          Reiniciar filtros
        </button>
        <div className="Game-filter" style={{ display: "flex" }}>
          {genrestate ? (
            <div className="Game-filter__control">
              <select
                onChange={changeGenreHandler}
                value={filterGenre}
                className="select-style"
              >
                <option value="">Filtrar por Género</option>
                <option value="Action-adventure">Acción-aventura</option>
                <option value="Action RPG">Acción RPG</option>
                <option value="Battle Royale">Battle Royale</option>
                <option value="First-person shooter">
                  First-person shooter
                </option>
                <option value="Fighting">Fighting</option>
                <option value="Football simulation">Football simulation</option>
                <option value="Lifesimulation">Lifesimulation</option>
                <option value="MOBA">MOBA</option>
                <option value="Platformer">Platformer</option>
                <option value="RPG">RPG</option>
                <option value="Survival horror">Survival horror</option>
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="Game-filter">
          {platformstate ? (
            <div className="Game-filter__control">
              <select
                onChange={changePlatformHandler}
                value={filterPlatform}
                className="select-style"
              >
                <option value="">Filtrar por Plataforma</option>
                <option value="PC">PC</option>
                <option value="PlayStation 3">PlayStation 3</option>
                <option value="PlayStation 4">PlayStation 4</option>
                <option value="PlayStation 5">PlayStation 5</option>
                <option value="Xbox 360">Xbox 360</option>
                <option value="Xbox One">Xbox One</option>
                <option value="Nintendo Switch">Nintendo Switch</option>

                <option value="iOS">iOS</option>
                <option value="Android">Android</option>
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="Game-filter">
          {developerstate ? (
            <div className="Game-filter__control">
              <select
                onChange={changeDeveloperHandler}
                value={filterDeveloper}
                className="select-style"
              >
                <option value="">Filtrar por Desarrolladora</option>
                <option value="Activision">Activision</option>
                <option value="Bandai Namco Studios">
                  Bandai Namco Studios
                </option>
                <option value="Blizzard Entertainment">
                  Blizzard Entertainment
                </option>
                <option value="Capcom">Capcom</option>
                <option value="CD Projekt RED">CD Projekt RED</option>
                <option value="ConcernedApe">ConcernedApe</option>
                <option value="EA Sports">EA Sports</option>
                <option value="Epic Games">Epic Games</option>
                <option value="Guerrilla Games">Guerrilla Games</option>
                <option value="Mojang Studios">Mojang Studios</option>
                <option value="Naughty Dog">Naughty Dog</option>
                <option value="Nintendo EPD">Nintendo EPD</option>
                <option value="Rockstar Games">Rockstar Games</option>
                <option value="Square Enix">Square Enix</option>
                <option value="Ubisoft Montreal">Ubisoft Montreal</option>
              </select>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {gamestate ? <Game /> : <></>}
    </>
  );
};

export default GameFilter;
