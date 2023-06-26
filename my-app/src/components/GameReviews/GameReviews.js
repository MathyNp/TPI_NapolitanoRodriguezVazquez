import React from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "../../fb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../GameReviews/GameReviews.css";

const auth = getAuth(firebaseApp);
function GamesReviews({
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
