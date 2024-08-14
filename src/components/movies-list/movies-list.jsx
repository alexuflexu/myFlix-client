import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieCard } from "../movie-card/movie-card";
import { MoviesFilter } from "../movies-filter/movies-filter";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { setUser } from "../../redux/reducers/user";

export const MoviesList = () => {
  const movies = useSelector((state) => state.movies.list) || [];
  const filter = useSelector((state) => state.movies.filter || "")
    .trim()
    .toLowerCase();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const filteredMovies = movies.filter((movie) =>
    (movie.Title || "").toLowerCase().includes(filter)
  );

  const handleFavoriteToggle = (movieId) => {
    const isFavorite = user.FavoriteMovies.includes(movieId);
    const method = isFavorite ? "DELETE" : "POST";

    fetch(`https://movie-api-1-34lz.onrender.com/users/${user.Username}/movies/${movieId}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          const updatedFavorites = isFavorite
            ? user.FavoriteMovies.filter((id) => id !== movieId)
            : [...user.FavoriteMovies, movieId];

          dispatch(setUser({ ...user, FavoriteMovies: updatedFavorites }));
        } else {
          console.error("Failed to update favorites");
        }
      })
      .catch((error) => console.error("Error: ", error));
  };

  return (
    <>
      <Row>
        <MoviesFilter />
      </Row>
      <Row>
        {movies.length === 0 ? (
          <Col>The list is empty!</Col>
        ) : (
          filteredMovies.map((movie) => (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard 
                movie={movie} 
                user={user} 
                token={token} 
                onFavoriteToggle={handleFavoriteToggle} 
              />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};