import React from "react";
const MovieCard = ({movie}) => {
  return (
    <diV className="movie">
      <diV>
        <p>{movie.Year}</p>
      </diV>
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </diV>
  );
};
export default MovieCard;