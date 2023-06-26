import React, { useState } from "react";
import "./Navbar.css";

import firebaseApp from "../../fb";
import { getAuth, signOut } from "firebase/auth";

import Fuse from "fuse.js";
import games from "../../games.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import Loader from "../Loader/Loader";

const auth = getAuth(firebaseApp);

function NavBar(props) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const fuse = new Fuse(games, {
    keys: ["name", "genre", "developer", "platform"],
    threshold: 0.3,
  });
  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
    setShowResults(value.length > 0);
  }

  const results = fuse.search(query);
  const GamesResults = results.map((results) => results.item);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top ">
      {props.loading1 === false ? (
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <FontAwesomeIcon
              className="icon"
              icon={faGamepad}
              shake
              size="xl"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse mr-auto"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Home">
                  {" "}
                  Inicio{" "}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/Games">
                  Juegos{" "}
                </a>
              </li>

              {props.state ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    {props.username}
                  </a>
                  <ul
                    className="dropdown-menu"
                    id="desp1"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item d"
                        href="/EditProfile"
                        id="desp2"
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          className="icon"
                        />
                        Editar Perfil{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        className="dropdown-item d"
                        id="desp3"
                        onClick={() => signOut(auth)}
                      >
                        {" "}
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="icon"
                        />
                        Cerrar Sesion{" "}
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Iniciar Sesion / Registrarse
                  </a>
                </li>
              )}

              {props.rol === "Company" && (
                <li className="nav-item">
                  <a className="nav-link" href="/addgame">
                    <FontAwesomeIcon
                      icon={faSquarePlus}
                      size="lg"
                      id="addGame"
                    />{" "}
                    Agregar juego
                  </a>
                </li>
              )}
            </ul>

            {/* Barra de busqueda  */}

            <div className="search-container" id="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />

              <input
                type="text"
                name="search"
                value={query}
                onChange={handleOnSearch}
              />
            </div>

            {/* Resultados de busqueda */}
            {showResults && (
              <div className="search-results">
                {GamesResults.map((game) => (
                  <div key={game.id} className="results">
                    <img src={game.img} className="imgRes"></img>
                    <a href={`/${game.name}`} className="resNav">
                      {game.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="darklightButton">
            <FontAwesomeIcon icon={faSun} className="iconDL" size="xl" />
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
            <FontAwesomeIcon icon={faMoon} size="xl" className="iconDL" />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </nav>
  );
}

export default NavBar;
