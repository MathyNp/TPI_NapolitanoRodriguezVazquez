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
    <div
      className="gameReviewMain"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        padding: "10vh",
      }}
    >
      {auth.currentUser ? (
        <div
          style={{
            display: "flex",
          }}
        >
          <div
            className="card"
            style={{
              color: "whitesmoke",
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              minWidth: "50vh",
              maxWidth: "50vh",
              minHeight: "75vh",
              maxHeight: "75vh",
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
            }}
          >
            <div className="card-content">
              <div className="tittle-developer">
                <h4
                  className="card-tittle"
                  style={{
                    margin: 0,
                  }}
                ></h4>
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
