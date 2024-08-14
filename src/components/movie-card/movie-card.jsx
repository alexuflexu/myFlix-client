import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie, user, onFavoriteToggle }) => {
  const isFavorite = user && user.FavoriteMovies
    ? user.FavoriteMovies.includes(movie._id)
    : false;

  return (
    <Link
      to={`/movies/${encodeURIComponent(movie._id)}`}
      className="text-decoration-none"
    >
      <Card className="h-100">
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Director.Name}</Card.Text>
          {user && (
            <Button
              variant="link"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onFavoriteToggle(movie._id);
              }}
              className={`favorite-button ${isFavorite ? 'remove' : ''}`}
            >
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Link>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  user: PropTypes.object,
  onFavoriteToggle: PropTypes.func.isRequired,
};