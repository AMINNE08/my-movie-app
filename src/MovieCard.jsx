
function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={`${title} poster`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>Rating: {rating}</span>
    </div>
  );
}

export default MovieCard;
