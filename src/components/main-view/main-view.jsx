import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "A Trip to the Moon",
      description: "A group of astronomers travel to the Moon in a cannon-propelled capsule, explore its surface, and encounter its inhabitants.",
      genre: {
        name: "Science fiction",
        description: "A genre that uses speculative, fictional science-based depictions of phenomena that are not fully accepted by mainstream science."
      },
      director: {
        name: "Georges Méliès",
        bio: "Georges Méliès was a visionary French filmmaker who pioneered early cinema with his innovative special effects, fantastical storytelling, and contributions to narrative filmmaking techniques.",
        birth: "1861",
        death: "1938"
      },
      imagePath: "https://upload.wikimedia.org/wikipedia/commons/0/04/Le_Voyage_dans_la_lune.jpg",
      featured: false,
      synopsis: "A groundbreaking science fiction film where a group of astronomers embark on an extraordinary journey to the Moon using a cannon-propelled capsule. They explore the lunar landscape and have a fantastical encounter with its inhabitants."
    },
    {
      id: 2,
      title: "The Kingdom of the Fairies",
      description: "A spectacular fantasy film featuring elaborate sets, costumes, and special effects, following a prince's quest to rescue a princess from an evil witch.",
      genre: {
        name: "Fantasy",
        description: "A genre that uses magic and other supernatural phenomena as a primary element of plot, theme, or setting."
      },
      director: {
        name: "Georges Méliès",
        bio: "Georges Méliès was a pioneering French filmmaker who revolutionized early cinema with his innovative special effects and fantastical storytelling.",
        birth: "1861",
        death: "1938"
      },
      imagePath: "https://moviessilently.com/wp-content/uploads/2020/05/kingdom-of-the-fairies-1903-image-15.jpg?w=660",
      featured: false
    },
    {
      id: 3,
      title: "Intolerance",
      description: "An epic film interweaving four storylines from different historical periods to explore the theme of intolerance throughout history.",
      genre: {
        name: "Historical drama",
        description: "A genre that dramatizes historical events or figures, often on a grand scale."
      },
      director: {
        name: "D.W. Griffith",
        bio: "D.W. Griffith was a visionary American director who significantly advanced film language and narrative complexity in early Hollywood.",
        birth: "1875",
        death: "1948"
      },
      imagePath: "https://www.framedart.com/product-images/AWAAQAHQ-P172670.jpg",
      featured: false
    },
    {
      id: 4,
      title: "The Cabinet of Dr. Caligari",
      description: "A landmark of German Expressionist cinema, telling the twisted tale of an insane hypnotist who uses a sleepwalker to commit murders.",
      genre: {
        name: "Horror",
        description: "A genre intended to frighten, scare, or disgust audiences through suspense, shock, and gore."
      },
      director: {
        name: "Robert Wiene",
        bio: "Robert Wiene was an acclaimed German filmmaker who made substantial contributions to the German Expressionist movement in cinema.",
        birth: "1873",
        death: "1938"
      },
      imagePath: "https://black-and-white-movies.com/wp-content/uploads/2017/01/cabinetofdrcaligari-poster.jpg",
      featured: false
    },
    {
      id: 5,
      title: "The Phantom Carriage",
      description: "A Swedish silent film about a drunkard who must drive Death's carriage and collect souls for a year, featuring groundbreaking special effects.",
      genre: {
        name: "Drama/Horror",
        description: "A blend of dramatic storytelling with elements of horror, often exploring psychological themes."
      },
      director: {
        name: "Victor Sjöström",
        bio: "Victor Sjöström was an esteemed Swedish director, screenwriter, and actor who masterfully shaped the golden age of Swedish silent cinema.",
        birth: "1879",
        death: "1960"
      },
      imagePath: "https://mail.princesscinemas.com/files/princesscinemas/imagecache/node-image/phantom-carriage-voc-pic.jpg",
      featured: false
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
        }}
      />
      ))}
    </div>
  );
}