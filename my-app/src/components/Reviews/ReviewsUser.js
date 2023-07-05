import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import "./ReviewList.css";
import firebaseApp from "../../fb";
import { getAuth } from "firebase/auth";
const auth = getAuth(firebaseApp);

const ReviewsUser = ({ game }) => {
  const [reviews, setReviews] = useState([]);
  const [reviewsuser, setReviewsUser] = useState([]);
  const [onreviews, setOnReviews] = useState(false);

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
    const ReviewUser = reviews.filter(
      (review) => review.User.stringValue === auth.currentUser.email
    );
    setReviewsUser(ReviewUser);
  }, [reviews]);

  return (
    <div className="reviewListMain">
      {!onreviews && (
        <button style={{ width: "auto" }} onClick={() => setOnReviews(true)}>
          Ver mis Reseñas
        </button>
      )}
      {onreviews && (
        <button style={{ width: "auto" }} onClick={() => setOnReviews(false)}>
          Ocultar Reseñas
        </button>
      )}
      {onreviews ? (
        <div className="reviewListMain">
          {reviewsuser.map((review) => (
            <div key={review.id} className="reviewContainer">
              <div className="itemReview">
                <div className="reviewHeader">
                  <h4 className="tittleGames">
                    <FontAwesomeIcon icon={faUser} className="icon" />{" "}
                    {review.User.stringValue}
                  </h4>
                  <h4>{review.gameName.stringValue}</h4>
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
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ReviewsUser;
