import React from "react";
import { flushSync } from "react-dom";

const GamesGalery = (props) => {
  return (
    <div
      className="Galery"
      style={{
        marginLeft: 30,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 20,
      }}
    >
      <div
        className="card"
        style={{
          width: 530,
          Height: 900,
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
            style={{ width: 530, height: 570, marginBottom: 0 }}
          />
          {/* VALORACION */}
          <button
            id="buttonValue"
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
            5
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
          }}
        >
          <h4 className="card-title">{props.name}</h4>
        </div>

        {/* DESCRIPCION */}
        <ul className="list-group list-group-flush text-bg-dark">
          <li
            className="list-group-item text-bg-dark"
            style={{ maxHeight: 130, minHeight: 130 }}
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
              style={{
                backgroundColor: "coral",
                color: "#2d3035",
                borderRadius: 40,
                padding: 7,
                fontStyle: "italic",
                color: "whitesmoke",
                border: "none",
                margin: 9,
              }}
            >
              {props.genre}
            </button>

            {/* DESARROLLADORA */}
            <button
              style={{
                backgroundColor: "coral",
                color: "#2d3035",
                padding: 7,
                fontStyle: "italic",
                border: "none",
                margin: 9,
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
