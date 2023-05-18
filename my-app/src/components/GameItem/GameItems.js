import "./GameItems.js";
import ImageBattlefield from "../Pages/Multimedia/Battlefield-V.jpg";

import LogoEA from "../Pages/Multimedia/LOGOEA.png";

const Game = () => {
  const gameTitle = "Battlefield V no batellfiend";
  const platform = ["XBOX", "PS4", "PC"];
  const gameDeveloper = "EA Digital Illusion";
  const gameSize = "64 GB";
  const gameGender = "Shooter FPS";
  const gameDescription =
    "Battlefield V es la nueva secuela de la saga de acción en primera persona de DICE y EA. En esta ocasión, el estudio y la editora nos trasladan a la Segunda Guerra Mundial, ahondando en ideas como la hermandad entre soldados, añadiendo nuevos modos de juego, mejorando los gráficos y apostando claramente por mayor diversión, complejidad y sentido del espectáculo en Xbox One, PS4 y PC.";
  return (
    <div class="card-group">
      <div class="card">
        <img
          src={ImageBattlefield}
          class="card-img-top"
          alt=""
          height={385}
        ></img>
        <div class="card-body">
          <a href="/EASports">
            <img src={LogoEA} height={30} style={{ margin: "0px" }}></img>
          </a>
          <h5>{gameTitle}</h5>
          <p class="card-text">{gameDescription}</p>
          <button
            type="disable"
            style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
            class="btn btn-dark btn-sm"
          >
            {gameGender}
          </button>
          <button
            type="disable"
            style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
            class="btn btn-dark btn-sm"
          >
            {platform[0]}
          </button>
          <button
            type="disable"
            style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
            class="btn btn-dark btn-sm"
          >
            {platform[1]}
          </button>
          <button
            type="disable"
            style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
            class="btn btn-dark btn-sm"
          >
            {platform[2]}
          </button>
          <button
            type="disable"
            style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
            class="btn btn-warning btn-sm"
          >
            {gameSize}
          </button>
        </div>
      </div>
      <div class="card">
        <img
          src={ImageBattlefield}
          class="card-img-top"
          alt="..."
          height={385}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This card has supporting text below as a natural lead-in to
            additional content.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src={ImageBattlefield}
          class="card-img-top"
          alt="..."
          height={385}
        ></img>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Game;
