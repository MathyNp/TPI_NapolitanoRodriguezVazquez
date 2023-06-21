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
    <div>
      <h2>Detalles del elemento: {img}</h2>
      <h2>Detalles del elemento: {name}</h2>
      <h2>Detalles del elemento: {genre}</h2>
      <h2>Detalles del elemento: {platform}</h2>
      <h2>Detalles del elemento: {developer}</h2>
      <h2>Detalles del elemento: {id}</h2>
      <h2>Detalles del elemento: {description}</h2>
      <h2>Detalles del elemento: {score}</h2>
    </div>
  );
}

export default GamesReviews;
