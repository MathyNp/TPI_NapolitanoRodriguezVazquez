import React from "react";

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
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            style={{ width: "90vh", height: "100vh" }}
            alt={name}
          />
        </div>
      </div>
    </div>
  );
}

export default GamesReviews;
