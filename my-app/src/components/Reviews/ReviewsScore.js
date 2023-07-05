import React, { useState, useEffect } from "react";

import firebaseApp from "../../fb";

const ReviewsScore = ({ game }) => {
  const [reviews, setReviews] = useState([]);
  const [gamescores, setGameScores] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://firestore.googleapis.com/v1/projects/${firebaseApp.options.projectId}/databases/(default)/documents/reviews`
        );

        if (response.ok) {
          const data = await response.json();

          const reviewsData = data.documents.map((doc) => ({
            id: doc.name.split("/").pop(),
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
  }, []);

  console.log(reviews);
  useEffect(() => {
    const filteredReviews = reviews.filter(
      (review) => review.gameName.stringValue === game
    );

    const averageScore = calculateAverageScore(filteredReviews);
    setGameScores(averageScore);
  }, [reviews, game]);

  const calculateAverageScore = (reviews) => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalScore = reviews.reduce(
      (sum, review) => sum + parseFloat(review.score.stringValue),
      0
    );

    return totalScore / reviews.length;
  };
  return (
    <div>
      <p>Promedio de puntajes: {gamescores.toFixed(2)}</p>
    </div>
  );
};
export default ReviewsScore;
