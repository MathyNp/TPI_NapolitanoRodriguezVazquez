import React, { useState, useEffect } from "react";

import firebaseApp from "../../fb";

const ReviewsList = ({ game }) => {
  const [reviews, setReviews] = useState([]);
  const filteredReviews = reviews.filter(
    (review) => review.gameName.stringValue === game
  );

  useEffect(() => {
    const fetchReviews = async (review) => {
      try {
        const response = await fetch(
          `https://firestore.googleapis.com/v1/projects/${firebaseApp.options.projectId}/databases/(default)/documents/reviews`
        );

        if (response.ok) {
          const data = await response.json();
          const reviewsData = data.documents.map((doc) => ({
            id: doc.name,
            ...doc.fields,
          }));
          setReviews(reviewsData);
        } else {
          console.error("Error al obtener las reseñas");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud de las reseñas", error);
      }
    };

    fetchReviews();
  }, [game]);

  return (
    <div>
      <h2>Reseñas para el juego: {game}</h2>
      {filteredReviews.map((review) => (
        <div key={review.id}>
          <p>User: {review.User.stringValue}</p>
          <p>Description: {review.description.stringValue}</p>
          <p>Score: {review.score.stringValue}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
