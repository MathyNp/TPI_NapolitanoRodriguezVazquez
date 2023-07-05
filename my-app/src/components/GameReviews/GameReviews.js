import React from "react";

import { getAuth } from "firebase/auth";
import firebaseApp from "../../fb";

import "../GameReviews/GameReviews.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import Reviews from "../Reviews/Reviews";
import ReviewsList from "../Reviews/ReviewList";
import ReviewsScore from "../Reviews/ReviewsScore";

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
                  <ReviewsScore game={name} />
                </h2>
                <p>{description}</p>

                <button className="btn btn-light" id="btnRev">
                  {" "}
                  Dar mi reseña{" "}
                </button>
              </div>
            </div>
          </div>

          <div className="reviews">
            <div className="cardReview">
              <Reviews game={name} />

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
