import React, { useState } from "react";
import PropTypes from "prop-types";
import { MovieCard } from "../movie-card/movie-card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import "./profile-view.scss";

export const ProfileView = ({ user, token, movies, onUserUpdate }) => {
  const [username, setUsername] = useState(user.Username);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(user.Email);
  const [birthday, setBirthday] = useState(user.Birthday);

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedData = {
      Username: username,
      Password: password ? password : user.Password,
      Email: email,
      Birthday: birthday,
    };

    fetch(`https://movie-api-1-34lz.onrender.com/users/${user.Username}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update user");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        onUserUpdate(data);
        alert("Profile updated successfully!");
      })
      .catch((error) => {
        console.error("Error updating user data:", error);
        alert("Failed to update profile");
      });
  };

  const handleDeregister = () => {
    fetch(`https://movie-api-1-34lz.onrender.com/users/${user.Username}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to deregister");
        }
        alert("Account deleted successfully");
        localStorage.clear();
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error deregistering user:", error);
        alert("Failed to delete account");
      });
  };

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

          onUserUpdate({ ...user, FavoriteMovies: updatedFavorites });
        } else {
          console.error("Failed to update favorites");
        }
      })
      .catch((error) => console.error("Error: ", error));
  };

  const favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m._id)
  );

  return (
    <Col md={8}>
      <h2>Profile Information</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            minLength="3"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday:</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            required
          />
        </Form.Group>

        <Button className="update-button" type="submit">
          Update Profile
        </Button>
      </Form>

      <Button className="deregister-button" onClick={handleDeregister}>
        Deregister
      </Button>

      <h3>Favorite Movies</h3>
      <div className="d-flex flex-wrap">
        {favoriteMovies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            user={user}
            token={token}
            onFavoriteToggle={handleFavoriteToggle}
          />
        ))}
      </div>
    </Col>
  );
};

ProfileView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.string.isRequired,
    FavoriteMovies: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onUserUpdate: PropTypes.func.isRequired,
};