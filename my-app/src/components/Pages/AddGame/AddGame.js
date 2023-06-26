import React from "react";
import "./AddGame.css";

const AddGame = () => {
  return (
    <div className="main">
      <div className="box">
        <div className="mainAg">
          <h1 className="tittle-form"> Formulario para agregar juegos</h1>
          <p>
            {" "}
            Completa este formulario para agregar un juego a la lista de juegos
            calificables por nuestra comunidad
          </p>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingresa el nombre del videojuego."
              required
            />
          </div>

          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingresa la url de la foto de portada de su videojuego."
              required
            />
          </div>
          <div class="mb-2">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingresa la desarrolladora del videojuego"
              required
            />
          </div>

          <div class="mb-2">
            <select className="selectGenre" required>
              <option value="">Selecciona el género de tu juego</option>
              <option value="Action-adventure">Acción-aventura</option>
              <option value="Action RPG">Acción RPG</option>
              <option value="Battle Royale">Battle Royale</option>
              <option value="First-person shooter">First-person shooter</option>
              <option value="Fighting">Fighting</option>
              <option value="Football simulation">Football simulation</option>
              <option value="Lifesimulation">Lifesimulation</option>
              <option value="MOBA">MOBA</option>
              <option value="Platformer">Platformer</option>
              <option value="RPG">RPG</option>
              <option value="Survival horror">Survival horror</option>
            </select>
          </div>
          <div class="mb-2">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              placeholder="Agrega una descripcion a tu videojuego."
              required
            ></textarea>
          </div>

          <button type="submit" className="mt-2">
            {" "}
            Agregar videojuego
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGame;
