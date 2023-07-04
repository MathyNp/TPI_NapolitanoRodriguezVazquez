import React, { useState, useEffect } from "react";

import firebaseApp from "../../fb";

const ReviewsList = ({ game }) => {
  const [reviews, setReviews] = useState([]);
  const [gamescores, setGameScores] = useState(0);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [deletedReviewIds, setDeletedReviewIds] = useState([]);

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

    const updatedReviews = filteredReviews.map((review) => ({
      ...review,
      isDisplayed: !deletedReviewIds.includes(review.id),
    }));
    setDisplayedReviews(updatedReviews);
  }, [reviews, game, deletedReviewIds]);

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

  const handleDeleteReview = async (reviewID) => {
    try {
      await fetch(
        `https://firestore.googleapis.com/v1/projects/${firebaseApp.options.projectId}/databases/(default)/documents/reviews/${reviewID}`,
        {
          method: "DELETE",
        }
      );
      const updatedReviews = displayedReviews.map((review) => {
        if (review.uid === reviewID) {
          return {
            ...review,
            isDisplayed: false,
          };
        }
        return review;
      });

      setDisplayedReviews(updatedReviews);
      setDeletedReviewIds([...deletedReviewIds, reviewID]);
    } catch (error) {
      console.error("Error al eliminar la reseña", error);
    }
  };

  return (
    <div>
      <h2>Reseñas para el juego: {game}</h2>
      {displayedReviews.map((review) =>
        review.isDisplayed ? (
          <div key={review.id}>
            <p>User: {review.User.stringValue}</p>
            <p>Description: {review.description.stringValue}</p>
            <p>Score: {review.score.stringValue}</p>
            <button onClick={() => handleDeleteReview(review.id)}>
              Eliminar
            </button>
          </div>
        ) : null
      )}
      <p>Promedio de puntajes: {gamescores.toFixed(2)}</p>
    </div>
  );
};

export default ReviewsList;
