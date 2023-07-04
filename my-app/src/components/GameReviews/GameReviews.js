import React from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "../../fb";

import "../GameReviews/GameReviews.css";
import Reviews from "../Reviews/Reviews";
import ReviewsList from "../Reviews/ReviewList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../GameReviews/GameReviews.css";

const auth = getAuth(firebaseApp);
function GamesReviews({
  props,
  name,
  genre,
  img,

  platform,
  developer,
  id,
  description,
  score,
}) {
  return (
    <div className="gameReviewMain">
      {auth.currentUser ? (
        <div>
          <div className="box">
            <div className="content">
              <img src={img} alt="Game Image" className="image" />
              <div className="text">
                <h1 className="tittleGames">{name}</h1>
                <h3>Genero: {genre}</h3>
                <h3>Desarrolladora: {developer}</h3>
                <h2 className="score">
                  {score}{" "}
                  <FontAwesomeIcon icon={faStar} style={{ color: "coral" }} />{" "}
                </h2>
                <p>{description}</p>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="cardReview">
              <Reviews />
            </div>
          </div>
          <div className="box">
            <div className="cardReview">
              <ReviewsList game={name} />
            </div>
          </div>
        </div>
      ) : (
        <h1 className="link">
          Registrese <a href="/">aquí</a> o inicie sesion para poder dar su
          reseña
        </h1>
      )}
    </div>
  );
}

export default GamesReviews;
