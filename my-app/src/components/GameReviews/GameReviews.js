import React from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "../../fb";

import "../GameReviews/GameReviews.css";
import Reviews from "../Reviews/Reviews";
import ReviewsList from "../Reviews/ReviewList";

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
        <div className="cardReview">
          <div
            className="card"
            style={{
              backgroundImage: `url(${img})`,

              transition: "transform 50ms ease",
            }}
          >
            <div className="card-content">
              <div className="tittle-developer">
                <h4 className="card-tittle"></h4>
              </div>
            </div>
          </div>
          <Reviews game={name} />
          <ReviewsList game={name} />
        </div>
      ) : (
        <h1>
          Registrese <a href="/">aquí</a> o inicie sesion para poder dar su
          reseña
        </h1>
      )}
    </div>
  );
}

export default GamesReviews;
