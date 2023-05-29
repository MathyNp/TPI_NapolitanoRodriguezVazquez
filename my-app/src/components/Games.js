import React from "react";
import "./GameItem/GameItem.css";
import { flushSync } from "react-dom";

const GamesGalery = (props) => {
  return (
    // <div className="card-group">
    //   <div className="card">
    //     <img src={props.img} className="card-img-top" alt={props.name}></img>

    //     <div className="card-body">
    //       {/* Boton motor grafico */}

    //       <h5>{props.name}</h5>

    //       {/* Boton genero */}

    //       {props.genre.map((genre) => (
    //         <button
    //           key={genre}
    //           type="disable"
    //           style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
    //           className="btn btn-dark btn-sm"
    //         >
    //           {genre}
    //         </button>
    //       ))}

    //       {/* Botones plataformas */}

    //       {props.platform.map((platform) => (
    //         <button
    //           key={platform}
    //           type="disable"
    //           style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
    //           className="btn btn-success btn-sm"
    //         >
    //           {platform}{" "}
    //         </button>
    //       ))}

    //       {/* Boton motor grafico */}

    //       <button
    //         type="disable"
    //         style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
    //         className="btn btn-danger btn-sm"
    //       >
    //         {props.graphicsEngine}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div
      className="Galery"
      style={{
        margin: 0,
        padding: 10,
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div class="card" style={{ marginLeft: 0 }}>
        <img src={props.img} class="card-img-top" alt={props.name}></img>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="buttons-genre">
            {props.genre.map((genre) => (
              <button
                key={genre}
                type="disable"
                style={{
                  borderRadius: "30px",
                  margin: "10px",
                  padding: "10px",
                }}
                className="btn btn-dark btn-sm"
              >
                {genre}
              </button>
            ))}
          </li>
          <li class="list-group-item">{props.platform}</li>
          <li class="list-group-item">{props.developer}</li>
        </ul>
      </div>
    </div>
  );
};

export default GamesGalery;
