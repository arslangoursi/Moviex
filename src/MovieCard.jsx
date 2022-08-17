import React from "react";

function MovieCard({ movie: { Year, Title, Type, Poster } }) {
  return (
    <div className="moviecard">
      <div className="movie__img">
        <img
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
          alt={Title}
        />
      </div>
      <div className="year">{Year}</div>
      <div className="movie__type">{Type}</div>
      <div className="movie__title">{Title}</div>
    </div>
  );
}
export default MovieCard;
