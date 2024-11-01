import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import AddMovie from './AddMovie';
import './styles.css';


function App() {
  const initialMovies = [
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://m.media-amazon.com/images/I/91b3Xtjt0IL._AC_UL480_FMwebp_QL65_.jpg" ,
      rating: 4.8,
    },
    {
      title: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years.",
      posterURL: "https://m.media-amazon.com/images/I/71uYo-PDgnL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.9,
    },
    {
      title: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
      posterURL: "https://m.media-amazon.com/images/I/71JPziIzj7L._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.7,
    },
    {
      title: "The Dark Knight",
      description: "When the menace known as the Joker emerges, Batman must accept one of the greatest tests of his life.",
      posterURL: "https://m.media-amazon.com/images/I/81rGCm0PyHL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.8,
    },
    {
      title: "Pulp Fiction",
      description: "The lives of two mob hitmen, a boxer, and others intertwine in a series of incidents.",
      posterURL: "https://m.media-amazon.com/images/I/617CRUq1QgL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.6,
    },
    {
      title: "Fight Club",
      description: "An insomniac office worker and a soap maker form an underground fight club.",
      posterURL: "https://m.media-amazon.com/images/I/71z-6ktMRTL._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.4,
    },
    {
      title: "Forrest Gump",
      description: "The story of Forrest Gump, a man with a low IQ but a big heart.",
      posterURL: "https://m.media-amazon.com/images/I/71CuAt3ey+L._AC_UL480_FMwebp_QL65_.jpg",
      rating: 4.5,
    },
  ];

  const [movies, setMovies] = useState(initialMovies);
  const [filteredMovies, setFilteredMovies] = useState(initialMovies);

  // Handle filtering logic
  const handleFilter = (title, rating) => {
    const filtered = movies.filter((movie) => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = rating ? movie.rating >= rating : true;
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]); 
  };

  return (
    <div className="App">
      <h1>My Movie App</h1>
      <AddMovie onAdd={handleAddMovie} />
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
