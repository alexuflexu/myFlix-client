import React from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./movie-view.scss";

export const MovieView = () => {
  const { movieId } = useParams();
  const movies = useSelector((state) => state.movies.list);

  const movie = movies.find((m) => m._id === movieId);

  if (!movie) {
    console.log("Movie not found with ID:", movieId);
    return <div>Movie not found!</div>;
  }

  return (
    <div>
      <div>
        <img src={movie.ImagePath} alt={movie.Title} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <Link to="/">
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};

MovieView.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
      }),
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
      }),
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
