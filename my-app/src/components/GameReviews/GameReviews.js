import React from "react";
import { getAuth } from "firebase/auth";
import firebaseApp from "../../fb";
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
    <div className="mb-0" style={{}}>
      {auth.currentUser ? (
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={img}
              style={{ width: "90vh", height: "100vh" }}
              alt={name}
            />
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
