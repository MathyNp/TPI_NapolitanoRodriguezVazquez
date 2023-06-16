import React from "react";
import { flushSync } from "react-dom";

const GamesGalery = (props) => {
  return (
    <div
      className="Galery"
      style={{
        margin: "auto",
        marginTop: 20,
      }}
    >
      <div
        className="card"
        style={{
          width: 300,
          Height: 700,
          border: "none",
        }}
      >
        {/* DIV IMAGEN - VALORACION */}
        <div className="value-button" style={{ position: "relative" }}>
          {/* IMAGEN */}
          <img
            src={props.img}
            className="card-img-top"
            alt={props.name}
            style={{ width: 300, height: 275 }}
          />
          {/* VALORACION */}
          <button
            id="buttonValue"
            style={{
              position: "absolute",
              top: "90%",
              left: "90%",
              transform: "translate(-200%, -640%)",
              borderRadius: 80,
              width: 80,
              height: 40,
              fontSize: 15,
              backgroundColor: "coral",
              border: "none",
              color: "whitesmoke",
              marginTop: 10,
            }}
          >
            {props.score} pts.
          </button>
        </div>

        {/* NOMBRE */}
        <div
          style={{
            minHeight: 50,
            maxHeight: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "coral",
            color: "whitesmoke",
          }}
        >
          <h4 className="card-title">{props.name}</h4>
        </div>

        {/* DESCRIPCION */}
        <ul className="list-group list-group-flush text-bg-dark">
          <li
            className="list-group-item text-bg-dark"
            style={{
              maxHeight: 150,
              minHeight: 150,
              overflowY: "scroll",
              scrollbarColor: "coral",
            }}
          >
            {props.description}
          </li>

          {/* GENERO*/}
          <li
            className="list-group-item text-bg-dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              maxHeight: 80,
              minHeight: 80,
            }}
          >
            <button
              id="genre"
              style={{
                padding: 7,
                color: "whitesmoke",
                border: "none",
                margin: 9,
                fontSize: 12,
                backgroundColor: "coral",
              }}
            >
              {props.genre}
            </button>

            {/* DESARROLLADORA */}
            <button
              style={{
                backgroundColor: "coral",
                color: "#2d3035",
                border: "none",
                margin: 9,
                color: "whitesmoke",
                fontSize: 10,
                maxHeight: 50,
              }}
            >
              {props.developer}
            </button>

            {/* LISTA DE PLATAFORMAS */}
            <div>
              <button
                className="btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-aria-expanded="false"
                style={{
                  color: "#2d3035",
                  padding: 7,
                  color: "whitesmoke",
                  border: "none",
                  margin: 9,
                }}
              >
                Plataformas
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                {props.platform.map((platform) => (
                  <li
                    key={platform}
                    style={{
                      borderRadius: "30px",
                      margin: "10px",
                      padding: "10px",
                    }}
                  >
                    <a>{platform}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GamesGalery;
