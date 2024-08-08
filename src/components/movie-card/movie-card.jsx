import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({ movie, user, token, onFavoriteToggle }) => {
  const isFavorite = user.FavoriteMovies.includes(movie._id);

  const toggleFavorite = () => {
    const method = isFavorite ? "DELETE" : "POST";
    fetch(
      `https://movie-api-1-34lz.onrender.com/users/${user.Username}/movies/${movie._id}`,
      {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update favorites");
        }
        return response.json();
      })
      .then((updatedUser) => {
        localStorage.setItem("user", JSON.stringify(updatedUser));
        onFavoriteToggle(updatedUser);
      })
      .catch((error) => {
        console.error("Error updating favorites:", error);
      });
  };

  return (
    <Card className="h-100" style={{ cursor: "pointer" }}>
      <Link
        to={`/movies/${encodeURIComponent(movie._id)}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Director.Name}</Card.Text>
          <Card.Text>{movie.Genre.Name}</Card.Text>
        </Card.Body>
      </Link>
      <Button className="favorite-button" onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </Button>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    _id: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    FavoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};
