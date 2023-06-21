import React, { useState } from "react";
import "./Navbar.css";

import firebaseApp from "../../fb";
import { getAuth, signOut } from "firebase/auth";
import logo from "../Multimedia/LogoGG.png";

import Fuse from "fuse.js";
import games from "../../games.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const auth = getAuth(firebaseApp);

function NavBar(props) {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const fuse = new Fuse(games, {
    keys: ["name", "genre", "developer", "id"],
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
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <FontAwesomeIcon
            icon={faGamepad}
            shake
            size="xl"
            style={{ color: "#ff7f50" }}
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
                  {props.username}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ backgroundColor: "#212529" }}
                >
                  <li>
                    <a
                      className="dropdown-item d"
                      href="/EditProfile"
                      style={{ color: "whitesmoke" }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        style={{ marginRight: "3px", color: "coral" }}
                      />
                      Editar Perfil{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item d"
                      onClick={() => signOut(auth)}
                      style={{ color: "whitesmoke" }}
                    >
                      {" "}
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        style={{ marginRight: "3px", color: "coral" }}
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
          </ul>

          {/* Barra de busqueda  */}

          <div className="search-container" style={{ marginLeft: "20px" }}>
            <input
              type="text"
              placeholder="Buscar"
              name="search"
              value={query}
              onChange={handleOnSearch}
              style={{
                borderRadius: "30px",
                padding: "5px",
              }}
            />
          </div>

          {/* Resultados de busqueda */}
          {showResults && (
            <div className="search-results">
              {GamesResults.map((game) => (
                <div key={game.id} style={{}}>
                  <img
                    src={game.img}
                    style={{
                      width: "70px",
                      height: "70px",
                      margin: "3px",
                      borderRadius: "100px",
                    }}
                  ></img>
                  <a
                    href={`/${game.name}`}
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      marginLeft: "10px",
                      fontSize: "25px",
                    }}
                  >
                    {game.name}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
