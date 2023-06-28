import React, { useState } from "react";
import "./AddGame.css";

const AddGame = () => {
  const [gameData, setGameData] = useState({
    name: "",
    imgURL: "",
    developer: "",
    genre: "",
    description: "",
    platforms: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGameData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePlatformChange = (event) => {
    const platform = event.target.value;
    if (event.target.checked) {
      setGameData((prevData) => ({
        ...prevData,
        platforms: [...prevData.platforms, platform],
      }));
    } else {
      setGameData((prevData) => ({
        ...prevData,
        platforms: prevData.platforms.filter((p) => p !== platform),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const juegoConPlataformas = {
      ...gameData,
      platforms: [...gameData.platforms],
    };

    let gamesList = localStorage.getItem("gamesList");
    if (gamesList) {
      gamesList = JSON.parse(gamesList);
    } else {
      gamesList = [];
    }

    gamesList.push(juegoConPlataformas);

    localStorage.setItem("gamesList", JSON.stringify(gamesList));

    setGameData({
      name: "",
      imgURL: "",
      developer: "",
      genre: "",
      description: "",
      platforms: [],
    });

    const { name, imgURL, developer, genre, description, platforms } =
      juegoConPlataformas;

    const alertMessage = `Juego agregado:\n\nNombre: ${name}\nURL de la portada: ${imgURL}\nDesarrolladora: ${developer}\nGénero: ${genre}\nDescripción: ${description}\nPlataformas: ${platforms.join(
      ", "
    )}`;

    console.log(alertMessage);
    alert(alertMessage);
  };

  return (
    <div className="main">
      <div className="box">
        <div className="mainAg">
          <h1 className="tittle-form">Formulario para agregar juegos</h1>
          <p>
            Completa este formulario para agregar un juego a la lista de juegos
            calificables por nuestra comunidad
          </p>
          <form onSubmit={handleSubmit} className="formAddgame">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                name="name"
                value={gameData.name}
                onChange={handleInputChange}
                placeholder="Ingresa el nombre del videojuego."
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                name="coverUrl"
                value={gameData.coverUrl}
                onChange={handleInputChange}
                placeholder="Ingresa la URL de la foto de portada de su videojuego."
                required
              />
            </div>

            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                name="developer"
                value={gameData.developer}
                onChange={handleInputChange}
                placeholder="Ingresa la desarrolladora del videojuego"
                required
              />
            </div>

            <div className="mb-2">
              <select
                className="selectGenre"
                name="genre"
                value={gameData.genre}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecciona el género de tu juego</option>
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

            <div className="mb-2">
              <textarea
                className="form-control"
                name="description"
                value={gameData.description}
                onChange={handleInputChange}
                rows="5"
                placeholder="Agrega una descripción a tu videojuego."
                required
              ></textarea>
            </div>

            <div className="mb-2">
              <br />
              <label>Selecciona las plataformas disponibles:</label>
              <br />
              <br />
              <div
                style={{
                  justifyContent: "flex-start",
                  display: "grid",
                  textAlign: "initial",
                }}
              >
                <label>
                  <input
                    type="checkbox"
                    value="PC"
                    checked={gameData.platforms.includes("PC")}
                    onChange={handlePlatformChange}
                  />{" "}
                  PC
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="PlayStation 3"
                    checked={gameData.platforms.includes("PlayStation 3")}
                    onChange={handlePlatformChange}
                  />{" "}
                  PlayStation 3
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="PlayStation 4"
                    checked={gameData.platforms.includes("PlayStation 4")}
                    onChange={handlePlatformChange}
                  />{" "}
                  PlayStation 4
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="PlayStation 5"
                    checked={gameData.platforms.includes("PlayStation 5")}
                    onChange={handlePlatformChange}
                  />{" "}
                  PlayStation 5
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Xbox 360"
                    checked={gameData.platforms.includes("Xbox 360")}
                    onChange={handlePlatformChange}
                  />{" "}
                  Xbox 360
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Xbox ONE"
                    checked={gameData.platforms.includes("Xbox ONE")}
                    onChange={handlePlatformChange}
                  />{" "}
                  Xbox ONE
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="iOS"
                    checked={gameData.platforms.includes("iOS")}
                    onChange={handlePlatformChange}
                  />{" "}
                  iOS
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Nintendo Switch"
                    checked={gameData.platforms.includes("Nintendo Switch")}
                    onChange={handlePlatformChange}
                  />{" "}
                  Nintendo Switch
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Android"
                    checked={gameData.platforms.includes("Android")}
                    onChange={handlePlatformChange}
                  />{" "}
                  Android
                </label>
                <br />
                <br />
              </div>
            </div>

            <button type="submit" className="mt-2">
              Agregar videojuego
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGame;
