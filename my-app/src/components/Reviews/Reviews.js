import React, { useState } from "react";

import { getAuth } from "firebase/auth";

import firebaseApp from "../../fb";

const auth = getAuth(firebaseApp);

const addReview = async (review) => {
  const response = await fetch(
    `https://firestore.googleapis.com/v1/projects/${firebaseApp.options.projectId}/databases/(default)/documents/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fields: {
          User: { stringValue: review.emailUser },
          description: { stringValue: review.description },
          score: { stringValue: review.score },
          gameName: { stringValue: review.gameName },
        },
      }),
    }
  );

  if (response.ok) {
    alert("¡La reseña se agregó correctamente!");
  } else {
    // Error al agregar la reseña
    alert("Error al agregar la reseña");
  }
};

const Reviews = ({ game, user }) => {
  const initialReviewsValue = {
    emailUser: `${auth.currentUser.email}`,
    gameName: game,
    description: "",
    score: "",
    id: "",
  };

  const [reviews, setReviews] = useState(initialReviewsValue);

  const onAddReview = () => {
    if (auth.currentUser.email === user) {
      alert("Solo se puede una reseña por usuario");
    } else if (reviews.score > 5 || reviews.score < 1) {
      alert("Error, no se puede ingresar una valoracion mayor a 5 o menor a 1");
    } else {
      addReview(reviews);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview();
    setReviews({ ...initialReviewsValue });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviews({ ...reviews, [name]: value });
  };

  return (
    <div>
      <form className="card card-body" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder={`${auth.currentUser.email}`}
            disabled
            name="emailUser"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="gameName"
            disabled
            placeholder={game}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            rows="3"
            className="form-control"
            name="description"
            placeholder="Comentarios"
            onChange={handleInputChange}
            value={reviews.description}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            name="score"
            placeholder="Valoración 0-5"
            onChange={handleInputChange}
            value={reviews.score}
          />
        </div>
        <button className="btn btn-block btn-primary">Enviar reseña</button>
      </form>
    </div>
  );
};

export default Reviews;
