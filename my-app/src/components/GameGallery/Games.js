import React from "react";

import "./Games.css";

import ReviewsScore from "../Reviews/ReviewsScore";

const GamesGalery = (props) => {
  return (
    <div className="gallery">
      <a className="namecard" href={`/${props.name}`}>
        <div
          className="card"
          style={{
            backgroundImage: `url(${props.img})`,
            transition: "transform 500ms ease",
          }}
        >
          <div className="card-content">
            <div className="tittle-developer">
              <h4 className="card-tittle">
                <a href={`/${props.name}`} className="card-tittle-a">
                  {" "}
                  {props.name}{" "}
                </a>
              </h4>
              <p className="developer">
                <a href="#" className="developer-link">
                  {props.developer} - <ReviewsScore game={props.name} />
                </a>
              </p>
            </div>
            <a href={`/${props.name}`} className="btn btn-dark" id="btn">
              Dar mi reseña
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GamesGalery;
