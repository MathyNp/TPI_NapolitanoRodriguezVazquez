import React from "react";
import { flushSync } from "react-dom";
import "./Games.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const GamesGalery = (props) => {
  return (
    <div
      className="gallery"
      style={{
        margin: "auto",
        marginTop: 20,
        marginBottom: 30,
      }}
    >
      <a
        href={`/${props.name}`}
        style={{ textDecoration: "none", color: "whitesmoke" }}
      >
        <div
          className="card"
          style={{
            color: "whitesmoke",
            backgroundImage: `url(${props.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            minWidth: "37ch",
            maxWidth: "37ch",
            minHeight: "55ch",
            maxHeight: "55ch",
            padding: "30px",
            border: "none",
            borderRadius: "1rem",
            overflow: "hidden",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            transition: "transform 500ms ease",
            boxShadow: "3px 1px 60px rgba(0, 0, 0, 30) ",
            outline: "none",
            borderBottom: "5px solid coral",
          }}
        >
          <div className="card-content">
            <div className="tittle-developer">
              <h4
                className="card-tittle"
                style={{
                  margin: 0,
                }}
              >
                <a
                  href={`/${props.name}`}
                  style={{ textDecoration: "none", color: "whitesmoke" }}
                >
                  {" "}
                  {props.name}{" "}
                </a>
              </h4>
              <p className="developer" style={{ marginTop: 0 }}>
                <a href="#" className="developer-link">
                  {props.developer} - {props.score}
                  <FontAwesomeIcon
                    icon={faStar}
                    style={{
                      fontSize: "12px",
                      marginLeft: "4px",
                      marginBottom: "2px",
                      color: "coral",
                    }}
                  />{" "}
                </a>
              </p>
            </div>
            <a
              href={`/${props.name}`}
              className="btn btn-dark"
              id="btn"
              style={{
                maxWidth: "60%",
                minWidth: "60%",
                borderRadius: 10,
                backgroundColor: "coral",
              }}
            >
              Dar mi reseña
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GamesGalery;
