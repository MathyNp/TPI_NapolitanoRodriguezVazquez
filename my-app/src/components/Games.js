import React from "react";
import "./GameItem/GameItem.css";
import { flushSync } from "react-dom";
import { Dropdown } from "react-bootstrap";

const GamesGalery = (props) => {
  return (
    <div
      className="Galery"
      style={{
        marginLeft: 30,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 20,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        class="card"
        style={{
          width: 530,
          Height: 900,
        }}
      >
        <div class="value-button" style={{ position: "relative" }}>
          {/* IMAGEN */}
          <img
            src={props.img}
            class="card-img-top"
            alt={props.name}
            style={{ width: 530, height: 570 }}
          />
          {/* VALORACION */}
          <button
            className="btn btn-danger"
            style={{
              position: "absolute",
              top: "90%",
              left: "90%",
              transform: "translate(-75%, -75%)",
              borderRadius: 100,
              width: 70,
              height: 70,
              fontSize: 30,
            }}
          >
            4,3
          </button>
        </div>
        {/* NOMBRE */}
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
        </div>
        {/* DESCRIPCION */}
        <ul class="list-group list-group-flush">
          <li class="list-group-item" style={{ overflow: "auto" }}>
            {props.description}
          </li>
          {/* GENERO */}
          <li class="list-group-item">
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
            {/* DESARROLLADORA */}
            <button
              className="btn btn-secondary btn-sm"
              style={{ borderRadius: "30px", margin: "10px", padding: "10px" }}
            >
              {props.developer}
            </button>
          </li>
          <li class="list-group-item"></li>
        </ul>
      </div>
    </div>
  );
};

export default GamesGalery;
