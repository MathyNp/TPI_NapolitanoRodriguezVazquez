import React, { useState, useEffect } from "react";

import firebaseApp from "../../fb";
import Reviews from "./Reviews";
import "./ReviewList.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ReviewsList = ({ game }) => {
  const [reviews, setReviews] = useState([]);
  const [gamescores, setGameScores] = useState(0);
  const [displayedReviews, setDisplayedReviews] = useState([]);
  const [deletedReviewIds, setDeletedReviewIds] = useState([]);
  const [reviewsUID, setReviewsUID] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
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
          // const reviewsID = data.documents.map((doc) => ({
          //   id: doc.name,
          //
          // }));
          // fijate aca amigo, es algo asi pero que solamente guarde las uid, ns muy bien como hacerlo, probe de todo
          // setReviewsID(reviewsID);
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

  const handleDeleteReview = async () => {
    try {
      await fetch(
        `https://firestore.googleapis.com/v1/projects/${firebaseApp.options.projectId}/databases/(default)/documents/reviews/`,
        {
          method: "DELETE",
        }
      );
      //Aca amigo, tenes que poner la variable al final. reviews/${variable} y que elimine la reseña
      const updatedReviews = displayedReviews.map((review) => {
        if (review.id === reviews.id) {
          //esto seria === variable, lo que hace es que si son ig la review.id q son todas las id, con la variable, la elimina al instante de la pagina y de la base de datos
          return {
            ...review,
            isDisplayed: false,
          };
        }
        return review;
      });

      setDisplayedReviews(updatedReviews);
      setDeletedReviewIds([...deletedReviewIds, reviews.uid]);
    } catch (error) {
      console.error("Error al eliminar la reseña", error);
    }
  };

  return (
    <div className="reviewListMain">
      {displayedReviews.map((review) =>
        review.isDisplayed ? (
          <div key={review.id} className="reviewContainer">
            <div className="itemReview">
              <div className="reviewHeader">
                <h4 className="tittleGames">
                  <FontAwesomeIcon icon={faUser} className="icon" />{" "}
                  {review.User.stringValue}
                </h4>
              </div>
              <h5>{review.description.stringValue}</h5>
              <hr></hr>
              <div className="scoreR">
                <h1>
                  {" "}
                  {review.score.stringValue}{" "}
                  <FontAwesomeIcon icon={faStar} style={{ color: "coral" }} />
                </h1>
              </div>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
};

export default ReviewsList;
